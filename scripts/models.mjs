import {activeItemRules} from "./item-rules.mjs";
import {movementSpeeds,proficiencyFactor,underwaterContext} from './mechanics.mjs';
import {ATTRIBUTES, attributeModifier, proficiencyBonus} from "./rules.mjs";
import {SKILLS, hakiStage} from "./engine.mjs";
import {advancementBenefits,hitDicePools,progressionHP,primaryStyle} from "./advancement.mjs";
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
const activityFields=()=>({attribute:string("strength",{choices:Object.keys(ATTRIBUTES)}),proficiencyMode:string("manual",{choices:["manual","style"]}),activation:string("other",{choices:["action","powerful","bonus","reaction","legendary","passive","other"]}),proficient:boolean(),ammunitionItem:string(),ammunitionCost:number(0,{min:0}),powerCost:number(0,{min:0}),costMode:string('final',{choices:['final','construction']}),costFamily:string('combat',{choices:['combat','fruit']}),creationReduction:number(0,{min:0}),damageFormula:string(),range:string(),duration:string(),requirements:string(),surgicalControl:boolean(),concentration:boolean()});
const resolutionFields=()=>({kind:string("attack",{choices:["attack","save","healing","utility"]}),attackBonus:nullableNumber(),addAttributeToAttack:boolean(),saveAttribute:string("constitution",{choices:Object.keys(ATTRIBUTES)}),saveDC:nullableNumber(),damageType:string("bludgeoning"),onSave:string("none",{choices:["none","half"]}),addAttributeToDamage:boolean(),criticalThreshold:number(20,{min:1,max:20}),ignoreBudget:boolean(),countsAsTechnique:new f.BooleanField({initial:true}),legendaryCost:number(1,{min:1})});


const requirement=()=>schema({attributes:list(),minimum:number(1,{min:1})});
const benefit=()=>schema({kind:string(),key:string(),amount:new f.NumberField({initial:0,required:true,nullable:false})});
const choiceStep=()=>schema({id:string(),label:string(),level:number(1,{min:1,max:20}),scope:string("style",{choices:["style","character"]}),initialOnly:boolean(),kind:string("item",{choices:["attribute","skill","skillMultiplier","item","trait"]}),count:number(1,{min:1}),amount:new f.NumberField({initial:1,min:1,required:true,nullable:false}),cap:number(20,{min:1}),allowRepeat:boolean(),options:list()});
const receipt=()=>schema({id:string(),kind:string(),source:string(),name:string(),level:number(),styleLevel:number(),styleKey:string(),hpRoll:number(),baseHP:number(),movement:new f.NumberField({initial:0,min:0}),benefits:new f.ArrayField(benefit(),{initial:[]}),items:list()});
const trainingFields=()=>schema({cost:number(1,{min:0}),days:number(5,{min:0}),tutorRequired:boolean(),repeatable:boolean(),species:list(),requirements:new f.ArrayField(requirement(),{initial:[]}),manualRequirement:string(),state:string("unlearned",{choices:["unlearned","inProgress","learned"]}),completedDays:number(0,{min:0}),paidCost:number(0,{min:0}),requiredDays:number(0,{min:0}),lastTrainingDay:number(-1),modifiers:new f.ArrayField(schema({target:string(),cost:nullableNumber(),days:nullableNumber(),ignoreRequirements:boolean(),ignoreTutor:boolean()}),{initial:[]})});

