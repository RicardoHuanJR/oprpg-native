import {openRulePanel} from './rule-panel.mjs';
import {OriginalLayoutActorSheet} from './legacy-layout.mjs';
import {OPRPGActorSheet} from './sheets.mjs';
export class OriginalLayoutNPCSheet extends OriginalLayoutActorSheet{
  static DEFAULT_OPTIONS={classes:['npc'],position:{width:1080,height:880}};
  static PARTS={body:{...OriginalLayoutActorSheet.PARTS.body,template:'systems/oprpg-native/templates/legacy/npc.hbs',templates:[...OriginalLayoutActorSheet.PARTS.body.templates,'systems/oprpg-native/templates/legacy/npc-header.hbs']}};
}
export class OriginalLayoutShipSheet extends OPRPGActorSheet{
  static DEFAULT_OPTIONS={classes:['oprpg-legacy','sheet','actor','vehicle'],position:{width:900,height:790},actions:{openRulesPanel:async function(){try{return await openRulePanel(this.actor);}catch(error){ui.notifications.error(error.message);}}}};
  static PARTS={body:{template:'systems/oprpg-native/templates/legacy/ship.hbs',templates:['systems/oprpg-native/templates/groups.hbs'],scrollable:['.op-body']}};
}
