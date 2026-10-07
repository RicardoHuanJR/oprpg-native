import {resolveDamage,resolveHealing,powerCostPlan,temporaryHP,longRestPlan,SKILLS,RuleDecisionRequired,attackResult} from "./engine.mjs";
import {ATTRIBUTES,CATEGORIES,d20Formula} from "./rules.mjs";
import {RULE_DECISIONS} from "./rule-decisions.mjs";
import {combatContext,activationPlan} from "./combat-rules.mjs";
import {conditionSet,conditionModifiers} from "./conditions.mjs";

const queues=new WeakMap();
// Serializa comandos por documento neste cliente. Autoridade entre clientes ainda exige prova própria.
export function actorCommand(actor,callback) {
  if(!actor?.isOwner) return Promise.reject(new Error("Sem permissão para alterar este ator."));
  const before=queues.get(actor)??Promise.resolve();
  const next=before.catch(()=>{}).then(callback);
  const tail=next.catch(()=>{});queues.set(actor,tail);
  void tail.finally(()=>{if(queues.get(actor)===tail) queues.delete(actor);});
  return next;
}
export function activityFor(item,variantId=null) {
  if(!variantId) return {activity:item.system.activity,resolution:item.system.resolution,name:item.name,id:"primary"};
  const variant=item.system.variants?.find(variant=>variant.id===variantId);
  if(!variant)throw new Error("Atividade alternativa não encontrada.");
  return {activity:variant.activity,resolution:variant.resolution,name:`${item.name} — ${variant.name}`,id:variant.id};
}
function vitalityFor(actor) {return {...actor.system.vitality,dead:actor.system.vitalityState?.dead??false};}
function vitalityUpdate(result,actor) {
  const updates={"system.vitality.value":result.value,"system.vitality.temporary":result.temporary,"system.vitality.negative":result.negative};
  if(actor.type!=="ship") updates["system.vitalityState.dead"]=Boolean(result.dead);
  return updates;
}
export async function damageActor(actor,options) {
  return actorCommand(actor,async()=>{
    if(actor.type==="ship") throw new RuleDecisionRequired("Dano de navio exige o pipeline marítimo; não aplicar regras de PV negativos de personagem.");
    const result=resolveDamage(vitalityFor(actor),{...options,...actor.system.damageMitigation,deathPolicy:actor.system.vitalityState.deathPolicy});
    await actor.update(vitalityUpdate(result.vitality,actor));return result;
  });
}
export async function healActor(actor,amount) {
  return actorCommand(actor,async()=>{
    if(actor.type==="ship") throw new RuleDecisionRequired("Reparo de navio é uma operação própria.");
    const result=resolveHealing(vitalityFor(actor),amount);
    await actor.update(vitalityUpdate(result.vitality,actor));return result;
  });
}
export async function grantTemporary(actor,amount,choice) {
  return actorCommand(actor,()=>actor.update({"system.vitality.temporary":temporaryHP(actor.system.vitality.temporary,amount,choice)}));
}
export async function spendHitDie(actor) {
  return actorCommand(actor,async()=>{
    if(!actor.system.rest.shortEligible) throw new Error("Conclua um descanso curto de pelo menos 30 minutos antes de gastar Dados de Vida.");
    if(actor.system.hitDice.available<1) throw new Error("Sem Dados de Vida disponíveis.");
    const roll=await new Roll(`1d${actor.system.hitDice.faces} + ${Math.max(0,actor.system.attributes.constitution.modifier)}`).evaluate();
    const healed=resolveHealing(vitalityFor(actor),roll.total);
    await actor.update({...vitalityUpdate(healed.vitality,actor),"system.hitDice.available":actor.system.hitDice.available-1});
    await roll.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:"Dado de Vida — recuperação de descanso curto"},{rollMode:game.settings.get("core","rollMode")});
    return healed;
  });
}
export async function startLongRest(actor,kind="long") {
  if(!["short","long"].includes(kind))throw new Error("Descanso inválido.");
  return actorCommand(actor,()=>actor.update({"system.rest.startedAt":game.time.worldTime,"system.rest.startHP":actor.system.vitality.value,"system.rest.startExhaustion":actor.system.exhaustion,"system.rest.kind":kind,"system.rest.shortEligible":false}));
}
export async function finishShortRest(actor) {
  return actorCommand(actor,async()=>{
    if(actor.system.rest.kind!=="short"||actor.system.rest.startedAt===null||game.time.worldTime-actor.system.rest.startedAt<1800)throw new Error("Descanso curto não concluído (30 minutos).");
    await actor.update({"system.rest.startedAt":null,"system.rest.shortEligible":true,"system.resources":actor.system.resources.map(resource=>["short","shortOrLong"].includes(resource.recovery)?{...resource,value:resource.max}:{...resource})});
  });
}
export async function finishLongRest(actor,powerPolicy=RULE_DECISIONS.exhaustedLongRestPower) {
  return actorCommand(actor,async()=>{
    if(actor.system.rest.startedAt===null) throw new Error("Registre o início do descanso primeiro.");
    if(actor.system.rest.kind&&actor.system.rest.kind!=="long")throw new Error("O descanso registrado é curto.");
    const updates=longRestPlan(actor.system,{startedAt:actor.system.rest.startedAt,completedAt:game.time.worldTime,startHP:actor.system.rest.startHP,startExhaustion:actor.system.rest.startExhaustion,powerPolicy});
    updates["system.rest.startedAt"]=null;
    updates["system.resources"]=actor.system.resources.map(resource=>["long","shortOrLong"].includes(resource.recovery) ? {...resource,value:resource.max} : {...resource});
    await actor.update(updates);
    return updates;
  });
}
export async function rollDamage(item,{critical=false,variantId=null}={}) {
  const actor=item.actor;
  if(!actor?.isOwner) throw new Error("Abra um item de um ator sob seu controle.");
  const {activity,resolution,name}=activityFor(item,variantId);
  if(!activity?.damageFormula.trim()) throw new Error("Registre uma fórmula de dano da fonte.");
  const modifier=resolution.addAttributeToDamage ? actor.system.attributes[activity.attribute].modifier : 0;
  let roll=new Roll(`${activity.damageFormula} + ${modifier}`,actor.getRollData());
  if(critical) roll=roll.alter(2,0,{multiplyNumeric:false});
  return roll.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:`${foundry.utils.escapeHTML(name)} — ${critical?"dano crítico":"dano"}; aplicação ao alvo é separada`},{rollMode:game.settings.get("core","rollMode")});
}
export async function useActivity(item,{advantage=false,disadvantage=false,overload=false,requestId,variantId=null}={}) {
  const actor=item.actor;
  if(!actor?.isOwner) throw new Error("Abra um item de um ator sob seu controle.");
  if(actor.type==="ship") throw new RuleDecisionRequired("Atividade de navio precisa de configuração marítima própria.");
  const {activity,resolution,name,id:activityId}=activityFor(item,variantId);
  if(!activity) throw new Error("Sem atividade.");
  if(!requestId) throw new Error("Identificador de operação obrigatório.");
  return actorCommand(actor,async()=>{
    const previous=actor.getFlag("oprpg-native","operations")??[];
    if(previous.includes(requestId)) return {duplicate:true};
    if(actor.system.exhaustion>=6||actor.system.vitalityState.dead) throw new Error("Ator impedido de executar esta atividade.");
    const conditions=conditionModifiers(conditionSet(actor.statuses,{...actor.system.vitality,dead:actor.system.vitalityState.dead}),{kind:"attack",category:item.type});
    if(conditions.incapacitated)throw new Error("A condição Incapacitado impede atividades de combate.");
    if(conditions.techniquesBlocked&&["technique","auxiliary"].includes(item.type))throw new Error("A condição atual impede usar técnicas.");
    advantage||=conditions.advantage;disadvantage||=conditions.disadvantage;
    if(actor.type==="character"&&item.system.levelRequirement>actor.system.progression.level) throw new Error("Nível abaixo do requisito registrado.");
    if(item.type==="legendary"&&!game.user.isGM) throw new Error("Ações lendárias são acionadas pelo mestre.");
    const context=combatContext(game.combat,actor);
    if(item.type==="legendary"&&!context)throw new Error("Ações lendárias exigem um combate ativo.");
    const budget=activationPlan(actor.system.combat?.state??{}, {context,category:item.type,activation:item.type==="legendary"?"legendary":activity.activation,attacksPerAction:actor.system.combat?.attacksPerAction??1,ignoreBudget:resolution.ignoreBudget,countsAsTechnique:resolution.countsAsTechnique!==false,legendaryCost:resolution.legendaryCost??1,legendaryValue:actor.system.legendaryActions?.value??0,legendaryMax:actor.system.legendaryActions?.max??0});
    if(context&&actor.statuses?.has("lethargic")&&["action","powerful","bonus"].includes(activity.activation)){
      const usedKinds=[budget.state.actionUsed,budget.state.powerfulUsed,budget.state.bonusUsed].filter(Boolean).length;
      if(usedKinds>1)throw new Error("Letárgico permite escolher apenas ação, poderosa ou bônus neste turno.");
    }
    let resources=actor.system.resources.map(resource=>({...resource}));
    if(item.system.uses.max>0) {
      let resource=resources.find(resource=>resource.id===`item:${item.id}`);
      if(!resource){resource={id:`item:${item.id}`,name:item.name,value:item.system.uses.value,max:item.system.uses.max,recovery:item.system.uses.recovery,source:item.uuid};resources.push(resource);}
      if(resource.max!==item.system.uses.max)throw new RuleDecisionRequired("O máximo de usos da fonte mudou. Atualize o recurso explicitamente antes de usar.");
      if(resource.value<1)throw new Error("Sem usos disponíveis para esta característica.");
      resource.value--;
    }
    const cost=powerCostPlan({current:actor.system.power.value,cost:activity.powerCost,grade:item.type==="technique"?item.system.grade:null,exhaustion:actor.system.exhaustion,overload,category:item.type});
    const updates={"system.power.value":cost.power,"system.exhaustion":cost.exhaustion,"system.resources":resources,"system.rest.shortEligible":false,"flags.oprpg-native.operations":[...previous,requestId].slice(-128)};
    if(context)updates["system.combat.state"]=budget.state;
    if(context&&actor.system.legendaryActions)updates["system.legendaryActions.value"]=budget.legendaryValue;
    let roll=null;
    if(resolution.kind==="attack") {
      // Técnica só adiciona atributo quando sua configuração/fonte o determina.
      const modifier=resolution.attackBonus ?? (resolution.addAttributeToAttack?actor.system.attributes[activity.attribute].modifier:0)+(activity.proficient?actor.system.proficiency.bonus:0);
      roll=await new Roll(d20Formula({advantage,disadvantage,modifier:modifier-2*actor.system.exhaustion})).evaluate();
    }
    let attack=null;
    if(roll) {
      const natural=roll.dice.find(die=>die.faces===20)?.results.find(result=>result.active!==false&&!result.discarded)?.result;
      attack=attackResult({natural,total:roll.total,criticalThreshold:resolution.criticalThreshold});
    }
    await actor.update(updates);
    const content=`<article class="oprpg-chat"><h3>${foundry.utils.escapeHTML(name)}</h3><p>${CATEGORIES[item.type]} · ${activity.powerCost} PP registrados · ${cost.cost} PP gastos</p><p>${foundry.utils.escapeHTML(activity.requirements)}<br>${foundry.utils.escapeHTML(activity.range)} · ${foundry.utils.escapeHTML(activity.duration)}</p><p>Alvos, salvaguardas, condições e limites por turno exigem a resolução do mestre nesta etapa.</p></article>`;
    const data={speaker:ChatMessage.getSpeaker({actor}),flavor:content,flags:{"oprpg-native":{requestId,actorUUID:actor.uuid,itemUUID:item.uuid,activityId,attack}}};
    try {
      if(roll) await roll.toMessage(data,{rollMode:game.settings.get("core","rollMode")});
      else {
        const messageData={...data,content};
        ChatMessage.applyRollMode(messageData,game.settings.get("core","rollMode"));
        await ChatMessage.create(messageData);
      }
    } catch(error) {
      return {cost,roll,committed:true,deliveryError:error.message};
    }
    return {cost,roll};
  });
}
