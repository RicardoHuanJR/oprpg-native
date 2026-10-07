import {ATTRIBUTES, attributeModifier, proficiencyBonus} from "./rules.mjs";
const f = foundry.data.fields;
const number = (initial = 0, options = {}) => new f.NumberField({required: true, nullable: false, integer: true, initial, ...options});
const string = (initial = "", options = {}) => new f.StringField({required: true, nullable: false, initial, ...options});
const boolean = () => new f.BooleanField({initial: false});
const schema = fields => new f.SchemaField(fields);
const resource = () => schema({value: number(0, {min: 0}), max: number(0, {min: 0})});

export class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      schemaVersion: number(1, {min: 1}),
      identity: schema({combatStyle: string(), profession: string(), biography: string(), species: schema({uuid: string(), name: string(), origin: string("homebrew", {choices: ["official", "homebrew"]}), version: string(), traits: string()})}),
      progression: schema({level: number(1, {min: 1, max: 20})}),
      attributes: schema(Object.fromEntries(Object.keys(ATTRIBUTES).map(id => [id, schema({base: number(10, {min: 1}), saveProficient: boolean()})]))),
      vitality: schema({value: number(0, {min: 0}), max: number(0, {min: 0}), temporary: number(0, {min: 0}), negative: number(0, {min: 0})}),
      power: schema({value: number(0, {min: 0}), maxOverride: new f.NumberField({required: true, nullable: true, integer: true, min: 0, initial: null})}),
      defense: schema({rating: number(10)}),
      movement: schema({distance: new f.NumberField({required: true, nullable: false, min: 0, initial: 0})}),
      creation: schema({attributesReviewed: boolean(), resourcesReviewed: boolean()})
    };
  }
  prepareDerivedData() {
    super.prepareDerivedData();
    for (const attribute of Object.values(this.attributes)) attribute.modifier = attributeModifier(attribute.base);
    this.proficiency = {bonus: proficiencyBonus(this.progression.level)};
    this.power.max = this.power.maxOverride ?? 4 * this.progression.level;
  }
}

export class NPCData extends CharacterData {
  static defineSchema() {
    const fields = super.defineSchema();
    fields.proficiencyOverride = number(2, {min: 0});
    fields.legendaryActions = resource();
    return fields;
  }
  prepareDerivedData() { super.prepareDerivedData(); this.proficiency.bonus = this.proficiencyOverride; }
}

export class ContentData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {schemaVersion: number(1, {min: 1}), description: string(), source: string(), origin: string("homebrew", {choices: ["official", "homebrew"]}), contentVersion: string("1")};
  }
}
export class SpeciesData extends ContentData {
  static defineSchema() { return {...super.defineSchema(), traits: string()}; }
}
export class ActivityData extends ContentData {
  static defineSchema() {
    return {...super.defineSchema(), activity: schema({
      attribute: string("strength", {choices: Object.keys(ATTRIBUTES)}),
      activation: string("other", {choices: ["action", "powerful", "bonus", "reaction", "legendary", "passive", "other"]}),
      proficient: boolean(), powerCost: number(0, {min: 0}), damageFormula: string(),
      range: string(), duration: string(), requirements: string(),
      surgicalControl: boolean()
    })};
  }
}
export class TechniqueData extends ActivityData {
  static defineSchema() { return {...super.defineSchema(), grade: number(1, {min: 1, max: 7})}; }
}
// Auxiliares usam ActivityData: não possuem campo de grau.
