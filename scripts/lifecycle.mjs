import {actorNumbers} from './actor-numbers.mjs';
import {conditionSet,conditionModifiers} from './conditions.mjs';
import {combatContext} from './combat-rules.mjs';
export const lifecycleOf=actor=>structuredClone(actor.getFlag('oprpg-native','lifecycle')??{timers:[]});
export const copyData=value=>JSON.parse(JSON.stringify(value));
export function canConcentrate(actor){return !actor.system.vitalityState?.dead&&!conditionModifiers(conditionSet(actor.statuses,{...actor.system.vitality,dead:actor.system.vitalityState?.dead}),{}).concentrationBlocked;}
export function concentrationDamageDC(damage){if(!Number.isFinite(damage)||damage<0)throw new Error('Dano inválido.');return Math.max(10,Math.floor(damage/2));}
export async function checkConcentration(actor,damage,{force=false}={}){
  const state=lifecycleOf(actor);if(!state.concentration)return {required:false};
  let success=false,roll=null;const dc=concentrationDamageDC(damage);
  if(canConcentrate(actor)){
    const numbers=actorNumbers(actor.system,actor.type),modifiers=conditionModifiers(conditionSet(actor.statuses,actor.system.vitality),{kind:'save',attribute:'constitution'});
    if(!modifiers.automaticFailure){roll=await new Roll(`${modifiers.disadvantage?'2d20kl':'1d20'} + ${numbers.attributes.constitution.saveTotal}`).evaluate();success=roll.total>=dc;}
  }
  if(!success){delete state.concentration;await actor.update({'flags.oprpg-native.lifecycle':state});}
  if(roll)try{await roll.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:`Concentração · CD ${dc} · ${success?'mantida':'encerrada'}`},{rollMode:game.settings.get('core','rollMode')});}catch{ui.notifications.warn('Concentração resolvida; o cartão não foi enviado.');}
  return {required:true,success,dc,roll};
}
export async function endConcentration(actor){if(!actor.isOwner)throw new Error('Sem permissão.');const state=lifecycleOf(actor);delete state.concentration;return actor.update({'flags.oprpg-native.lifecycle':state});}
export function timedBoundary(combat,actor,{point='end',next=true}={}){
  if(!combat?.started)return null;
  const indexes=combat.turns.map((turn,index)=>turn.actor?.uuid===actor.uuid?index:-1).filter(index=>index>=0);
  if(indexes.length!==1)throw new Error('O efeito exige um único turno da criatura.');
  const index=indexes[0],round=combat.round+((next&&index<=combat.turn)?1:0);
  return {combat:combat.id,actorUUID:actor.uuid,round,point};
}
export function timerExpired(timer,combat){
  if(timer.combat&&!combat?.started)return true;
  if(timer.combatEnd)return !combat||combat.id!==timer.combatEnd||!combat.started;
  if(timer.time!==undefined)return game.time.worldTime>=timer.time;
  if(!combat||combat.id!==timer.combat)return false;
  const index=combat.turns.findIndex(turn=>turn.actor?.uuid===timer.actorUUID);if(index<0)return false;
  return combat.round>timer.round||combat.round===timer.round&&(timer.point==='start'?combat.turn>=index:combat.turn>index);
}
export function turnMark(actor){return combatContext(game.combat,actor)?.globalEpoch??`time:${game.time.worldTime}`;}
