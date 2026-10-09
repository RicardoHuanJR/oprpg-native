import {actorCommand,damageActor} from './services.mjs';
import {timedBoundary,lifecycleOf} from './lifecycle.mjs';
import {temporaryHP} from './engine.mjs';
import {combatContext} from './combat-rules.mjs';
export const EXPERTISE_PROFILES=Object.freeze({
 'adaga-kunai':{status:'bleeding'},kogatana:{status:'bleeding'},shuriken:{status:'bleeding'},
 'daito-katana':{self:true,kind:'autoMiss'},'espada-montante':{self:true,kind:'defense',amount:2,point:'start'},
 katana:{self:true,kind:'maximize'},machado:{self:true,status:'empowered'},
 'machado-grande':{kind:'areaDamage',formula:'1d6',type:'slashing'},'naginata-alabarda':{kind:'areaDamage',formula:'1d6',type:'slashing'},
 nodachi:{self:true,kind:'critical',amount:16},mosquete:{self:true,kind:'critical',amount:16},
 rapieira:{self:true,kind:'autoDexSave',encounter:true},sabre:{self:true,kind:'temporary',amount:20,point:'start'},'escudo-de-ferro':{self:true,kind:'temporary',amount:20,point:'start'},
 shikomizue:{self:true,kind:'accuracy',amount:3},'luva-de-ferro':{self:true,kind:'accuracy',amount:3},
 bastao:{status:'prone'},'kanabo-tacape':{kind:'pushOrDamage',formula:'1d8',type:'bludgeoning',meters:6},'martelo-de-guerra':{kind:'pushOrDamage',formula:'1d8',type:'bludgeoning',meters:6},
 nunchaku:{kind:'extraDamage',formula:'1d12',type:'bludgeoning'},'par-de-tonfas':{self:true,kind:'defense',amount:2,point:'start'},
 'canhao-bazuca':{self:true,kind:'movement',amount:6},pistola:{self:true,kind:'extraAttacks'},lanca:{self:true,kind:'extraAttacks'},
 'arco-estilingue':{status:'enraged'},chicote:{status:'incapacitated'},foice:{kind:'pullOrDamage',formula:'1d8',meters:1.5},
 mangual:{kind:'halfDefenseDamage'},tridente:{kind:'slowHalf'},zarabatana:{status:'restrained'}
});
export async function applyExpertise(item,{target=null,targets=[],choice='damage',confirmArea=false,temporaryChoice,requestId}={}){
  const actor=item.actor;if(!actor?.isOwner)throw new Error('Sem permissão.');
  const use=actor.getFlag('oprpg-native','lastActivity');
  if(!use||use.itemUUID!==item.uuid||use.prepared||use.attack?.natural!==20||!use.activity.proficient||item.type!=='weapon')throw new Error('Expertise exige crítico natural proficiente já registrado.');
  const profile=EXPERTISE_PROFILES[item.system.identifier];if(!profile)throw new Error('Configure a expertise personalizada com o Narrador.');
  const id=`${use.requestId}:expertise`;if(actor.getFlag('oprpg-native','expertiseApplied')?.includes(id))return {duplicate:true};
  const recipients=profile.self?[actor]:profile.kind==='areaDamage'?targets:[target];
  if(!recipients.length||recipients.some(value=>!value?.isOwner))throw new Error('Escolha alvos que o Narrador possa alterar.');
  if(profile.kind==='areaDamage'&&!confirmArea)throw new Error('Confirme quais criaturas estão a até 3 metros.');
  if(profile.kind==='extraAttacks'&&actor.getFlag('oprpg-native','lifecycle')?.missedOwnTurn!==combatContext(game.combat,actor)?.ownEpoch)throw new Error('Esta expertise exige um ataque errado no turno atual.');
  for(const recipient of recipients)await actorCommand(recipient,async()=>{
    const lifecycle=lifecycleOf(recipient),old=recipient.getFlag('oprpg-native','expertise');
    if(profile.kind==='temporary')temporaryHP(recipient.system.vitality.temporary,profile.amount,temporaryChoice);
    const effect={name:`Expertise · ${item.name}`,img:item.img||'icons/svg/sword.svg',statuses:profile.status?[profile.status]:[],system:{changes:[]},flags:{'oprpg-native':{expertise:id}}};
    if(profile.kind==='defense')effect.system.changes=[{key:'system.defense.rating',type:'add',value:profile.amount,phase:'initial',priority:null}];
    const isPersistent=profile.status||['defense','movement','slowHalf','critical','accuracy','autoDexSave','autoMiss','temporary','maximize'].includes(profile.kind);
    if(isPersistent&&old?.effectId&&recipient.effects?.get(old.effectId))await recipient.deleteEmbeddedDocuments('ActiveEffect',[old.effectId]);
    let effectId=null;
    if(profile.status||profile.kind==='defense'){const [created]=await recipient.createEmbeddedDocuments('ActiveEffect',[effect]);effectId=created.id;}
    const state={...profile,id,source:item.uuid,effectId};
    if(profile.kind==='temporary'){const current=recipient.system.vitality.temporary;const value=temporaryHP(current,profile.amount,temporaryChoice);if(temporaryChoice!=='keep')await recipient.update({'system.vitality.temporary':value,'flags.oprpg-native.temporarySource':id});}
    if(isPersistent){
      const persistentBleed=profile.status==='bleeding',boundary=profile.encounter?{combatEnd:game.combat?.id}:timedBoundary(game.combat,recipient,{point:profile.point??'end'});
      if(!persistentBleed&&boundary)lifecycle.timers=[...(lifecycle.timers??[]),{...boundary,effectId,clearExpertiseId:id,...(profile.kind==='temporary'?{temporarySource:id}: {})}];
      await recipient.update({'flags.oprpg-native.expertise':state,'flags.oprpg-native.lifecycle':lifecycle});
    }else if(profile.kind==='extraAttacks')await recipient.update({'system.combat.state.specialAttacks':2,'flags.oprpg-native.specialAttackSource':item.uuid});
  });
  // Damage commands have their own actor queue and run after persistent-state commands complete.
  if(['extraDamage','areaDamage','halfDefenseDamage','pushOrDamage','pullOrDamage'].includes(profile.kind)){
    if(['pushOrDamage','pullOrDamage'].includes(profile.kind)&&choice==='move'){
      const message={speaker:ChatMessage.getSpeaker({actor}),content:`Expertise: ${profile.kind==='pullOrDamage'?'puxe o alvo para 1,5 m de você':`empurre o alvo ${profile.meters} m`}. O Narrador confirma a posição e os obstáculos.`};ChatMessage.applyRollMode(message,game.settings.get('core','rollMode'));await ChatMessage.create(message);
    }else for(const recipient of recipients){const amount=profile.kind==='halfDefenseDamage'?Math.floor(recipient.system.defense.rating/2):(await new Roll(profile.formula).evaluate()).total;await damageActor(recipient,{components:[{type:profile.type??use.resolution.damageType,amount}]});}
  }
  await actor.update({'flags.oprpg-native.expertiseApplied':[...(actor.getFlag('oprpg-native','expertiseApplied')??[]),id].slice(-128)});
  return {applied:true,profile};
}
