import test from "node:test";
import assert from "node:assert/strict";
const root="file:///C:/Foundry/Foundry%20Virtual%20Tabletop/resources/app/common/";
await import(root+"primitives/_module.mjs");
const fields=await import(root+"data/fields.mjs");
const {default:TypeDataModel}=await import(root+"abstract/type-data.mjs");
const {default:DataModel}=await import(root+"abstract/data.mjs");
globalThis.foundry={data:{fields},abstract:{TypeDataModel,DataModel}};
globalThis.game={i18n:{localize:x=>x,format:x=>x}};
const {CharacterData,NPCData,ActivityData,TechniqueData,SpeciesData,ShipData,WeaponData,AuxiliaryData,ProgressionData,ProfessionData}=await import("../scripts/models.mjs");
test("core 14.367: criação real, preparação e serialização sem gravar derivados",()=>{
  const actor=new CharacterData({progression:{level:5},power:{value:3}});
  actor.prepareDerivedData(); assert.equal(actor.power.max,20); assert.equal(actor.attributes.strength.modifier,0);
  const source=actor.toObject(); assert.equal(source.power.max,undefined); assert.equal(source.attributes.strength.modifier,undefined); assert.equal(source.power.value,3);
});
test("NPC preserva PP do bloco, sem usar nível de personagem, e política de morte própria",()=>{
  const npc=new NPCData({progression:{level:10}});npc.prepareDerivedData();
  assert.equal(npc.power.max,0);assert.equal(npc.vitalityState.deathPolicy,"npc");
  const supplied=new NPCData({power:{value:7,maxOverride:15},progression:{level:10}});supplied.prepareDerivedData();
  assert.equal(supplied.power.max,15);assert.equal(supplied.power.value,7);
  const legacy=new NPCData({power:{maxOverride:null}});legacy.prepareDerivedData();assert.equal(legacy.power.max,0);
});
test("profissão tem reconhecimento próprio e não recebe Dado de Vida de estilo",()=>{
  const profession=new ProfessionData({profession:{rank:"grandMaster",recognition:"Feito registrado"}});
  assert.equal(profession.profession.rank,"grandMaster");assert.equal(profession.hitDie,undefined);
  assert.equal(new ProgressionData().hitDie,8);
});
test("bônus da fonte continua sujeito à exaustão e Haki treinado vale para NPC",()=>{
  const npc=new NPCData({proficiencyOverride:5,exhaustion:2,skills:{perception:{override:9}},haki:{armament:21}});npc.prepareDerivedData();
  assert.equal(npc.skills.perception.total,5);assert.equal(npc.skills.haki.total,1);
  const pc=new CharacterData({exhaustion:1,skills:{perception:{override:7}}});pc.prepareDerivedData();assert.equal(pc.skills.perception.total,5);
});
test("core 14.367: modelos ampliados preservam bônus e não dão grau a auxiliares",()=>{
  const actor=new CharacterData({schemaVersion:1,attributes:{will:{base:14}},skills:{perception:{proficient:true}}});actor.prepareDerivedData();
  assert.equal(actor.schemaVersion,2);assert.equal(actor.skills.perception.total,4);assert.equal(actor.skills.perception.passive,14);
  const npc=new NPCData({proficiencyOverride:5,skills:{perception:{proficient:true}}});npc.prepareDerivedData();assert.equal(npc.skills.perception.total,5);
  assert.equal(new ShipData().crew.capacity,0);
  assert.equal(new WeaponData().resolution.addAttributeToAttack,true);
  assert.equal(new TechniqueData().resolution.addAttributeToAttack,false);
  assert.equal(new TechniqueData().activity.proficient,true);
  assert.equal(new AuxiliaryData().grade,undefined);
  assert.equal(new ProgressionData().hitDie,8);
});
test("core 14.367: limites numéricos normalizados pelo core e ausência de grau auxiliar",()=>{
  assert.equal(new CharacterData({progression:{level:0}}).progression.level,1);
  assert.equal(new TechniqueData({grade:8}).grade,7);
  assert.throws(()=>new TechniqueData({grade:"inválido"}));
  assert.equal(new ActivityData().toObject().grade,undefined);
  const npc=new NPCData();npc.prepareDerivedData();assert.equal(npc.legendaryActions.max,0);
  assert.equal(new SpeciesData().origin,"homebrew");
});
