import {CharacterData, NPCData, ContentData, SpeciesData, ActivityData, TechniqueData} from "./models.mjs";
import {OPRPGActor} from "./documents.mjs";
import {OPRPGActorSheet, OPRPGItemSheet} from "./sheets.mjs";
import {ATTRIBUTES, CATEGORIES} from "./rules.mjs";

Hooks.once("init", () => {
  CONFIG.Actor.documentClass = OPRPGActor;
  CONFIG.Actor.dataModels.character = CharacterData;
  CONFIG.Actor.dataModels.npc = NPCData;
  Object.assign(CONFIG.Item.dataModels, {species: SpeciesData, equipment: ContentData, weapon: ActivityData, feature: ActivityData, technique: TechniqueData, auxiliary: ActivityData, legendary: ActivityData});
  CONFIG.Actor.trackableAttributes = {character: {bar: ["vitality", "power"], value: ["defense.rating"]}, npc: {bar: ["vitality", "power", "legendaryActions"], value: ["defense.rating"]}};
  const sheets = foundry.applications.apps.DocumentSheetConfig;
  sheets.registerSheet(Actor, "oprpg-native", OPRPGActorSheet, {types: ["character", "npc"], makeDefault: true, label: "OPRPG.Sheet"});
  sheets.registerSheet(Item, "oprpg-native", OPRPGItemSheet, {types: Object.keys(CATEGORIES), makeDefault: true, label: "OPRPG.Sheet"});
  game.settings.register("oprpg-native", "creationAssistant", {
    name: "OPRPG.CreationAssistant", hint: "OPRPG.CreationAssistantHint", scope: "world", config: true, type: Boolean, default: true, requiresReload: true
  });
  game.oprpg = Object.freeze({version: "0.1.1", attributes: ATTRIBUTES, categories: CATEGORIES, capabilities: Object.freeze({attributeRolls: true, speciesSnapshots: true, automaticDamage: false, automaticCosts: false, dae: false, argon: false})});
});