export class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      schemaVersion: number(2, {min: 1}),
      identity: schema({combatStyle: string(), profession: string(), biography: string(), species: schema({uuid: string(), name: string(), identifier:string(),ancestries:list(), origin: string("homebrew", {choices: ["official", "homebrew"]}), version: string(), traits: string()})}),
      progression: schema({level:number(1,{min:1,max:20}),primaryStyle:string(),styles:new f.ArrayField(schema({key:string(),identifier:string(),name:string(),uuid:string(),levels:number(1,{min:1,max:20}),hitDie:number(8,{choices:[6,8,10,12]}),headerImage:string(),equipmentProficiencies:list()}),{initial:[]}),receipts:new f.ArrayField(receipt(),{initial:[]})}),
      training:schema({forcedHitDie:nullableNumber(),kujaStartedLevel:number(-1,{min:-1}),kujaGranted:number(0,{min:0,max:10}),points:number(0,{min:0}),wisdomHighWater:number(0,{min:0}),spentHitDice:schema(Object.fromEntries([6,8,10,12].map(faces=>[faces,number(0,{min:0})])))}),
      experience: number(0,{min:0}),
      attributes: schema(Object.fromEntries(Object.keys(ATTRIBUTES).map(id => [id, schema({base: number(10, {min: 1}), saveProficient: boolean(),saveOverride:nullableNumber()})]))),
      vitality: schema({value: number(0, {min: 0}), max: number(0, {min: 0}), temporary: number(0, {min: 0}), negative: number(0, {min: 0})}),
      power: schema({value: number(0, {min: 0}), maxOverride: new f.NumberField({required: true, nullable: true, integer: true, min: 0, initial: null})}),
      defense: schema({rating: number(10)}),
      movement: schema({swimming:new f.NumberField({initial:0,min:0}),climbing:new f.NumberField({initial:0,min:0}),flying:new f.NumberField({initial:0,min:0}),distance: new f.NumberField({required: true, nullable: false, min: 0, initial: 0})}),
      creation: schema({attributesReviewed: boolean(), resourcesReviewed: boolean()}),
      skills:schema(Object.fromEntries(Object.keys(SKILLS).map(id=>[id,schema({proficient:boolean(),multiplier:new f.NumberField({initial:1,choices:[0.5,1,1.5,2],required:true,nullable:false}),bonus:number(),override:nullableNumber()})]))),
      exhaustion:number(0,{min:0,max:6}),
      environment:schema({chaseBlind:boolean(),affiliation:string(),nearShield:boolean(),sizeCategory:string('medium',{choices:['tiny','small','medium','large','huge','immense']}),submerged:boolean(),aquatic:boolean(),breathesUnderwater:boolean()}),
      hitDice:schema({faces:number(8,{choices:[6,8,10,12]}),available:number(0,{min:0}),max:number(1,{min:0})}),
      rest:schema({lastLongRest:nullableNumber(),startedAt:nullableNumber(),startHP:number(0,{min:0}),startExhaustion:number(0,{min:0,max:6}),kind:string("long",{choices:["short","long"]}),shortEligible:boolean()}),
      damageMitigation:schema({resistances:list(),vulnerabilities:list(),immunities:list()}),
      resources:new f.ArrayField(customResource(),{initial:[]}),
      situations:list(),favorites:list(),
      combat:schema({unarmedDamage:string('1'),martial2d6:boolean(),attacksPerAction:number(1,{min:1}),state:schema({ownEpoch:string(),actionUsed:boolean(),powerfulUsed:boolean(),bonusUsed:boolean(),reactionUsed:boolean(),reactionEpoch:string(),attacksRemaining:number(0,{min:0}),specialAttacks:number(0,{min:0}),techniqueEpoch:string(),legendaryWindowEpoch:string(),movementSpent:new f.NumberField({initial:0,min:0}),dashes:number(0,{min:0}),dodging:boolean(),readyTrigger:string(),weaponShots:list(),underwaterEpoch:string(),underwaterKind:string()})}),
      appearance:schema({wallpaper:string(),portraitMode:string("actor",{choices:["actor","token"]})}),
      personal:schema({dream:string(),path:string(),background:string(),personality:string(),honor:string(),notes:string()}),
      currency:number(0,{min:0}),
      haki:schema({awakened:boolean(),kingAllowed:boolean(),affinity:string("armament",{choices:["armament","observation","king"]}),primary:string("armament",{choices:["armament","observation"]}),unspent:number(0,{min:0}),armament:number(0,{min:0}),observation:number(0,{min:0}),king:number(0,{min:0}),learned:list()}),
      fruit:schema({name:string(),category:string("none",{choices:["none","paramecia","logia","zoan"]}),heavyPoint:boolean(),stage:string(),notes:string()}),
      vitalityState:schema({dead:boolean(),deathPolicy:string("player",{choices:["player","npc"]})})
    };
  }
  prepareBaseData() {
    super.prepareBaseData();
    const benefits=advancementBenefits(this);
    for(const [id,bonus] of Object.entries(benefits.attributeBonuses))this.attributes[id].base+=bonus;
    const species=this.progression.receipts.find(receipt=>receipt.kind==='species');if(species)this.movement.distance=species.movement;
    const hp=progressionHP(this);const context={...this,vitality:{...this.vitality,max:hp??this.vitality.max}};
    if(this.environment.nearShield&&!(this.parent?.items??[]).some(item=>item.system.identifier==='escudo-de-ferro'&&item.system.equipment?.equipped))this.defense.rating+=1;
    this.defense.rating+=activeItemRules(context,[...(this.parent?.items??[])]).filter(r=>r.kind==="defense").reduce((sum,r)=>sum+r.value,0);
  }
  prepareDerivedData() {
    super.prepareDerivedData();
    const benefits=advancementBenefits(this);
    if(this.progression.styles.length)this.progression.level=this.progression.styles.reduce((sum,style)=>sum+style.levels,0);
    const hp=progressionHP(this);this.vitality.max=hp??this._source?.vitality?.max??this.vitality.max;
    this.hitDice.pools=hitDicePools(this);
    const principal=primaryStyle(this);if(principal)this.identity.combatStyle=principal.name;
    if(this.hitDice.pools.length){this.hitDice.max=this.hitDice.pools.reduce((sum,p)=>sum+p.max,0);this.hitDice.available=this.hitDice.pools.reduce((sum,p)=>sum+p.available,0);this.hitDice.faces=primaryStyle(this).hitDie;}
    for(const id of benefits.saves)this.attributes[id].saveProficient=true;
    for (const attribute of Object.values(this.attributes)) attribute.modifier = attributeModifier(attribute.base);
    const environment=underwaterContext(this);if(environment.submerged&&!environment.aquatic)this.attributes.strength.modifier=Math.floor(this.attributes.strength.modifier/2);
    this.proficiency = {bonus: proficiencyBonus(this.progression.level)};
    const rules=activeItemRules(this,[...(this.parent?.items??[])]);
    this.vitality.max+=rules.filter(r=>r.kind==="vitality").reduce((sum,r)=>sum+r.value,0);
    if(this.fruit.category==='zoan'&&this.fruit.heavyPoint&&(this.parent?.items??[]).some(item=>item.system.identifier==='resistencia-dos-gigantes'&&item.system.training?.state==='learned'))this.vitality.max+=3*this.progression.level;
    this.movementModes=movementSpeeds(this,[...(this.parent?.items??[])],this.parent?.statuses);
    this.combat.attacksPerAction=Math.max(this._source?.combat?.attacksPerAction??1,...rules.filter(r=>r.kind==="attacks").map(r=>r.value));
    if((this.parent?.items??[]).some(item=>item.system.identifier==='escudo-de-ferro'&&item.system.equipment?.equipped))this.combat.attacksPerAction=Math.max(1,this.combat.attacksPerAction-1);
    this.power.max = this.power.maxOverride ?? 4 * this.progression.level;
    this.haki.spent=this.haki.armament+this.haki.observation+this.haki.king;
    this.haki.stage=hakiStage(this.haki.spent);
    for(const [id,skill] of Object.entries(this.skills)) {
      const attribute=this.attributes[SKILLS[id].attribute];
      const itemBonus=rules.filter(r=>r.kind==="skill"&&r.key===id).reduce((sum,r)=>sum+r.value,0);
      const racialBonus=this.progression.receipts.flatMap(r=>r.benefits).filter(b=>b.kind==="skillBonus"&&b.key===id).reduce((sum,b)=>sum+b.amount,0);
      const proficient=skill.proficient||benefits.skills.has(id)||rules.some(r=>r.kind==='skillProficiency'&&r.key===id||r.kind==='attributeProficiency'&&r.key===SKILLS[id].attribute)||(id==="haki"&&["Treinado","Perito"].includes(this.haki.stage));
      skill.effectiveMultiplier=proficiencyFactor(skill.multiplier,[...rules.filter(r=>r.kind==='skillMultiplier'&&r.key===id||r.kind==='attributeMultiplier'&&r.key===SKILLS[id].attribute),...this.progression.receipts.flatMap(r=>r.benefits).filter(b=>b.kind==='skillMultiplier'&&b.key===id).map(b=>({value:b.amount}))]);
      skill.total=(skill.override ?? attribute.modifier+(proficient?Math.floor(this.proficiency.bonus*skill.effectiveMultiplier):0)+skill.bonus+racialBonus+itemBonus)-2*this.exhaustion;
      skill.passive=10+skill.total;
      if(proficient)skill.proficient=true;
    }
    for(const id of benefits.skills)this.skills[id].proficient=true;
    this.inventoryWeight=(this.parent?.items??[]).reduce((sum,item)=>sum+(item.system.equipment?.weight??0)*(item.system.equipment?.quantity??0),0);
    this.carryingCapacity=10*this.attributes.strength.base;
    this.effectiveMovement=this.movementModes.distance;
    for(const [id,attribute]of Object.entries(this.attributes)){attribute.saveMultiplier=proficiencyFactor(1,rules.filter(r=>r.kind==='saveMultiplier'&&r.key===id));if(rules.some(r=>r.kind==='saveProficiency'&&r.key===id))attribute.saveProficient=true;}
  }
  static migrateData(source) { if(source.schemaVersion===1) source.schemaVersion=2; return super.migrateData(source); }
}

