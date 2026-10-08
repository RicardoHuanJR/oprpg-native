import test from "node:test";
import assert from "node:assert/strict";
import {readFile, stat} from "node:fs/promises";
import {ATTRIBUTES, attributeModifier, proficiencyBonus, d20Formula, speciesSnapshot, creationChecklist} from "../scripts/rules.mjs";

test("atributos próprios e modificadores negativos arredondados para baixo", () => {
  assert.deepEqual(Object.keys(ATTRIBUTES), ["strength", "dexterity", "constitution", "wisdom", "presence", "will"]);
  for (const [value, modifier] of [[1,-5],[9,-1],[10,0],[17,3],[20,5],[30,10]]) assert.equal(attributeModifier(value), modifier);
});
test("proficiência nos limites da tabela e rejeição de níveis fora da cobertura", () => {
  for (const [level, bonus] of [[1,2],[4,2],[5,3],[8,3],[9,4],[12,4],[13,5],[16,5],[17,6],[20,6]]) assert.equal(proficiencyBonus(level), bonus);
  assert.throws(() => proficiencyBonus(21)); assert.throws(() => proficiencyBonus(0));
});
test("vantagem e desvantagem se anulam, proficiência entra uma vez", () => {
  assert.equal(d20Formula({advantage:true,disadvantage:true,modifier:-1,proficiency:2}),"1d20 + -1 + 2");
  assert.equal(d20Formula({advantage:true}),"2d20kh + 0 + 0");
  assert.equal(d20Formula({disadvantage:true}),"2d20kl + 0 + 0");
  assert.throws(() => d20Formula({modifier:NaN}));
});
test("snapshot de espécie preserva autoria/versão sem seguir edições posteriores", () => {
  const item = {type:"species",uuid:"Item.example",name:"Exemplo",system:{origin:"homebrew",contentVersion:"1",traits:"Traço manual"}};
  const snapshot = speciesSnapshot(item); item.system.traits="Alterado";
  assert.equal(snapshot.traits,"Traço manual"); assert.equal(snapshot.origin,"homebrew");
  assert.throws(() => speciesSnapshot({...item,type:"weapon"}));
});

// Simulação reduzida de contratos: não substitui validação pelo core Foundry.
class Field { constructor(options={}) { this.options=options; } }
class SchemaField extends Field { constructor(fields) { super(); this.fields=fields; } }
class ArrayField extends Field {constructor(element,options={}){super({initial:[],...options});this.element=element;}}
function defaults(fields) { return Object.fromEntries(Object.entries(fields).map(([key,field])=>[key,field instanceof SchemaField ? defaults(field.fields) : field.options.initial])); }
class Model { constructor() { Object.assign(this,defaults(this.constructor.defineSchema())); } prepareDerivedData() {} }
class Sheet { async _prepareContext() {return {};} render(){return this;} }
const registered=[], errors=[], messages=[];
let assistant=true;
globalThis.foundry={data:{fields:{NumberField:Field,StringField:Field,BooleanField:Field,SchemaField,ArrayField}},abstract:{TypeDataModel:Model},documents:{Actor:class {}},applications:{api:{HandlebarsApplicationMixin:cls=>cls},sheets:{ActorSheetV2:Sheet,ItemSheetV2:Sheet},apps:{DocumentSheetConfig:{registerSheet:(...args)=>registered.push(args)}}},utils:{escapeHTML:value=>value.replaceAll("<","&lt;").replaceAll(">","&gt;")}};
globalThis.Actor=class {}; globalThis.Item=class {};
globalThis.CONFIG={Actor:{dataModels:{}},Item:{dataModels:{}},Combat:{}};
globalThis.foundry.documents.Combat=class {};
globalThis.ui={notifications:{error:value=>errors.push(value),info:()=>{}}};
globalThis.game={user:{isGM:true},items:[],settings:{get:(namespace)=>namespace==="core" ? "blindroll" : assistant,register:()=>{}}};
globalThis.ChatMessage={getSpeaker:()=>({actor:"example"})};
globalThis.Roll=class {constructor(formula){this.formula=formula;} toMessage(data,options){messages.push({formula:this.formula,data,options});return Promise.resolve();}};
globalThis.Hooks={once:(event,handler)=>handler()};
const models=await import("../scripts/models.mjs");
const sheets=await import("../scripts/sheets.mjs");
const {OPRPGActor}=await import("../scripts/documents.mjs");
await import("../scripts/main.mjs");

