import {OPRPGActorSheet} from './sheets.mjs';
import {expandedConfigurationActions} from './expanded-config-ui.mjs';
import {legacyConfigurationActions} from './legacy-config-ui.mjs';
import {combatContext} from './combat-rules.mjs';
import {movementCounter} from './mechanics.mjs';
import {primaryStyle} from './advancement.mjs';
export class OriginalLayoutActorSheet extends OPRPGActorSheet {
  static DEFAULT_OPTIONS = {classes:['oprpg-native','op-document-sheet','oprpg-legacy','sheet','actor','character'],position:{width:940,height:940},actions:{...legacyConfigurationActions,...expandedConfigurationActions}};
  static PARTS = {body:{template:'systems/oprpg-native/templates/legacy/character.hbs',templates:['systems/oprpg-native/templates/groups.hbs','systems/oprpg-native/templates/legacy/techniques.hbs','systems/oprpg-native/templates/legacy/header.hbs','systems/oprpg-native/templates/legacy/sidebar.hbs','systems/oprpg-native/templates/legacy/abilities.hbs','systems/oprpg-native/templates/legacy/attribute.hbs','systems/oprpg-native/templates/legacy/details.hbs'],scrollable:['.tab-body','.sidebar']}};
  async _prepareContext(options) {
    if(this.editMode===undefined)this.editMode=false;
    const context=await super._prepareContext(options);
    const style=primaryStyle(this.actor.system);
    context.headerStyleLabel=style?`${style.name} ${style.levels}`:context.primaryStyleName?`${context.primaryStyleName} ${this.actor.system.progression.level}`:'';
    const raw=this.actor.toObject?.().system??this.actor.system.toObject?.()??this.actor.system;
    context.portraitFit=this.actor.getFlag?.('oprpg-native','portraitFit')??'contain';
    context.movementBaseInput=raw.movement?.distance??0;
    context.defenseBaseInput=raw.defense?.rating??10;
    let movementContext=null;
    try{movementContext=combatContext(game.combat,this.actor);}catch{}
    context.movementTurn=movementCounter(this.actor.system.combat.state,{context:movementContext,speeds:this.actor.system.movementModes});
    context.movementInCombat=Boolean(movementContext);
    context.attributes=context.attributes.map(attribute=>({...attribute,baseInput:raw.attributes?.[attribute.id]?.base??attribute.base,manualProficient:Boolean(raw.attributes?.[attribute.id]?.saveProficient),grantedProficiency:attribute.saveProficient&&!raw.attributes?.[attribute.id]?.saveProficient}));
    context.skillGroups=context.skillGroups.map(group=>({...group,skills:group.skills.map(skill=>({...skill,manualProficient:Boolean(raw.skills?.[skill.id]?.proficient),grantedProficiency:skill.proficient&&!raw.skills?.[skill.id]?.proficient}))}));
    context.legacyTopAttributes=context.attributes.slice(0,3);context.legacyBottomAttributes=context.attributes.slice(3);
    return context;
  }
  async _onRender(context,options) {
    await super._onRender(context,options);
    if(this._resetTabScroll||!this._tabScrollInitialized){const body=this.element.querySelector('.tab-body');if(body)body.scrollTop=0;this._resetTabScroll=false;this._tabScrollInitialized=true;}
    for(const field of this.element.querySelectorAll('.legacy-character input:not([data-op-list-control]),.legacy-character select:not([data-op-list-control]),.legacy-character textarea'))field.disabled=!context.editable||field.dataset.derived==='true';
    for(const field of this.element.querySelectorAll('[name="system.vitality.value"],[name="system.power.value"]'))field.disabled=!context.canUse;
    for(const button of this.element.querySelectorAll('[data-action="rollInitiative"],[data-action="rollAttribute"],[data-action="rollSkill"],[data-action="useItem"]'))button.disabled=!context.canUse;
  }
}
