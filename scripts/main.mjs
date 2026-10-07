import {CharacterData, NPCData, ShipData, ContentData, SpeciesData, ProgressionData, ActivityData, TechniqueData, WeaponData,AuxiliaryData,HakiTalentData} from "./models.mjs";
import {OPRPGActor} from "./documents.mjs";
import {OPRPGCombat} from "./combat.mjs";
import {OPRPGActorSheet, OPRPGItemSheet} from "./sheets.mjs";
import {ATTRIBUTES, CATEGORIES} from "./rules.mjs";
import {CONDITIONS} from "./conditions.mjs";

Hooks.once("init", () => {
  CONFIG.Actor.documentClass = OPRPGActor;
  CONFIG.Combat.documentClass=OPRPGCombat;
  CONFIG.statusEffects=Object.entries(CONDITIONS).map(([id,name])=>({id,name,img:"icons/svg/hazard.svg"}));
  CONFIG.Actor.dataModels.character = CharacterData;
  CONFIG.Actor.dataModels.npc = NPCData;
  CONFIG.Actor.dataModels.ship=ShipData;
  Object.assign(CONFIG.Item.dataModels, {species: SpeciesData, style:ProgressionData,profession:ProgressionData,training:ActivityData,hakiTalent:HakiTalentData,fruit:ContentData,personalization:ContentData,equipment: ContentData, weapon: WeaponData, feature: ActivityData, technique: TechniqueData, auxiliary: AuxiliaryData, legendary: ActivityData});
  CONFIG.Actor.trackableAttributes = {character: {bar: ["vitality", "power"], value: ["defense.rating"]}, npc: {bar: ["vitality", "power", "legendaryActions"], value: ["defense.rating"]}};
  const sheets = foundry.applications.apps.DocumentSheetConfig;
  sheets.registerSheet(Actor, "oprpg-native", OPRPGActorSheet, {types: ["character", "npc","ship"], makeDefault: true, label: "OPRPG.Sheet"});
  sheets.registerSheet(Item, "oprpg-native", OPRPGItemSheet, {types: Object.keys(CATEGORIES), makeDefault: true, label: "OPRPG.Sheet"});
  game.settings.register("oprpg-native", "creationAssistant", {
    name: "OPRPG.CreationAssistant", hint: "OPRPG.CreationAssistantHint", scope: "world", config: true, type: Boolean, default: true, requiresReload: true
  });
  game.oprpg = Object.freeze({version: "0.2.0", attributes: ATTRIBUTES, categories: CATEGORIES, capabilities: Object.freeze({attributeRolls: true, speciesSnapshots: true, automaticDamage: false, manualDamageApplication: true, automaticCosts: true, rests: true, targetResolution: false, dae: false, argon: false})});
});