test("registro usa identidade própria e não declara adaptadores externos", () => {
  assert.equal(registered.length,2); assert.equal(registered[0][1],"oprpg-native");
  assert.equal(game.oprpg.capabilities.argon,false); assert.equal(game.oprpg.capabilities.dae,false);
});
test("modelos separados e PP derivados sem preencher ou gastar o saldo", () => {
  const actor=new models.CharacterData(); actor.progression.level=5; actor.power.value=3; actor.prepareDerivedData();
  assert.equal(actor.power.max,20); assert.equal(actor.power.value,3);
  actor.power.maxOverride=0; actor.prepareDerivedData(); assert.equal(actor.power.max,0);
  assert.equal(new models.ActivityData().grade,undefined); assert.equal(new models.TechniqueData().grade,1);
  const npc=new models.NPCData(); npc.proficiencyOverride=7; npc.prepareDerivedData(); assert.equal(npc.proficiency.bonus,7);
});
test("contextos de ficha e desativação da criação sem perda de dados", async () => {
  const system=new models.CharacterData(); system.prepareDerivedData();
  const actor={system,isOwner:true,type:"character",items:[]};
  const sheet=new sheets.OPRPGActorSheet(); sheet.actor=actor; sheet.activeTab="creation";
  assert.equal((await sheet._prepareContext({})).creationActive,true);
  const before=JSON.stringify(system); assistant=false;
  const context=await sheet._prepareContext({}); assert.equal(context.showAssistant,false); assert.equal(context.detailsActive,true); assert.equal(JSON.stringify(system),before);
  assistant=true;
  const itemSheet=new sheets.OPRPGItemSheet(); itemSheet.item={system:new models.ActivityData(),type:"auxiliary",isOwner:true};
  const itemContext=await itemSheet._prepareContext({}); assert.equal(itemContext.isTechnique,false); assert.equal(itemContext.attributes.length,6);
  assert.equal(creationChecklist(system).filter(row=>row.complete).length,0);
});
test("rolagens respeitam modo cego e propriedade; salvaguarda proficiente soma bônus", async () => {
  const actor=new OPRPGActor(); actor.system=new models.CharacterData(); actor.system.prepareDerivedData(); actor.isOwner=true;
  actor.system.attributes.will.saveProficient=true;
  await actor.rollAttribute("will",{save:true}); assert.equal(messages.at(-1).formula,"1d20 + 0 + 2"); assert.equal(messages.at(-1).options.rollMode,"blindroll");
  actor.isOwner=false; await assert.rejects(()=>actor.rollAttribute("will"));
  actor.isOwner=true; await assert.rejects(()=>actor.rollAttribute("int"));
});
test("manifesto com compatibilidade explícita para seleção do sistema e arquivos necessários", async () => {
  const root=new URL("../",import.meta.url);
  const manifest=JSON.parse(await readFile(new URL("system.json",root),"utf8"));
  assert.equal(manifest.compatibility.minimum,"14"); assert.equal(manifest.compatibility.verified,"14.367");
  for (const path of [...manifest.esmodules,...manifest.styles,...manifest.languages.map(lang=>lang.path),"templates/actor.hbs","templates/item.hbs"]) assert.ok((await stat(new URL(path,root))).isFile());
  const lang=JSON.parse(await readFile(new URL("lang/pt-BR.json",root),"utf8"));
  for(const type of Object.keys(manifest.documentTypes.Item)) assert.ok(lang.TYPES.Item[type]);
});
test("salvaguarda do bloco usa bônus informado uma vez e conserva penalidade de exaustão",async()=>{
  const actor=new OPRPGActor();actor.system=new models.NPCData();actor.isOwner=true;actor.system.exhaustion=2;
  actor.system.attributes.strength.saveProficient=true;actor.system.attributes.strength.saveOverride=7;actor.system.prepareDerivedData();
  await actor.rollAttribute("strength",{save:true});assert.equal(messages.at(-1).formula,"1d20 + 3 + 0");
});
test("favoritos e exaustão usam dados próprios sem duplicar itens nem rolar dados",async()=>{
  const item={id:"owned",name:"Teste"};const actor={isOwner:true,system:{favorites:[],exhaustion:0},items:{get:id=>id===item.id?item:null},async update(changes){for(const [key,value]of Object.entries(changes))this.system[key.split('.').at(-1)]=value;}};
  const sheet={actor};const actions=sheets.OPRPGActorSheet.DEFAULT_OPTIONS.actions;
  await actions.toggleFavorite.call(sheet,{}, {dataset:{itemId:"owned"}});assert.deepEqual(actor.system.favorites,["owned"]);
  await actions.toggleFavorite.call(sheet,{}, {dataset:{itemId:"owned"}});assert.deepEqual(actor.system.favorites,[]);
  await actions.setExhaustion.call(sheet,{}, {dataset:{level:"3"}});assert.equal(actor.system.exhaustion,3);
  await actions.setExhaustion.call(sheet,{}, {dataset:{level:"3"}});assert.equal(actor.system.exhaustion,2);
  actor.isOwner=false;await actions.toggleFavorite.call(sheet,{}, {dataset:{itemId:"owned"}});assert.deepEqual(actor.system.favorites,[]);
});
test("modo de uso conserva rolagens e desativa edição sem alterar o documento",async()=>{
 const system=new models.CharacterData();system.prepareDerivedData();
 const sheet=new sheets.OPRPGActorSheet();sheet.actor={system,type:"character",isOwner:true,items:[],effects:[]};
 let context=await sheet._prepareContext({});assert.equal(context.editable,true);assert.equal(context.canUse,true);
 const before=JSON.stringify(system);sheets.OPRPGActorSheet.DEFAULT_OPTIONS.actions.toggleEditMode.call(sheet);
 context=await sheet._prepareContext({});assert.equal(context.editable,false);assert.equal(context.canUse,true);assert.equal(JSON.stringify(system),before);
 sheet.actor.isOwner=false;context=await sheet._prepareContext({});assert.equal(context.canUse,false);
});
test("preparação do documento preenche modificadores, perícias e PP sem alterar os saldos",()=>{
 const actor=new OPRPGActor();actor.system=new models.CharacterData();actor.system.progression.level=5;actor.system.power.value=3;
 actor.prepareDerivedData();assert.equal(actor.system.power.max,20);assert.equal(actor.system.power.value,3);
 assert.equal(actor.system.attributes.strength.modifier,0);assert.equal(actor.system.skills.perception.passive,10);
 actor.prepareDerivedData();assert.equal(actor.system.power.max,20);assert.equal(actor.system.power.value,3);
});
test("ficha de item também separa edição e uso da atividade",async()=>{
 const sheet=new sheets.OPRPGItemSheet();sheet.item={isOwner:true,type:'weapon',system:new models.WeaponData(),actor:{isOwner:true}};
 let context=await sheet._prepareContext({});assert.equal(context.editable,true);assert.equal(context.canRoll,true);
 sheets.OPRPGItemSheet.DEFAULT_OPTIONS.actions.toggleEditMode.call(sheet);
 context=await sheet._prepareContext({});assert.equal(context.editable,false);assert.equal(context.canRoll,true);
});