export class NPCData extends CharacterData {
  static defineSchema() {
    const fields = super.defineSchema();
    fields.proficiencyOverride = number(2, {min: 0});
    fields.npcFeatures=schema({leaderAura:schema({enabled:boolean(),affiliation:string('Marinha'),range:new f.NumberField({initial:9,min:0}),dice:string('1d8')}),reactive:boolean(),regeneration:number(0,{min:0}),legendaryResistance:resource()});
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
      const rules=activeItemRules(this,[...(this.parent?.items??[])]);
      const proficient=skill.proficient||(id==="haki"&&["Treinado","Perito"].includes(this.haki.stage));
      const itemBonus=rules.filter(r=>r.kind==='skill'&&r.key===id).reduce((sum,r)=>sum+r.value,0);
      const racialBonus=this.progression.receipts.flatMap(r=>r.benefits).filter(b=>b.kind==='skillBonus'&&b.key===id).reduce((sum,b)=>sum+b.amount,0);
      skill.total=(skill.override ?? this.attributes[SKILLS[id].attribute].modifier+(proficient?Math.floor(this.proficiencyOverride*skill.effectiveMultiplier):0)+skill.bonus+itemBonus+racialBonus)-2*this.exhaustion;
      skill.passive=10+skill.total;
    }
  }
}

