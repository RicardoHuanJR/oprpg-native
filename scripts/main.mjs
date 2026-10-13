import {CATALOG} from './catalog.mjs';
import {catalogArtwork,isGenericArtwork} from './content-art.mjs';
import FiligreeBoxElement from "./presentation/filigree-box.mjs";
import {OriginalLayoutActorSheet} from "./legacy-layout.mjs";
import {OriginalLayoutItemSheet} from "./legacy-item-layout.mjs";
import {OriginalLayoutNPCSheet,OriginalLayoutShipSheet} from './legacy-other-sheets.mjs';
import {OPRPGSettingsWindow} from './settings-window.mjs';
import {registerRuntimeEvents} from './runtime-events.mjs';
import {registerChatResources} from './chat-resources.mjs';
import {BackgroundData,TrainingData,CharacterData, NPCData, ShipData, ContentData, SpeciesData, ProgressionData, ProfessionData,ActivityData, TechniqueData, WeaponData,AuxiliaryData,HakiTalentData} from "./models.mjs";
import {OPRPGItem} from './item-document.mjs';
import {OPRPGActor} from "./documents.mjs";
import {OPRPGCombat} from "./combat.mjs";
import {OPRPGActorSheet} from "./sheets.mjs";
import {ATTRIBUTES, CATEGORIES} from "./rules.mjs";
import {CONDITIONS} from "./conditions.mjs";

Hooks.once("init", () => {
  registerRuntimeEvents();
  Hooks.on('preCreateItem',(item,data)=>{if(['species','style'].includes(item.type)){const official=CATALOG.find(e=>e.type===item.type&&e.system.identifier===item.system.identifier);if(!official){ui.notifications.warn('Escolha raças e estilos no catálogo oficial.');return false;}item.updateSource({system:official.system});}if(isGenericArtwork(data.img)){const art=catalogArtwork(item);if(art)item.updateSource({img:art});}});
  registerChatResources();
  Hooks.on('preUpdateItem',(item,changes)=>{if(['species','style'].includes(item.type)&&(changes.system||Object.keys(changes).some(key=>key.startsWith('system.')))){ui.notifications.warn('As regras de raças e estilos vêm do catálogo oficial.');return false;}});
  if(!customElements.get(FiligreeBoxElement.tagName))customElements.define(FiligreeBoxElement.tagName,FiligreeBoxElement);
  CONFIG.Actor.documentClass = OPRPGActor;
  CONFIG.Item.documentClass=OPRPGItem;
  CONFIG.Combat.documentClass=OPRPGCombat;
  CONFIG.Combat.initiative.formula='1d20 + @initiative';
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
  game.settings.register('oprpg-native','suffocationAutomation',{name:'Automatizar respiração e sufocamento',hint:'Ativa testes após dano submerso e consequências pelo relógio e turnos, incluindo inconsciência e morte. Desativado: o Narrador acompanha e aplica essas consequências.',scope:'world',config:true,type:Boolean,default:false});
  game.settings.register('oprpg-native','concentrationAutomation',{name:'Resolver concentração automaticamente após dano',hint:'Desativado: informa a CD e deixa a resolução no painel de Concentração.',scope:'world',config:true,type:Boolean,default:true});
  game.settings.register('oprpg-native','regenerationAutomation',{name:'Aplicar regeneração automaticamente',hint:'Desativado: a mesa aplica a recuperação de PV manualmente. Não altera os benefícios da ficha.',scope:'world',config:true,type:Boolean,default:true});
  game.settings.register('oprpg-native','actionTracking',{name:'Controle interno de ações',scope:'world',config:false,type:Boolean,default:false});
  game.oprpg = Object.freeze({version: "0.3.1", attributes: ATTRIBUTES, categories: CATEGORIES, capabilities: Object.freeze({attributeRolls: true, speciesSnapshots: true, automaticDamage: false, manualDamageApplication: true, automaticCosts: true, rests: true, targetResolution: true, preparedTechniques:true,weaponExpertise:true,dials:true,naval:true, dae: false, argon: false})});
});
