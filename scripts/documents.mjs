import {ATTRIBUTES, d20Formula} from "./rules.mjs";
import {SKILLS} from "./engine.mjs";
import {conditionSet,conditionModifiers} from "./conditions.mjs";
import {actorNumbers} from "./actor-numbers.mjs";
export class OPRPGActor extends foundry.documents.Actor {
  prepareDerivedData() {
    super.prepareDerivedData?.();
    // Garantir os valores do modelo na preparação do documento, inclusive em atores já existentes.
    this.system.prepareDerivedData?.();
  }
  getRollData() {
    if(this.type==="ship") return {vitality:{value:this.system.vitality.value,max:this.system.vitality.max},defense:{rating:this.system.defense.rating},movement:{distance:this.system.movement.distance}};
    const numbers=actorNumbers(this.system,this.type);
    return {attributes: Object.fromEntries(Object.entries(numbers.attributes).map(([id, a]) => [id, {base: a.base, modifier: a.modifier}])), proficiency: {bonus:numbers.proficiency}, level: this.system.progression.level,exhaustionPenalty:2*numbers.exhaustion};
  }
  async rollAttribute(id, {save = false, advantage = false, disadvantage = false,usesSight=false,fearSourceVisible=false} = {}) {
    if (!this.isOwner) throw new Error("Você não pode rolar por este ator.");
    if (!Object.hasOwn(ATTRIBUTES, id)) throw new Error("Atributo desconhecido.");
    const numbers=actorNumbers(this.system,this.type);const attribute = numbers.attributes[id];
    const modifiers=conditionModifiers(conditionSet(this.statuses,{...this.system.vitality,dead:this.system.vitalityState.dead}),{kind:save?"save":"attribute",attribute:id,usesSight,fearSourceVisible});
    if(modifiers.automaticFailure){const data={speaker:ChatMessage.getSpeaker({actor:this}),content:`Falha automática por condição: ${save?"salvaguarda":"teste"} de ${ATTRIBUTES[id]}.`};ChatMessage.applyRollMode(data,game.settings.get("core","rollMode"));return ChatMessage.create(data);}
    advantage||=modifiers.advantage;disadvantage||=modifiers.disadvantage;
    const sourceBonus=save&&attribute.saveOverride!=null;
    const formula = d20Formula({advantage, disadvantage, modifier: (sourceBonus?attribute.saveOverride:attribute.modifier)-2*numbers.exhaustion, proficiency: save&&!sourceBonus&&attribute.saveProficient?numbers.proficiency:0});
    return new Roll(formula).toMessage({speaker: ChatMessage.getSpeaker({actor: this}), flavor: `${save ? "Salvaguarda" : "Teste"} de ${ATTRIBUTES[id]}`}, {rollMode: game.settings.get("core", "rollMode")});
  }
  async rollSkill(id,{advantage=false,disadvantage=false}={}) {
    if(!this.isOwner) throw new Error("Você não pode rolar por este ator.");
    if(!Object.hasOwn(SKILLS,id)) throw new Error("Perícia desconhecida.");
    const modifiers=conditionModifiers(conditionSet(this.statuses,{...this.system.vitality,dead:this.system.vitalityState.dead}),{kind:"attribute",attribute:SKILLS[id].attribute});
    advantage||=modifiers.advantage;disadvantage||=modifiers.disadvantage;
    return new Roll(d20Formula({advantage,disadvantage,modifier:this.system.skills[id].total})).toMessage({speaker:ChatMessage.getSpeaker({actor:this}),flavor:`${SKILLS[id].label}`},{rollMode:game.settings.get("core","rollMode")});
  }
}
