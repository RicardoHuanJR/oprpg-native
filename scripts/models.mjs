import {ATTRIBUTES, attributeModifier, proficiencyBonus} from "./rules.mjs";
import {SKILLS, hakiStage} from "./engine.mjs";
import {conditionSet,movementFromConditions} from "./conditions.mjs";
const f = foundry.data.fields;
const number = (initial = 0, options = {}) => new f.NumberField({required: true, nullable: false, integer: true, initial, ...options});
const string = (initial = "", options = {}) => new f.StringField({required: true, nullable: false, initial, ...options});
const boolean = () => new f.BooleanField({initial: false});
const schema = fields => new f.SchemaField(fields);
const resource = () => schema({value: number(0, {min: 0}), max: number(0, {min: 0})});
const list = () => new f.ArrayField(string(), {initial: []});
const nullableNumber = () => new f.NumberField({required:true,nullable:true,initial:null});
const customResource = () => schema({id:string(),name:string(),value:number(0,{min:0}),max:number(0,{min:0}),recovery:string("none",{choices:["none","short","long","shortOrLong","day"]}),source:string()});
const activityFields=()=>({attribute:string("strength",{choices:Object.keys(ATTRIBUTES)}),activation:string("other",{choices:["action","powerful","bonus","reaction","legendary","passive","other"]}),proficient:boolean(),powerCost:number(0,{min:0}),damageFormula:string(),range:string(),duration:string(),requirements:string(),surgicalControl:boolean()});
const resolutionFields=()=>({kind:string("attack",{choices:["attack","save","healing","utility"]}),attackBonus:nullableNumber(),addAttributeToAttack:boolean(),saveAttribute:string("constitution",{choices:Object.keys(ATTRIBUTES)}),saveDC:nullableNumber(),damageType:string("bludgeoning"),onSave:string("none",{choices:["none","half"]}),addAttributeToDamage:boolean(),criticalThreshold:number(20,{min:1,max:20}),ignoreBudget:boolean(),countsAsTechnique:new f.BooleanField({initial:true}),legendaryCost:number(1,{min:1})});

