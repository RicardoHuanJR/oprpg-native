import {ATTRIBUTES, CATEGORIES, ACTIVATIONS, SHEET_TABS, creationChecklist, speciesSnapshot, d20Formula} from "./rules.mjs";
import {SKILLS,DAMAGE_TYPES} from "./engine.mjs";
import {damageActor,healActor,grantTemporary,spendHitDie,startLongRest,finishLongRest,finishShortRest,rollDamage,useActivity,activityFor} from "./services.mjs";
import {EFFECT_FIELDS,effectChange} from "./effect-fields.mjs";
import {awardAmbition,learnHakiTalent} from "./haki.mjs";
const {HandlebarsApplicationMixin} = foundry.applications.api;
const {ActorSheetV2, ItemSheetV2} = foundry.applications.sheets;
const guarded = handler => async function (...args) {
  try { return await handler.apply(this, args); } catch (error) { console.error("OP RPG", error); ui.notifications.error(error.message); }
};
const selectOptions = (map, selected) => Object.entries(map).map(([value, label]) => ({value, label, selected: value === selected}));
const escape=value=>foundry.utils.escapeHTML(String(value));
const dialog=()=>foundry.applications.api.DialogV2;
async function amountDialog(title,extra="") {
  return dialog().prompt({window:{title},content:`<label>Quantidade <input name="amount" type="number" min="0" step="1" value="0" required></label>${extra}`,ok:{callback:(_event,_button,app)=>({amount:Number(app.form.elements.amount.value),form:app.form})}});
}

