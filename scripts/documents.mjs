import {ATTRIBUTES, d20Formula} from "./rules.mjs";
export class OPRPGActor extends foundry.documents.Actor {
  getRollData() {
    return {attributes: Object.fromEntries(Object.entries(this.system.attributes).map(([id, a]) => [id, {base: a.base, modifier: a.modifier}])), proficiency: {bonus: this.system.proficiency.bonus}, level: this.system.progression.level};
  }
  async rollAttribute(id, {save = false, advantage = false, disadvantage = false} = {}) {
    if (!this.isOwner) throw new Error("Você não pode rolar por este ator.");
    if (!Object.hasOwn(ATTRIBUTES, id)) throw new Error("Atributo desconhecido.");
    const attribute = this.system.attributes[id];
    const formula = d20Formula({advantage, disadvantage, modifier: attribute.modifier, proficiency: save && attribute.saveProficient ? this.system.proficiency.bonus : 0});
    return new Roll(formula).toMessage({speaker: ChatMessage.getSpeaker({actor: this}), flavor: `${save ? "Salvaguarda" : "Teste"} de ${ATTRIBUTES[id]}`}, {rollMode: game.settings.get("core", "rollMode")});
  }
}
