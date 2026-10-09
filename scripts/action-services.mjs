import {actorCommand} from './services.mjs';
import {bleedingBeforeMovement} from './runtime-events.mjs';
import {combatContext,activationPlan} from './combat-rules.mjs';
import {activeItemRules} from './item-rules.mjs';
import {conditionSet,conditionModifiers} from './conditions.mjs';
import {commonActionActivation,movementSpeeds,movementPlan,underwaterBudget} from './mechanics.mjs';

export const COMMON_ACTIONS=Object.freeze({help:'Ajudar',dash:'Disparada',hide:'Esconder',dodge:'Esquivar',study:'Estudar',influence:'Influenciar',ready:'Preparar',search:'Procurar',useObject:'Usar um objeto',improvise:'Ação improvisada',release:'Executar ação preparada'});
function allowed(actor,movement=false){
  const conditions=conditionModifiers(conditionSet(actor.statuses,{...actor.system.vitality,dead:actor.system.vitalityState?.dead}),{});
  if(actor.type==='ship'||actor.system.vitalityState?.dead||actor.system.exhaustion>=6||(!movement&&conditions.incapacitated))throw new Error('A condição atual impede esta atividade.');
  return conditions;
}
export function performCommonAction(actor,{action,useBonus=false,trigger=''}){
  return actorCommand(actor,async()=>{
    const conditions=allowed(actor);if(!Object.hasOwn(COMMON_ACTIONS,action))throw new Error('Ação desconhecida.');
    if(actor.getFlag?.('oprpg-native','controlledMount')&&(!['dash','dodge'].includes(action)||useBonus))throw new Error('Montaria controlada só pode usar Disparada ou Esquiva, uma ação por turno.');
    const context=combatContext(game.combat,actor);if(!context)throw new Error('Inicie um combate para registrar ações por turno.');
    let activation=action==='release'?'reaction':'action';
    if(activation==='reaction'&&conditions.reactionBlocked)throw new Error('Sonolento impede reações.');
    if(useBonus){if(commonActionActivation(actor.system,[...actor.items],action)!=='bonus')throw new Error('Não há benefício ativo que permita esta ação como bônus.');activation='bonus';}
    const plan=activationPlan(actor.system.combat.state,{context,category:'common',activation});
    plan.state=underwaterBudget(actor.system,plan.state,{context,kind:activation});
    if(action==='ready'&&!trigger.trim())throw new Error('Descreva o gatilho da ação preparada.');
    if(action==='release'&&!plan.state.readyTrigger)throw new Error('Não existe ação preparada disponível.');
    if(actor.statuses?.has('lethargic')&&[plan.state.actionUsed,plan.state.powerfulUsed,plan.state.bonusUsed].filter(Boolean).length>1)throw new Error('Letárgico permite apenas uma das ações do turno.');
    if(action==='dash')plan.state.dashes=(plan.state.dashes??0)+1;
    if(action==='dodge')plan.state.dodging=true;
    if(action==='ready')plan.state.readyTrigger=trigger.trim();
    if(action==='release')plan.state.readyTrigger='';
    await actor.update({'system.combat.state':plan.state});
    const data={speaker:ChatMessage.getSpeaker({actor}),content:`<article class="oprpg-chat"><h3>${COMMON_ACTIONS[action]}</h3><p>${activation==='bonus'?'Ação bônus':activation==='reaction'?'Reação':'Ação'} registrada.</p>${action==='ready'?`<p>Gatilho: ${foundry.utils.escapeHTML(trigger)}</p>`:''}<p>Confira com o Narrador o teste, alvo e resultado. Preparar uma técnica também exige ação poderosa, PP e concentração; este botão prepara somente uma ação comum.</p></article>`};
    ChatMessage.applyRollMode(data,game.settings.get('core','rollMode'));
    try{await ChatMessage.create(data);}catch(error){ui.notifications.warn('Ação registrada, mas o cartão não foi enviado.');}
    return plan;
  });
}

export function recordMovement(actor,options){
  return actorCommand(actor,async()=>{
    allowed(actor,true);const statuses=conditionSet(actor.statuses,{...actor.system.vitality,dead:actor.system.vitalityState?.dead});
    if(options.stand&&!statuses.has('prone'))throw new Error('A criatura não está caída.');
    if(statuses.has('weakened')&&options.mode==='swimming')throw new Error('Enfraquecido impede nadar.');
    if(statuses.has('prone')&&!options.stand&&options.mode!=='distance')throw new Error('Enquanto estiver caído, rasteje ou levante antes de mudar o modo.');
    const rules=activeItemRules(actor.system,[...actor.items]);
    const plan=movementPlan(actor.system.combat.state,{...options,context:combatContext(game.combat,actor),speeds:movementSpeeds(actor.system,[...actor.items],actor.statuses),prone:statuses.has('prone'),shaken:statuses.has('shaken'),ignoreDifficult:statuses.has('empowered')||rules.some(rule=>rule.kind==='ignoreDifficultTerrain')});
    if(!options.stand)plan.state=underwaterBudget(actor.system,plan.state,{context:combatContext(game.combat,actor),kind:'swim'});
    if(!options.stand&&options.distance>0){await bleedingBeforeMovement(actor);if(conditionSet(actor.statuses,{...actor.system.vitality,dead:actor.system.vitalityState?.dead}).has('unconscious'))throw new Error('O sangramento impediu o deslocamento.');}
    await actor.update({'system.combat.state':plan.state});
    if(options.stand)await actor.toggleStatusEffect('prone',{active:false});
    return plan;
  });
}
