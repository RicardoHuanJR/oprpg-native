import {actorCommand} from './services.mjs';
import {shipDamage} from './naval.mjs';
export async function forceAnchoredMotion(ship,{knots,confirmed=false}={}){
 if(!game.user.isGM||ship.type!=='ship'||!ship.system.naval.anchorDown||!confirmed||!Number.isFinite(knots)||knots<6)throw new Error('O Narrador confirma movimento/tentativa de aceleração com âncora baixada, em blocos completos de 6 nós.');
 const captain=await fromUuid(ship.system.naval.captainUUID);if(!captain||captain.type==='ship')throw new Error('Defina o capitão para o teste de Sorte.');
 const blocks=Math.floor(knots/6),roll=await new Roll(`${blocks*8}d10`).evaluate();const before=ship.system.vitality.value;
 await shipDamage(ship,roll.total);const received=before-ship.system.vitality.value;
 return actorCommand(ship,async()=>{
  let accrued=(ship.getFlag('oprpg-native','anchorDamage')??0)+received,broken=false,checks=0;
  while(accrued>=80&&!broken){accrued-=80;checks++;const check=await new Roll(`1d20 + ${captain.system.skills.luck.total}`).evaluate();broken=check.total<=5;}
  await ship.update({'flags.oprpg-native.anchorDamage':broken?0:accrued,...(broken?{'system.naval.anchorDown':false}:{})});return {damage:roll.total,received,checks,broken};
 });
}
