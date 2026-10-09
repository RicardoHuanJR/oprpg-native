import {applySpecialTraining,syncKujaTraining} from './training-specials.mjs';
import {actorCommand} from './services.mjs';
import {levelPlan,validateChoices,trainingQuote,identifier} from './advancement.mjs';
import {attributeModifier} from './rules.mjs';
import {CATALOG} from './catalog.mjs';
export {CATALOG};
const clone=value=>JSON.parse(JSON.stringify(value));
export function catalogDocument(id) {
 const entry=CATALOG.find(item=>item.id===id);if(!entry)throw new Error('Conteúdo não encontrado.');
 return {...clone(entry),uuid:`catalog:${entry.id}`};
}
export async function resolveContent(uuid) {
 if(uuid.startsWith('catalog:'))return catalogDocument(uuid.slice(8));
 const doc=await fromUuid(uuid);
 if(!doc||doc.documentName!=='Item'||!doc.testUserPermission(game.user,'OBSERVER'))throw new Error('Conteúdo indisponível ou sem permissão.');
 return doc;
}
function receipts(actor){return clone(actor.system.progression.receipts??[]);}
function assertCharacter(actor){if(actor.type!=='character')throw new Error('Progressão de estilo disponível para personagens.');}
async function grantDocuments(actor,benefits,receipt) {
 const data=[];
 for(const benefit of benefits) {
  if(benefit.kind==='item') {
   const item=await resolveContent(benefit.key);const source=item.toObject?item.toObject():clone(item);
   delete source._id;delete source.id;delete source.uuid;delete source.folder;delete source.ownership;delete source._stats;
   source.flags={...source.flags,'oprpg-native':{grantReceipt:receipt}};data.push(source);
  }else if(benefit.kind==='trait'){
   const basic=CATALOG.find(item=>item.system.tags?.includes('basic-ability')&&identifier(item.name)===identifier(benefit.key));
   data.push(basic?{name:basic.name,type:basic.type,img:basic.img,system:clone(basic.system),flags:{'oprpg-native':{grantReceipt:receipt}}}:{name:benefit.key,type:'feature',system:{activity:{activation:'passive'},description:'Escolha registrada na progressão. Configure os benefícios conforme a fonte.',source:'Escolha de progressão'},flags:{'oprpg-native':{grantReceipt:receipt}}});
  }
 }
 return data.length?actor.createEmbeddedDocuments('Item',data):[];
}
async function commitReceipt(actor,receipt,benefits,updates) {
 const granted=await grantDocuments(actor,benefits,receipt.id);
 receipt.items=granted.map(item=>item.id);
 try {await actor.update({...updates,'system.progression.receipts':[...receipts(actor),receipt]});}
 catch(error){if(granted.length)await actor.deleteEmbeddedDocuments('Item',granted.map(item=>item.id));throw error;}
 return receipt;
}
export function advanceStyle(actor,style,choices,options={}) {
 return actorCommand(actor,async()=>{
  assertCharacter(actor);
  if(style.type!=='style')throw new Error('Selecione um estilo.');
  const plan=levelPlan(actor.system,style,choices,{...options,multiStyle:game.settings.get('oprpg-native','multiStyle')});
  if(!plan.existing)plan.benefits.push({kind:'item',key:style.uuid,amount:1});
  const id=`level-${plan.next}`;
  if(receipts(actor).some(receipt=>receipt.id===id))throw new Error('Esse nível já foi aplicado.');
  if(!actor.system.progression.styles.length&&actor.system.progression.level>1)throw new Error('Este personagem já possui níveis manuais. Registre primeiro a distribuição existente; não reaplique benefícios iniciais.');
  const receipt={id,kind:'level',source:style.uuid||'',name:style.name,level:plan.next,styleLevel:plan.styleLevel,styleKey:plan.key,hpRoll:plan.hpRoll,baseHP:0,movement:0,benefits:plan.benefits,items:[]};
  return commitReceipt(actor,receipt,plan.benefits,{'system.progression.styles':plan.styles,'system.progression.level':plan.next,'system.training.points':actor.system.training.points+plan.pt});
 }).then(async receipt=>{if(actor.system.identity.species.name)await synchronizeCulturalPoints(actor);await actorCommand(actor,()=>syncKujaTraining(actor));return receipt;});
}
export function applyOrigin(actor,item,choices) {
 return actorCommand(actor,async()=>{
  assertCharacter(actor);
  if(!['species','background'].includes(item.type))throw new Error('Escolha uma espécie ou antecedente.');
  if(receipts(actor).some(receipt=>receipt.kind===item.type))throw new Error('Esta origem já está aplicada. Remova-a pela janela de progressão antes de substituí-la.');
  const benefits=validateChoices(item.system.advancements??[],choices,actor.system);
  if(item.type==='species')for(const [key,amount]of Object.entries(item.system.attributeBonuses??{}))if(amount)benefits.push({kind:'attribute',key,amount});
  if(item.type==='species')for(const [key,amount] of Object.entries(item.system.skillBonuses??{}))if(amount)benefits.push({kind:'skillBonus',key,amount});
  benefits.push({kind:'item',key:item.uuid,amount:1});
  const key=item.system.identifier||identifier(item.name);
  const receipt={id:`${item.type}-${key}`,kind:item.type,source:item.uuid||'',name:item.name,level:actor.system.progression.level,styleLevel:0,styleKey:'',hpRoll:0,baseHP:item.system.baseHP??0,movement:item.system.movement??0,benefits,items:[]};
  const updates=item.type==='species'?{'system.identity.species':{uuid:item.uuid||'',name:item.name,identifier:key,ancestries:item.system.ancestries??[],origin:item.system.origin,version:item.system.contentVersion,traits:item.system.traits||''},'system.movement.swimming':item.system.swimming??0}:{'system.personal.background':item.name};
  return commitReceipt(actor,receipt,benefits,updates);
 }).then(async receipt=>{if(actor.system.identity.species.name)await synchronizeCulturalPoints(actor);await actorCommand(actor,()=>syncKujaTraining(actor));return receipt;});
}
export function removeOrigin(actor,id) {
 return actorCommand(actor,async()=>{
  const existing=receipts(actor).find(receipt=>receipt.id===id);if(!existing||!['species','background'].includes(existing.kind))throw new Error('Origem inválida.');
  if(actor.items.some(item=>item.type==='training'&&item.system.training?.state!=='unlearned'))throw new Error('Confira os treinamentos dependentes antes de trocar a origem.');
  const update={'system.progression.receipts':receipts(actor).filter(receipt=>receipt.id!==id)};
  if(existing.kind==='species')update['system.identity.species']={uuid:'',name:'',identifier:'',ancestries:[],origin:'homebrew',version:'',traits:''};else update['system.personal.background']='';
  await actor.update(update);
  const owned=(existing.items??[]).filter(id=>actor.items.get(id)?.getFlag('oprpg-native','grantReceipt')===existing.id);
  if(owned.length)await actor.deleteEmbeddedDocuments('Item',owned);
 });
}
export function synchronizeCulturalPoints(actor) {
 return actorCommand(actor,async()=>{
  assertCharacter(actor);if(!actor.system.identity.species.name)throw new Error('Escolha a espécie primeiro.');
  const raw=actor.toObject().system;
  const racial=raw.progression.receipts.flatMap(receipt=>receipt.benefits).filter(b=>b.kind==='attribute'&&b.key==='wisdom').reduce((sum,b)=>sum+b.amount,0);
  const mod=Math.max(0,attributeModifier(raw.attributes.wisdom.base+racial));
  const delta=Math.max(0,mod-raw.training.wisdomHighWater);
  await actor.update({'system.training.points':raw.training.points+delta,'system.training.wisdomHighWater':Math.max(mod,raw.training.wisdomHighWater)});
  return delta;
 });
}
export function learnTraining(actor,item,choices={},options={}) {
 return actorCommand(actor,async()=>{
  assertCharacter(actor);if(!item.system.identifier)throw new Error('Defina um identificador único no treinamento.');if(item.type!=='training')throw new Error('Selecione um treinamento.');
  const quote=trainingQuote(actor.system,item,[...actor.items],options);
  const benefits=validateChoices(item.system.advancements??[],choices,actor.system);
  const id=foundry.utils.randomID();const source=item.toObject?item.toObject():clone(item);
  delete source._id;delete source.id;delete source.uuid;delete source.folder;delete source.ownership;delete source._stats;
  source.system.training={...source.system.training,state:quote.days?'inProgress':'learned',paidCost:quote.cost,requiredDays:quote.days,completedDays:0,lastTrainingDay:-1};
  source.flags={'oprpg-native':{trainingBenefits:benefits,grantReceipt:id}};
  const [created]=await actor.createEmbeddedDocuments('Item',[source]);
  const receipt={id,kind:'training',source:item.uuid||'',name:item.name,level:actor.system.progression.level,styleLevel:0,styleKey:'',hpRoll:0,baseHP:0,movement:0,benefits:quote.days?[]:benefits,items:[created.id]};
  try{await actor.update({'system.training.points':actor.system.training.points-quote.cost,'system.progression.receipts':[...receipts(actor),receipt]});}
  catch(error){await created.delete();throw error;}
  await applySpecialTraining(actor,created);
  return {item:created,quote};
 });
}
export function recordTrainingDay(actor,item) {
 return actorCommand(actor,async()=>{
  if(item.actor!==actor||item.system.training?.state!=='inProgress')throw new Error('Treino não está em andamento.');
  const day=Math.floor(game.time.worldTime/86400);if(item.system.training.lastTrainingDay===day)throw new Error('Este dia de treinamento já foi registrado.');
  const completed=item.system.training.completedDays+1;const done=completed>=item.system.training.requiredDays;
  const old=item.toObject().system.training;
  await item.update({'system.training.completedDays':completed,'system.training.lastTrainingDay':day,'system.training.state':done?'learned':'inProgress'});
  if(done)try {await actor.update({'system.progression.receipts':receipts(actor).map(receipt=>receipt.id===item.getFlag('oprpg-native','grantReceipt')?{...receipt,benefits:item.getFlag('oprpg-native','trainingBenefits')??[]}:receipt)});}catch(error){await item.update({'system.training':old});throw error;}
  if(done)await applySpecialTraining(actor,item);
  return done;
 });
}
export function registerExistingStyles(actor,distribution) {
 return actorCommand(actor,async()=>{
  assertCharacter(actor);
  if(actor.system.progression.styles.length||actor.system.progression.receipts.some(r=>r.kind==='level'||r.kind==='legacy'))throw new Error('Este personagem já tem progressão registrada.');
  const styles=[];
  for(const entry of distribution) {
   const style=await resolveContent(entry.uuid);if(style.type!=='style'||!Number.isInteger(entry.levels)||entry.levels<1)throw new Error('Distribuição de níveis inválida.');
   const key=style.system.identifier||identifier(style.name);if(styles.some(s=>s.key===key))throw new Error('Estilo repetido.');
   styles.push({key,identifier:key,name:style.name,uuid:style.uuid,levels:entry.levels,hitDie:style.system.hitDie,headerImage:style.system.headerImage||'',equipmentProficiencies:style.system.equipmentProficiencies??[]});
  }
  const total=styles.reduce((sum,s)=>sum+s.levels,0);if(total!==actor.system.progression.level)throw new Error('A soma precisa ser igual ao nível atual do personagem.');
  const receipt={id:'legacy-levels',kind:'legacy',source:'',name:'Níveis já existentes — recursos preservados',level:total,styleLevel:0,styleKey:'',hpRoll:0,baseHP:actor.system.vitality.max-total*attributeModifier(actor.system.attributes.constitution.base)-actor.system.progression.receipts.filter(r=>r.kind==='species').reduce((sum,r)=>sum+r.baseHP,0),movement:0,benefits:[],items:[]};
  await actor.update({'system.progression.styles':styles,'system.progression.receipts':[...receipts(actor),receipt]});return receipt;
 });
}