export class ShipData extends foundry.abstract.TypeDataModel {
  static defineSchema() {return {schemaVersion:number(2,{min:1}),naval:schema({size:string('small'),wood:string('cedar'),fortification:string('none',{choices:['none','steel','tempered']}),captainUUID:string(),maximumKnots:new f.NumberField({initial:0,min:0}),currentKnots:new f.NumberField({initial:0,min:0}),currentBonusKnots:new f.NumberField({initial:0}),headingDegrees:number(0,{min:0,max:359}),anchorDown:boolean(),kairoseki:boolean(),cannons:new f.ArrayField(schema({model:string('common'),destroyed:boolean()}),{initial:[]}),state:schema({epoch:string(),manoeuvreUsed:boolean(),combatUsed:boolean(),testBonus:number(0,{min:0}),cannons:new f.ArrayField(number(),{initial:[]})})}),vitality:resource(),defense:schema({rating:number(10)}),movement:schema({distance:new f.NumberField({required:true,nullable:false,min:0,initial:0})}),crew:schema({current:number(0,{min:0}),required:number(0,{min:0}),capacity:number(0,{min:0}),notes:string()}),structure:schema({size:string(),decks:number(0,{min:0}),rooms:number(0,{min:0}),cargo:new f.NumberField({required:true,nullable:false,min:0,initial:0})}),navigation:schema({heading:string(),weather:string(),notes:string()}),description:string()};}
}