export class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      schemaVersion: number(2, {min: 1}),
      identity: schema({combatStyle: string(), profession: string(), biography: string(), species: schema({uuid: string(), name: string(), origin: string("homebrew", {choices: ["official", "homebrew"]}), version: string(), traits: string()})}),
      progression: schema({level: number(1, {min: 1, max: 20})}),
      experience: number(0,{min:0}),
      attributes: schema(Object.fromEntries(Object.keys(ATTRIBUTES).map(id => [id, schema({base: number(10, {min: 1}), saveProficient: boolean(),saveOverride:nullableNumber()})]))),
      vitality: schema({value: number(0, {min: 0}), max: number(0, {min: 0}), temporary: number(0, {min: 0}), negative: number(0, {min: 0})}),
      power: schema({value: number(0, {min: 0}), maxOverride: new f.NumberField({required: true, nullable: true, integer: true, min: 0, initial: null})}),
      defense: schema({rating: number(10)}),
      movement: schema({distance: new f.NumberField({required: true, nullable: false, min: 0, initial: 0})}),
      creation: schema({attributesReviewed: boolean(), resourcesReviewed: boolean()}),
      skills:schema(Object.fromEntries(Object.keys(SKILLS).map(id=>[id,schema({proficient:boolean(),multiplier:new f.NumberField({initial:1,choices:[0.5,1,2],required:true,nullable:false}),bonus:number(),override:nullableNumber()})]))),
      exhaustion:number(0,{min:0,max:6}),
      hitDice:schema({faces:number(8,{choices:[6,8,10,12]}),available:number(0,{min:0}),max:number(1,{min:0})}),
      rest:schema({lastLongRest:nullableNumber(),startedAt:nullableNumber(),startHP:number(0,{min:0}),startExhaustion:number(0,{min:0,max:6}),kind:string("long",{choices:["short","long"]}),shortEligible:boolean()}),
      damageMitigation:schema({resistances:list(),vulnerabilities:list(),immunities:list()}),
      resources:new f.ArrayField(customResource(),{initial:[]}),
      favorites:list(),
      combat:schema({attacksPerAction:number(1,{min:1}),state:schema({ownEpoch:string(),actionUsed:boolean(),powerfulUsed:boolean(),bonusUsed:boolean(),reactionUsed:boolean(),attacksRemaining:number(0,{min:0}),techniqueEpoch:string(),legendaryWindowEpoch:string()})}),
      appearance:schema({wallpaper:string(),portraitMode:string("actor",{choices:["actor","token"]})}),
      personal:schema({dream:string(),path:string(),background:string(),personality:string(),honor:string(),notes:string()}),
      currency:number(0,{min:0}),
      haki:schema({awakened:boolean(),kingAllowed:boolean(),affinity:string("armament",{choices:["armament","observation","king"]}),primary:string("armament",{choices:["armament","observation"]}),unspent:number(0,{min:0}),armament:number(0,{min:0}),observation:number(0,{min:0}),king:number(0,{min:0}),learned:list()}),
      fruit:schema({name:string(),category:string("none",{choices:["none","paramecia","logia","zoan"]}),stage:string(),notes:string()}),
      vitalityState:schema({dead:boolean(),deathPolicy:string("player",{choices:["player","npc"]})})
    };
  }
  prepareDerivedData() {
    super.prepareDerivedData();
    for (const attribute of Object.values(this.attributes)) attribute.modifier = attributeModifier(attribute.base);
    this.proficiency = {bonus: proficiencyBonus(this.progression.level)};
    this.power.max = this.power.maxOverride ?? 4 * this.progression.level;
    this.haki.spent=this.haki.armament+this.haki.observation+this.haki.king;
    this.haki.stage=hakiStage(this.haki.spent);
    for(const [id,skill] of Object.entries(this.skills)) {
      const attribute=this.attributes[SKILLS[id].attribute];
      const proficient=skill.proficient||(id==="haki"&&["Treinado","Perito"].includes(this.haki.stage));
      skill.total=(skill.override ?? attribute.modifier+(proficient?Math.floor(this.proficiency.bonus*skill.multiplier):0)+skill.bonus)-2*this.exhaustion;
      skill.passive=10+skill.total;
    }
    this.inventoryWeight=(this.parent?.items??[]).reduce((sum,item)=>sum+(item.system.equipment?.weight??0)*(item.system.equipment?.quantity??0),0);
    this.carryingCapacity=10*this.attributes.strength.base;
    this.effectiveMovement=movementFromConditions(Math.max(0,this.movement.distance-1.5*this.exhaustion),conditionSet(this.parent?.statuses,this.vitality));
  }
  static migrateData(source) { if(source.schemaVersion===1) source.schemaVersion=2; return super.migrateData(source); }
}

export class NPCData extends CharacterData {
  static defineSchema() {
    const fields = super.defineSchema();
    fields.proficiencyOverride = number(2, {min: 0});
    fields.legendaryActions = resource();
    fields.challenge=string("0");fields.rewardXP=number(0,{min:0});fields.saveDifficulty=number(10);fields.senses=string();
    fields.power.fields.maxOverride=new f.NumberField({required:true,nullable:true,integer:true,min:0,initial:0});
    fields.vitalityState.fields.deathPolicy=string("npc",{choices:["player","npc"]});
    return fields;
  }
  prepareDerivedData() {
    super.prepareDerivedData(); this.proficiency.bonus = this.proficiencyOverride;
    this.power.max=this.power.maxOverride??0;
    for(const [id,skill] of Object.entries(this.skills)) {
      const proficient=skill.proficient||(id==="haki"&&["Treinado","Perito"].includes(this.haki.stage));
      skill.total=(skill.override ?? this.attributes[SKILLS[id].attribute].modifier+(proficient?Math.floor(this.proficiencyOverride*skill.multiplier):0)+skill.bonus)-2*this.exhaustion;
      skill.passive=10+skill.total;
    }
  }
}

