import {DIALS} from './dials.mjs';
import {OPRPGItemSheet} from './sheets.mjs';
import {ATTRIBUTES} from './rules.mjs';
import {DAMAGE_TYPES,SKILLS} from './engine.mjs';
import {activityCost,professionBenefitPlan} from './mechanics.mjs';
import {effectEditor} from './expanded-config-ui.mjs';

const options=(map,current)=>Object.entries(map).map(([value,label])=>({value,label,selected:value===current}));
const escape=value=>foundry.utils.escapeHTML(String(value??''));
const prompt=options=>foundry.applications.api.DialogV2.prompt({...options,classes:['oprpg-native','op-dialog','op-flow'],position:{width:680}});
const guarded=handler=>async function(...args){try{return await handler.apply(this,args);}catch(error){console.error('OP RPG',error);ui.notifications.error(error.message);}};

export class OriginalLayoutItemSheet extends OPRPGItemSheet {
  static DEFAULT_OPTIONS={classes:['oprpg-legacy','sheet','item'],position:{width:740,height:800},actions:{
    createItemEffect:guarded(function(){return effectEditor(this.item);}),
    editItemEffect:guarded(function(_event,target){const effect=this.item.effects.get(target.dataset.effectId);if(!effect)throw new Error('Efeito indisponível.');return effectEditor(this.item,effect);}),
    configureWeapon:guarded(async function(){
      if(!this.item.isOwner||this.item.type!=='weapon')throw new Error('Selecione uma arma que possa editar.');
      const source=this.item.toObject().system,category=source.tags.find(tag=>tag.startsWith('weaponCategory:'))?.slice(15)??'';
      const choice=await prompt({window:{title:'Categoria e propriedades da arma'},content:`<label>Categoria<select name="category"><option value="">Não definida</option>${[['armas-cortantes','Armas Cortantes'],['armas-de-fogo','Armas de Fogo'],['armas-especiais','Armas Especiais'],['armas-marciais','Armas Marciais']].map(([key,label])=>`<option value="${key}" ${key===category?'selected':''}>${label}</option>`).join('')}</select></label><label>Propriedades (uma por linha)<textarea name="properties">${escape(source.weapon.properties.join('\n'))}</textarea></label><p class="op-hint">A categoria permite consultar proficiências do personagem. Confira as exceções de cada propriedade na fonte.</p>`,ok:{label:'Salvar',callback:(_e,_b,app)=>{const fields=app.element.querySelector('form').elements;return {'system.tags':[...source.tags.filter(tag=>!tag.startsWith('weaponCategory:')),...(fields.category.value?[`weaponCategory:${fields.category.value}`]:[])],'system.weapon.properties':fields.properties.value.split(/\r?\n/).map(value=>value.trim()).filter(Boolean)};}}});
      if(choice)await this.item.update(choice);
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
  availableTabs(){return [{id:'description',label:'Descrição'},{id:'details',label:'Detalhes'},...(this.item.system.activity?[{id:'activities',label:'Atividades'}]:[]),{id:'benefits',label:'Progressão e benefícios'},{id:'effects',label:'Efeitos'}];}
  async _prepareContext(renderOptions){
    const context=await super._prepareContext(renderOptions);
    context.dialModels=options(Object.fromEntries(Object.keys(DIALS).map(key=>[key,key.toUpperCase()+' DIAL'])),this.item.system.dial?.model);context.isGM=game.user.isGM;context.isLegendary=this.item.type==='legendary';context.itemEffects=[...(this.item.effects??[])].map(effect=>({id:effect.id,name:effect.name,disabled:effect.disabled}));
    const tabs=this.availableTabs();
    if(!tabs.some(tab=>tab.id===this.activeItemTab))this.activeItemTab='description';
    return {...context,isWeapon:this.item.type==='weapon',ammunitionTypes:options(DAMAGE_TYPES,context.system.ammunitionType),costQuote:context.hasActivity?activityCost(this.item,context.system.activity,this.item.actor?.system??{},[...(this.item.actor?.items??[])]):null,costModes:options(['technique','auxiliary'].includes(this.item.type)?{final:'Custo final da fonte',construction:'Calcular a partir da construção'}:{final:'Custo final da fonte'},context.system.activity?.costMode),costFamilies:options({combat:'Técnica do estilo',fruit:'Técnica de Akuma no Mi'},context.system.activity?.costFamily),itemTabs:tabs.map(tab=>({...tab,active:tab.id===this.activeItemTab})),itemPanels:Object.fromEntries(tabs.map(tab=>[tab.id,tab.id===this.activeItemTab])),primaryAttributes:optionsForPrimary(this.item.system),isSave:context.system.resolution?.kind==='save',isAttack:context.system.resolution?.kind==='attack'};
  }
}
function optionsForPrimary(system){return options(ATTRIBUTES,system.primaryAttribute);}
