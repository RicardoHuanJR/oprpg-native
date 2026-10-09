import {itemRuleAdvantage,activeItemRules} from "./item-rules.mjs";
import {proficiencyFactor,underwaterContext} from './mechanics.mjs';
import {combatContext} from './combat-rules.mjs';
import {applicableLeaderAura} from './auras.mjs';
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
  async rollAttribute(id, {save = false, advantage = false, disadvantage = false,usesSight=false,usesHearing=false,fearSourceVisible=false} = {}) {
    if (!this.isOwner) throw new Error("Você não pode rolar por este ator.");
    if (!Object.hasOwn(ATTRIBUTES, id)) throw new Error("Atributo desconhecido.");
    const numbers=actorNumbers(this.system,this.type);const attribute = numbers.attributes[id];
    const modifiers=conditionModifiers(conditionSet(this.statuses,{...this.system.vitality,dead:this.system.vitalityState.dead}),{kind:save?"save":"attribute",attribute:id,usesSight,usesHearing,fearSourceVisible});
    if(modifiers.automaticFailure){const data={speaker:ChatMessage.getSpeaker({actor:this}),content:`Falha automática por condição: ${save?"salvaguarda":"teste"} de ${ATTRIBUTES[id]}.`};ChatMessage.applyRollMode(data,game.settings.get("core","rollMode"));return ChatMessage.create(data);}
    if(save&&id==='dexterity'&&this.getFlag('oprpg-native','expertise')?.kind==='autoDexSave'){await this.update({'flags.oprpg-native.expertise':null});return ChatMessage.create({speaker:ChatMessage.getSpeaker({actor:this}),content:'Salvaguarda de Destreza: sucesso automático por expertise.'});}
    if(save)advantage||=itemRuleAdvantage(this.system,[...(this.items??[])],"saveAdvantage",id);
    if(save&&id==='dexterity'&&this.system.combat.state.dodging&&combatContext(game.combat,this)?.ownEpoch===this.system.combat.state.ownEpoch&&this.system.effectiveMovement>0&&!modifiers.incapacitated)advantage=true;
    advantage||=modifiers.advantage;disadvantage||=modifiers.disadvantage;
    const sourceBonus=save&&attribute.saveOverride!=null;
    const rules=activeItemRules(this.system,[...(this.items??[])]);
    const testProficient=rules.some(rule=>rule.kind==='attributeProficiency'&&rule.key===id);
    const factor=save?(attribute.saveMultiplier??1):proficiencyFactor(1,rules.filter(rule=>rule.kind==='attributeMultiplier'&&rule.key===id));
    const formula = d20Formula({advantage, disadvantage, modifier: (sourceBonus?attribute.saveOverride:attribute.modifier)-2*numbers.exhaustion, proficiency: !sourceBonus&&(save?attribute.saveProficient:testProficient)?Math.floor(numbers.proficiency*factor):0});
    const aura=save?applicableLeaderAura(this):null;return new Roll(formula+(aura?' + '+aura.dice:'')).toMessage({speaker: ChatMessage.getSpeaker({actor: this}), flavor: `${save ? "Salvaguarda" : "Teste"} de ${ATTRIBUTES[id]}`}, {rollMode: game.settings.get("core", "rollMode")});
  }
  async rollSkill(id,{advantage=false,disadvantage=false}={}) {
    if(!this.isOwner) throw new Error("Você não pode rolar por este ator.");
    if(!Object.hasOwn(SKILLS,id)) throw new Error("Perícia desconhecida.");
    const modifiers=conditionModifiers(conditionSet(this.statuses,{...this.system.vitality,dead:this.system.vitalityState.dead}),{kind:"attribute",attribute:SKILLS[id].attribute});
    advantage||=itemRuleAdvantage(this.system,[...(this.items??[])],"skillAdvantage",id);
    const environment=underwaterContext(this.system);if(id==='perception'&&environment.submerged&&!environment.aquatic)disadvantage=true;
    advantage||=modifiers.advantage;disadvantage||=modifiers.disadvantage;
    return new Roll(d20Formula({advantage,disadvantage,modifier:this.system.skills[id].total})).toMessage({speaker:ChatMessage.getSpeaker({actor:this}),flavor:`${SKILLS[id].label}`},{rollMode:game.settings.get("core","rollMode")});
  }
}
