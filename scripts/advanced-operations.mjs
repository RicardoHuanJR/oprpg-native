import {actorCommand,damageInside,healActor} from './services.mjs';
import {performCommonAction,recordMovement} from './action-services.mjs';
import {combatContext,activationPlan} from './combat-rules.mjs';
import {actorNumbers} from './actor-numbers.mjs';
import {conditionSet,conditionModifiers} from './conditions.mjs';
import {movementSpeeds,professionBenefitPlan,underwaterBudget} from './mechanics.mjs';
import {lifecycleOf,turnMark} from './lifecycle.mjs';
import {racialBoostPlan} from './racial-combat.mjs';
export async function breathe(actor,{hold=false,airConfirmed=false}={}){
 return actorCommand(actor,async()=>{
  const state=lifecycleOf(actor);
  if(hold){if(actor.statuses?.has('suffocated'))throw new Error('É preciso respirar antes de prender o fôlego.');state.breathUntil=game.time.worldTime+Math.max(30,60*(1+actor.system.attributes.constitution.modifier));}
  else {if(!airConfirmed)throw new Error('Confirme que a criatura tem acesso ao ar.');delete state.breathUntil;delete state.suffocation;state.timers=(state.timers??[]).filter(timer=>timer.reason!=='suffocation');await actor.toggleStatusEffect('suffocated',{active:false});}
  await actor.update({'flags.oprpg-native.lifecycle':state});return state.breathUntil;
 });
}
export async function unarmedAttack(actor,{advantage=false,disadvantage=false,racialBoost='',racialAlternative=false}={}){
 if(actor.getFlag('oprpg-native','controlledMount'))throw new Error('Montaria controlada só pode usar Disparada ou Esquiva.');
 return actorCommand(actor,async()=>{
  const conditions=conditionModifiers(conditionSet(actor.statuses,{...actor.system.vitality,dead:actor.system.vitalityState?.dead}),{kind:'attack',category:'weapon'});
  if(conditions.incapacitated||actor.system.vitalityState?.dead)throw new Error('A condição impede o ataque.');
  const context=combatContext(game.combat,actor),plan=activationPlan(actor.system.combat.state,{context,category:'weapon',activation:'action',attacksPerAction:actor.system.combat.attacksPerAction});
  plan.state=underwaterBudget(actor.system,plan.state,{context,kind:'action'});
  const numbers=actorNumbers(actor.system,actor.type),modifier=numbers.attributes.strength.modifier;
  advantage||=conditions.advantage;disadvantage||=conditions.disadvantage;
  const giant=actor.items.some(item=>item.system.identifier==='guerreiro-nato'&&item.system.training?.state==='learned');
  const boost=racialBoostPlan(actor,{kind:racialBoost,alternative:racialAlternative,context,state:plan.state,resources:actor.system.resources.map(resource=>({...resource}))});
  plan.state=boost.state;
  const roll=await new Roll(`${advantage===disadvantage?'1d20':advantage?'2d20kh':'2d20kl'} + ${modifier+numbers.proficiency+(giant?1:0)-2*numbers.exhaustion}`).evaluate();
  const natural=roll.dice.find(die=>die.faces===20).results.find(value=>value.active!==false&&!value.discarded).result;
  const current=actor.system.combat.unarmedDamage;const formula=(actor.statuses?.has('empowered')||giant)&&['1','1d4','1d6','1d8','1d10'].includes(current)?'1d12':current;
  const damageFormula=`${formula} + ${Math.max(0,modifier)}`;
  const operation={requestId:foundry.utils.randomID(),itemUUID:null,activity:{attribute:'strength',proficient:true,damageFormula},resolution:{kind:'attack',damageType:'bludgeoning'},attack:{natural,total:roll.total},damageFormula,extraDamageComponents:boost.components,unarmed:true};
  await actor.update({'system.combat.state':plan.state,'system.resources':boost.resources,...(boost.round?{'flags.oprpg-native.racialBoostRound':boost.round}:{}),'flags.oprpg-native.lastActivity':operation,'system.rest.startedAt':null});
  try{await roll.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:`Ataque desarmado · dano ${damageFormula}. Não ativa expertise de arma.`});}catch{ui.notifications.warn('Ataque registrado; cartão não enviado.');}
  const state=lifecycleOf(actor);if(actor.statuses?.has('burned')&&state.burnedEpoch!==turnMark(actor)){state.burnedEpoch=turnMark(actor);await actor.update({'flags.oprpg-native.lifecycle':state});await damageInside(actor,{components:[{type:'fire',amount:(await new Roll('1d6').evaluate()).total}],bypassMitigation:true,bypassTemporary:true});}
  return operation;
 });
}
export async function mountCreature(actor,mount,{dismount=false,confirmed=false,controlled=false}={}){
 if(!confirmed||(!dismount&&(!mount||mount===actor)))throw new Error('Confirme consentimento, anatomia, tamanho e distância de até 1,5 m.');
 const context=combatContext(game.combat,actor);if(!context?.isOwnTurn)throw new Error('Monte ou desmonte no próprio turno.');
 const mark=actor.getFlag('oprpg-native','mounting');if(mark?.epoch===context.ownEpoch)throw new Error('Montar/desmontar já foi usado neste turno.');
 if(dismount&&!mark?.mountUUID)throw new Error('A criatura não está montada.');
 const previousMount=dismount?await fromUuid(mark.mountUUID):null;
 if(controlled&&!dismount&&(!game.user.isGM||!mount.isOwner))throw new Error('O Narrador controla a montaria treinada e não inteligente.');
 const riderTurn=game.combat.turns.find(turn=>turn.actor?.uuid===actor.uuid),mountTurns=game.combat.turns.filter(turn=>turn.actor?.uuid===mount?.uuid);
 if(controlled&&!dismount&&(mountTurns.length!==1||!Number.isFinite(riderTurn?.initiative)))throw new Error('Inclua cavaleiro e montaria no combate e role a iniciativa do cavaleiro.');
 if(!dismount){const sizes=['tiny','small','medium','large','huge','immense'];const riderSize=sizes.indexOf(actor.system.environment.sizeCategory),mountSize=sizes.indexOf(mount.system.environment.sizeCategory);if(riderSize<0||mountSize<=riderSize)throw new Error('A montaria deve ser ao menos uma categoria maior que o cavaleiro.');if(mark?.mountUUID)throw new Error('Desmonte antes de escolher outra montaria.');}
 const distance=movementSpeeds(actor.system,[...actor.items],actor.statuses).distance/2;
 if(distance<=0)throw new Error('Não há deslocamento para montar.');
 await recordMovement(actor,{distance,mode:'distance',stand:false,difficult:false});
 await actor.update({'flags.oprpg-native.mounting':{epoch:context.ownEpoch,mountUUID:dismount?null:mount.uuid}});
 if(dismount&&previousMount?.getFlag('oprpg-native','controlledMount')?.riderUUID===actor.uuid)await previousMount.update({'flags.oprpg-native.controlledMount':null});
 if(controlled&&!dismount){await mount.update({'flags.oprpg-native.controlledMount':{riderUUID:actor.uuid,combatId:game.combat.id}});await game.combat.setInitiative(mountTurns[0].id,riderTurn.initiative);}
}
export async function professionOperation(item,{attribute='wisdom',skill=null,cost=0,difficulty=0,die=0,restoration=false,target=null,resource='vitality',confirmed=false}={}){
 const actor=item.actor;if(!actor?.isOwner||item.type!=='profession'||!confirmed)throw new Error('Confirme ferramenta, tempo, alvo e requisitos da característica profissional.');
 const quote=professionBenefitPlan({rank:item.system.profession.rank,cost,difficulty,die,restoration});
 if(!actor.system.attributes[attribute]||skill&&!actor.system.skills[skill])throw new Error('Selecione um teste válido.');
 if(restoration&&target?.statuses?.has('suffocated')&&resource==='vitality')throw new Error('Alvo sufocado não pode recuperar PV.');
 if(restoration&&(!target?.isOwner||!['vitality','power'].includes(resource)))throw new Error('Selecione o recurso e um alvo controlável.');
 const result=await actorCommand(actor,async()=>{
  if(actor.system.currency<quote.cost)throw new Error('Bellys insuficientes.');
  const modifier=skill?actor.system.skills[skill].total:actorNumbers(actor.system,actor.type).attributes[attribute].modifier-2*actor.system.exhaustion;
  const roll=await new Roll(`1d20 + ${modifier}`).evaluate();const success=roll.total>=quote.difficulty;
  await actor.update({'system.currency':actor.system.currency-quote.cost,'system.rest.startedAt':null});
  const restored=success&&restoration&&quote.die?Math.max(0,(await new Roll(`1d${quote.die}`).evaluate()).total):0;
  try{await roll.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:`${item.name} · CD ${quote.difficulty} · ${quote.cost} ฿ · ${success?'sucesso':'falha'}`});}catch{}
  return {success,restored,quote};
 });
 if(result.restored){if(resource==='vitality')await healActor(target,result.restored);else await actorCommand(target,()=>target.update({'system.power.value':Math.min(target.system.power.max,target.system.power.value+result.restored)}));}
 return result;
}
