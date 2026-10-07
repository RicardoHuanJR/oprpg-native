import {ATTRIBUTES, CATEGORIES, ACTIVATIONS, creationChecklist, speciesSnapshot, d20Formula} from "./rules.mjs";
const {HandlebarsApplicationMixin} = foundry.applications.api;
const {ActorSheetV2, ItemSheetV2} = foundry.applications.sheets;
const guarded = handler => async function (...args) {
  try { return await handler.apply(this, args); } catch (error) { console.error("OP RPG", error); ui.notifications.error(error.message); }
};
const selectOptions = (map, selected) => Object.entries(map).map(([value, label]) => ({value, label, selected: value === selected}));

export class OPRPGActorSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["oprpg-native"], tag: "form", position: {width: 780, height: 750}, window: {resizable: true},
    form: {submitOnChange: true, closeOnSubmit: false},
    actions: {
      selectTab: guarded(function (event, target) {
        const tab = target.dataset.tab;
        if (!["details", "content", "creation"].includes(tab)) return;
        if (tab === "creation" && (!game.settings.get("oprpg-native", "creationAssistant") || this.actor.type !== "character")) return;
        this.activeTab = tab;
        return this.render({force: true});
      }),
      rollAttribute: guarded(function (event, target) { return this.actor.rollAttribute(target.dataset.attribute, {save: target.dataset.save === "true", advantage: event.shiftKey, disadvantage: event.altKey}); }),
      editItem: guarded(function (event, target) { return this.actor.items.get(target.dataset.itemId)?.sheet.render({force: true}); }),
      createItem: guarded(async function (event, target) {
        if (!this.actor.isOwner) throw new Error("Sem permissão de edição.");
        const type = target.dataset.type;
        if (!Object.hasOwn(CATEGORIES, type) || type === "species") throw new Error("Tipo inválido.");
        if (type === "legendary" && (!game.user.isGM || this.actor.type !== "npc")) throw new Error("Ações lendárias são configuradas pelo mestre em NPCs nesta versão.");
        const [item] = await this.actor.createEmbeddedDocuments("Item", [{name: `Nova ${CATEGORIES[type]}`, type}]);
        return item.sheet.render({force: true});
      }),
      applySpecies: guarded(async function () {
        if (!this.actor.isOwner) throw new Error("Sem permissão de edição.");
        const id = this.element.querySelector("select[data-species-picker]")?.value;
        const item = game.items.get(id);
        if (!item || !item.testUserPermission(game.user, "OBSERVER")) throw new Error("Espécie indisponível.");
        // Um snapshot no ator: nenhuma alteração no original, nem aplicação oculta de traços.
        await this.actor.update({"system.identity.species": speciesSnapshot(item)});
        ui.notifications.info("Espécie registrada. Confira e aplique manualmente os benefícios da fonte.");
      }),
      createSpecies: guarded(async function () {
        if (!game.user.isGM) throw new Error("Nesta versão, o mestre cria as espécies.");
        const item = await Item.create({name: "Nova espécie personalizada", type: "species", system: {origin: "homebrew"}});
        return item.sheet.render({force: true});
      })
    }
  };
  static PARTS = {body: {template: "systems/oprpg-native/templates/actor.hbs", scrollable: [""]}};
  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const system = this.actor.system;
    const showAssistant = game.settings.get("oprpg-native", "creationAssistant") && this.actor.type === "character";
    if (this.activeTab === "creation" && !showAssistant) this.activeTab = "details";
    const tab = this.activeTab ?? "details";
    return {...context, actor: this.actor, system, editable: this.actor.isOwner, isNPC: this.actor.type === "npc", isGM: game.user.isGM,
      showAssistant, detailsActive: tab === "details", contentActive: tab === "content", creationActive: tab === "creation",
      attributes: Object.entries(ATTRIBUTES).map(([id, label]) => ({id, label, ...system.attributes[id], modifier: system.attributes[id].modifier})),
      checklist: creationChecklist(system),
      species: game.items.filter(item => item.type === "species" && item.testUserPermission(game.user, "OBSERVER")).map(item => ({id: item.id, name: item.name, homebrew: item.system.origin === "homebrew"})),
      groups: Object.entries(CATEGORIES).filter(([type]) => type !== "species" && (type !== "legendary" || (game.user.isGM && this.actor.type === "npc"))).map(([type, label]) => ({type, label, items: this.actor.items.filter(item => item.type === type).map(item => ({id: item.id, name: item.name, grade: item.type === "technique" ? item.system.grade : null, homebrew: item.system.origin === "homebrew"}))}))
    };
  }
}

export class OPRPGItemSheet extends HandlebarsApplicationMixin(ItemSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["oprpg-native"], tag: "form", position: {width: 610, height: 730}, window: {resizable: true},
    form: {submitOnChange: true, closeOnSubmit: false},
    actions: {rollActivity: guarded(async function (event) {
      const actor = this.item.actor;
      if (!actor?.isOwner) throw new Error("Abra um item pertencente a um ator sob seu controle.");
      const activity = this.item.system.activity;
      if (!activity) throw new Error("Este conteúdo não possui atividade.");
      const formula = d20Formula({advantage: event.shiftKey, disadvantage: event.altKey, modifier: actor.system.attributes[activity.attribute].modifier, proficiency: activity.proficient ? actor.system.proficiency.bonus : 0});
      const kind = CATEGORIES[this.item.type];
      const name = foundry.utils.escapeHTML(this.item.name);
      return new Roll(formula).toMessage({speaker: ChatMessage.getSpeaker({actor}), flavor: `${kind}: ${name} — rolagem de referência; custos e aplicação manuais`}, {rollMode: game.settings.get("core", "rollMode")});
    })}
  };
  static PARTS = {body: {template: "systems/oprpg-native/templates/item.hbs", scrollable: [""]}};
  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const system = this.item.system;
    return {...context, item: this.item, system, editable: this.item.isOwner, category: CATEGORIES[this.item.type],
      isSpecies: this.item.type === "species", isTechnique: this.item.type === "technique", hasActivity: Boolean(system.activity),
      canRoll: Boolean(this.item.actor?.isOwner && system.activity),
      origins: optionsList(system.origin),
      attributes: selectOptions(ATTRIBUTES, system.activity?.attribute), activations: selectOptions(ACTIVATIONS, system.activity?.activation)};
  }
}
function optionsList(selected) { return selectOptions({homebrew: "Homebrew / Personalizado", official: "Referência oficial"}, selected); }