export class OPRPGActorSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["oprpg-native"], tag: "form", position: {width: 1080, height: 830}, window: {resizable: true},
    form: {submitOnChange: true, closeOnSubmit: false},
    actions: {
      selectTab: guarded(function (event, target) {
        const tab = target.dataset.tab;
        if (!SHEET_TABS.some(item=>item.id===tab)) return;
        if (tab === "creation" && (!game.settings.get("oprpg-native", "creationAssistant") || this.actor.type !== "character")) return;
        this.activeTab = tab;
        return this.render({force: true});
      }),
      rollAttribute: guarded(function (event, target) { return this.actor.rollAttribute(target.dataset.attribute, {save: target.dataset.save === "true", advantage: event.shiftKey, disadvantage: event.altKey}); }),
      rollSkill:guarded(function(event,target){return this.actor.rollSkill(target.dataset.skill,{advantage:event.shiftKey,disadvantage:event.altKey});}),
      damage:guarded(async function(){
        const types=Object.entries(DAMAGE_TYPES).map(([id,label])=>`<option value="${id}">${label}</option>`).join("");
        const choice=await amountDialog("Aplicar dano",`<label>Tipo<select name="type">${types}</select></label><label>Redução da fonte<input name="reduction" type="number" min="0" value="0"></label>`);
        if(!choice) return;
        const result=await damageActor(this.actor,{components:[{type:choice.form.elements.type.value,amount:choice.amount,reduction:Number(choice.form.elements.reduction.value)}]});
        ui.notifications.info(`${result.realDamage} de dano após defesas e temporários.`);
      }),
      heal:guarded(async function(){const choice=await amountDialog("Recuperar PV");if(choice) await healActor(this.actor,choice.amount);}),
      temporary:guarded(async function(){const choice=await amountDialog("PV temporários",'<label>Escolha<select name="choice"><option value="replace">Substituir os atuais</option><option value="keep">Manter os atuais</option></select></label>');if(choice)await grantTemporary(this.actor,choice.amount,choice.form.elements.choice.value);}),
      hitDie:guarded(function(){return spendHitDie(this.actor);}),
      startRest:guarded(async function(){await startLongRest(this.actor);ui.notifications.info("Início do descanso longo registrado no tempo do mundo.");}),
      startShortRest:guarded(async function(){await startLongRest(this.actor,"short");ui.notifications.info("Início do descanso curto registrado.");}),
      finishShortRest:guarded(function(){return finishShortRest(this.actor);}),
      finishRest:guarded(async function(){
        await finishLongRest(this.actor);
      }),
      addResource:guarded(async function(){if(!this.actor.isOwner)throw new Error("Sem permissão.");await this.actor.update({"system.resources":[...this.actor.system.resources.map(r=>({...r})),{id:foundry.utils.randomID(),name:"Novo recurso",value:0,max:0,recovery:"none",source:""}]});}),
      awardAmbition:guarded(async function(){const choice=await amountDialog("Conceder Pontos de Ambição");if(choice){const result=await awardAmbition(this.actor,choice.amount);ui.notifications.info(`${result.awarded} PA concedidos; ${result.lost} excedentes ao limite.`);}}),
      deleteItem:guarded(async function(event,target){if(!this.actor.isOwner)throw new Error("Sem permissão.");const item=this.actor.items.get(target.dataset.itemId);if(item&&await dialog().confirm({window:{title:"Remover conteúdo"},content:`<p>Remover ${escape(item.name)} desta ficha?</p>`}))await item.delete();}),
      toggleEquipment:guarded(function(event,target){const item=this.actor.items.get(target.dataset.itemId);if(!item?.isOwner)throw new Error("Sem permissão.");return item.update({"system.equipment.equipped":!item.system.equipment.equipped});}),
      createEffect:guarded(async function(){
        if(!game.user.isGM)throw new Error("O mestre cria os modificadores nesta etapa.");
        const fields=EFFECT_FIELDS.map(field=>`<option value="${field.path}">${escape(field.label)}</option>`).join("");
        const selected=await dialog().prompt({window:{title:"Novo efeito nativo"},content:`<label>Nome<input name="name" value="Novo efeito" required></label><label>Campo<select name="path">${fields}</select></label><label>Operação<select name="operator"><option value="add">Somar</option><option value="subtract">Subtrair</option><option value="multiply">Multiplicar</option><option value="override">Definir valor</option></select></label><label>Valor<input name="value" type="number" value="1" step="any" required></label><label>Duração em segundos (vazio: permanente)<input name="duration" type="number" min="0"></label>`,ok:{callback:(_e,_b,app)=>{const form=app.form.elements;return {name:form.name.value,change:effectChange(form.path.value,form.operator.value,Number(form.value.value)),duration:form.duration.value===""?null:Number(form.duration.value)};}}});
        if(selected)await this.actor.createEmbeddedDocuments("ActiveEffect",[{name:selected.name,img:"icons/svg/lightning.svg",system:{changes:[selected.change]},duration:{value:selected.duration,units:"seconds",expiry:selected.duration===null?null:"turnStart"}}]);
      }),
      editEffect:guarded(function(event,target){if(!game.user.isGM)throw new Error("O mestre edita os efeitos.");return this.actor.effects.get(target.dataset.effectId)?.sheet.render({force:true});}),
      toggleEffect:guarded(function(event,target){if(!game.user.isGM)throw new Error("O mestre controla os efeitos.");const effect=this.actor.effects.get(target.dataset.effectId);return effect?.update({disabled:!effect.disabled});}),
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
  static PARTS = {body: {template: "systems/oprpg-native/templates/actor-expanded.hbs",templates:["systems/oprpg-native/templates/groups.hbs"], scrollable: [""]}};
  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const system = this.actor.system;
    const showAssistant = game.settings.get("oprpg-native", "creationAssistant") && this.actor.type === "character";
    if (this.activeTab === "creation" && !showAssistant) this.activeTab = "details";
    const tab = this.activeTab ?? "details";
    const groups=Object.entries(CATEGORIES).filter(([type])=>type!=="species"&&(type!=="legendary"||(game.user.isGM&&this.actor.type==="npc"))).map(([type,label])=>({type,label,items:this.actor.items.filter(item=>item.type===type).map(item=>({id:item.id,img:item.img,name:item.name,grade:item.type==="technique"?item.system.grade:null,homebrew:item.system.origin==="homebrew",quantity:item.system.equipment?.quantity,weight:item.system.equipment?.weight,equipped:item.system.equipment?.equipped,cost:item.system.activity?.powerCost}))}));
    const groupList=types=>groups.filter(group=>types.includes(group.type));
    return {...context, actor: this.actor, system, editable: this.actor.isOwner, isShip:this.actor.type==="ship", isNPC: this.actor.type === "npc", isGM: game.user.isGM,
      showAssistant, detailsActive: tab === "details", contentActive: tab === "content", creationActive: tab === "creation",
      tabs:SHEET_TABS.filter(item=>(item.id!=="creation"||showAssistant)&&(this.actor.type!=="ship"||["details","inventory","effects"].includes(item.id))).map(item=>({...item,active:item.id===tab})),
      active:Object.fromEntries(SHEET_TABS.map(item=>[item.id,item.id===tab])),
      attributes: system.attributes?Object.entries(ATTRIBUTES).map(([id, label]) => ({id, label, ...system.attributes[id], modifier: system.attributes[id].modifier})):[],
      skills:system.skills?Object.entries(SKILLS).map(([id,config])=>({id,...config,...system.skills[id]})):[],
      checklist: this.actor.type==="ship"?[]:creationChecklist(system),
      inventoryGroups:groupList(["weapon","equipment"]),featureGroups:groupList(["feature","style","personalization","legendary"]),techniqueGroups:groupList(["technique","auxiliary"]),trainingGroups:groupList(["training","profession"]),powerGroups:groupList(["hakiTalent","fruit"]),
      effects:(this.actor.effects??[]).map(effect=>({id:effect.id,name:effect.name,img:effect.img,disabled:effect.disabled,duration:effect.duration?.label??""})),
      species: game.items.filter(item => item.type === "species" && item.testUserPermission(game.user, "OBSERVER")).map(item => ({id: item.id, name: item.name, homebrew: item.system.origin === "homebrew"})),
      groups
    };
  }
  _processFormData(event,form,formData) {
    const data=super._processFormData(event,form,formData);
    if(data.system?.resources && !Array.isArray(data.system.resources))data.system.resources=Object.values(data.system.resources);
    return data;
  }
}