export class ShipData extends foundry.abstract.TypeDataModel {
  static defineSchema() {return {schemaVersion:number(2,{min:1}),vitality:resource(),defense:schema({rating:number(10)}),movement:schema({distance:new f.NumberField({required:true,nullable:false,min:0,initial:0})}),crew:schema({current:number(0,{min:0}),required:number(0,{min:0}),capacity:number(0,{min:0}),notes:string()}),structure:schema({size:string(),decks:number(0,{min:0}),rooms:number(0,{min:0}),cargo:new f.NumberField({required:true,nullable:false,min:0,initial:0})}),navigation:schema({heading:string(),weather:string(),notes:string()}),description:string()};}
}

export class ContentData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {schemaVersion: number(2, {min: 1}), description: string(), source: string(), origin: string("homebrew", {choices: ["official", "homebrew"]}), contentVersion: string("1"),
      equipment:schema({quantity:number(1,{min:0}),weight:new f.NumberField({required:true,nullable:false,min:0,initial:0}),price:number(0,{min:0}),equipped:boolean(),consumable:boolean()}),
      prerequisite:string(),levelRequirement:number(1,{min:1}),tags:list()};
  }
}
export class SpeciesData extends ContentData {
  static defineSchema() { return {...super.defineSchema(), traits: string(),baseHP:number(0,{min:0}),movement:new f.NumberField({required:true,nullable:false,min:0,initial:0}),attributeBonuses:schema(Object.fromEntries(Object.keys(ATTRIBUTES).map(id=>[id,number()])))}; }
}
export class ProgressionData extends ContentData {
  static defineSchema(){return {...super.defineSchema(),hitDie:number(8,{choices:[6,8,10,12]}),primaryAttribute:string("strength",{choices:Object.keys(ATTRIBUTES)}),skillProficiencies:list(),saveProficiencies:list()};}
}
export class ProfessionData extends ContentData {
  static defineSchema(){return {...super.defineSchema(),profession:schema({rank:string("professional",{choices:["professional","specialist","master","grandMaster"]}),recognition:string(),tools:list()})};}
}
export class ActivityData extends ContentData {
  static defineSchema() {
    return {...super.defineSchema(),activity:schema(activityFields()),resolution:schema(resolutionFields()),
    variants:new f.ArrayField(schema({id:string(),name:string(),activity:schema(activityFields()),resolution:schema(resolutionFields())}),{initial:[]}),
    uses:schema({value:number(0,{min:0}),max:number(0,{min:0}),recovery:string("none",{choices:["none","short","long","shortOrLong","day"]})})};
  }
}
export class TechniqueData extends ActivityData {
  static defineSchema() { const fields=super.defineSchema();fields.activity.fields.proficient=new f.BooleanField({initial:true});return {...fields,grade:number(1,{min:1,max:7})}; }
}
export class WeaponData extends ActivityData {
  static defineSchema(){const fields=super.defineSchema();fields.resolution.fields.addAttributeToAttack=new f.BooleanField({initial:true});fields.resolution.fields.addAttributeToDamage=new f.BooleanField({initial:true});return fields;}
}
export class AuxiliaryData extends ActivityData {
  static defineSchema(){const fields=super.defineSchema();fields.activity.fields.proficient=new f.BooleanField({initial:true});fields.resolution.fields.kind=string("utility",{choices:["attack","save","healing","utility"]});return fields;}
}
export class HakiTalentData extends ActivityData {
  static defineSchema(){return {...super.defineSchema(),hakiTalent:schema({focus:string("armament",{choices:["armament","observation","king"]}),cost:number(0,{min:0}),minimumStage:string("Inexperiente",{choices:["Latente","Inexperiente","Treinado","Perito"]})})};}
}
// Auxiliares usam ActivityData: não possuem campo de grau.
