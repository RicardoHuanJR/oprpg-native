import {ATTRIBUTES, attributeModifier, proficiencyBonus, d20Formula} from "./rules.mjs";

// Núcleo sem dependências de interface. Exceções não resolvidas exigem decisão explícita.
export class RuleDecisionRequired extends Error {}
export const SKILLS = Object.freeze({
  athletics: {label:"Atletismo",attribute:"strength"}, acrobatics:{label:"Acrobacia",attribute:"dexterity"},
  stealth:{label:"Furtividade",attribute:"dexterity"}, sleightOfHand:{label:"Prestidigitação",attribute:"dexterity"},
  history:{label:"História",attribute:"wisdom"}, investigation:{label:"Investigação",attribute:"wisdom"},
  medicine:{label:"Medicina",attribute:"wisdom"}, nature:{label:"Natureza",attribute:"wisdom"}, survival:{label:"Sobrevivência",attribute:"wisdom"},
  haki:{label:"Haki",attribute:"will"}, insight:{label:"Intuição",attribute:"will"}, perception:{label:"Percepção",attribute:"will"},
  supernatural:{label:"Sobrenatural",attribute:"will"}, luck:{label:"Sorte",attribute:"will"},
  performance:{label:"Atuação",attribute:"presence"}, deception:{label:"Enganação",attribute:"presence"},
  intimidation:{label:"Intimidação",attribute:"presence"}, persuasion:{label:"Persuasão",attribute:"presence"}, provocation:{label:"Provocação",attribute:"presence"}
});
export const DAMAGE_TYPES=Object.freeze({acid:"Ácido",bludgeoning:"Contundente",slashing:"Cortante",lightning:"Elétrico",fire:"Fogo",cold:"Frio",piercing:"Perfurante",psychic:"Psíquico",energy:"Energia",thunder:"Trovejante",poison:"Veneno",true:"Verdadeiro"});
export const XP_THRESHOLDS=Object.freeze([0,300,900,2700,6500,14000,23000,34000,48000,64000,85000,100000,120000,140000,165000,195000,225000,265000,305000,355000]);

function integer(value,name,{min=0,max=Infinity}={}) {
  if (!Number.isInteger(value)||value<min||value>max) throw new Error(`${name}: inteiro entre ${min} e ${max} obrigatório.`);
  return value;
}
export function skillCheck({attributeValue,proficiency,proficient=false,multiplier=1,bonus=0,exhaustion=0,advantage=false,disadvantage=false}) {
  integer(attributeValue,"Atributo",{min:1}); integer(proficiency,"Proficiência");integer(exhaustion,"Exaustão",{max:6});
  if (![0.5,1,1.5,2].includes(multiplier)) throw new Error("Multiplicador de proficiência inválido.");
  if (!Number.isFinite(bonus)) throw new Error("Bônus inválido.");
  const applied=proficient ? Math.floor(proficiency*multiplier) : 0;
  const modifier=attributeModifier(attributeValue)+bonus-2*exhaustion;
  const shift=advantage===disadvantage ? 0 : advantage ? 5 : -5;
  return {formula:d20Formula({modifier,proficiency:applied,advantage,disadvantage}),bonus:modifier+applied,passive:10+modifier+applied+shift};
}
export function levelForXP(xp) {integer(xp,"Experiência");return XP_THRESHOLDS.reduce((level,threshold,index)=>xp>=threshold ? index+1 : level,1);}
export function hakiStage(spent) {integer(spent,"PA distribuídos");return spent===0 ? "Latente" : spent<=20 ? "Inexperiente" : spent<=70 ? "Treinado" : "Perito";}
export function naturalAmbition(level) {integer(level,"Nível",{min:1,max:20});return level<8 ? 0 : 5+12*(level-8);}
export function attackResult({natural,total,targetCR=null,criticalThreshold=20}) {
  integer(natural,"D20 natural",{min:1,max:20});integer(criticalThreshold,"Margem crítica",{min:1,max:20});
  if(!Number.isFinite(total)||(targetCR!==null&&!Number.isFinite(targetCR)))throw new Error("Total ou CR inválidos.");
  const hit=natural===1?false:natural===20?true:targetCR===null?null:total>=targetCR;
  return {natural,total,targetCR,hit,naturalCritical:natural===20,criticalMargin:natural>=criticalThreshold,critical:hit===true&&natural>=criticalThreshold};
}

