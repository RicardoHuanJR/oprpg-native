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
export async function learnHakiTalent(item) {
  const actor=item.actor;
  if(item.type!=="hakiTalent"||!actor?.isOwner)throw new Error("Selecione um talento de Haki pertencente ao personagem.");
  return actorCommand(actor,async()=>{
    const haki=actor.system.haki;
    if(!haki.awakened)throw new Error("O despertar deve ser autorizado pelo mestre antes de distribuir PA.");
    if(haki.learned.includes(item.uuid))throw new Error("Talento já aprendido.");
    const config=item.system.hakiTalent;
    if(config.focus==="king"&&!haki.kingAllowed)throw new Error("O personagem não tem acesso autorizado ao Haki do Rei.");
    const stages=["Latente","Inexperiente","Treinado","Perito"];
    const stage=hakiStage(haki.armament+haki.observation+haki.king);
    const firstTalent=stage==="Latente"&&config.minimumStage==="Inexperiente"&&config.cost>0;
    if(!firstTalent&&stages.indexOf(stage)<stages.indexOf(config.minimumStage))throw new Error("Estágio abaixo do requisito do talento.");
    if(haki.unspent<config.cost)throw new Error("PA ociosos insuficientes.");
    await actor.update({"system.haki.unspent":haki.unspent-config.cost,[`system.haki.${config.focus}`]:haki[config.focus]+config.cost,"system.haki.learned":[...haki.learned,item.uuid]});
    return {cost:config.cost,source:item.system.source};
  });
}