export class ContentData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {schemaVersion: number(2, {min: 1}), description: string(), source: string(),rulesReviewed:new f.BooleanField({initial:true}),identifier:string(),rules:new f.ArrayField(schema({id:string(),kind:string("defense"),key:string(),amount:new f.NumberField({initial:1,required:true,nullable:false}),scale:string("fixed",{choices:["fixed","character","style","proficiency"]}),condition:schema({minimumLevel:number(1,{min:1}),context:string(),training:string(),aboveHalfHP:boolean(),equipped:boolean()})}),{initial:[]}),advancements:new f.ArrayField(choiceStep(),{initial:[]}), origin: string("homebrew", {choices: ["official", "homebrew"]}), contentVersion: string("1"),
      dial:schema({model:string(),charged:boolean(),destroyed:boolean(),synchronizedUUID:string(),wallActive:boolean(),wallHP:number(0,{min:0}),reformsAt:nullableNumber(),chargingAt:nullableNumber(),chargingSeconds:number(60,{min:0}),stored:number(0,{min:0}),cargo:string(),damageFormula:string(),damageType:string('bludgeoning'),activeUntil:nullableNumber()}),ammunitionDamage:string(),ammunitionType:string("bludgeoning"),equipment:schema({quantity:number(1,{min:0}),weight:new f.NumberField({required:true,nullable:false,min:0,initial:0}),price:number(0,{min:0}),equipped:boolean(),consumable:boolean()}),
      prerequisite:string(),levelRequirement:number(1,{min:1}),tags:list()};
  }
}
export class SpeciesData extends ContentData {
  static defineSchema() { return {...super.defineSchema(), traits: string(),ancestries:list(),swimming:new f.NumberField({initial:0,min:0}),skillBonuses:schema(Object.fromEntries(Object.keys(SKILLS).map(id=>[id,number()]))),baseHP:number(0,{min:0}),movement:new f.NumberField({required:true,nullable:false,min:0,initial:0}),attributeBonuses:schema(Object.fromEntries(Object.keys(ATTRIBUTES).map(id=>[id,number()])))}; }
}
export class ProgressionData extends ContentData {
  static defineSchema(){return {...super.defineSchema(),hitDie:number(8,{choices:[6,8,10,12]}),skillCount:number(2,{min:0}),headerImage:string(),initialEquipmentNote:string(),equipmentProficiencies:list(),multistyleRequirements:new f.ArrayField(requirement(),{initial:[]}),primaryAttribute:string("strength",{choices:Object.keys(ATTRIBUTES)}),skillProficiencies:list(),saveProficiencies:list()};}
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
  static defineSchema(){const fields=super.defineSchema();fields.resolution.fields.addAttributeToAttack=new f.BooleanField({initial:true});fields.resolution.fields.addAttributeToDamage=new f.BooleanField({initial:true});return {...fields,weapon:schema({expertise:string(),reload:boolean(),normalRange:new f.NumberField({initial:0,min:0}),maximumRange:new f.NumberField({initial:0,min:0}),properties:list()})};}
}
export class AuxiliaryData extends ActivityData {
  static defineSchema(){const fields=super.defineSchema();fields.activity.fields.proficient=new f.BooleanField({initial:true});fields.resolution.fields.kind=string("utility",{choices:["attack","save","healing","utility"]});return fields;}
}
export class HakiTalentData extends ActivityData {
  static defineSchema(){return {...super.defineSchema(),hakiTalent:schema({focus:string("armament",{choices:["armament","observation","king"]}),cost:number(0,{min:0}),minimumStage:string("Inexperiente",{choices:["Latente","Inexperiente","Treinado","Perito"]})})};}
}
// Auxiliares usam ActivityData: não possuem campo de grau.

export class BackgroundData extends ContentData {static defineSchema(){return {...super.defineSchema(),skillProficiencies:list()};}}
export class TrainingData extends ActivityData {static defineSchema(){return {...super.defineSchema(),training:trainingFields()};}}