export class OPRPGItemSheet extends HandlebarsApplicationMixin(ItemSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["oprpg-native"], tag: "form", position: {width: 610, height: 730}, window: {resizable: true},
    form: {submitOnChange: true, closeOnSubmit: false},
    actions: {
      learnHakiTalent:guarded(function(){return learnHakiTalent(this.item);}),
      selectVariant:guarded(function(event,target){this.selectedVariant=target.dataset.variantId||null;return this.render({force:true});}),
      addVariant:guarded(async function(){
        if(!this.item.isOwner||!this.item.system.activity)throw new Error("Sem permissão ou atividade.");
        const source=this.item.toObject().system;const id=foundry.utils.randomID();
        await this.item.update({"system.variants":[...(source.variants??[]),{id,name:"Nova alternativa",activity:source.activity,resolution:source.resolution}]});
        this.selectedVariant=id;return this.render({force:true});
      }),
      removeVariant:guarded(async function(){
        if(!this.item.isOwner||!this.selectedVariant)return;
        if(await dialog().confirm({window:{title:"Remover alternativa"},content:"<p>Remover esta atividade alternativa?</p>"})){
          await this.item.update({"system.variants":this.item.toObject().system.variants.filter(variant=>variant.id!==this.selectedVariant)});
          this.selectedVariant=null;return this.render({force:true});
        }
      }),
      useActivity:guarded(async function(event){if(this._using)return;this._using=true;try{const result=await useActivity(this.item,{requestId:foundry.utils.randomID(),variantId:this.selectedVariant,advantage:event.shiftKey,disadvantage:event.altKey});if(result.deliveryError)ui.notifications.warn("Recursos confirmados, mas o cartão falhou. Não repita o uso para tentar reenviar o cartão.");return result;}finally{this._using=false;}}),
      rollDamage:guarded(function(event){return rollDamage(this.item,{critical:event.shiftKey,variantId:this.selectedVariant});}),
      rollActivity: guarded(async function (event) {
      const actor = this.item.actor;
      if (!actor?.isOwner) throw new Error("Abra um item pertencente a um ator sob seu controle.");
      const {activity,resolution,name:activityName} = activityFor(this.item,this.selectedVariant);
      if (!activity) throw new Error("Este conteúdo não possui atividade.");
      const bonus=resolution.attackBonus??(resolution.addAttributeToAttack?actor.system.attributes[activity.attribute].modifier:0)+(activity.proficient?actor.system.proficiency.bonus:0);
      const formula = d20Formula({advantage: event.shiftKey, disadvantage: event.altKey, modifier:bonus-2*actor.system.exhaustion});
      const kind = CATEGORIES[this.item.type];
      const name = foundry.utils.escapeHTML(activityName);
      return new Roll(formula).toMessage({speaker: ChatMessage.getSpeaker({actor}), flavor: `${kind}: ${name} — rolagem de referência; custos e aplicação manuais`}, {rollMode: game.settings.get("core", "rollMode")});
    })}
  };
  static PARTS = {body: {template: "systems/oprpg-native/templates/item.hbs", scrollable: [""]}};
  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const source=this.item.system;
    const variantIndex=source.variants?.findIndex(variant=>variant.id===this.selectedVariant)??-1;
    if(variantIndex<0)this.selectedVariant=null;
    const selected=source.activity?activityFor(this.item,this.selectedVariant):null;
    const system={...source,activity:selected?.activity??source.activity,resolution:selected?.resolution??source.resolution};
    return {...context, item: this.item, system, editable: this.item.isOwner, category: CATEGORIES[this.item.type],
      isSpecies: this.item.type === "species", isTechnique: this.item.type === "technique", hasActivity: Boolean(system.activity),
      isHakiTalent:this.item.type==="hakiTalent",hakiFocus:selectOptions({armament:"Armamento",observation:"Observação",king:"Rei"},system.hakiTalent?.focus),hakiStages:selectOptions({Latente:"Latente",Inexperiente:"Inexperiente",Treinado:"Treinado",Perito:"Perito"},system.hakiTalent?.minimumStage),
      canRoll: Boolean(this.item.actor?.isOwner && system.activity),isProgression:["style","profession"].includes(this.item.type),
      activityPath:variantIndex<0?"system.activity":`system.variants.${variantIndex}.activity`,resolutionPath:variantIndex<0?"system.resolution":`system.variants.${variantIndex}.resolution`,
      variants:(source.variants??[]).map(variant=>({id:variant.id,name:variant.name,selected:variant.id===this.selectedVariant})),hasSelectedVariant:variantIndex>=0,
      variantNamePath:`system.variants.${variantIndex}.name`,variantLabel:variantIndex>=0?source.variants[variantIndex].name:"",
      resolutionKinds:selectOptions({attack:"Ataque",save:"Impor salvaguarda",healing:"Cura",utility:"Utilitária / passiva"},system.resolution?.kind),
      saveAttributes:selectOptions(ATTRIBUTES,system.resolution?.saveAttribute),saveOutcomes:selectOptions({none:"Sem dano no sucesso",half:"Metade do dano no sucesso"},system.resolution?.onSave),
      recoveries:selectOptions({none:"Sem recuperação automática",short:"Descanso curto",long:"Descanso longo",shortOrLong:"Curto ou longo",day:"Diária (manual nesta etapa)"},system.uses?.recovery),
      origins: optionsList(system.origin),
      damageTypes:selectOptions(DAMAGE_TYPES,system.resolution?.damageType),
      attributes: selectOptions(ATTRIBUTES, system.activity?.attribute), activations: selectOptions(ACTIVATIONS, system.activity?.activation)};
  }
  _processFormData(event,form,formData){
    const data=super._processFormData(event,form,formData);
    if(data.system?.variants&&!Array.isArray(data.system.variants)){
      const variants=this.item.toObject().system.variants;
      for(const [index,delta]of Object.entries(data.system.variants)){
        if(!/^\d+$/.test(index)||!variants[Number(index)])throw new Error("Índice de alternativa inválido.");
        variants[Number(index)]=foundry.utils.mergeObject(variants[Number(index)],delta,{inplace:false});
      }
      data.system.variants=variants;
    }
    return data;
  }
}
function optionsList(selected) { return selectOptions({homebrew: "Homebrew / Personalizado", official: "Referência oficial"}, selected); }
