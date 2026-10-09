import {OPRPGActorSheet} from './sheets.mjs';
import {expandedConfigurationActions} from './expanded-config-ui.mjs';
import {legacyConfigurationActions} from './legacy-config-ui.mjs';
export class OriginalLayoutActorSheet extends OPRPGActorSheet {
  static DEFAULT_OPTIONS = {classes:['oprpg-native','op-document-sheet','oprpg-legacy','sheet','actor','character'],position:{width:1080,height:880},actions:{...legacyConfigurationActions,...expandedConfigurationActions}};
  static PARTS = {body:{template:'systems/oprpg-native/templates/legacy/character.hbs',templates:['systems/oprpg-native/templates/groups.hbs','systems/oprpg-native/templates/legacy/header.hbs','systems/oprpg-native/templates/legacy/sidebar.hbs','systems/oprpg-native/templates/legacy/abilities.hbs','systems/oprpg-native/templates/legacy/attribute.hbs','systems/oprpg-native/templates/legacy/details.hbs'],scrollable:['.tab-body','.sidebar']}};
  async _prepareContext(options) {
    const context=await super._prepareContext(options);
    const raw=this.actor.toObject?.().system??this.actor.system.toObject?.()??this.actor.system;
    context.movementBaseInput=raw.movement?.distance??0;
    context.attributes=context.attributes.map(attribute=>({...attribute,baseInput:raw.attributes?.[attribute.id]?.base??attribute.base,manualProficient:Boolean(raw.attributes?.[attribute.id]?.saveProficient),grantedProficiency:attribute.saveProficient&&!raw.attributes?.[attribute.id]?.saveProficient}));
    context.skillGroups=context.skillGroups.map(group=>({...group,skills:group.skills.map(skill=>({...skill,manualProficient:Boolean(raw.skills?.[skill.id]?.proficient),grantedProficiency:skill.proficient&&!raw.skills?.[skill.id]?.proficient}))}));
    context.legacyTopAttributes=context.attributes.slice(0,3);context.legacyBottomAttributes=context.attributes.slice(3);
    return context;
  }
  async _onRender(context,options) {
    await super._onRender(context,options);
    for(const field of this.element.querySelectorAll('.legacy-character input,.legacy-character select,.legacy-character textarea'))field.disabled=!context.editable||field.dataset.derived==='true';
    for(const button of this.element.querySelectorAll('[data-action="rollAttribute"],[data-action="rollSkill"],[data-action="useItem"]'))button.disabled=!context.canUse;
  }
}