export function resolveHealing(vitality,amount) {
  integer(amount,"Cura"); const result=structuredClone(vitality);
  integer(result.value,"PV atuais");integer(result.max,"PV máximos");
  if (result.dead) throw new RuleDecisionRequired("Cura de criatura morta exige uma fonte que permita esse efeito.");
  result.value=Math.min(result.max,result.value+amount);
  if (result.value>0) result.negative=0;
  return {vitality:result,recovered:result.value-vitality.value};
}
export function temporaryHP(current,incoming,choice) {
  integer(current,"PV temporários atuais");integer(incoming,"PV temporários recebidos");
  if (current && incoming && !["keep","replace"].includes(choice)) throw new RuleDecisionRequired("Escolha manter ou substituir os PV temporários; eles não se somam.");
  return choice==="keep" ? current : incoming;
}
export function resolveDamage(vitality,{components,resistances=[],vulnerabilities=[],immunities=[],bypassMitigation=false,bypassTemporary=false,overlapOrder=null,deathPolicy="player",knockout=false}={}) {
  if(!Array.isArray(components)||!components.length) throw new Error("Informe componentes de dano.");
  if(!["player","npc"].includes(deathPolicy)) throw new Error("Política de morte inválida.");
  const result=structuredClone(vitality);integer(result.value,"PV");integer(result.max,"PV máximos");integer(result.temporary??0,"PV temporários");integer(result.negative??0,"PV negativos");
  const trace=[];let total=0;
  for(const component of components) {
    integer(component.amount,"Dano");integer(component.reduction??0,"Redução");
    if(!Object.hasOwn(DAMAGE_TYPES,component.type)) throw new Error("Tipo de dano desconhecido.");
    let amount=component.amount;
    if(!bypassMitigation) amount=Math.max(0,amount-(component.reduction??0));
    const resist=!bypassMitigation && component.type!=="true" && new Set(resistances).has(component.type);
    const vulnerable=!bypassMitigation && new Set(vulnerabilities).has(component.type);
    const immune=!bypassMitigation && component.type!=="true" && new Set(immunities).has(component.type);
    if(resist&&vulnerable&&!overlapOrder) throw new RuleDecisionRequired("A fonte não define aqui a ordem entre resistência e vulnerabilidade simultâneas. Escolha a resolução explicitamente.");
    if(resist&&vulnerable&&!['resistanceThenVulnerability','vulnerabilityThenResistance'].includes(overlapOrder)) throw new Error("Ordem inválida.");
    if(immune) amount=0;
    else if(resist&&vulnerable) amount=overlapOrder==='resistanceThenVulnerability' ? Math.floor(amount/2)*2 : Math.floor(amount*2/2);
    else if(resist) amount=Math.floor(amount/2);
    else if(vulnerable) amount*=2;
    trace.push({type:component.type,original:component.amount,reduction:bypassMitigation?0:component.reduction??0,resist,vulnerable,immune,final:amount});total+=amount;
  }
  const temporaryAbsorbed=bypassTemporary ? 0 : Math.min(result.temporary??0,total);
  result.temporary=(result.temporary??0)-temporaryAbsorbed;
  const realDamage=total-temporaryAbsorbed;
  const before=result.value;
  result.value=Math.max(0,before-realDamage);
  if(before===0 && realDamage>0) result.negative=(result.negative??0)+realDamage;
  const massive=before>0 && result.value===0 && realDamage-before>=result.max;
  const negativeFatal=before===0 && realDamage>0 && result.negative>=result.max;
  if(realDamage>0&&result.value===0) result.dead=Boolean(result.dead||massive||negativeFatal||(deathPolicy==="npc"&&!knockout));
  return {vitality:result,total,realDamage,temporaryAbsorbed,massive,trace};
}

