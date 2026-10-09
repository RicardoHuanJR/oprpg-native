import {actorCommand,damageInside} from './services.mjs';
import {lifecycleOf,timerExpired,canConcentrate} from './lifecycle.mjs';
import {actorNumbers} from './actor-numbers.mjs';
export function isRuntimeAuthority(){return game.user?.isGM&&(!game.users?.activeGM||game.users.activeGM.id===game.user.id);}
export async function cleanConcentrationEffects(source){
  const held=lifecycleOf(source).concentration;
  const actors=new Map([...(game.actors??[]),...(game.combat?.turns??[]).map(turn=>turn.actor).filter(Boolean)].map(actor=>[actor.uuid,actor]));
  for(const target of actors.values()){const ids=[...(target.effects??[])].filter(effect=>{const flags=effect.flags?.['oprpg-native'];return flags?.concentrationSource===source.uuid&&flags.concentrationId!==held?.id;}).map(effect=>effect.id);if(ids.length&&target.isOwner)await target.deleteEmbeddedDocuments('ActiveEffect',ids);}
}
export async function expireActorTimers(actor,combat=game.combat){
  const state=lifecycleOf(actor);
  if(state.breathUntil!==undefined&&game.time.worldTime>=state.breathUntil){delete state.breathUntil;await actor.toggleStatusEffect('suffocated',{active:true});await actor.update({'flags.oprpg-native.lifecycle':state});}
  const expired=(state.timers??[]).filter(timer=>timerExpired(timer,combat));
  if(!expired.length)return;
  for(const timer of expired){
    if(timer.reason==='chaseBlind')await actor.update({'system.environment.chaseBlind':false});
    if(timer.reason==='anchorStop'&&actor.system.naval?.anchorDown)await actor.update({'system.naval.currentKnots':0});
    if(timer.effectId&&actor.effects?.get(timer.effectId))await actor.deleteEmbeddedDocuments('ActiveEffect',[timer.effectId]);
    if(timer.status&&timer.reason!=='suffocation'&&actor.toggleStatusEffect)await actor.toggleStatusEffect(timer.status,{active:false});
    if(timer.reason==='suffocation'&&actor.statuses?.has('suffocated'))await actor.update({'system.vitalityState.dead':true});
    if(timer.temporarySource&&actor.getFlag('oprpg-native','temporarySource')===timer.temporarySource)await actor.update({'system.vitality.temporary':0,'flags.oprpg-native.temporarySource':null});
    if(timer.clearExpertiseId&&actor.getFlag('oprpg-native','expertise')?.id===timer.clearExpertiseId)await actor.update({'flags.oprpg-native.expertise':null});
  }
  state.timers=(state.timers??[]).filter(timer=>!expired.includes(timer));
  if(state.concentration?.prepared&&combat?.started){const turn=combat.turns.findIndex(entry=>entry.actor?.uuid===actor.uuid);const epoch=`${combat.id}:${combat.turns[turn]?.id}:${combat.turn>=turn?combat.round:combat.round-1}`;if(state.concentration.ownEpoch!==epoch)delete state.concentration;}
  await actor.update({'flags.oprpg-native.lifecycle':state});
}
export async function combatActorTick(actor,combat){
  return actorCommand(actor,async()=>{
    await expireActorTimers(actor,combat);let state=lifecycleOf(actor);
    if(state.concentration&&!canConcentrate(actor)){delete state.concentration;}
    const own=combat.combatant?.actor?.uuid===actor.uuid,epoch=`${combat.id}:${combat.round}:${combat.turn}`;
    if(own&&state.lastStart!==epoch){
      state.lastStart=epoch;
      if(state.concentration?.prepared){const ownEpoch=`${combat.id}:${combat.combatant.id}:${combat.round}`;if(ownEpoch!==state.concentration.ownEpoch)delete state.concentration;}
      const regeneration=actor.system.npcFeatures?.regeneration??0;
      if(regeneration>0&&actor.system.vitality.value>0&&!actor.system.vitalityState?.dead)await actor.update({'system.vitality.value':Math.min(actor.system.vitality.max,actor.system.vitality.value+regeneration)});
      if(actor.statuses?.has('suffocated')){
        const suffocation=state.suffocation??{combat:combat.id,startRound:combat.round,checks:0};
        if(suffocation.combat!==combat.id){suffocation.combat=combat.id;suffocation.startRound=combat.round;suffocation.checks=0;}
        const grace=Math.max(1,1+actor.system.attributes.constitution.modifier);
        if(combat.round-suffocation.startRound>=grace&&!actor.statuses.has('unconscious')){
          const dc=10+2*suffocation.checks++;const bonus=actorNumbers(actor.system,actor.type).attributes.constitution.saveTotal;
          const roll=await new Roll(`1d20 + ${bonus}`).evaluate();
          if(roll.total<dc){await actor.toggleStatusEffect('unconscious',{active:true});suffocation.unconsciousRound=combat.round;suffocation.unconsciousAt=game.time.worldTime;state.timers=[...(state.timers??[]),{time:game.time.worldTime+60,status:'unconscious',reason:'suffocation'}];}
          try{await roll.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:`Sufocamento · CD ${dc}`},{rollMode:game.settings.get('core','rollMode')});}catch{}
        }
        if(suffocation.unconsciousRound!==undefined&&combat.round-suffocation.unconsciousRound>=10&&actor.statuses.has('suffocated'))await actor.update({'system.vitalityState.dead':true});
        state.suffocation=suffocation;
      }else delete state.suffocation;
    }
    if(!own&&state.lastStart&&state.lastEnd!==state.lastStart){state.lastEnd=state.lastStart;if(state.sulong&&(game.time.worldTime-state.sulong.startedAt>=60||state.sulong.combat===combat.id&&combat.round-state.sulong.round>=10)){const exhaustion=Math.min(6,actor.system.exhaustion+1);await actor.update({'system.exhaustion':exhaustion,...(exhaustion===6?{'system.vitality.value':0}:{})});if(exhaustion===6)delete state.sulong;}}
    await actor.update({'flags.oprpg-native.lifecycle':state});
  });
}
export function registerRuntimeEvents(){
  if(!Hooks.on)return;
  Hooks.on('updateActor',async actor=>{if(!isRuntimeAuthority()||actor.type==='ship')return;try{const state=lifecycleOf(actor);if(state.concentration&&!canConcentrate(actor)){delete state.concentration;await actor.update({'flags.oprpg-native.lifecycle':state});}await cleanConcentrationEffects(actor);}catch(error){console.error('OP RPG · concentração',error);}});
  Hooks.on('createActiveEffect',async effect=>{const actor=effect.parent;if(isRuntimeAuthority()&&actor?.documentName==='Actor'&&actor.type!=='ship'&&!canConcentrate(actor)){const state=lifecycleOf(actor);delete state.concentration;await actor.update({'flags.oprpg-native.lifecycle':state});}});
  Hooks.on('deleteCombat',async()=>{if(!isRuntimeAuthority())return;for(const actor of game.actors??[])await actorCommand(actor,()=>expireActorTimers(actor,null));});
  Hooks.on('updateCombat',async combat=>{if(!isRuntimeAuthority())return;for(const actor of new Map(combat.turns.filter(turn=>turn.actor).map(turn=>[turn.actor.uuid,turn.actor])).values())try{if(actor.type==='ship')await actorCommand(actor,()=>expireActorTimers(actor,combat));else await combatActorTick(actor,combat);}catch(error){console.error('OP RPG · turno',error);}});
  Hooks.on('updateWorldTime',async()=>{if(!isRuntimeAuthority())return;for(const actor of game.actors??[])if(actor.getFlag('oprpg-native','lifecycle'))try{await actorCommand(actor,async()=>{const state=lifecycleOf(actor);if(state.suffocation?.unconsciousAt!==undefined&&game.time.worldTime-state.suffocation.unconsciousAt>=60&&actor.statuses?.has('suffocated')&&actor.statuses?.has('unconscious'))await actor.update({'system.vitalityState.dead':true});await expireActorTimers(actor);});}catch(error){console.error('OP RPG · duração',error);}});
}
export async function bleedingBeforeMovement(actor){
  if(!actor.statuses?.has('bleeding'))return;
  const epoch=game.combat?.started?`${game.combat.id}:${game.combat.round}:${game.combat.turn}`:`time:${game.time.worldTime}`;
  const state=lifecycleOf(actor);if(state.bleedingEpoch===epoch)return;
  const roll=await new Roll('1d6').evaluate();state.bleedingEpoch=epoch;await actor.update({'flags.oprpg-native.lifecycle':state});
  return damageInside(actor,{components:[{type:'slashing',amount:roll.total}],bypassMitigation:true,bypassTemporary:true});
}
