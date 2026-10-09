import {savingThrow} from './target-resolution.mjs';
import {actorCommand} from './services.mjs';
import {activationPlan,combatContext} from './combat-rules.mjs';
import {conditionSet,conditionModifiers} from './conditions.mjs';
export async function mountedFall(rider,{kind='forced',useReaction=false,confirmed=false}={}){
 const mark=rider.getFlag('oprpg-native','mounting');if(!game.user.isGM||!confirmed||!mark?.mountUUID||!['forced','riderProne','mountProne'].includes(kind))throw new Error('O Narrador confirma a queda de uma criatura montada.');
 const mount=await fromUuid(mark.mountUUID);if(!mount?.isOwner)throw new Error('A montaria precisa estar acessível.');
 let fall=true;
 if(kind==='mountProne'&&useReaction){await actorCommand(rider,async()=>{const conditions=conditionModifiers(conditionSet(rider.statuses,{...rider.system.vitality,dead:rider.system.vitalityState?.dead}),{});if(conditions.incapacitated||conditions.reactionBlocked)throw new Error('A condição impede a reação.');const plan=activationPlan(rider.system.combat.state,{context:combatContext(game.combat,rider),activation:'reaction',category:'common'});await rider.update({'system.combat.state':plan.state});});fall=false;}
 else if(kind!=='mountProne'){const result=await savingThrow(rider,'dexterity',15);if(result.success)return {dismounted:false,fall:false};}
 await actorCommand(rider,()=>rider.update({'flags.oprpg-native.mounting':{...mark,mountUUID:null}}));
 if(mount.getFlag('oprpg-native','controlledMount')?.riderUUID===rider.uuid)await mount.update({'flags.oprpg-native.controlledMount':null});
 if(fall)await rider.toggleStatusEffect('prone',{active:true});return {dismounted:true,fall,placeWithin:1.5};
}
