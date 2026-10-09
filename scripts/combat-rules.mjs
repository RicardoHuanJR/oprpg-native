import {RuleDecisionRequired} from "./engine.mjs";
export function combatContext(combat,actor) {
  if(!combat?.started)return null;
  const matches=combat.turns.filter(turn=>turn.actor?.uuid===actor.uuid);
  if(matches.length!==1)throw new RuleDecisionRequired("O ator precisa corresponder a um único combatente para controlar ações automaticamente.");
  const controlled=actor.getFlag?.('oprpg-native','controlledMount');
  const rider=controlled?.combatId===combat.id?combat.turns.find(turn=>turn.actor?.uuid===controlled.riderUUID):null;
  const acting=rider??matches[0],index=combat.turns.indexOf(acting);
  const ownRound=combat.turn>=index?combat.round:combat.round-1;
  return {encounter:combat.id,round:combat.round,turn:combat.turn,actorUUID:actor.uuid,globalEpoch:`${combat.id}:${combat.round}:${combat.turn}`,ownEpoch:`${combat.id}:${matches[0].id}:${ownRound}`,ownRound,isOwnTurn:combat.combatant?.id===acting.id,legendaryWindow:combat.getFlag("oprpg-native","endTurnWindow")};
}
export function activationPlan(state,{context,category,activation,attacksPerAction=1,ignoreBudget=false,countsAsTechnique=true,legendaryCost=1,legendaryValue=0,legendaryMax=0,reactive=false}) {
  if(!context||(ignoreBudget&&activation!=="legendary")||["passive","other"].includes(activation))return {state:structuredClone(state),legendaryValue};
  const next=structuredClone(state);
  if(next.ownEpoch!==context.ownEpoch) {
    Object.assign(next,{ownEpoch:context.ownEpoch,actionUsed:false,powerfulUsed:false,bonusUsed:false,reactionUsed:false,attacksRemaining:0,specialAttacks:0,movementSpent:0,dashes:0,dodging:false,readyTrigger:''});
    if(context.ownRound>=1)legendaryValue=legendaryMax;
  }
  if(["action","powerful","bonus"].includes(activation)&&!context.isOwnTurn)throw new Error("Esta atividade exige o turno do ator.");
  if(activation==="action") {
    if(category==="weapon") {
      if(!next.actionUsed){next.actionUsed=true;next.attacksRemaining=attacksPerAction-1;}
      else if(next.attacksRemaining>0)next.attacksRemaining--;
      else throw new Error("Sem ataques restantes na ação.");
    }else{if(next.actionUsed)throw new Error("A ação já foi usada.");next.actionUsed=true;}
  }
  if(activation==="powerful"){if(next.powerfulUsed)throw new Error("A ação poderosa já foi usada.");next.powerfulUsed=true;}
  if(activation==="bonus"){if(next.bonusUsed)throw new Error("A ação bônus já foi usada.");next.bonusUsed=true;}
  if(reactive&&next.reactionEpoch!==context.globalEpoch)next.reactionUsed=false;
  if(activation==="reaction"){next.reactionEpoch=context.globalEpoch;if(next.reactionUsed)throw new Error("A reação já foi usada desde o início do último turno.");next.reactionUsed=true;}
  if(activation==="legendary") {
    const window=context.legendaryWindow;
    if(context.isOwnTurn||!window||window.actorUUID===context.actorUUID||window.round!==context.round||window.turn!==context.turn)throw new Error("Ação lendária exige a janela de fim de turno de outra criatura.");
    if(next.legendaryWindowEpoch===context.globalEpoch)throw new Error("Uma ação lendária já foi usada nesta janela.");
    if(legendaryValue<legendaryCost)throw new Error("Sem reserva lendária suficiente.");
    legendaryValue-=legendaryCost;next.legendaryWindowEpoch=context.globalEpoch;
  }
  if(countsAsTechnique&&["technique","auxiliary"].includes(category)&&activation!=="bonus") {
    if(next.techniqueEpoch===context.globalEpoch)throw new Error("Uma técnica já foi usada neste turno; técnicas com ação bônus são a exceção geral.");
    next.techniqueEpoch=context.globalEpoch;
  }
  return {state:next,legendaryValue};
}
