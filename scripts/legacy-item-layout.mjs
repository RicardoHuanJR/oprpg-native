import {WEAPON_BOOK_RULES} from './weapon-book-rules.mjs';
import {bookDescription} from './book-descriptions.mjs';
import {professionDialog} from './subsystem-ui.mjs';
import {nativePrompt} from './dialog-ui.mjs';
import {DIALS} from './dials.mjs';
import {OPRPGItemSheet} from './sheets.mjs';
import {ATTRIBUTES} from './rules.mjs';
import {DAMAGE_TYPES,SKILLS} from './engine.mjs';
import {activityCost,professionBenefitPlan} from './mechanics.mjs';
import {effectEditor} from './expanded-config-ui.mjs';

const options=(map,current)=>Object.entries(map).map(([value,label])=>({value,label,selected:value===current}));
const escape=value=>foundry.utils.escapeHTML(String(value??''));
const prompt=options=>nativePrompt({...options,classes:['oprpg-native','op-dialog','op-flow'],position:{width:680}});
const guarded=handler=>async function(...args){try{return await handler.apply(this,args);}catch(error){console.error('OP RPG',error);ui.notifications.error(error.message);}};

export class OriginalLayoutItemSheet extends OPRPGItemSheet {
  static DEFAULT_OPTIONS={classes:['oprpg-legacy','sheet','item'],position:{width:540,height:760},actions:{
    operateProfession:guarded(function(){return professionDialog(this.item);}),
    configureHakiRequirements:guarded(async function(){
      if(!this.item.isOwner||this.item.type!=='hakiTalent')throw new Error('Sem permissão para editar este talento.');
      const current=this.item.system.hakiTalent;
      const result=await prompt({window:{title:'Pré-requisitos e formas de Haki'},content:`<fieldset class="op-choice"><legend>Talento</legend><label>Identificadores dos talentos exigidos (um por linha)<textarea name="requirements">${escape((current.requirements??[]).join('\n'))}</textarea></label><label>Formas disponíveis<select name="maxRank"><option value="1" ${current.maxRank===1?'selected':''}>Base</option><option value="2" ${current.maxRank===2?'selected':''}>Base e Dominada</option><option value="3" ${current.maxRank===3?'selected':''}>Base, Dominada e Avançada</option></select></label><p class="op-hint">Cada forma custa os PA da forma base. Dominada exige Treinado; Avançada exige Perito. Requisitos mais altos da fonte continuam valendo.</p></fieldset>`,ok:{label:'Salvar',callback:(_e,_b,app)=>{const fields=app.element.querySelector('form').elements;const maxRank=Number(fields.maxRank.value);if(maxRank<(current.rank??0))throw new Error('Não remova uma forma já adquirida.');return {'system.hakiTalent.requirements':[...new Set(fields.requirements.value.split(/\r?\n/).map(value=>value.trim()).filter(Boolean))],'system.hakiTalent.maxRank':maxRank};}}});
      if(result)await this.item.update(result);
    }),
    openActivityEditor:guarded(function(_event,target){
      const variantId=target.dataset.variantId||null;
      if(!this.item.system.activity)throw new Error('Este item não possui atividade.');
      if(variantId&&!this.item.system.variants.some(variant=>variant.id===variantId))throw new Error('Atividade indisponível.');
      const editorId=`op-activity-${this.item.uuid.replaceAll('.','-')}-${variantId??'primary'}`;
      const existing=this.item.apps?.[editorId];
      if(existing)return existing.render({force:true});
      const editor=new NativeActivityEditor({document:this.item,id:editorId});
      editor.selectedVariant=variantId;return editor.render({force:true});
    }),
    createItemEffect:guarded(function(){return effectEditor(this.item);}),
    editItemEffect:guarded(function(_event,target){const effect=this.item.effects.get(target.dataset.effectId);if(!effect)throw new Error('Efeito indisponível.');return effectEditor(this.item,effect);}),
    configureWeapon:guarded(async function(){
      if(!this.item.isOwner||this.item.type!=='weapon')throw new Error('Selecione uma arma que possa editar.');
      const source=this.item.toObject().system,category=source.tags.find(tag=>tag.startsWith('weaponCategory:'))?.slice(15)??'';
      const choice=await prompt({window:{title:'Categoria e propriedades da arma'},content:`<label>Categoria<select name="category"><option value="">Não definida</option>${[['armas-cortantes','Armas Cortantes'],['armas-de-fogo','Armas de Fogo'],['armas-especiais','Armas Especiais'],['armas-marciais','Armas Marciais']].map(([key,label])=>`<option value="${key}" ${key===category?'selected':''}>${label}</option>`).join('')}</select></label><label>Propriedades (uma por linha)<textarea name="properties">${escape(source.weapon.properties.join('\n'))}</textarea></label><p class="op-hint">A categoria permite consultar proficiências do personagem. Confira as exceções de cada propriedade na fonte.</p>`,ok:{label:'Salvar',callback:(_e,_b,app)=>{const fields=app.element.querySelector('form').elements;return {'system.tags':[...source.tags.filter(tag=>!tag.startsWith('weaponCategory:')),...(fields.category.value?[`weaponCategory:${fields.category.value}`]:[])],'system.weapon.properties':fields.properties.value.split(/\r?\n/).map(value=>value.trim()).filter(Boolean)};}}});
      if(choice)await this.item.update(choice);
    }),
    selectActivityTab:guarded(function(_event,target){
      if(!['identity','activation','effect'].includes(target.dataset.tab))return;
      this.activeActivityTab=target.dataset.tab;return this.render({force:true});
    }),
    selectActivitySection:guarded(function(_event,target){
      if(!['time','consumption','target'].includes(target.dataset.tab))return;
      this.activeActivitySection=target.dataset.tab;return this.render({force:true});
    }),
    selectItemTab:guarded(function(_event,target){
      if(!this.availableTabs().some(tab=>tab.id===target.dataset.tab))return;
      this.activeItemTab=target.dataset.tab;return this.render({force:true});
    }),
    configureSpecies:guarded(async function(){
      if(!this.item.isOwner||this.item.type!=='species')throw new Error('Selecione uma espécie que possa editar.');
      const source=this.item.toObject().system;
      const group=(title,entries,field)=>`<fieldset class="op-choice"><legend>${title}</legend><div class="op-pair">${entries.map(([key,label])=>`<label>${escape(label)}<input type="number" step="1" name="${field}-${key}" value="${source[field][key]}"></label>`).join('')}</div></fieldset>`;
      const result=await prompt({window:{title:'Bônus e ancestralidades'},content:`<p class="op-hint">Bônus fixos da espécie. As escolhas individuais são configuradas na aba de progressão. Alterações não reescrevem benefícios já recebidos por personagens.</p><label>Ancestralidades (uma por linha)<textarea name="ancestries">${escape(source.ancestries.join('\n'))}</textarea></label>${group('Atributos',Object.entries(ATTRIBUTES),'attributeBonuses')}${group('Perícias',Object.entries(SKILLS).map(([key,skill])=>[key,skill.label]),'skillBonuses')}`,ok:{label:'Salvar',callback:(_e,_b,app)=>{
        const form=app.element.querySelector('form').elements;
        return {'system.ancestries':[...new Set(form.ancestries.value.split(/\r?\n/).map(value=>value.trim()).filter(Boolean))],...Object.fromEntries(['attributeBonuses','skillBonuses'].map(field=>[`system.${field}`,Object.fromEntries(Object.keys(source[field]).map(key=>[key,Number(form.namedItem(`${field}-${key}`).value)]))]))};
      }}});
      if(result)await this.item.update(result);
    }),
    configureProfessionTools:guarded(async function(){
      if(!this.item.isOwner||this.item.type!=='profession')throw new Error('Selecione uma profissão que possa editar.');
      const result=await prompt({window:{title:'Ferramentas da profissão'},content:`<label>Ferramentas (uma por linha)<textarea name="tools">${escape(this.item.toObject().system.profession.tools.join('\n'))}</textarea></label>`,ok:{label:'Salvar',callback:(_e,_b,app)=>[...new Set(app.element.querySelector('form').elements.tools.value.split(/\r?\n/).map(value=>value.trim()).filter(Boolean))]}});
      if(result)await this.item.update({'system.profession.tools':result});
    }),
    calculateProfession:guarded(async function(){
      const choice=await prompt({window:{title:'Aperfeiçoamento profissional'},content:'<fieldset class="op-choice"><legend>Valores da característica</legend><label>Custo predeterminado (฿)<input name="cost" type="number" min="0" value="0"></label><label>CD predeterminada<input name="difficulty" type="number" min="0" value="15"></label><label>Faces do dado (0: não usa dado)<input name="die" type="number" min="0" value="6"></label><label class="op-checkbox"><input name="restoration" type="checkbox"> O dado recupera PV ou PP</label><p class="op-hint">A graduação substitui a anterior. Esses descontos só se aplicam a características profissionais, não a compras gerais ou a dados de dano.</p></fieldset>',ok:{label:'Calcular',callback:(_e,_b,app)=>{const form=app.element.querySelector('form').elements;return {cost:Number(form.cost.value),difficulty:Number(form.difficulty.value),die:Number(form.die.value),restoration:form.restoration.checked};}}});
      if(!choice)return;const result=professionBenefitPlan({...choice,rank:this.item.system.profession.rank});
      return prompt({window:{title:'Resultado profissional'},content:`<fieldset class="op-choice"><legend>${escape(this.item.name)}</legend><p>Custo: <strong>${result.cost} ฿</strong></p><p>CD: <strong>${result.difficulty}</strong></p><p>Dado: <strong>${result.die?'d'+result.die:'não se aplica'}</strong></p><p class="op-hint">A conferência não desconta dinheiro nem altera a característica.</p></fieldset>`,ok:{label:'Fechar'}});
    })
  }};
  static PARTS={body:{template:'systems/oprpg-native/templates/legacy/item.hbs',scrollable:['.op-item-body']}};
  availableTabs(){return [{id:'description',label:'Descrição'},{id:'details',label:'Detalhes'},...(this.item.system.activity?[{id:'activities',label:'Atividades'}]:[]),{id:'benefits',label:'Benefícios'},{id:'effects',label:'Efeitos'}];}
  async _prepareContext(renderOptions){
    if(this.editMode===undefined)this.editMode=false;
    const context=await super._prepareContext(renderOptions);
    const stored=String(this.item.system.description??'');
    const description=String(!stored||this.item.system.origin==='official'&&/^(?:Consultar|Perícias iniciais e graduação configuradas|Escolha registrada na progressão)/i.test(stored)?bookDescription(this.item)?.description??stored:stored);
    if(['species','style'].includes(this.item.type))context.editable=false;
    const safe=foundry.utils?.cleanHTML?foundry.utils.cleanHTML(description):description.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('\n','<br>');
    const editor=foundry.applications.ux?.TextEditor?.implementation;
    context.weaponBookRules=this.item.type==='weapon'?WEAPON_BOOK_RULES:null;
    context.descriptionHTML=editor?await editor.enrichHTML(safe,{secrets:this.item.isOwner,relativeTo:this.item}):safe;
    context.showDialConfig=['equipment','weapon'].includes(this.item.type)||Boolean(this.item.system.dial?.model);
    context.dialModels=options(Object.fromEntries(Object.keys(DIALS).map(key=>[key,key.toUpperCase()+' DIAL'])),this.item.system.dial?.model);context.isGM=game.user.isGM;context.isLegendary=this.item.type==='legendary';context.itemEffects=[...(this.item.effects??[])].map(effect=>({id:effect.id,name:effect.name,disabled:effect.disabled}));
    context.canOperateProfession=this.item.type==='profession'&&Boolean(this.item.actor?.isOwner);
    context.canLearnHaki=this.item.type==='hakiTalent'&&Boolean(this.item.actor?.isOwner);
    context.formPrefix=this.id??'op-item';
    const tabs=this.availableTabs();
    if(!tabs.some(tab=>tab.id===this.activeItemTab))this.activeItemTab='description';
    const activityTabs=[{id:'identity',label:'Identidade',icon:'tag'},{id:'activation',label:'Ativação',icon:'clapperboard'},{id:'effect',label:'Efeito',icon:'gear'}];
    const activitySections=[{id:'time',label:'Tempo',icon:'clock'},{id:'consumption',label:'Consumo',icon:'boxes-stacked'},{id:'target',label:'Alvo',icon:'bullseye'}];
    const activeActivity=this.activeActivityTab??'identity',activeSection=this.activeActivitySection??'time';
    context.activityTabs=activityTabs.map(tab=>({...tab,active:tab.id===activeActivity}));
    context.activityPanels=Object.fromEntries(activityTabs.map(tab=>[tab.id,tab.id===activeActivity]));
    context.activitySections=activitySections.map(tab=>({...tab,active:tab.id===activeSection}));
    context.activitySectionPanels=Object.fromEntries(activitySections.map(tab=>[tab.id,tab.id===activeSection]));
    context.itemSummaryTags=[context.activations?.find(entry=>entry.value===context.system.activity?.activation)?.label,context.system.activity?.range,context.system.activity?.duration,...(context.system.weapon?.properties??[])].filter(Boolean);
    return {...context,isConstructionCost:context.system.activity?.costMode==='construction',isWeapon:this.item.type==='weapon',ammunitionTypes:options(DAMAGE_TYPES,context.system.ammunitionType),costQuote:context.hasActivity?activityCost(this.item,context.system.activity,this.item.actor?.system??{},[...(this.item.actor?.items??[])]):null,costModes:options(['technique','auxiliary'].includes(this.item.type)?{final:'Custo final da fonte',construction:'Calcular a partir da construção'}:{final:'Custo final da fonte'},context.system.activity?.costMode),costFamilies:options({combat:'Técnica do estilo',fruit:'Técnica de Akuma no Mi'},context.system.activity?.costFamily),itemTabs:tabs.map(tab=>({...tab,active:tab.id===this.activeItemTab})),itemPanels:Object.fromEntries(tabs.map(tab=>[tab.id,tab.id===this.activeItemTab])),primaryAttributes:optionsForPrimary(this.item.system),isSave:context.system.resolution?.kind==='save',isAttack:context.system.resolution?.kind==='attack'};
  }
}
function optionsForPrimary(system){return options(ATTRIBUTES,system.primaryAttribute);}


