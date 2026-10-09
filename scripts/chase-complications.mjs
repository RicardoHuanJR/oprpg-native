import {damageActor,actorCommand} from './services.mjs';
import {savingThrow} from './target-resolution.mjs';
import {recordMovement} from './action-services.mjs';
import {fallingDamage} from './exploration.mjs';
import {lifecycleOf,timedBoundary} from './lifecycle.mjs';
import {combatContext} from './combat-rules.mjs';
const URBAN={1:{skills:['acrobatics'],dc:15,terrain:3},2:{skills:['athletics','acrobatics'],dc:10,terrain:3},3:{save:'strength',dc:10,prone:true},4:{skills:['acrobatics','wisdom'],dc:10,terrain:3},5:{save:'dexterity',dc:10,prone:true},6:{skills:['acrobatics'],dc:10,terrain:1.5,damage:[['piercing','1d4']]},7:{skills:['athletics','acrobatics','intimidation'],dc:10,terrain:3,damage:[['bludgeoning','2d4']]},8:{skills:['athletics','acrobatics','intimidation'],dc:10,terrain:1.5,coin:true},9:{attack:5,damage:[['slashing','1d6 + 3']],movement:6},10:{save:'dexterity',dc:10,prone:true,damage:[['bludgeoning','1d4']]}};
const NATURE={1:{skills:['athletics','acrobatics'],dc:10,terrain:1.5},2:{skills:['acrobatics'],dc:10,terrain:3},3:{attack:3,damage:[['piercing','4d4']]},4:{skills:['athletics','acrobatics'],dc:10,terrain:3},5:{save:'constitution',dc:10,blind:true},6:{save:'dexterity',dc:10,fall:true},7:{save:'dexterity',dc:15,status:'restrained'},8:{save:'dexterity',dc:10,damage:[['bludgeoning','1d4'],['piercing','1d4']]},9:{save:'dexterity',dc:15,avoid:3,damage:[['slashing','1d10']]},10:{narrator:true}};
export async function resolveChaseComplication(actor,{environment='urban',number,skill='',coin=false,avoid=false,movement=0,confirmed=false}={}){
 if(!game.user.isGM||!game.combat?.started||!confirmed||!['urban','nature'].includes(environment)||!Number.isInteger(number)||number<1||number>20)throw new Error('O Narrador confirma o ambiente e o resultado da complicação durante a perseguição em combate.');
 const profile=(environment==='urban'?URBAN:NATURE)[number];if(!profile){await actor.update({'flags.oprpg-native.chaseComplication':null});return {success:true,none:true};}if(profile.narrator)return {narrator:true};
 if(!combatContext(game.combat,actor)?.isOwnTurn)throw new Error('Resolva a complicação no turno da criatura afetada.');
 if(profile.skills&&!profile.skills.includes(skill))throw new Error('Escolha um teste permitido por esta complicação.');
 if(profile.movement&&movement<profile.movement)return {pendingMovement:true};
 let success=false,roll=null;
 if(coin&&profile.coin){if(actor.system.currency<1)throw new Error('Bellys insuficientes.');await actorCommand(actor,()=>actor.update({'system.currency':actor.system.currency-1}));success=true;}
 else if(avoid&&profile.avoid){await recordMovement(actor,{distance:profile.avoid,mode:'distance'});success=true;}
 else if(profile.save)({success,roll}=await savingThrow(actor,profile.save,profile.dc));
 else if(profile.skills){let bonus=actor.system.skills[skill]?.total??((actor.system.attributes[skill]?.modifier??NaN)-2*actor.system.exhaustion);if(environment==='urban'&&number===8&&skill==='intimidation')bonus+=actor.system.attributes.will.modifier-actor.system.attributes.presence.modifier;if(!Number.isFinite(bonus))throw new Error('Teste indisponível.');roll=await new Roll(`1d20 + ${bonus}`).evaluate();success=roll.total>=profile.dc;}
 else if(profile.attack){roll=await new Roll(`1d20 + ${profile.attack}`).evaluate();const natural=roll.dice.find(die=>die.faces===20)?.results.find(result=>result.active!==false&&!result.discarded)?.result;success=!(natural===20||natural!==1&&roll.total>=actor.system.defense.rating);}
 const result={success,roll,extraTerrain:0};
 if(!success){
  if(profile.damage){const components=[];for(const [type,formula] of profile.damage){let damage=new Roll(formula);if(profile.attack&&roll.dice.find(die=>die.faces===20)?.results.find(value=>value.active!==false&&!value.discarded)?.result===20)damage=damage.alter(2,0,{multiplyNumeric:false});components.push({type,amount:(await damage.evaluate()).total});}result.damage=await damageActor(actor,{components});}
  if(profile.terrain){try{await recordMovement(actor,{distance:profile.terrain,mode:'distance'});}catch{result.blocked=true;ui.notifications.warn('Não há movimento restante para atravessar este obstáculo.');}result.extraTerrain=profile.terrain;}
  if(profile.prone||profile.fall)await actor.toggleStatusEffect('prone',{active:true});
  if(profile.status)await actor.toggleStatusEffect(profile.status,{active:true});
  if(profile.fall){result.meters=(await new Roll('1d4').evaluate()).total*1.5;await fallingDamage(actor,{meters:result.meters});}
  if(profile.blind){const already=actor.statuses.has('blinded');await actor.toggleStatusEffect('blinded',{active:true});const state=lifecycleOf(actor);state.timers=[...(state.timers??[]),{...timedBoundary(game.combat,actor,{next:false}),status:already?null:'blinded',reason:'chaseBlind'}];await actor.update({'system.environment.chaseBlind':true,'flags.oprpg-native.lifecycle':state});}
 }
 await actor.update({'flags.oprpg-native.chaseComplication':null});return result;
}
