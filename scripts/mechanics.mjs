import {activeItemRules} from './item-rules.mjs';
import {movementFromConditions,conditionSet} from './conditions.mjs';

const matches=(rule,item)=>!rule.key||rule.key===item.type||rule.key===item.system.identifier;
export function activityCost(item,activity,system,items=[]){
  const base=activity.powerCost;
  if(!Number.isInteger(base)||base<0)throw new Error('Custo em PP inválido.');
  let creationDiscount=0,limitedDiscount=0;
  if(activity.costMode==='construction'){
    if(!['technique','auxiliary'].includes(item.type))throw new Error('O custo de construção se aplica a técnicas.');
    if(!Number.isInteger(item.system.grade??1)||(item.system.grade??1)<1)throw new Error('Grau inválido.');
    const cap=item.type==='auxiliary'?6:2*item.system.grade;
    limitedDiscount=Math.min(cap,activity.creationReduction??0);
    if(activity.costFamily!=='fruit')creationDiscount=item.type==='auxiliary'?1:Math.floor(item.system.grade/2);
  }
  const rules=activeItemRules(system,items).filter(rule=>matches(rule,item));
  const discounts=rules.filter(rule=>rule.kind==='powerReduction');
  const reduction=discounts.reduce((sum,rule)=>sum+Math.max(0,rule.value),0);
  // Different identical multipliers do not multiply one another; the most favorable source applies.
  const factor=Math.min(1,...rules.filter(rule=>rule.kind==='powerMultiplier').map(rule=>Math.max(0,rule.value)));
  const minimum=['technique','auxiliary'].includes(item.type)?1:0;
  return {base,creationDiscount,limitedDiscount,reduction,factor,cost:Math.max(minimum,Math.floor((base-creationDiscount-limitedDiscount-reduction)*factor)),sources:discounts.map(rule=>rule.source)};
}

export function proficiencyFactor(manual=1,rules=[]){
  return Math.max(manual,...rules.map(rule=>rule.value));
}

export function movementSpeeds(system,items=[],statuses=[]){
  // The prepared base includes the racial speed and core initial-phase effects.
  const raw=system.movement;
  const rules=activeItemRules(system,items);
  const weakened=new Set(statuses??[]).has('weakened');
  const result={};
  for(const mode of ['distance','swimming','climbing','flying']){
    let speed=raw[mode]??0;
    const applicable=weakened?[]:rules;
    speed=Math.max(speed,...applicable.filter(rule=>rule.kind==='movement'&&(!rule.key&&mode==='distance'||rule.key===mode)).map(rule=>rule.value));
    speed+=applicable.filter(rule=>rule.kind==='movementBonus'&&(!rule.key&&mode==='distance'||rule.key===mode)).reduce((sum,rule)=>sum+rule.value,0);
    speed*=Math.max(1,...applicable.filter(rule=>rule.kind==='movementMultiplier'&&(!rule.key&&mode==='distance'||rule.key===mode)).map(rule=>rule.value));
    const expertise=system.parent?.getFlag?.('oprpg-native','expertise');if(expertise?.kind==='movement')speed+=6;
    result[mode]=movementFromConditions(Math.max(0,speed-1.5*(system.exhaustion??0)),conditionSet(statuses,{...system.vitality,dead:system.vitalityState?.dead}));
    if(expertise?.kind==='slowHalf')result[mode]/=2;
    const sulong=system.parent?.getFlag?.('oprpg-native','lifecycle')?.sulong;if(sulong&&mode==='distance')result[mode]*=2;if(sulong&&mode==='flying')result[mode]=Math.max(result[mode],result.distance/2);
    if(weakened&&mode==='swimming')result[mode]=0;
    if(system.environment?.chaseBlind)result[mode]/=2;
  }
  return result;
}

export function movementPlan(state,{context,speeds,mode='distance',distance=0,difficult=false,ignoreDifficult=false,prone=false,stand=false,shaken=false}){
  if(!context?.isOwnTurn)throw new Error('O deslocamento registrado exige seu turno em combate.');
  if(!Object.hasOwn(speeds,mode)||!Number.isFinite(distance)||distance<0)throw new Error('Deslocamento inválido.');
  const next={...state};
  if(stand&&speeds.distance<=0)throw new Error('Sem deslocamento para se levantar.');
  if(next.ownEpoch!==context.ownEpoch){Object.assign(next,{ownEpoch:context.ownEpoch,actionUsed:false,powerfulUsed:false,bonusUsed:false,reactionUsed:false,attacksRemaining:0,movementSpent:0,dashes:0,dodging:false,readyTrigger:''});}
  const fallback=['swimming','climbing'].includes(mode)&&speeds[mode]===0;
  const speed=fallback?speeds.distance:speeds[mode];
  const extra=(difficult&&!ignoreDifficult?1:0)+(prone&&!stand?1:0)+(fallback&&!stand?1:0)+(shaken&&!stand?1:0);
  const cost=stand?speeds.distance/2:distance*(1+extra);
  if(speed<=0||cost+(next.movementSpent??0)>speed*(1+(next.dashes??0))+1e-8)throw new Error('Deslocamento insuficiente.');
  next.movementSpent=(next.movementSpent??0)+cost;
  return {state:next,cost,remaining:Math.max(0,speed*(1+(next.dashes??0))-next.movementSpent)};
}

export function expertiseEligible({category,natural,proficient,resolutionKind='attack'}){
  return category==='weapon'&&resolutionKind==='attack'&&natural===20&&proficient;
}

export function commonActionActivation(system,items,action){
  const granted=activeItemRules(system,items).some(rule=>rule.kind==='bonusAction'&&rule.key===action);
  return granted?'bonus':'action';
}

export function professionBenefitPlan({rank,cost=0,difficulty=0,die=0,restoration=false}){
  const grades={professional:{discount:0,reduction:0,die:0},specialist:{discount:.1,reduction:1,die:8},master:{discount:.2,reduction:2,die:10},grandMaster:{discount:.5,reduction:3,die:12}};
  const grade=grades[rank];if(!grade)throw new Error('Graduação desconhecida.');
  if(![cost,difficulty,die].every(value=>Number.isInteger(value)&&value>=0))throw new Error('Valores profissionais inválidos.');
  if(die&&![4,6,8,10,12,20].includes(die))throw new Error('Dado profissional inválido.');
  return {cost:Math.floor(cost*(1-grade.discount)),difficulty:Math.max(0,difficulty-grade.reduction),die:restoration&&die?Math.max(die,grade.die):die};
}

export function underwaterContext(system){
  const identity=system.identity?.species;
  return {submerged:Boolean(system.environment?.submerged),aquatic:Boolean(system.environment?.aquatic)||String(identity?.identifier??'').startsWith('povo-do-mar')||(identity?.ancestries??[]).some(id=>String(id).startsWith('povo-do-mar'))};
}

export function underwaterBudget(system,state,{context,kind}){
  const environment=underwaterContext(system);if(!environment.submerged||environment.aquatic)return state;
  if(kind==='reaction')throw new Error('Criaturas não aquáticas não usam reação enquanto submersas.');
  if(!context)return state;
  const epoch=`${context.encounter}:${context.round}`;
  if(state.underwaterEpoch===epoch&&state.underwaterKind&&state.underwaterKind!==kind)throw new Error('Enquanto submersa, a criatura não aquática escolhe entre ação, poderosa, bônus ou nadar nesta rodada.');
  return {...state,underwaterEpoch:epoch,underwaterKind:kind};
}
