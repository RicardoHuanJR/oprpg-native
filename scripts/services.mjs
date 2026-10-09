import {weaponAttackSetup,weaponProperties} from './weapon-mechanics.mjs';
import {actorNumbers} from './actor-numbers.mjs';
import {racialBoostPlan} from './racial-combat.mjs';
import {applicableLeaderAura} from './auras.mjs';
import {lifecycleOf,copyData,canConcentrate,checkConcentration,turnMark} from './lifecycle.mjs';
import {ammunitionPlan,weaponProficient} from "./inventory.mjs";
import {resolveDamage,resolveHealing,powerCostPlan,temporaryHP,longRestPlan,SKILLS,RuleDecisionRequired,attackResult} from "./engine.mjs";
import {ATTRIBUTES,CATEGORIES,d20Formula} from "./rules.mjs";
import {RULE_DECISIONS} from "./rule-decisions.mjs";
import {combatContext,activationPlan} from "./combat-rules.mjs";
import {conditionSet,conditionModifiers,targetAttackModifiers} from "./conditions.mjs";
import {activityCost,expertiseEligible,underwaterContext,underwaterBudget} from './mechanics.mjs';
import {activeItemRules} from './item-rules.mjs';

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
  const variant=variantId?item.system.variants?.find(variant=>variant.id===variantId):null;
  if(variantId&&!variant)throw new Error('Atividade alternativa não encontrada.');
  const source=variant?.activity??item.system.activity;
  let activity=source?.proficiencyMode==='style'?{...source,proficient:weaponProficient(item.actor,item)}:source;
  let resolution=variant?.resolution??item.system.resolution;
  const ammo=item.actor?.items?.get(source?.ammunitionItem);
  if(item.type==='weapon'&&ammo?.system.ammunitionDamage){activity={...activity,damageFormula:ammo.system.ammunitionDamage};resolution={...resolution,damageType:ammo.system.ammunitionType};}
  return {activity,resolution,name:variant?`${item.name} — ${variant.name}`:item.name,id:variant?.id??'primary'};
}
function vitalityFor(actor) {return {...actor.system.vitality,dead:actor.system.vitalityState?.dead??false};}
function vitalityUpdate(result,actor) {
  const updates={"system.vitality.value":result.value,"system.vitality.temporary":result.temporary,"system.vitality.negative":result.negative};
  if(actor.type!=="ship") updates["system.vitalityState.dead"]=Boolean(result.dead);
  return updates;
}
export async function damageActor(actor,options) {return actorCommand(actor,()=>damageInside(actor,options));}
export async function damageInside(actor,options) {
    if(!actor.isOwner)throw new Error("Sem permissão.");
    if(actor.type==="ship") throw new RuleDecisionRequired("Dano de navio exige o pipeline marítimo; não aplicar regras de PV negativos de personagem.");
    const mitigation={...actor.system.damageMitigation};if(underwaterContext(actor.system).submerged)mitigation.resistances=[...new Set([...(mitigation.resistances??[]),'fire'])];
    const result=resolveDamage(vitalityFor(actor),{...options,...mitigation,deathPolicy:actor.system.vitalityState.deathPolicy});
    await actor.update(vitalityUpdate(result.vitality,actor));
    if(result.total>0){await checkConcentration(actor,result.total);
      if(underwaterContext(actor.system).submerged&&!actor.system.environment.breathesUnderwater){
        const dc=Math.max(10,Math.floor(result.total/2)),numbers=actorNumbers(actor.system,actor.type);
        const roll=await new Roll(`1d20 + ${numbers.attributes.constitution.saveTotal}`).evaluate();
        if(roll.total<dc){await actor.toggleStatusEffect('suffocated',{active:true});const state=lifecycleOf(actor);delete state.breathUntil;await actor.update({'flags.oprpg-native.lifecycle':state});}
        try{await roll.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:`Manter respiração · CD ${dc}`});}catch{}
      }
      if(result.total>=10&&actor.system.vitality.value>0&&!actor.system.vitalityState?.dead&&!actor.statuses?.has('unconscious')&&!actor.statuses?.has('suffocated')&&actor.items.some(item=>item.system.identifier==='guerreiro-nato'&&item.system.training?.state==='learned')){
        const regeneration=await new Roll(`1d6 + ${actor.system.attributes.constitution.modifier}`).evaluate();const healing=resolveHealing(vitalityFor(actor),Math.max(0,regeneration.total));await actor.update(vitalityUpdate(healing.vitality,actor));
      }
    }return result;
}
export async function healActor(actor,amount) {
  return actorCommand(actor,async()=>{
    if(actor.type==="ship") throw new RuleDecisionRequired("Reparo de navio é uma operação própria.");
    if(actor.statuses?.has('suffocated'))throw new Error('Não é possível recuperar PV enquanto estiver sufocado.');
    const result=resolveHealing(vitalityFor(actor),amount);
    await actor.update(vitalityUpdate(result.vitality,actor));return result;
  });
}
export async function grantTemporary(actor,amount,choice) {
  return actorCommand(actor,()=>actor.update({"system.vitality.temporary":temporaryHP(actor.system.vitality.temporary,amount,choice),...(choice!=="keep"?{"flags.oprpg-native.temporarySource":null}:{})}));
}
export async function spendHitDie(actor,faces=null) {
  return actorCommand(actor,async()=>{
    if(actor.statuses?.has('suffocated'))throw new Error('Não é possível recuperar PV enquanto estiver sufocado.');
    if(!actor.system.rest.shortEligible) throw new Error("Conclua um descanso curto de pelo menos 30 minutos antes de gastar Dados de Vida.");
    if(actor.system.hitDice.available<1) throw new Error("Sem Dados de Vida disponíveis.");
    const pools=actor.system.hitDice.pools??[];const pool=pools.length?pools.find(pool=>pool.faces===(faces??actor.system.hitDice.faces)):null;
    if(pools.length&&(!pool||pool.available<1))throw new Error("Sem Dados de Vida deste tipo.");
    const die=pool?.faces??actor.system.hitDice.faces;
    const roll=await new Roll(`1d${die} + ${Math.max(0,actor.system.attributes.constitution.modifier)}`).evaluate();
    const healed=resolveHealing(vitalityFor(actor),roll.total);
    const updates={...vitalityUpdate(healed.vitality,actor)};
    if(pool)updates["system.training.spentHitDice"]={...actor.toObject().system.training.spentHitDice,[die]:(actor.system.training.spentHitDice[die]??0)+1};else updates["system.hitDice.available"]=actor.system.hitDice.available-1;
    await actor.update(updates);
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
    if(actor.system.rest.kind!=="short"||actor.system.rest.startedAt===null||game.time.worldTime-actor.system.rest.startedAt<60*Math.min(30,...activeItemRules(actor.system,[...(actor.items??[])]).filter(rule=>rule.kind==='shortRestMinutes'&&rule.value>0).map(rule=>rule.value)))throw new Error("Descanso curto não concluído (30 minutos).");
    const chase=actor.getFlag('oprpg-native','chase');
    await actor.update({"system.rest.startedAt":null,"system.rest.shortEligible":true,...(chase?{"system.exhaustion":Math.max(0,actor.system.exhaustion-(chase.extraExhaustion??0)),"flags.oprpg-native.chase":null}:{}),"system.resources":actor.system.resources.map(resource=>["short","shortOrLong"].includes(resource.recovery)?{...resource,value:resource.max}:{...resource})});
  });
}
export async function finishLongRest(actor,powerPolicy=RULE_DECISIONS.exhaustedLongRestPower,recoverDice=null) {
  return actorCommand(actor,async()=>{
    if(actor.system.rest.startedAt===null) throw new Error("Registre o início do descanso primeiro.");
    if(actor.system.rest.kind&&actor.system.rest.kind!=="long")throw new Error("O descanso registrado é curto.");
    const updates=longRestPlan(actor.system,{startedAt:actor.system.rest.startedAt,completedAt:game.time.worldTime,startHP:actor.system.rest.startHP,startExhaustion:actor.system.rest.startExhaustion,powerPolicy});
    if(actor.system.hitDice.pools?.length) {
      const pools=actor.system.hitDice.pools;const limit=Math.min(pools.reduce((sum,p)=>sum+p.max-p.available,0),Math.max(1,Math.floor(actor.system.hitDice.max/2)));
      const selected=recoverDice??(pools.length===1?{[pools[0].faces]:limit}:null);
      if(!selected)throw new Error("Escolha os tipos de Dados de Vida a recuperar.");
      const spent={...actor.toObject().system.training.spentHitDice};let total=0;
      for(const [faces,amount] of Object.entries(selected)){const pool=pools.find(p=>p.faces===Number(faces));if(!pool||!Number.isInteger(amount)||amount<0||amount>pool.max-pool.available)throw new Error("Recuperação de Dados de Vida inválida.");total+=amount;spent[faces]=Math.max(0,(spent[faces]??0)-amount);}
      if(total!==limit)throw new Error(`Escolha ${limit} Dado(s) de Vida para recuperar.`);
      delete updates["system.hitDice.available"];updates["system.training.spentHitDice"]=spent;
    }
    updates["system.rest.startedAt"]=null;
    const chase=actor.getFlag('oprpg-native','chase');
    if(chase){updates['system.exhaustion']=Math.max(0,(updates['system.exhaustion']??actor.system.exhaustion)-(chase.extraExhaustion??0));updates['flags.oprpg-native.chase']=null;}
    updates["system.resources"]=actor.system.resources.map(resource=>["long","shortOrLong"].includes(resource.recovery) ? {...resource,value:resource.max} : {...resource});
    await actor.update(updates);
    return updates;
  });
}
export async function rollDamage(item,{critical=false,variantId=null}={}) {
  const actor=item.actor;
  if(item.system.rulesReviewed===false)throw new Error("Confira os campos e as exceções desta técnica no livro e marque Regras conferidas no item antes de usar.");
  if(!actor?.isOwner) throw new Error("Abra um item de um ator sob seu controle.");
  const previous=actor.getFlag('oprpg-native','lastActivity');
  const selected=previous?.itemUUID===item.uuid&&previous.activityId===(variantId??'primary')?previous:activityFor(item,variantId);
  const {activity,resolution,name:storedName}=selected;const name=storedName??item.name;
  if(!activity?.damageFormula.trim()) throw new Error("Registre uma fórmula de dano da fonte.");
  const damageOnly=actor.getFlag('oprpg-native','lastActivity')?.itemUUID===item.uuid&&actor.getFlag('oprpg-native','lastActivity')?.damageOnly;
  const modifier=!damageOnly&&resolution.addAttributeToDamage ? actor.system.attributes[activity.attribute].modifier : 0;
  let roll=new Roll(`${activity.damageFormula} + ${modifier}`,actor.getRollData());
  if(critical) roll=roll.alter(2,0,{multiplyNumeric:false});
  for(const component of selected.extraDamageComponents??[]){let extra=new Roll(component.formula);if(critical)extra=extra.alter(2,0,{multiplyNumeric:false});await extra.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:`${component.type==='lightning'?'Electro':'Heat'} · dano adicional separado`});}
  if(actor.getFlag('oprpg-native','expertise')?.kind==='maximize'&&actor.getFlag('oprpg-native','expertise').source===item.uuid){await roll.evaluate({maximize:true});await actor.update({'flags.oprpg-native.expertise':null});}
  return roll.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:`${foundry.utils.escapeHTML(name)} — ${critical?"dano crítico":"dano"}; aplicação ao alvo é separada`},{rollMode:game.settings.get("core","rollMode")});
}
export async function useActivity(item,{advantage=false,disadvantage=false,overload=false,requestId,variantId=null,targetDistance=null,targetCR=null,targetActorUUID=null,canSeeInvisible=false,prepare=false,trigger='',releasePrepared=false,expertiseAttack=false,attributeOverride=null,twoHands=false,throwing=false,racialBoost='',racialAlternative=false}={}) {
  if(item.actor?.getFlag('oprpg-native','controlledMount'))throw new Error('Montaria controlada só pode usar Disparada ou Esquiva.');
  const actor=item.actor;
  if(!actor?.isOwner) throw new Error("Abra um item de um ator sob seu controle.");
  if(actor.type==="ship") throw new RuleDecisionRequired("Atividade de navio precisa de configuração marítima própria.");
  let {activity,resolution,name,id:activityId}=activityFor(item,variantId);
  if(!activity) throw new Error("Sem atividade.");
  if(!requestId) throw new Error("Identificador de operação obrigatório.");
  return actorCommand(actor,async()=>{
    if(item.system.rulesReviewed===false)throw new Error("Confira as regras da técnica no item antes de gastar recursos.");
    const lifecycle=lifecycleOf(actor);
    if(releasePrepared){
      const held=lifecycle.concentration;if(!held?.prepared||held.itemUUID!==item.uuid||!canConcentrate(actor))throw new Error('Não existe técnica preparada válida.');
      const own=combatContext(game.combat,actor);if(held.ownEpoch!==own?.ownEpoch)throw new Error('A preparação expirou no início do seu próximo turno.');
      ({activity,resolution,name,activityId}=copyData(held));activity.activation='reaction';
    }
    if(prepare){if(releasePrepared||!trigger.trim()||!['technique','auxiliary'].includes(item.type)||activity.activation!=='powerful')throw new Error('Preparar técnica exige gatilho e ação poderosa.');}
    if((prepare||activity.concentration)&&!canConcentrate(actor))throw new Error('A condição atual impede concentração.');
    const previous=actor.getFlag("oprpg-native","operations")??[];
    if(previous.includes(requestId)) return {duplicate:true};
    if(item.type==='weapon'){const setup=weaponAttackSetup(item,actor,{attributeOverride,twoHands,throwing,targetDistance,baseFormula:activity.damageFormula});activity={...activity,attribute:setup.attribute,damageFormula:setup.damageFormula};disadvantage||=setup.disadvantage;}
    const ammunition=prepare?null:ammunitionPlan(actor,activity);
    if(actor.system.exhaustion>=6||actor.system.vitalityState.dead) throw new Error("Ator impedido de executar esta atividade.");
    const conditions=conditionModifiers(conditionSet(actor.statuses,{...actor.system.vitality,dead:actor.system.vitalityState.dead}),{kind:"attack",category:item.type});
    if(conditions.incapacitated)throw new Error("A condição Incapacitado impede atividades de combate.");
    if(conditions.reactionBlocked&&activity.activation==='reaction')throw new Error('Sonolento impede reações.');
    if(conditions.techniquesBlocked&&["technique","auxiliary"].includes(item.type))throw new Error("A condição atual impede usar técnicas.");
    advantage||=conditions.advantage;disadvantage||=conditions.disadvantage;
    const targetActor=targetActorUUID?await fromUuid(targetActorUUID):null;
    if(targetActorUUID&&!targetActor)throw new Error('Alvo não encontrado.');
    if(targetActor){const targetConditions=targetAttackModifiers(conditionSet(targetActor.statuses,{...targetActor.system.vitality,dead:targetActor.system.vitalityState?.dead}),{distance:targetDistance,canSeeInvisible});advantage||=targetConditions.advantage;disadvantage||=targetConditions.disadvantage;if(targetCR===null)targetCR=targetActor.system.defense.rating;}
    if(underwaterContext(actor.system).submerged&&item.type==='weapon'){
      if(item.system.tags?.includes('weaponCategory:armas-de-fogo'))throw new Error('Armas de fogo completamente submersas não funcionam.');
      if(item.system.identifier!=='tridente')disadvantage=true;
      if((weaponProperties(item).ranged||throwing)&&targetDistance!==null&&targetDistance>item.system.weapon.normalRange)throw new Error('Ataque submerso à distância erra automaticamente além do alcance normal.');
    }
    if(actor.type==="character"&&item.system.levelRequirement>actor.system.progression.level) throw new Error("Nível abaixo do requisito registrado.");
    if(item.type==="legendary"&&!game.user.isGM) throw new Error("Ações lendárias são acionadas pelo mestre.");
    const context=combatContext(game.combat,actor);
    if(prepare&&!context)throw new Error('Preparar técnica exige combate ativo.');
    const shots=(actor.system.combat?.state?.weaponShots??[]).filter(key=>key.startsWith(`${context?.encounter}:${context?.round}:`));
    const shotKey=context?`${context.encounter}:${context.round}:${item.id}`:null;
    if(item.type==='weapon'&&item.system.weapon?.reload&&shotKey&&shots.includes(shotKey))throw new Error('Recarga: esta arma já disparou nesta rodada.');
    if(item.type==='weapon'&&targetDistance!==null){
      if(!Number.isFinite(targetDistance)||targetDistance<0)throw new Error('Distância do alvo inválida.');
      if(item.system.weapon.maximumRange>0&&targetDistance>item.system.weapon.maximumRange)throw new Error('Alvo além do alcance máximo.');
      if(item.system.weapon.normalRange>0&&targetDistance>item.system.weapon.normalRange)disadvantage=true;
    }
    if(item.type==="legendary"&&!context)throw new Error("Ações lendárias exigem um combate ativo.");
    const budget=activationPlan(actor.system.combat?.state??{}, {context,category:item.type,activation:expertiseAttack?"other":item.type==="legendary"?"legendary":activity.activation,reactive:actor.system.npcFeatures?.reactive,attacksPerAction:actor.system.combat?.attacksPerAction??1,ignoreBudget:prepare?false:resolution.ignoreBudget,countsAsTechnique:!prepare&&resolution.countsAsTechnique!==false,legendaryCost:resolution.legendaryCost??1,legendaryValue:actor.system.legendaryActions?.value??0,legendaryMax:actor.system.legendaryActions?.max??0});
    if(expertiseAttack){if(item.type!=='weapon'||actor.getFlag('oprpg-native','specialAttackSource')!==item.uuid||budget.state.specialAttacks<1||context?.ownEpoch!==actor.system.combat.state.ownEpoch)throw new Error('Sem ataques de expertise disponíveis neste turno.');budget.state.specialAttacks--;}
    if(prepare)budget.state=activationPlan(budget.state,{context,category:'common',activation:'action'}).state;
    if(['action','powerful','bonus','reaction'].includes(activity.activation))budget.state=underwaterBudget(actor.system,budget.state,{context,kind:activity.activation});
    if(context&&actor.statuses?.has("lethargic")&&["action","powerful","bonus"].includes(activity.activation)){
      const usedKinds=[budget.state.actionUsed,budget.state.powerfulUsed,budget.state.bonusUsed].filter(Boolean).length;
      if(usedKinds>1)throw new Error("Letárgico permite escolher apenas ação, poderosa ou bônus neste turno.");
    }
    let resources=actor.system.resources.map(resource=>({...resource}));
    if(racialBoost&&(prepare||resolution.kind!=='attack'))throw new Error('Aplique Electro/Heat apenas quando executar a jogada de ataque.');
    const boost=!prepare&&resolution.kind==='attack'?racialBoostPlan(actor,{kind:racialBoost,alternative:racialAlternative,context,state:budget.state,resources}):{state:budget.state,resources,components:[]};budget.state=boost.state;resources=boost.resources;
    if(!releasePrepared&&item.system.uses.max>0) {
      let resource=resources.find(resource=>resource.id===`item:${item.id}`);
      if(!resource){resource={id:`item:${item.id}`,name:item.name,value:item.system.uses.value,max:item.system.uses.max,recovery:item.system.uses.recovery,source:item.uuid};resources.push(resource);}
      if(resource.max!==item.system.uses.max)throw new RuleDecisionRequired("O máximo de usos da fonte mudou. Atualize o recurso explicitamente antes de usar.");
      if(resource.value<1)throw new Error("Sem usos disponíveis para esta característica.");
      resource.value--;
    }
    const quote=activityCost(item,activity,actor.system,[...(actor.items??[])]);
    const cost=powerCostPlan({current:actor.system.power.value,cost:releasePrepared?0:quote.cost,grade:item.type==="technique"?item.system.grade:null,exhaustion:actor.system.exhaustion,overload:releasePrepared?false:overload,category:item.type});
    const updates={"system.power.value":cost.power,"system.exhaustion":cost.exhaustion,"system.resources":resources,"system.rest.shortEligible":false,"system.rest.startedAt":null,"flags.oprpg-native.operations":[...previous,requestId].slice(-128),...(boost.round?{'flags.oprpg-native.racialBoostRound':boost.round}:{})};
    if(context){budget.state.weaponShots=item.type==='weapon'&&item.system.weapon?.reload?[...shots,shotKey]:shots;updates['system.combat.state']=budget.state;}
    if(context&&actor.system.legendaryActions)updates["system.legendaryActions.value"]=budget.legendaryValue;
    let roll=null;
    if(!prepare&&resolution.kind==="attack") {
      // Técnica só adiciona atributo quando sua configuração/fonte o determina.
      const giantBonus=item.type==='weapon'&&!weaponProperties(item).ranged&&!throwing&&(actor.items??[]).some(item=>item.system.identifier==='guerreiro-nato'&&item.system.training?.state==='learned')?1:0;
      const itemBonus=giantBonus+activeItemRules(actor.system,[...(actor.items??[])]).filter(rule=>rule.kind==='attackBonus'&&(!rule.key||rule.key===item.type||rule.key===item.system.identifier)).reduce((sum,rule)=>sum+rule.value,0);
      const expertise=actor.getFlag('oprpg-native','expertise');
      const expertiseBonus=expertise?.kind==='accuracy'?3:0;
      const modifier=(resolution.attackBonus ?? (resolution.addAttributeToAttack?actor.system.attributes[activity.attribute].modifier:0)+(activity.proficient?actor.system.proficiency.bonus:0))+itemBonus+expertiseBonus;
      const aura=applicableLeaderAura(actor);roll=await new Roll(d20Formula({advantage,disadvantage,modifier:modifier-2*actor.system.exhaustion})+(aura?` + ${aura.dice}`:'')).evaluate();
    }
    let attack=null;
    if(roll) {
      const natural=roll.dice.find(die=>die.faces===20)?.results.find(result=>result.active!==false&&!result.discarded)?.result;
      attack=attackResult({natural,total:roll.total,targetCR,criticalThreshold:item.type==='weapon'&&actor.getFlag('oprpg-native','expertise')?.kind==='critical'?16:resolution.criticalThreshold});
      const expert=actor.getFlag('oprpg-native','expertise');if(expert&&(['accuracy'].includes(expert.kind)||item.type==='weapon'&&expert.kind==='critical'))updates['flags.oprpg-native.expertise']=null;
      if(attack.hit===false&&context){lifecycle.missedOwnTurn=context.ownEpoch;updates['flags.oprpg-native.lifecycle']=lifecycle;}
      if(item.type==='technique'&&actor.statuses?.has('empowered')&&attack.hit===false){updates['system.power.value']=actor.system.power.value;cost.power=actor.system.power.value;cost.cost=0;}
    }
    if(prepare)lifecycle.concentration={id:requestId,prepared:true,itemUUID:item.uuid,ownEpoch:context.ownEpoch,trigger:trigger.trim(),activity:copyData(activity),resolution:copyData(resolution),name,activityId};
    else if(activity.concentration)lifecycle.concentration={id:requestId,prepared:false,itemUUID:item.uuid,name};
    else if(releasePrepared)delete lifecycle.concentration;
    if(lifecycle.sulong&&!lifecycle.sulong.controlled&&!game.user.isGM)throw new Error('O Narrador controla a forma Sulong sem Leão da Lua.');
    if(prepare||releasePrepared||activity.concentration)updates['flags.oprpg-native.lifecycle']=lifecycle;
    updates['flags.oprpg-native.lastActivity']={requestId,itemUUID:item.uuid,activityId,activity:copyData(activity),resolution:copyData(resolution),attack:copyData(attack),prepared:prepare,damageOnly:expertiseAttack,extraDamageComponents:boost.components};
    if(ammunition)await ammunition.item.update({"system.equipment.quantity":ammunition.after});
    try{await actor.update(updates);}catch(error){if(ammunition)await ammunition.item.update({"system.equipment.quantity":ammunition.before});throw error;}
    if(roll&&actor.statuses?.has('burned')&&lifecycle.burnedEpoch!==turnMark(actor)){
      const after=lifecycleOf(actor);after.burnedEpoch=turnMark(actor);await actor.update({'flags.oprpg-native.lifecycle':after});
      const burn=await new Roll('1d6').evaluate();await damageInside(actor,{components:[{type:'fire',amount:burn.total}],bypassMitigation:true,bypassTemporary:true});
    }
    const expertise=attack&&expertiseEligible({category:item.type,natural:attack.natural,proficient:activity.proficient,resolutionKind:resolution.kind})?item.system.weapon?.expertise:null;
    const content=`<article class="oprpg-chat"><h3>${foundry.utils.escapeHTML(name)}</h3><p>${CATEGORIES[item.type]} · ${quote.base} PP registrados · ${cost.cost} PP gastos</p>${expertise?`<p><strong>Expertise disponível:</strong> ${foundry.utils.escapeHTML(expertise)}. Escolha o efeito aplicável com o Narrador; apenas uma expertise pode permanecer ativa por criatura.</p>`:''}<p>${foundry.utils.escapeHTML(activity.requirements)}<br>${foundry.utils.escapeHTML(activity.range)} · ${foundry.utils.escapeHTML(activity.duration)}</p><p>Confira alvos, salvaguardas e exceções da fonte.</p></article>`;
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
    return {cost,roll,attack,prepared:prepare};
  });
}
