const {ApplicationV2,HandlebarsApplicationMixin}=foundry.applications.api;
export class OPRPGSettingsWindow extends HandlebarsApplicationMixin(ApplicationV2){
  static DEFAULT_OPTIONS={classes:['oprpg-native','op-dialog','op-flow'],tag:'form',window:{title:'Configurações do sistema · OP RPG'},position:{width:620},actions:{saveSettings:async function(){
    if(!game.user.isGM)throw new Error('O Narrador configura o sistema.');
    const form=this.element.matches('form')?this.element:this.element.querySelector('form');
    for(const key of ['creationAssistant','multiStyle','suffocationAutomation','concentrationAutomation','regenerationAutomation'])await game.settings.set('oprpg-native',key,form.elements.namedItem(key).checked);
    for(const actor of game.actors??[])for(const app of Object.values(actor.apps??{}))if(app.rendered)await app.render({force:true});
    ui.notifications.info('Configurações salvas; fichas abertas atualizadas.');await this.close();
  }}};
  static PARTS={body:{template:'systems/oprpg-native/templates/legacy/settings.hbs'}};
  async _prepareContext(options){return {...await super._prepareContext(options),assistant:game.settings.get('oprpg-native','creationAssistant'),multiStyle:game.settings.get('oprpg-native','multiStyle'),suffocationAutomation:game.settings.get('oprpg-native','suffocationAutomation'),concentrationAutomation:game.settings.get('oprpg-native','concentrationAutomation'),regenerationAutomation:game.settings.get('oprpg-native','regenerationAutomation')};}
}