export function absorbProtection(value,incoming,{discardOverflow=false}={}) {
  integer(value,"PV da proteção");integer(incoming,"Dano");
  const absorbed=Math.min(value,incoming);
  return {value:value-absorbed,absorbed,overflow:discardOverflow ? 0 : incoming-absorbed};
}

export function powerCostPlan({current,cost,grade=null,exhaustion=0,overload=false,category}) {
  integer(current,"Saldo PP");integer(cost,"Custo PP");integer(exhaustion,"Exaustão",{max:6});
  if(!overload) {
    if(current<cost) throw new Error("PP insuficientes. Sobrecarga deve ser escolhida explicitamente quando aplicável.");
    return {power:current-cost,exhaustion,cost};
  }
  if(category!=="technique") throw new RuleDecisionRequired("Sobrecarga de auxiliar/característica precisa de regra específica; não inferir grau pelo custo.");
  if(current>0) throw new RuleDecisionRequired("A regra geral de sobrecarga foi conferida para PP esgotados. Não consumir saldo parcial nem trocar custo por exaustão sem uma regra aplicável.");
  integer(grade,"Grau",{min:1,max:7});
  if(exhaustion+grade>5) throw new Error("Sobrecarga excederia o limite de exaustão permitido.");
  return {power:current,exhaustion:exhaustion+grade,cost:0};
}
export function longRestPlan(system,{startedAt,completedAt,startHP,startExhaustion,completed=true,powerPolicy}={}) {
  if(!completed||!Number.isFinite(startedAt)||!Number.isFinite(completedAt)||completedAt-startedAt<8*3600) throw new Error("Descanso longo não concluído (8 horas).");
  if(startHP<=0) throw new Error("Descanso longo exige ao menos 1 PV no início.");
  if(system.rest.lastLongRest!==null && completedAt-system.rest.lastLongRest<24*3600) throw new Error("Benefício de descanso longo limitado a uma vez a cada 24 horas.");
  if(startExhaustion>0 && !["half","blocked"].includes(powerPolicy)) throw new RuleDecisionRequired("Há divergência entre Jogador p.36 e p.278 sobre PP com exaustão. O mestre precisa escolher a referência aplicável.");
  const recoveredPower=startExhaustion===0 ? system.power.max : powerPolicy==="half" ? Math.floor(system.power.max/2) : 0;
  return {"system.vitality.value":system.vitality.max,"system.vitality.negative":0,"system.vitality.temporary":0,
    "system.power.value":Math.min(system.power.max,system.power.value+recoveredPower),
    "system.hitDice.available":Math.min(system.hitDice.max,system.hitDice.available+Math.max(1,Math.floor(system.hitDice.max/2))),
    "system.exhaustion":Math.max(0,system.exhaustion-1),"system.rest.lastLongRest":completedAt};
}
export function creationPlan({attributes,species,style,profession,level=1}) {
  if(level!==1) throw new RuleDecisionRequired("Criação acima do nível 1 exige registro de avanços; não multiplicar o DV máximo por nível.");
  for(const id of Object.keys(ATTRIBUTES)) integer(attributes[id],`Atributo ${id}`,{min:1});
  integer(species.baseHP,"PV base da espécie");integer(style.hitDie,"Dado de Vida",{min:1});
  if(![6,8,10,12].includes(style.hitDie)) throw new Error("Dado de Vida não suportado.");
  const hp=Math.max(1,style.hitDie+species.baseHP+attributeModifier(attributes.constitution));
  return {level,hp,power:4,proficiency:proficiencyBonus(level),hitDie:style.hitDie,defense:10+attributeModifier(attributes.dexterity),profession};
}

export function scopedModifiers(modifiers,context) {
  return modifiers.filter(mod=>mod.enabled!==false&&(!mod.categories?.length||mod.categories.includes(context.category))&&(!mod.activityId||mod.activityId===context.activityId)&&(!mod.minimumGrade||(context.grade!==null&&context.grade>=mod.minimumGrade)));
}
