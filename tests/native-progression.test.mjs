import test from 'node:test';
import assert from 'node:assert/strict';
const root='file:///C:/Foundry/Foundry%20Virtual%20Tabletop/resources/app/common/';
await import(root+'primitives/_module.mjs');
const fields=await import(root+'data/fields.mjs');
const {default:TypeDataModel}=await import(root+'abstract/type-data.mjs');
const {default:DataModel}=await import(root+'abstract/data.mjs');
let sequence=0;
globalThis.foundry={data:{fields},abstract:{TypeDataModel,DataModel},utils:{randomID:()=>`test-${++sequence}`}};
globalThis.game={user:{id:'gm',isGM:true},settings:{get:()=>true},time:{worldTime:0},i18n:{localize:s=>s,format:s=>s}};
const {CharacterData,SpeciesData,ProgressionData,TrainingData,ActivityData,TechniqueData,AuxiliaryData,BackgroundData}=await import('../scripts/models.mjs');
const {catalogDocument,applyOrigin,advanceStyle,learnTraining,recordTrainingDay,synchronizeCulturalPoints}=await import('../scripts/progression-services.mjs');
const {CATALOG}=await import('../scripts/catalog.mjs');
const {levelSteps,dependentChoices,headerImage}=await import('../scripts/advancement.mjs');
const {activeItemRules}=await import('../scripts/item-rules.mjs');
const clone=value=>JSON.parse(JSON.stringify(value));
const choose=steps=>{const choices=Object.fromEntries(steps.map(step=>[step.id,step.allowRepeat?Array(step.count).fill(step.options[0]):step.options.slice(0,step.count)]));for(const step of dependentChoices(steps,choices))choices[step.id]=step.allowRepeat?Array(step.count).fill(step.options[0]):step.options.slice(0,step.count);return choices;};
function content(name){return catalogDocument(CATALOG.find(item=>item.name===name).id);}
function set(object,path,value){const keys=path.split('.');const last=keys.pop();let current=object;for(const key of keys)current=current[key]??={};current[last]=clone(value);}
class ActorFixture extends DataModel {
 static TYPES=[];
 static defineSchema(){return {};}
 constructor(source={}){super();this.type='character';this.isOwner=true;this.items=[];this.items.get=id=>this.items.find(item=>item.id===id);this.raw=new CharacterData(source).toObject();this.refresh();}
 refresh(){this.system=new CharacterData(this.raw,{parent:this});this.system.prepareBaseData();this.system.prepareDerivedData();}
 toObject(){return {type:this.type,system:clone(this.raw)};}
 async update(changes){if(this.failUpdate){this.failUpdate=false;throw new Error('Persistence rejected');}const wrapper={system:this.raw};for(const [path,value]of Object.entries(changes))set(wrapper,path,value);this.raw=new CharacterData(wrapper.system).toObject();this.refresh();return this;}
 async createEmbeddedDocuments(_type,data){const added=data.map(source=>{const Model={species:SpeciesData,style:ProgressionData,training:TrainingData,feature:ActivityData,technique:TechniqueData,auxiliary:AuxiliaryData,background:BackgroundData}[source.type]||ActivityData;const item={...clone(source),id:`owned-${++sequence}`,actor:this,isOwner:true,system:new Model(source.system),getFlag:(scope,key)=>item.flags?.[scope]?.[key],toObject:()=>({...clone(source),_id:item.id,system:item.system.toObject()}),update:async changes=>{const raw={system:item.system.toObject()};for(const [path,value]of Object.entries(changes))set(raw,path,value);item.system=new Model(raw.system);this.refresh();},delete:()=>this.deleteEmbeddedDocuments('Item',[item.id])};return item;});this.items.push(...added);this.refresh();return added;}
 async deleteEmbeddedDocuments(_type,ids){for(const id of ids){const index=this.items.findIndex(item=>item.id===id);if(index>=0)this.items.splice(index,1);}this.refresh();}
}
test('native models: race bonuses are derived, cultural PT once, no source mutation on repeated preparation',async()=>{
 const actor=new ActorFixture({attributes:{strength:{base:14},wisdom:{base:16}}});const human=content('Humanos');
 await applyOrigin(actor,human,choose(human.system.advancements));assert.equal(actor.system.attributes.strength.base,16);assert.equal(actor.toObject().system.attributes.strength.base,14);assert.equal(actor.system.training.points,3);assert.equal(actor.items.filter(item=>item.type==='species').length,1);
 actor.refresh();actor.system.prepareDerivedData();assert.equal(actor.system.attributes.strength.base,16);await synchronizeCulturalPoints(actor);assert.equal(actor.system.training.points,3);
 await assert.rejects(applyOrigin(actor,human,choose(human.system.advancements)),/já está aplicada/);
});
test('native models: advancement grants real owned choices and uses cumulative styles without refilling resources',async()=>{
 const actor=new ActorFixture({attributes:{strength:{base:14},constitution:{base:14},dexterity:{base:16},wisdom:{base:10}},vitality:{value:7},power:{value:1}});
 const race=content('Celestiais');await applyOrigin(actor,race,choose(race.system.advancements));
 const style=content('Lutador');await advanceStyle(actor,style,choose(levelSteps(actor.system,style,{multiStyle:true}).steps));
 assert.equal(actor.system.progression.level,1);assert.equal(actor.system.vitality.max,24);assert.equal(actor.system.vitality.value,7);assert.equal(actor.system.power.value,1);assert.equal(actor.items.filter(item=>item.type==='style').length,1);assert.equal(actor.items.filter(item=>item.type==='technique').length,1);assert.equal(actor.items.filter(item=>item.type==='auxiliary').length,1);
 const ninja=content('Ninja');await advanceStyle(actor,ninja,choose(levelSteps(actor.system,ninja,{multiStyle:true}).steps),{hpRoll:3});assert.equal(actor.system.progression.level,2);assert.equal(actor.system.power.max,8);assert.equal(actor.system.vitality.max,29);assert.equal(actor.system.training.points,3);assert.deepEqual(actor.system.hitDice.pools.map(p=>p.faces),[12,8]);assert.ok(headerImage(actor.system).endsWith('/lutador.webp'));
 actor.refresh();assert.equal(actor.system.vitality.max,29);assert.equal(actor.raw.vitality.max,0);
});
test('native training: spends once, each day once, discount activates only after completion',async()=>{
 const actor=new ActorFixture({identity:{species:{name:'Celestiais',identifier:'celestiais'}},attributes:{dexterity:{base:16}},training:{points:8}});
 const affinity=content('Afinidade Cultural');const result=await learnTraining(actor,affinity);assert.equal(actor.system.training.points,7);assert.equal(result.item.system.training.state,'inProgress');
 for(let day=0;day<5;day++){game.time.worldTime=day*86400;await recordTrainingDay(actor,result.item);await assert.rejects(recordTrainingDay(actor,result.item));}
 assert.equal(result.item.system.training.state,'learned');
 const learned=await learnTraining(actor,content('Conhecimento Celestial'));assert.equal(learned.quote.cost,1);assert.equal(learned.quote.days,0);assert.equal(actor.system.training.points,6);assert.equal(learned.item.system.training.state,'learned');
 await assert.rejects(learnTraining(actor,content('Conhecimento Celestial')),/já aprendido/);assert.equal(actor.system.training.points,6);
});
test('failed actor persistence removes newly granted documents and does not consume resources',async()=>{
 const actor=new ActorFixture();actor.failUpdate=true;const race=content('Gigantes');await assert.rejects(applyOrigin(actor,race,choose(race.system.advancements)),/Persistence rejected/);assert.equal(actor.items.length,0);assert.equal(actor.system.identity.species.name,'');assert.equal(actor.system.progression.receipts.length,0);
});
test('conditional bonuses obey training state, scene and HP; extra attacks never sum across styles',()=>{
 const system={progression:{level:7},proficiency:{bonus:3},situations:[],vitality:{value:40,max:60}};
 const affinity=content('Afinidade Cultural');assert.equal(activeItemRules(system,[affinity]).length,0);affinity.system.training.state='learned';system.situations=['Altura elevada'];assert.equal(activeItemRules(system,[affinity]).length,2);
 const giant=content('Pequeno Gigante');giant.system.training.state='learned';assert.ok(activeItemRules(system,[giant]).some(rule=>rule.kind==='defense'&&rule.value===2));system.vitality.value=30;assert.equal(activeItemRules(system,[giant]).length,0);
 const actor=new ActorFixture({progression:{level:7},vitality:{max:50}});const extras=CATALOG.filter(item=>item.name==='Ataque Extra').slice(0,2);actor.items.push(...extras);actor.refresh();assert.equal(actor.system.combat.attacksPerAction,2);actor.system.prepareDerivedData();assert.equal(actor.system.combat.attacksPerAction,2);
});