/** Native equivalent of the old ActivitySheet: separate 500px window and nested activation tabs. */
export class NativeActivityEditor extends OriginalLayoutItemSheet {
  static DEFAULT_OPTIONS={classes:['op-native-activity'],position:{width:500,height:'auto'}};
  static PARTS={body:{template:'systems/oprpg-native/templates/legacy/activity.hbs',scrollable:['.op-item-body']}};
  get title(){return this.item.system.variants?.find(variant=>variant.id===this.selectedVariant)?.name??this.item.name;}
  async _prepareContext(options){
    if(this.selectedVariant&&!this.item.system.variants?.some(variant=>variant.id===this.selectedVariant))throw new Error('Esta atividade foi removida. Feche a janela e selecione outra.');
    if(this.editMode===undefined)this.editMode=this.item.isOwner;
    const context=await super._prepareContext(options);
    this._preparedVariantIndex=this.selectedVariant?this.item.system.variants.findIndex(variant=>variant.id===this.selectedVariant):-1;
    context.activityDisplayName=this.title;return context;
  }
  _processFormData(event,form,formData){
    if(this.selectedVariant&&this.item.system.variants?.[this._preparedVariantIndex]?.id!==this.selectedVariant)throw new Error('As atividades mudaram. Reabra esta janela antes de editar.');
    return super._processFormData(event,form,formData);
  }
}
