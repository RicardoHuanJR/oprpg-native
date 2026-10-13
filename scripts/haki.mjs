import {actorCommand} from "./services.mjs";
import {hakiStage} from "./engine.mjs";
export async function awardAmbition(actor,amount) {
  if(!game.user.isGM)throw new Error("O mestre concede Pontos de Ambição.");
  if(!Number.isInteger(amount)||amount<0)throw new Error("Quantidade de PA inválida.");
  return actorCommand(actor,async()=>{
    const before=actor.system.haki.unspent;
    const incoming=before+amount;
    const value=actor.system.haki.awakened?Math.min(20,incoming):incoming;
    await actor.update({"system.haki.unspent":value});
    return {awarded:value-before,lost:incoming-value};
  });
}
export function hakiPurchaseQuote(actor,item) {
  if(item.type!=="hakiTalent"||!actor?.isOwner)throw new Error("Sem permissão para adquirir este talento.");
    const haki=actor.system.haki;
    const config=item.system.hakiTalent;
    const gift=item.system.identifier==='rei'&&config.focus==='king'&&config.cost===0&&haki.kingAllowed;
    if(!haki.awakened&&!gift)throw new Error("O despertar deve ser autorizado pelo mestre antes de distribuir PA.");
    if(!Number.isInteger(config.cost)||config.cost<0||!Number.isInteger(config.maxRank??1)||!Number.isInteger(config.rank??0))throw new Error('Confira os PA e as formas deste talento.');
    const owned=[...(actor.items??[])];
    const duplicate=item.system.identifier&&owned.find(other=>other.uuid!==item.uuid&&other.type==='hakiTalent'&&other.system.identifier===item.system.identifier&&haki.learned.includes(other.uuid));
    if(duplicate)throw new Error('Este talento já foi aprendido por outro registro da ficha.');
    const current=haki.learned.includes(item.uuid)?Math.max(1,config.rank??0):0;
    const maximum=config.maxRank??1;
    if(current>=maximum)throw new Error('Talento já aprendido em todas as formas disponíveis.');
    const known=new Set(owned.filter(other=>other.type==='hakiTalent'&&haki.learned.includes(other.uuid)).map(other=>other.system.identifier));
    const missing=(config.requirements??[]).filter(identifier=>!known.has(identifier));
    if(missing.length)throw new Error(`Aprenda primeiro os talentos exigidos: ${missing.join(', ')}.`);
    if(config.focus==="king"&&!haki.kingAllowed)throw new Error("O personagem não tem acesso autorizado ao Haki do Rei.");
    const stages=["Latente","Inexperiente","Treinado","Perito"];
    const stage=hakiStage(haki.armament+haki.observation+haki.king);
    const kingRoot=config.focus==='king'&&item.system.identifier==='rei'&&config.cost===0&&current===0;
    const firstTalent=stage==="Latente"&&config.minimumStage==="Inexperiente"&&config.cost>0&&current===0;
    const required=current===0?config.minimumStage:stages[Math.max(stages.indexOf(config.minimumStage),current===1?2:3)];
    if(!firstTalent&&!kingRoot&&stages.indexOf(stage)<stages.indexOf(required))throw new Error("Estágio abaixo do requisito desta forma do talento.");
    if(haki.unspent<config.cost)throw new Error("PA ociosos insuficientes.");
    const royalTotal=gift?Math.max(0,2*((actor.system.progression?.level??1)-9)):haki.kingBonusGranted??0;
    const bonus=Math.max(0,royalTotal-(haki.kingBonusGranted??0));
    const remaining=haki.unspent-config.cost+bonus;
    return {current,maximum,cost:config.cost,requiredStage:required,remaining:haki.awakened?Math.min(20,remaining):remaining,gift};
}
export async function learnHakiTalent(item) {
  const actor=item.actor;
  if(item.type!=="hakiTalent"||!actor?.isOwner)throw new Error("Selecione um talento de Haki pertencente ao personagem.");
  return actorCommand(actor,async()=>{
    const haki=actor.system.haki,config=item.system.hakiTalent;
    const {current,gift}=hakiPurchaseQuote(actor,item);
    const before={unspent:haki.unspent,focus:haki[config.focus],learned:[...haki.learned],kingBonusGranted:haki.kingBonusGranted??0};
    const royalTotal=gift?Math.max(0,2*((actor.system.progression?.level??1)-9)):before.kingBonusGranted;
    const bonus=Math.max(0,royalTotal-before.kingBonusGranted);
    await actor.update({'system.haki.kingBonusGranted':Math.max(before.kingBonusGranted,royalTotal),"system.haki.unspent":haki.awakened?Math.min(20,before.unspent-config.cost+bonus):before.unspent-config.cost+bonus,[`system.haki.${config.focus}`]:before.focus+config.cost,"system.haki.learned":[...new Set([...before.learned,item.uuid])]});
    try{if(typeof item.update==='function')await item.update({'system.hakiTalent.rank':current+1});}
    catch(error){await actor.update({'system.haki.kingBonusGranted':before.kingBonusGranted,'system.haki.unspent':before.unspent,[`system.haki.${config.focus}`]:before.focus,'system.haki.learned':before.learned});throw error;}
    return {cost:config.cost,rank:current+1,source:item.system.source};
  });
}

export function synchronizeRoyalAmbition(actor){
 return actorCommand(actor,async()=>{
  const haki=actor.system.haki;
  if(![...actor.items].some(item=>item.type==='hakiTalent'&&item.system.identifier==='rei'&&haki.learned.includes(item.uuid)))return;
  const total=Math.max(0,2*(actor.system.progression.level-9)),before=haki.kingBonusGranted??0;
  if(total<=before)return;
  await actor.update({'system.haki.kingBonusGranted':total,'system.haki.unspent':haki.awakened?Math.min(20,haki.unspent+total-before):haki.unspent+total-before});
 });
}
