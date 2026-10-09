import {actorCommand,damageActor} from './services.mjs';
import {savingThrow} from './target-resolution.mjs';
import {actorNumbers} from './actor-numbers.mjs';
import {performCommonAction} from './action-services.mjs';
import {activationPlan,combatContext} from './combat-rules.mjs';
import {conditionSet,conditionModifiers} from './conditions.mjs';
export const TRAVEL_PACES=Object.freeze({fast:{label:'Rápido',minute:120,hour:6,day:45,perception:-5},normal:{label:'Normal',minute:90,hour:4.5,day:36,perception:0},slow:{label:'Lento',minute:60,hour:3,day:27,perception:0,stealth:true}});
export function travelDistance({pace='normal',hours=0,days=0,minutes=0,difficult=false}){const profile=TRAVEL_PACES[pace];if(!profile||![hours,days,minutes].every(value=>Number.isFinite(value)&&value>=0))throw new Error('Ritmo ou tempo inválido.');return {kilometers:(profile.hour*hours+profile.day*days+profile.minute*minutes/1000)/(difficult?2:1),perception:profile.perception,stealth:Boolean(profile.stealth),forcedHours:Math.max(0,Math.ceil(hours-8))};}
export async function forcedMarch(actor,{hours}){
  if(!Number.isInteger(hours)||hours<9)throw new Error('Informe o total de horas após as oito primeiras.');
  const day=Math.floor(game.time.worldTime/86400),mark=actor.getFlag('oprpg-native','march')??{day,hour:8};
  const first=mark.day===day?mark.hour+1:9;const results=[];
  for(let hour=first;hour<=hours;hour++){
    const result=await savingThrow(actor,'constitution',10+hour-8);
    await actorCommand(actor,()=>actor.update({'system.exhaustion':Math.min(6,actor.system.exhaustion+(result.success?0:1)),'flags.oprpg-native.march':{day,hour},'system.rest.startedAt':null,...(!result.success&&actor.system.exhaustion>=5?{'system.vitality.value':0}:{})}));results.push({hour,...result});
  }
  return results;
}
export async function chaseDash(actor,{chaseId}){
  if(!chaseId)throw new Error('Identifique a perseguição.');
  await performCommonAction(actor,{action:'dash'});
  const before=actor.getFlag('oprpg-native','chase')??{},count=before.id===chaseId?before.dashes+1:1;
  const free=Math.max(0,3+actor.system.attributes.constitution.modifier);
  const epoch=combatContext(game.combat,actor)?.ownEpoch;
  await actorCommand(actor,()=>actor.update({'flags.oprpg-native.chase':{...before,id:chaseId,dashes:count,extraExhaustion:before.id===chaseId?before.extraExhaustion??0:0,pendingEpoch:epoch,pendingChecks:(before.pendingEpoch===epoch?before.pendingChecks??0:0)+(count>free?1:0)}}));
  return {count,free,exhaustion:actor.system.exhaustion,pending:true};
}
export async function finishChaseTurn(actor,combat=game.combat){
 return actorCommand(actor,async()=>{
  const chase=structuredClone(actor.getFlag('oprpg-native','chase'));if(!chase?.pendingEpoch||chase.settledEpoch===chase.pendingEpoch)return;
  let gained=0;for(let i=0;i<(chase.pendingChecks??0);i++){
   const modifiers=conditionModifiers(conditionSet(actor.statuses,{...actor.system.vitality,dead:actor.system.vitalityState?.dead}),{kind:'save',attribute:'constitution'});
   const roll=modifiers.automaticFailure?null:await new Roll(`${modifiers.disadvantage?'2d20kl':'1d20'} + ${actorNumbers(actor.system,actor.type).attributes.constitution.saveTotal}`).evaluate();if(!roll||roll.total<10)gained++;
  }
  const complication=(await new Roll('1d20').evaluate()).total,next=combat?.turns[(combat.turn+1)%combat.turns.length]?.actor;
  chase.settledEpoch=chase.pendingEpoch;chase.pendingChecks=0;chase.extraExhaustion+=gained;chase.complication=complication;chase.nextParticipant=next?.uuid;
  const exhaustion=Math.min(6,actor.system.exhaustion+gained);
  await actor.update({'flags.oprpg-native.chase':chase,'system.exhaustion':exhaustion,...(exhaustion>=6?{'system.vitality.value':0}:{})});
  if(next)await next.update({'flags.oprpg-native.chaseComplication':{number:complication,source:actor.uuid,epoch:chase.pendingEpoch}});
  try{await ChatMessage.create({speaker:ChatMessage.getSpeaker({actor}),content:`Perseguição · ${gained} nível(is) de exaustão · complicação ${complication} para ${foundry.utils.escapeHTML(next?.name??'o próximo participante')}. Consulte a tabela urbana/natureza do Guia, p.118.`});}catch{}
  return {gained,complication,nextParticipant:next?.uuid};
 });
}
export async function escapeChase(actor,pursuers,{leaderHasSight=true,advantage=false,disadvantage=false}={}){
 if(!game.user.isGM||!pursuers.length)throw new Error('O Narrador confirma os perseguidores e o fim da rodada.');
 if(leaderHasSight)return {escaped:false,automaticFailure:true};
 const roll=await new Roll(`${advantage===disadvantage?'1d20':advantage?'2d20kh':'2d20kl'} + ${actor.system.skills.stealth.total}`).evaluate();
 const perception=Math.max(...pursuers.map(value=>value.system.skills.perception.passive));return {escaped:roll.total>perception,roll,perception};
}
export async function contestedAction(actor,target,{kind,defense='athletics',sizeAllowed=false}){
 if(actor.getFlag('oprpg-native','controlledMount'))throw new Error('Montaria controlada só pode usar Disparada ou Esquiva.');
  if(!game.user.isGM||!actor.isOwner||!target.isOwner||!sizeAllowed)throw new Error('O Narrador confirma tamanho e alcance dos participantes.');
  if(!['grapple','shoveProne','shoveAway','escape'].includes(kind)||!['athletics','acrobatics'].includes(defense))throw new Error('Manobra desconhecida.');
  if(kind==='escape'&&!actor.statuses?.has('grappled'))throw new Error('A criatura não está agarrada.');
  await actorCommand(actor,async()=>{const context=combatContext(game.combat,actor);if(!context)throw new Error('Inicie o combate para registrar esta manobra.');const plan=activationPlan(actor.system.combat.state,{context,activation:'action',category:kind==='escape'?'common':'weapon',attacksPerAction:actor.system.combat.attacksPerAction});await actor.update({'system.combat.state':plan.state,'system.rest.startedAt':null});});
  const attack=await new Roll(`1d20 + ${actor.system.skills[kind==='escape'?defense:'athletics'].total}`).evaluate(),defend=await new Roll(`1d20 + ${target.system.skills[kind==='escape'?'athletics':defense].total}`).evaluate();
  const success=attack.total>defend.total;
  if(success){if(kind==='grapple')await target.toggleStatusEffect('grappled',{active:true});if(kind==='shoveProne')await target.toggleStatusEffect('prone',{active:true});if(kind==='escape')await actor.toggleStatusEffect('grappled',{active:false});}
  return {success,attack,defend,moveMeters:success&&kind==='shoveAway'?1.5:0};
}
export async function fallingDamage(actor,{meters}){if(!Number.isFinite(meters)||meters<0)throw new Error('Altura inválida.');const dice=Math.min(30,Math.floor(meters/6));if(!dice)return {amount:0};const roll=await new Roll(`${dice}d6`).evaluate();const reduction=actor.items.some(item=>item.system.identifier==='afinidade-cultural'&&item.system.training?.state==='learned')?(await new Roll('2d6').evaluate()).total:0;const result=await damageActor(actor,{components:[{type:'bludgeoning',amount:Math.max(0,roll.total-reduction)}]});if(result.realDamage)await actor.toggleStatusEffect('prone',{active:true});return result;}
export const coverageBonus=value=>value==='half'?2:value==='threeQuarters'?5:0;
