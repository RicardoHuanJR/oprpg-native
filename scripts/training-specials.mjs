import {actorCommand} from './services.mjs';
export async function syncKujaTraining(actor){
  if((actor.system.training?.kujaStartedLevel??-1)<0)return;
  const start=actor.system.training.kujaStartedLevel,level=actor.system.progression.level;
  const due=Math.min(10,start+2*(Math.floor(level/2)-Math.floor(start/2)));
  const previous=actor.system.training.kujaGranted??0,grant=Math.max(0,due-previous);
  if(!grant)return;
  const incoming=actor.system.haki.unspent+grant;
  await actor.update({'system.haki.unspent':actor.system.haki.awakened?Math.min(20,incoming):incoming,'system.training.kujaGranted':due});
}
export async function applySpecialTraining(actor,item){
  if(item.system.training?.state!=='learned')return;
  const key=item.system.identifier;
  if(key==='iniciada-em-haki'&&(actor.system.training.kujaStartedLevel??-1)<0){await actor.update({'system.training.kujaStartedLevel':actor.system.progression.level});await syncKujaTraining(actor);}
  if(key==='resistencia-dos-gigantes'&&actor.system.training.forcedHitDie!==12){
    const raw=actor.toObject().system,receipts=structuredClone(raw.progression.receipts);
    for(const receipt of receipts.filter(value=>value.kind==='level'))receipt.hpRoll=(await new Roll('1d12').evaluate()).total;
    const legacy=receipts.find(value=>value.kind==='legacy');if(legacy){let sum=0;for(let i=0;i<legacy.level;i++)sum+=(await new Roll('1d12').evaluate()).total;legacy.baseHP=sum;}
    const spent=Object.values(raw.training.spentHitDice).reduce((sum,value)=>sum+value,0);
    await actor.update({'system.training.forcedHitDie':12,'system.training.spentHitDice':{6:0,8:0,10:0,12:spent},'system.progression.styles':raw.progression.styles.map(style=>({...style,hitDie:12})),'system.progression.receipts':receipts});
  }
}
