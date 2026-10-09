import {ATTRIBUTES,attributeModifier} from './rules.mjs';
import {SKILLS} from './engine.mjs';
import {CATALOG} from './catalog.mjs';
const copy=value=>JSON.parse(JSON.stringify(value));
const integer=(value,min,max,label)=>{if(!Number.isInteger(value)||value<min||value>max)throw new Error(`${label} inválido.`);return value;};
export const identifier=name=>String(name).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const TECHNIQUE_LEVELS=Object.freeze({1:1,3:2,6:3,9:4,12:5,16:6,20:7});
export const MULTISTYLE_REQUIREMENTS=Object.freeze({atirador:[{attributes:['dexterity'],minimum:15}],aventureiro:[{attributes:['dexterity','presence'],minimum:16}],brutamontes:[{attributes:['strength'],minimum:15}],'carateca-homem-peixe':[{attributes:['strength'],minimum:15}],ciborgue:[{attributes:['constitution','wisdom'],minimum:16}],espadachim:[{attributes:['strength','dexterity'],minimum:15},{attributes:['presence'],minimum:15}],guerrilheiro:[{attributes:['strength','dexterity'],minimum:15},{attributes:['wisdom'],minimum:15}],lutador:[{attributes:['strength'],minimum:16}],ninja:[{attributes:['dexterity'],minimum:16}],'okama-kenpo':[{attributes:['strength','dexterity'],minimum:15},{attributes:['presence'],minimum:15}],rokushiki:[{attributes:['strength','dexterity'],minimum:15},{attributes:['constitution'],minimum:15}],samurai:[{attributes:['strength','dexterity'],minimum:15}]});
export function checkRequirements(system,requirements=[]) {
 return requirements.every(group=>group.attributes.some(id=>Number(system.attributes?.[id]?.base)>=group.minimum));
}
export function primaryStyle(system) {
 const styles=system.progression?.styles??[];
 return styles.find(style=>style.key===system.progression.primaryStyle)||[...styles].sort((a,b)=>b.levels-a.levels)[0]||null;
}
export function headerImage(system) {
 if(system.appearance?.wallpaper)return system.appearance.wallpaper;
 const style=primaryStyle(system);if(style?.headerImage)return style.headerImage;
 const key=style?.identifier||identifier(system.identity?.combatStyle||'default');
 const file=key.startsWith('carateca')?'carateca':key.startsWith('okama')?'okama':key;
 return `/systems/oprpg-native/theme/classes/${file||'default'}.webp`;
}
export function validateChoices(steps,choices,system) {
 const benefits=[];const projected=Object.fromEntries(Object.keys(ATTRIBUTES).map(id=>[id,system.attributes?.[id]?.base??10]));
 const projectedSkills=new Set(Object.entries(system.skills??{}).filter(([,skill])=>skill.proficient).map(([key])=>key));
 for(const step of steps) {
  const selected=choices[step.id]??[];
  integer(step.count,1,20,'Quantidade de escolhas');
  if(selected.length!==step.count)throw new Error(`Escolha ${step.count} opção(ões) em ${step.label}.`);
  if(!step.allowRepeat&&new Set(selected).size!==selected.length)throw new Error(`Opções repetidas em ${step.label}.`);
  for(const key of selected) {
   if(!step.options.includes(key))throw new Error(`Opção inválida em ${step.label}.`);
   if(step.kind==='attribute') {
    if(!Object.hasOwn(ATTRIBUTES,key))throw new Error('Atributo desconhecido.');
    const amount=integer(step.amount,1,10,'Aumento');projected[key]+=amount;
    if(projected[key]>(step.cap||20))throw new Error(`${ATTRIBUTES[key]} ultrapassa o limite ${step.cap||20}.`);
    benefits.push({kind:'attribute',key,amount});
   }else if(step.kind==='skill') {
    if(!Object.hasOwn(SKILLS,key))throw new Error('Perícia desconhecida.');
    if(projectedSkills.has(key))throw new Error(`${SKILLS[key].label} já possui proficiência. Escolha outra opção.`);
    benefits.push({kind:'skill',key,amount:1});
    projectedSkills.add(key);
   }else if(step.kind==='skillMultiplier'){
    if(!Object.hasOwn(SKILLS,key)||!projectedSkills.has(key))throw new Error('Escolha uma perícia em que já tenha proficiência.');
    if(![1.5,2].includes(step.amount))throw new Error('Multiplicador de proficiência inválido.');
    benefits.push({kind:'skillMultiplier',key,amount:step.amount});
   }else if(step.kind==='item')benefits.push({kind:'item',key,amount:1});
   else if(step.kind==='trait')benefits.push({kind:'trait',key,amount:1});
   else throw new Error('Tipo de escolha desconhecido.');
  }
 }
 const paths=[...(system.progression?.receipts??[]).flatMap(r=>r.benefits??[]),...benefits].filter(b=>b.kind==='trait'&&b.key.startsWith('Caminho do ')).map(b=>'path:'+identifier(b.key));
 for(const benefit of benefits.filter(b=>b.kind==='item')) {
  const item=CATALOG.find(item=>`catalog:${item.id}`===benefit.key);
  const path=item?.system.tags?.find(tag=>tag.startsWith('path:'));
  if(path&&paths.length&&!paths.includes(path))throw new Error('A técnica não pertence ao caminho escolhido.');
 }
 const basicName=b=>b.kind==='trait'?CATALOG.find(item=>item.system.tags?.includes('basic-ability')&&identifier(item.name)===identifier(b.key))?.id:b.kind==='item'?CATALOG.find(item=>`catalog:${item.id}`===b.key&&item.system.tags?.includes('basic-ability'))?.id:null;
 const oldBasic=(system.progression?.receipts??[]).flatMap(r=>r.benefits??[]).map(basicName).filter(Boolean);
 const newBasic=benefits.map(basicName).filter(Boolean);
 if(new Set([...oldBasic,...newBasic]).size<oldBasic.length+newBasic.length)throw new Error('Uma Habilidade Básica não pode ser escolhida novamente, incluindo a Inata (Jogador 2.1, p.38).');
 return benefits;
}
export function dependentChoices(steps,choices) {
 return steps.filter(step=>step.kind==='item').flatMap(step=>(choices[step.id]??[]).flatMap(key=>{
  const item=CATALOG.find(item=>`catalog:${item.id}`===key);
  return (item?.system.advancements??[]).map(child=>({...child,id:`${step.id}:${key}:${child.id}`}));
 }));
}
export function levelSteps(system,style,{multiStyle=false}={}) {
 const styles=system.progression?.styles??[];const key=style.system.identifier||identifier(style.name);
 const existing=styles.find(entry=>entry.identifier===key);const first=styles.length===0;
 const current=first?0:styles.reduce((sum,entry)=>sum+entry.levels,0);
 const next=current+1;integer(next,1,20,'Nível de personagem');
 const styleLevel=(existing?.levels??0)+1;
 if(!first&&!existing) {
  if(!multiStyle)throw new Error('O Narrador precisa habilitar a regra opcional Multiestilo.');
  const requirements=style.system.multistyleRequirements?.length?style.system.multistyleRequirements:MULTISTYLE_REQUIREMENTS[key];
  if(!requirements)throw new Error('Configure os requisitos de Multiestilo deste estilo personalizado.');
  if(!checkRequirements(system,requirements))throw new Error('Os atributos não atendem aos pré-requisitos de Multiestilo (Jogador 2.1, p.113).');
 }
 const steps=(style.system.advancements??[]).filter(step=>(step.scope==='character'?next:styleLevel)===step.level&&(!step.initialOnly||first)).map(copy);
 if(next<=3) {
  const owned=(system.progression?.receipts??[]).flatMap(r=>r.benefits??[]);
  const available=CATALOG.filter(item=>item.system.tags?.includes('basic-ability')&&!owned.some(b=>b.kind==='item'&&b.key===`catalog:${item.id}`||b.kind==='trait'&&identifier(b.key)===item.system.identifier));
  steps.push({id:`basic-ability-${next}`,label:'Habilidade Básica deste nível',kind:'item',count:1,options:available.map(item=>`catalog:${item.id}`),allowRepeat:false,amount:1,cap:20});
 }
 if(styleLevel===1&&style.system.skillProficiencies?.length)steps.unshift({id:'style-skills',label:'Perícias do estilo',kind:'skill',count:first?(style.system.skillCount||2):1,options:style.system.skillProficiencies.filter(id=>!system.skills?.[id]?.proficient),allowRepeat:false,amount:1,cap:20});
 const knownStyles=[...styles.map(style=>style.identifier),key];
 const paths=(system.progression?.receipts??[]).flatMap(r=>r.benefits??[]).filter(b=>b.kind==='trait'&&b.key.startsWith('Caminho do ')).map(b=>'path:'+identifier(b.key));
 for(const type of ['technique','auxiliary']) {
  if(type==='technique'&&!TECHNIQUE_LEVELS[next]||type==='auxiliary'&&![1,6,12].includes(next))continue;
  const eligible=CATALOG.filter(item=>item.type===type&&(type==='technique'?item.system.grade===TECHNIQUE_LEVELS[next]:item.system.levelRequirement===next)&&item.system.tags?.some(tag=>knownStyles.includes(tag.replace('style:','')))&&(!paths.length||!item.system.tags.some(tag=>tag.startsWith('path:'))||item.system.tags.some(tag=>paths.includes(tag))));
  if(eligible.length)steps.push({id:`${type}-${next}`,label:type==='technique'?`Técnica de combate — ${TECHNIQUE_LEVELS[next]}º grau`:'Técnica auxiliar',kind:'item',count:1,options:eligible.map(item=>`catalog:${item.id}`),allowRepeat:false,amount:1,cap:20});
 }
 return {first,next,styleLevel,key,existing,steps,techniqueGrade:TECHNIQUE_LEVELS[next]??null,auxiliaryChoice:[1,6,12].includes(next)};
}
export function levelPlan(system,style,choices,{multiStyle=false,hpRoll}={}) {
 const info=levelSteps(system,style,{multiStyle});
 const die=integer(system.training?.forcedHitDie??style.system.hitDie,6,12,'Dado de Vida');
 if(![6,8,10,12].includes(die))throw new Error('Dado de Vida inválido.');
 const roll=info.first?die:integer(hpRoll,1,die,'Resultado do Dado de Vida');
 const benefits=validateChoices([...info.steps,...dependentChoices(info.steps,choices)],choices,system);
 if(info.first)for(const key of style.system.saveProficiencies??[]) {
  if(!Object.hasOwn(ATTRIBUTES,key))throw new Error('Salvaguarda desconhecida.');benefits.push({kind:'save',key,amount:1});
 }
 const styles=copy(system.progression?.styles??[]);
 if(info.existing)styles.find(entry=>entry.key===info.existing.key).levels++;
 else styles.push({key:info.key,identifier:info.key,name:style.name,uuid:style.uuid||'',levels:1,hitDie:die,headerImage:style.system.headerImage||'',equipmentProficiencies:style.system.equipmentProficiencies??[]});
 return {...info,styles,benefits,die,hpRoll:roll,pt:info.next<=10&&info.next%2===0?3:0};
}
export function trainingQuote(system,training,learned=[],{creation=false,tutor=false}={}) {
 const data=training.system.training; if(!data)throw new Error('Treinamento sem configuração de aprendizado.');
 if(!data.repeatable&&learned.some(item=>item.system.identifier===training.system.identifier&&['learned','inProgress'].includes(item.system.training?.state)))throw new Error('Treinamento já aprendido ou em andamento.');
 const lineage=system.identity?.species?.identifier||identifier(system.identity?.species?.name||'');
 const ancestors=system.identity?.species?.ancestries??[];
 if(data.species?.length&&!data.species.includes(lineage)&&!data.species.some(id=>ancestors.includes(id)))throw new Error('Este treinamento exige a espécie indicada ou um mestiço dela.');
 let cost=data.cost,days=data.days,ignoreRequirements=false,tutorRequired=data.tutorRequired;const sources=[];
 for(const item of learned.filter(item=>item.system.training?.state==='learned'))for(const rule of item.system.training.modifiers??[]) {
  if(rule.target!==training.system.identifier)continue;
  if(rule.cost!==null&&rule.cost!==undefined)cost=Math.min(cost,rule.cost);
  if(rule.days!==null&&rule.days!==undefined)days=Math.min(days,rule.days);
  ignoreRequirements||=rule.ignoreRequirements;tutorRequired=tutorRequired&&!rule.ignoreTutor;sources.push(item.name);
 }
 if(data.species?.length&&ancestors.length>1&&learned.some(item=>item.system.training?.state!=='unlearned'&&item.system.training?.species?.some(id=>data.species.includes(id))))throw new Error('O mestiço já escolheu um treinamento desta espécie (Jogador 2.1, p.27).');
 if(!ignoreRequirements&&!checkRequirements(system,data.requirements))throw new Error('Atributos insuficientes para o treinamento.');
 if(!ignoreRequirements&&data.manualRequirement&&!creation)throw new Error(`Requisito exige conferência do Narrador: ${data.manualRequirement}`);
 if(!creation&&tutorRequired&&!tutor)throw new Error('Este treinamento exige um tutor.');
 if(creation){days=0;tutorRequired=false;}else if(tutor&&!tutorRequired)days=Math.ceil(days/2);
 integer(cost,0,100,'Custo em PT');integer(days,0,10000,'Dias de treino');
 if((system.training?.points??0)<cost)throw new Error('Pontos de Treinamento insuficientes.');
 return {cost,days,ignoreRequirements,tutorRequired,sources};
}
// Derived values are rebuilt from source + receipts on every preparation; never compound bonuses.
export function advancementBenefits(system) {
 const benefits=(system.progression?.receipts??[]).flatMap(receipt=>receipt.benefits??[]);
 return {attributeBonuses:Object.fromEntries(Object.keys(ATTRIBUTES).map(id=>[id,benefits.filter(b=>b.kind==='attribute'&&b.key===id).reduce((sum,b)=>sum+b.amount,0)])),skills:new Set(benefits.filter(b=>b.kind==='skill').map(b=>b.key)),saves:new Set(benefits.filter(b=>b.kind==='save').map(b=>b.key))};
}
export function hitDicePools(system) {
 const styles=system.progression?.styles??[];const spent=system.training?.spentHitDice??{};
 return [...new Set(styles.map(s=>s.hitDie))].map(faces=>{const max=styles.filter(s=>s.hitDie===faces).reduce((sum,s)=>sum+s.levels,0);return {faces,max,available:Math.max(0,max-(spent[faces]??0))};});
}
export function progressionHP(system) {
 const receipts=system.progression?.receipts??[];const levels=receipts.filter(receipt=>receipt.kind==='level');
 const legacy=receipts.find(receipt=>receipt.kind==='legacy');
 if(!levels.length&&!legacy)return null;
 const racial=receipts.filter(receipt=>receipt.kind==='species').reduce((sum,r)=>sum+r.baseHP,0);
 return Math.max(0,racial+(legacy?.baseHP??0)+levels.reduce((sum,r)=>sum+r.hpRoll,0)+(levels.length+(legacy?.level??0))*attributeModifier(system.attributes.constitution.base));
}
