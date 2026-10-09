import FiligreeBoxElement from "./presentation/filigree-box.mjs";
import {OriginalLayoutActorSheet} from "./legacy-layout.mjs";
import {OriginalLayoutItemSheet} from "./legacy-item-layout.mjs";
import {OriginalLayoutNPCSheet,OriginalLayoutShipSheet} from './legacy-other-sheets.mjs';
import {OPRPGSettingsWindow} from './settings-window.mjs';
import {registerRuntimeEvents} from './runtime-events.mjs';
import {BackgroundData,TrainingData,CharacterData, NPCData, ShipData, ContentData, SpeciesData, ProgressionData, ProfessionData,ActivityData, TechniqueData, WeaponData,AuxiliaryData,HakiTalentData} from "./models.mjs";
import {OPRPGActor} from "./documents.mjs";
import {OPRPGCombat} from "./combat.mjs";
import {OPRPGActorSheet} from "./sheets.mjs";
import {ATTRIBUTES, CATEGORIES} from "./rules.mjs";
import {CONDITIONS} from "./conditions.mjs";

Hooks.once("init", () => {
  registerRuntimeEvents();
  if(!customElements.get(FiligreeBoxElement.tagName))customElements.define(FiligreeBoxElement.tagName,FiligreeBoxElement);
  CONFIG.Actor.documentClass = OPRPGActor;
  CONFIG.Combat.documentClass=OPRPGCombat;
  CONFIG.statusEffects=Object.entries(CONDITIONS).map(([id,name])=>({id,name,img:"icons/svg/hazard.svg"}));
  CONFIG.Actor.dataModels.character = CharacterData;
  CONFIG.Actor.dataModels.npc = NPCData;
  CONFIG.Actor.dataModels.ship=ShipData;
  Object.assign(CONFIG.Item.dataModels, {species: SpeciesData, style:ProgressionData,profession:ProfessionData,background:BackgroundData,training:TrainingData,hakiTalent:HakiTalentData,fruit:ContentData,personalization:ContentData,equipment: ContentData, weapon: WeaponData, feature: ActivityData, technique: TechniqueData, auxiliary: AuxiliaryData, legendary: ActivityData});
  CONFIG.Actor.trackableAttributes = {character: {bar: ["vitality", "power"], value: ["defense.rating"]}, npc: {bar: ["vitality", "power", "legendaryActions"], value: ["defense.rating"]}};
  const sheets = foundry.applications.apps.DocumentSheetConfig;
  sheets.registerSheet(Actor,'oprpg-native',OriginalLayoutNPCSheet,{types:['npc'],makeDefault:true,label:'Ficha de inimigo — OP RPG'});
  sheets.registerSheet(Actor,'oprpg-native',OriginalLayoutShipSheet,{types:['ship'],makeDefault:true,label:'Ficha de embarcação — OP RPG'});
  sheets.registerSheet(Actor,"oprpg-native",OriginalLayoutActorSheet,{types:["character"],makeDefault:true,label:"Ficha original — OP RPG"});
  sheets.registerSheet(Item, "oprpg-native", OriginalLayoutItemSheet, {types: Object.keys(CATEGORIES), makeDefault: true, label: "Editor original — OP RPG"});
  game.settings.register("oprpg-native", "creationAssistant", {
    name: "OPRPG.CreationAssistant", hint: "OPRPG.CreationAssistantHint", scope: "world", config: true, type: Boolean, default: true, requiresReload: true
  });
  game.settings.register("oprpg-native","multiStyle",{name:"Permitir Multiestilo",hint:"Regra opcional do Jogador 2.1, p.113–115. Exige os atributos do novo estilo e usa o nível total para PP e proficiência.",scope:"world",config:true,type:Boolean,default:false});
  game.settings.registerMenu('oprpg-native','configuration',{name:'Painel de OP RPG',label:'Configurar OP RPG',hint:'Criação, Multiestilo e regras adotadas pela mesa.',icon:'fa-solid fa-gear',type:OPRPGSettingsWindow,restricted:true});
  game.oprpg = Object.freeze({version: "0.3.1", attributes: ATTRIBUTES, categories: CATEGORIES, capabilities: Object.freeze({attributeRolls: true, speciesSnapshots: true, automaticDamage: false, manualDamageApplication: true, automaticCosts: true, rests: true, targetResolution: true, preparedTechniques:true,weaponExpertise:true,dials:true,naval:true, dae: false, argon: false})});
});
