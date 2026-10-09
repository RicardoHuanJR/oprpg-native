import {consumeEquipment} from "./inventory.mjs";
import {activityUseDialog} from './activity-use-ui.mjs';
import {RULE_KINDS} from "./item-rules.mjs";
import {configureAdvancement,configureTrainingException,configureRequirements,configureStyleProficiencies,configureItemRule} from "./item-config-ui.mjs";
import {progressionDialog,advanceDialog,chooseOrigin,trainingDialog} from "./progression-ui.mjs";
import {recordTrainingDay} from "./progression-services.mjs";
import {headerImage,primaryStyle} from "./advancement.mjs";
import {ATTRIBUTES, CATEGORIES, ACTIVATIONS, SHEET_TABS, creationChecklist, speciesSnapshot, d20Formula} from "./rules.mjs";
import {SKILLS,DAMAGE_TYPES} from "./engine.mjs";
import {damageActor,healActor,grantTemporary,spendHitDie,startLongRest,finishLongRest,finishShortRest,rollDamage,useActivity,activityFor} from "./services.mjs";
import {EFFECT_FIELDS,effectChange} from "./effect-fields.mjs";
import {awardAmbition,learnHakiTalent} from "./haki.mjs";
import {actorNumbers} from "./actor-numbers.mjs";
const {HandlebarsApplicationMixin} = foundry.applications.api;
const {ActorSheetV2, ItemSheetV2} = foundry.applications.sheets;
const guarded = handler => async function (...args) {
  try { return await handler.apply(this, args); } catch (error) { console.error("OP RPG", error); ui.notifications.error(error.message); }
};
const selectOptions = (map, selected) => Object.entries(map).map(([value, label]) => ({value, label, selected: value === selected}));
const escape=value=>foundry.utils.escapeHTML(String(value));
const dialog=()=>Object.fromEntries(['prompt','confirm'].map(method=>[method,options=>foundry.applications.api.DialogV2[method]({...options,classes:[...(options.classes??[]),'oprpg-native','op-dialog']})]));
function editToggle(sheet,context,owner) {
 const header=sheet.element.querySelector('.window-header');if(!header||!owner)return;
 let toggle=header.querySelector('[data-action="toggleEditMode"]');
 if(!toggle){toggle=document.createElement('button');toggle.type='button';toggle.className='header-control op-edit-mode';toggle.dataset.action='toggleEditMode';toggle.setAttribute('aria-label','Alternar edição da ficha');toggle.innerHTML='<i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>';header.prepend(toggle);}
 toggle.title=context.editable?'Concluir edição':'Editar ficha';toggle.setAttribute('aria-pressed',String(context.editable));
}
async function amountDialog(title,extra="") {
  return dialog().prompt({window:{title},content:`<label>Quantidade <input name="amount" type="number" min="0" step="1" value="0" required></label>${extra}`,ok:{callback:(_event,_button,app)=>({amount:Number(app.element.querySelector("form").elements.amount.value),form:app.element.querySelector("form")})}});
}

export class OPRPGActorSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["oprpg-native","op-document-sheet"], tag: "form", position: {width: 1080, height: 830}, window: {resizable: true},
    form: {submitOnChange: true, closeOnSubmit: false},
    actions: {
      openProgression:guarded(function(){return this.actor.type==="character"?progressionDialog(this.actor):OPRPGActorSheet.DEFAULT_OPTIONS.actions.configureResources.call(this);}),
      advanceLevel:guarded(function(){return advanceDialog(this.actor);}),
      learnTraining:guarded(function(){return trainingDialog(this.actor);}),
      chooseBackground:guarded(function(){return chooseOrigin(this.actor,"background");}),
      recordTrainingDay:guarded(async function(_event,target){const item=this.actor.items.get(target.dataset.itemId);const yes=await dialog().confirm({window:{title:"Registrar dia de treinamento"},content:"<p>Foram dedicadas pelo menos 6 horas a este treino, sem batalhas ou exercício da profissão? Confirme também a presença do tutor, quando necessário.</p>"});if(yes)await recordTrainingDay(this.actor,item);}),
      configureSituations:guarded(async function(){if(!this.actor.isOwner)throw new Error("Sem permissão.");const options=[...new Set(this.actor.items.flatMap(item=>(item.system.rules??[]).map(rule=>rule.condition?.context).filter(Boolean)))];const choice=await dialog().prompt({window:{title:"Condições atuais"},content:`<p>Marque apenas situações confirmadas pelo Narrador.</p>${options.map((name,index)=>`<label class="op-checkbox"><input name="context-${index}" type="checkbox" ${this.actor.system.situations.includes(name)?"checked":""}>${escape(name)}</label>`).join("")||"<p>Nenhuma situação configurada nos itens.</p>"}`,ok:{callback:(_e,_b,app)=>options.filter((_,index)=>app.element.querySelector("form").elements.namedItem(`context-${index}`).checked)}});if(choice)await this.actor.update({"system.situations":choice});}),
      consumeEquipment:guarded(function(_event,target){return consumeEquipment(this.actor,this.actor.items.get(target.dataset.itemId));}),
      toggleSidebar:guarded(function(){this.sidebarCollapsed=!this.sidebarCollapsed;return this.render({force:true});}),
      toggleEditMode:guarded(function(){if(!this.actor.isOwner)return;this.editMode=this.editMode===false;return this.render({force:true});}),
      setExhaustion:guarded(function(_event,target){if(!this.actor.isOwner)throw new Error("Sem permissão.");const level=Number(target.dataset.level);if(!Number.isInteger(level)||level<1||level>6)throw new Error("Nível de exaustão inválido.");return this.actor.update({"system.exhaustion":level===this.actor.system.exhaustion?level-1:level});}),
      toggleFavorite:guarded(function(_event,target){if(!this.actor.isOwner)throw new Error("Sem permissão.");const item=this.actor.items.get(target.dataset.itemId);if(!item)throw new Error("Conteúdo indisponível.");const favorites=this.actor.system.favorites??[];return this.actor.update({"system.favorites":favorites.includes(item.id)?favorites.filter(id=>id!==item.id):[...favorites,item.id]});}),
      chooseHeaderArt:guarded(function(){if(!this.actor.isOwner)throw new Error("Sem permissão.");return new foundry.applications.apps.FilePicker.implementation({type:"image",current:this.actor.system.appearance.wallpaper,callback:path=>this.actor.update({"system.appearance.wallpaper":path})}).render({force:true});}),
      openPowers:guarded(function(){if(this.actor.type==="ship")return;this.activeTab="powers";return this.render({force:true});}),
      selectTab: guarded(function (event, target) {
        const tab = target.dataset.tab;
        if (!SHEET_TABS.some(item=>item.id===tab)) return;
        if (tab === "creation" && (!game.settings.get("oprpg-native", "creationAssistant") || this.actor.type !== "character")) return;
        this.activeTab = tab;
        return this.render({force: true});
      }),
      rollAttribute: guarded(function (event, target) { return this.actor.rollAttribute(target.dataset.attribute, {save: target.dataset.save === "true", advantage: event.shiftKey, disadvantage: event.altKey}); }),
      rollSkill:guarded(function(event,target){return this.actor.rollSkill(target.dataset.skill,{advantage:event.shiftKey,disadvantage:event.altKey});}),
      configureResources:guarded(async function(){
        if(!this.actor.isOwner)throw new Error("Sem permissão de edição.");
        const system=this.actor.system;
        const chosen=await dialog().prompt({window:{title:"Configurar PV e PP"},content:`<label>PV máximos<input name="hp" type="number" min="0" value="${system.vitality.max}" required></label><label>PP máximos (vazio: ${this.actor.type==="npc"?"sem máximo informado":"4 × nível"})<input name="pp" type="number" min="0" value="${system.power.maxOverride??""}"></label><label>PV negativos<input name="negative" type="number" min="0" value="${system.vitality.negative}" required></label>`,ok:{callback:(_e,_b,app)=>{const form=app.element.querySelector("form").elements;return {"system.vitality.max":Number(form.hp.value),"system.power.maxOverride":form.pp.value===""?null:Number(form.pp.value),"system.vitality.negative":Number(form.negative.value)};}}});
        if(chosen)await this.actor.update(chosen);
      }),
      useItem:guarded(async function(event,target){
        if(this._using)return;this._using=true;
        try{const item=this.actor.items.get(target.dataset.itemId);if(!item?.system.activity)throw new Error("Este conteúdo não possui atividade.");
          const result=await activityUseDialog(item,{requestId:foundry.utils.randomID(),advantage:event.shiftKey,disadvantage:event.altKey});
          if(result?.deliveryError)ui.notifications.warn("Recursos confirmados, mas o cartão falhou. Não repita o uso.");return result;
        }finally{this._using=false;}
      }),
      configureSkill:guarded(async function(_event,target){
        if(!this.actor.isOwner)throw new Error("Sem permissão de edição.");
        const id=target.dataset.skill;if(!Object.hasOwn(SKILLS,id))throw new Error("Perícia desconhecida.");
        const skill=this.actor.system.skills[id];
        const options=selectOptions({0.5:"Metade",1:"Normal",1.5:"Uma vez e meia",2:"Dobro"},String(skill.multiplier)).map(option=>`<option value="${option.value}" ${option.selected?"selected":""}>${option.label}</option>`).join("");
        const chosen=await dialog().prompt({window:{title:`Configurar ${SKILLS[id].label}`},content:`<p>Atributo: ${ATTRIBUTES[SKILLS[id].attribute]}. Exaustão entra automaticamente na rolagem.</p><label>Aplicação da proficiência<select name="multiplier">${options}</select></label><label>Bônus da característica<input name="bonus" type="number" value="${skill.bonus}" step="1"></label><label>Bônus total informado pela fonte (vazio: calcular)<input name="override" type="number" value="${skill.override??""}" step="1"></label>`,ok:{callback:(_e,_b,app)=>{const form=app.element.querySelector("form").elements;return {multiplier:Number(form.multiplier.value),bonus:Number(form.bonus.value),override:form.override.value===""?null:Number(form.override.value)};}}});
        if(chosen)await this.actor.update(Object.fromEntries(Object.entries(chosen).map(([key,value])=>[`system.skills.${id}.${key}`,value])));
      }),
      togglePortrait:guarded(function(){if(!this.actor.isOwner)throw new Error("Sem permissão.");return this.actor.update({"system.appearance.portraitMode":this.actor.system.appearance.portraitMode==="token"?"actor":"token"});}),
      damage:guarded(async function(){
        const types=Object.entries(DAMAGE_TYPES).map(([id,label])=>`<option value="${id}">${label}</option>`).join("");
        const choice=await amountDialog("Aplicar dano",`<label>Tipo<select name="type">${types}</select></label><label>Redução da fonte<input name="reduction" type="number" min="0" value="0"></label>`);
        if(!choice) return;
        const result=await damageActor(this.actor,{components:[{type:choice.form.elements.type.value,amount:choice.amount,reduction:Number(choice.form.elements.reduction.value)}]});
        ui.notifications.info(`${result.realDamage} de dano após defesas e temporários.`);
      }),
      heal:guarded(async function(){const choice=await amountDialog("Recuperar PV");if(choice) await healActor(this.actor,choice.amount);}),
      temporary:guarded(async function(){const choice=await amountDialog("PV temporários",'<label>Escolha<select name="choice"><option value="replace">Substituir os atuais</option><option value="keep">Manter os atuais</option></select></label>');if(choice)await grantTemporary(this.actor,choice.amount,choice.form.elements.choice.value);}),
      hitDie:guarded(async function(){const pools=this.actor.system.hitDice.pools??[];if(pools.length<2)return spendHitDie(this.actor,pools[0]?.faces);const faces=await dialog().prompt({window:{title:"Escolher Dado de Vida"},content:`<label>Tipo<select name="faces">${pools.filter(p=>p.available>0).map(p=>`<option value="${p.faces}">d${p.faces} · ${p.available} disponíveis</option>`).join("")}</select></label>`,ok:{callback:(_e,_b,app)=>Number(app.element.querySelector("form").elements.faces.value)}});if(faces)return spendHitDie(this.actor,faces);}),
      startRest:guarded(async function(){await startLongRest(this.actor);ui.notifications.info("Início do descanso longo registrado no tempo do mundo.");}),
      startShortRest:guarded(async function(){await startLongRest(this.actor,"short");ui.notifications.info("Início do descanso curto registrado.");}),
      finishShortRest:guarded(function(){return finishShortRest(this.actor);}),
      finishRest:guarded(async function(){
        const pools=this.actor.system.hitDice.pools??[];let selected=null;
        if(pools.length>1){const limit=Math.min(pools.reduce((sum,p)=>sum+p.max-p.available,0),Math.max(1,Math.floor(this.actor.system.hitDice.max/2)));selected=await dialog().prompt({window:{title:"Recuperar Dados de Vida"},content:`<p>Escolha ${limit} Dado(s) de Vida.</p>${pools.map(p=>`<label>d${p.faces} — ${p.max-p.available} gastos<input type="number" min="0" max="${p.max-p.available}" name="dice-${p.faces}" value="0"></label>`).join("")}`,ok:{callback:(_e,_b,app)=>Object.fromEntries(pools.map(p=>[p.faces,Number(app.element.querySelector("form").elements.namedItem(`dice-${p.faces}`).value)]))}});if(!selected)return;}
        await finishLongRest(this.actor,undefined,selected);
      }),
      addResource:guarded(async function(){if(!this.actor.isOwner)throw new Error("Sem permissão.");await this.actor.update({"system.resources":[...this.actor.system.resources.map(r=>({...r})),{id:foundry.utils.randomID(),name:"Novo recurso",value:0,max:0,recovery:"none",source:""}]});}),
      awardAmbition:guarded(async function(){const choice=await amountDialog("Conceder Pontos de Ambição");if(choice){const result=await awardAmbition(this.actor,choice.amount);ui.notifications.info(`${result.awarded} PA concedidos; ${result.lost} excedentes ao limite.`);}}),
      deleteItem:guarded(async function(event,target){if(!this.actor.isOwner)throw new Error("Sem permissão.");const item=this.actor.items.get(target.dataset.itemId);if(item?.getFlag("oprpg-native","grantReceipt"))throw new Error("Este item pertence a uma escolha de progressão. Confira sua origem na janela de Progressão antes de removê-lo.");if(item&&await dialog().confirm({window:{title:"Remover conteúdo"},content:`<p>Remover ${escape(item.name)} desta ficha?</p>`}))await item.delete();}),
      toggleEquipment:guarded(function(event,target){const item=this.actor.items.get(target.dataset.itemId);if(!item?.isOwner)throw new Error("Sem permissão.");if(!["weapon","equipment"].includes(item.type))throw new Error("Este conteúdo não é equipamento.");return item.update({"system.equipment.equipped":!item.system.equipment.equipped});}),
      createEffect:guarded(async function(){
        if(!game.user.isGM)throw new Error("O mestre cria os modificadores nesta etapa.");
        const fields=EFFECT_FIELDS.map(field=>`<option value="${field.path}">${escape(field.label)}</option>`).join("");
        const selected=await dialog().prompt({window:{title:"Novo efeito nativo"},content:`<label>Nome<input name="name" value="Novo efeito" required></label><label>Campo<select name="path">${fields}</select></label><label>Operação<select name="operator"><option value="add">Somar</option><option value="subtract">Subtrair</option><option value="multiply">Multiplicar</option><option value="override">Definir valor</option></select></label><label>Valor<input name="value" type="number" value="1" step="any" required></label><label>Duração em segundos (vazio: permanente)<input name="duration" type="number" min="0"></label>`,ok:{callback:(_e,_b,app)=>{const form=app.element.querySelector("form").elements;return {name:form.name.value,change:effectChange(form.path.value,form.operator.value,Number(form.value.value)),duration:form.duration.value===""?null:Number(form.duration.value)};}}});
        if(selected)await this.actor.createEmbeddedDocuments("ActiveEffect",[{name:selected.name,img:"icons/svg/lightning.svg",system:{changes:[selected.change]},duration:{value:selected.duration,units:"seconds",expiry:selected.duration===null?null:"turnStart"}}]);
      }),
      editEffect:guarded(function(event,target){if(!game.user.isGM)throw new Error("O mestre edita os efeitos.");return this.actor.effects.get(target.dataset.effectId)?.sheet.render({force:true});}),
      toggleEffect:guarded(function(event,target){if(!game.user.isGM)throw new Error("O mestre controla os efeitos.");const effect=this.actor.effects.get(target.dataset.effectId);return effect?.update({disabled:!effect.disabled});}),
      editItem: guarded(function (event, target) { return this.actor.items.get(target.dataset.itemId)?.sheet.render({force: true}); }),
      browseInventory:guarded(async function(){if(!this.actor.isOwner)throw new Error("Sem permissão.");const {contentPicker}=await import("./progression-ui.mjs");const {resolveContent}=await import("./progression-services.mjs");const type=await dialog().prompt({window:{title:"Adicionar ao inventário"},content:'<label>Tipo<select name="kind"><option value="weapon">Arma</option><option value="equipment">Equipamento / munição</option></select></label>',ok:{callback:(_e,_b,app)=>app.element.querySelector("form").elements.kind.value}});if(!type)return;const uuid=await contentPicker(type,"Escolher item");if(!uuid)return;const item=await resolveContent(uuid);const data=item.toObject?item.toObject():structuredClone(item);delete data._id;delete data.id;delete data.uuid;delete data.folder;delete data.ownership;await this.actor.createEmbeddedDocuments("Item",[data]);}),
      createItem: guarded(async function (event, target) {
        if (!this.actor.isOwner) throw new Error("Sem permissão de edição.");
        const type = target.dataset.type;
        if (!Object.hasOwn(CATEGORIES, type) || type === "species") throw new Error("Tipo inválido.");
        if (type === "legendary" && (!game.user.isGM || this.actor.type !== "npc")) throw new Error("Ações lendárias são configuradas pelo mestre em NPCs nesta versão.");
        const [item] = await this.actor.createEmbeddedDocuments("Item", [{name: `Nova ${CATEGORIES[type]}`, type}]);
        return item.sheet.render({force: true});
      }),
      applySpecies:guarded(function(){return chooseOrigin(this.actor,"species");}),
      createSpecies: guarded(async function () {
        if (!game.user.isGM) throw new Error("Nesta versão, o mestre cria as espécies.");
        const item = await Item.create({name: "Nova espécie personalizada", type: "species", system: {origin: "homebrew"}});
        return item.sheet.render({force: true});
      })
    }
  };
  static PARTS = {body: {template: "systems/oprpg-native/templates/actor-expanded.hbs",templates:["systems/oprpg-native/templates/groups.hbs"], scrollable: [""]}};
  async _onDropItem(event,item) {
    if(!this.actor.isOwner)return null;
    if(item.parent?.uuid===this.actor.uuid)return super._onDropItem(event,item);
    if(this.actor.type==='character'&&['style','species','background','training'].includes(item.type)){
      try{if(item.type==='style')await advanceDialog(this.actor,item.uuid);else if(item.type==='training')await trainingDialog(this.actor,item.uuid);else await chooseOrigin(this.actor,item.type,item.uuid);}catch(error){ui.notifications.error(error.message);}
      return null;
    }
    return super._onDropItem(event,item);
  }
  async _onRender(context,options) {
    await super._onRender(context,options);
    editToggle(this,context,this.actor.isOwner);
    for(const field of this.element.querySelectorAll('.op-body input,.op-body select,.op-body textarea,.op-sidebar input,.op-sidebar select,.op-sidebar textarea'))field.disabled=!context.editable;
    for(const button of this.element.querySelectorAll('[data-action="rollAttribute"],[data-action="rollSkill"],[data-action="useItem"]'))button.disabled=!context.canUse;
    for(const portrait of this.element.querySelectorAll('.op-portrait img[data-fallback]')) {
      const fallback=()=>{if(portrait.dataset.fallbackUsed)return;portrait.dataset.fallbackUsed="true";portrait.src=portrait.dataset.fallback;};
      portrait.addEventListener("error",fallback,{once:true});
      if(portrait.complete&&!portrait.naturalWidth)fallback();
    }
  }
  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const system = this.actor.system;
    const numbers=this.actor.type==="ship"?null:actorNumbers(system,this.actor.type);
    const showAssistant = game.settings.get("oprpg-native", "creationAssistant") && this.actor.type === "character";
    if ((this.activeTab === "creation" && !showAssistant)||(this.actor.type==="ship"&&!['details','inventory','effects'].includes(this.activeTab))) this.activeTab = "details";
    const tab = this.activeTab ?? "details";
    const groups=Object.entries(CATEGORIES).filter(([type])=>type!=="species"&&(type!=="legendary"||(game.user.isGM&&this.actor.type==="npc"))).map(([type,label])=>({type,label,items:this.actor.items.filter(item=>item.type===type).map(item=>({id:item.id,img:item.img,name:item.name,grade:item.type==="technique"?item.system.grade:null,homebrew:item.system.origin==="homebrew",consumable:item.system.equipment?.consumable,trainingProgress:item.type==="training"?(item.system.training?.state==="learned"?"Aprendido":`${item.system.training?.completedDays??0}/${item.system.training?.requiredDays??0} dias`):null,inTraining:item.system.training?.state==="inProgress",quantity:item.system.equipment?.quantity,weight:item.system.equipment?.weight,equipped:item.system.equipment?.equipped,isEquipment:["weapon","equipment"].includes(item.type),canUse:Boolean(item.system.activity)&&item.system.activity.activation!=="passive",activation:ACTIVATIONS[item.system.activity?.activation],cost:item.system.activity?.powerCost}))}));
    const groupList=types=>groups.filter(group=>types.includes(group.type));
    return {...context, actor: this.actor, system, editable: this.actor.isOwner&&this.editMode!==false, canUse:this.actor.isOwner, isShip:this.actor.type==="ship", isNPC: this.actor.type === "npc", isGM: game.user.isGM,
      portraitImage:system.appearance?.portraitMode==="token"?(this.actor.token?.texture?.src??this.actor.prototypeToken?.texture?.src??this.actor.img):this.actor.img,
      tokenPortrait:system.appearance?.portraitMode==="token",isCharacter:this.actor.type==="character",
      sidebarCollapsed:Boolean(this.sidebarCollapsed),
      exhaustionLeft:[1,2,3].map(level=>({level,filled:level<=system.exhaustion})),exhaustionRight:[4,5,6].map(level=>({level,filled:level<=system.exhaustion})),
      favorites:this.actor.items.filter(item=>(system.favorites??[]).includes(item.id)).map(item=>({id:item.id,name:item.name,img:item.img,canUse:Boolean(item.system.activity)&&item.system.activity.activation!=="passive"})),
      styleLevels:system.progression?.styles??[],hasAutomatedLevels:Boolean(system.progression?.styles?.length),primaryStyleName:primaryStyle(system)?.name||system.identity?.combatStyle,headerArt:encodeURI(headerImage(system)).replaceAll("'","%27").replaceAll('"',"%22").replaceAll("(","%28").replaceAll(")","%29"),
      initiativeBonus:numbers?.initiative??0,
      healthPercent:Math.max(0,Math.min(100,100*system.vitality.value/(system.vitality.max||1))),powerPercent:system.power?Math.max(0,Math.min(100,100*system.power.value/(system.power.max||1))):0,
      showAssistant, detailsActive: tab === "details", contentActive: tab === "content", creationActive: tab === "creation",
      tabs:SHEET_TABS.filter(item=>(item.id!=="creation"||showAssistant)&&(this.actor.type!=="ship"||["details","inventory","effects"].includes(item.id))).map(item=>({...item,active:item.id===tab})),
      active:Object.fromEntries(SHEET_TABS.map(item=>[item.id,item.id===tab])),
      attributes: numbers?['strength','dexterity','constitution','will','wisdom','presence'].map(id=>({id,...numbers.attributes[id],abbreviation:{strength:"FOR",dexterity:"DES",constitution:"CON",wisdom:"SAB",presence:"PRE",will:"VON"}[id]})):[],
      skills:system.skills?Object.entries(SKILLS).map(([id,config])=>({id,...config,...system.skills[id]})):[],
      skillGroups:system.skills?['strength','dexterity','will','wisdom','presence'].map(attribute=>({label:ATTRIBUTES[attribute],skills:Object.entries(SKILLS).filter(([,config])=>config.attribute===attribute).map(([id,config])=>({id,...config,...system.skills[id],abbreviation:{strength:"FOR",dexterity:"DES",wisdom:"SAB",presence:"PRE",will:"VON"}[attribute]}))})):[],
      checklist: this.actor.type==="ship"?[]:creationChecklist(system),
      inventoryGroups:groupList(["weapon","equipment"]),featureGroups:groupList(["feature","style","species","background","personalization","legendary"]),techniqueGroups:groupList(["technique","auxiliary"]),trainingGroups:groupList(["training"]),professionGroups:groupList(["profession"]),powerGroups:groupList(["hakiTalent","fruit"]),
      effects:(this.actor.effects??[]).map(effect=>({id:effect.id,name:effect.name,img:effect.img,disabled:effect.disabled,duration:effect.duration?.label??""})),
      species: game.items.filter(item => item.type === "species" && item.testUserPermission(game.user, "OBSERVER")).map(item => ({id: item.id, name: item.name, homebrew: item.system.origin === "homebrew"})),
      groups
    };
  }
  _processFormData(event,form,formData) {
    const data=super._processFormData(event,form,formData);
    if(this.actor.system.progression?.styles?.length&&data.system?.progression?.level!==undefined){delete data.system.progression.level;}
    if(data.system?.resources && !Array.isArray(data.system.resources))data.system.resources=Object.values(data.system.resources);
    return data;
  }
}

export class OPRPGItemSheet extends HandlebarsApplicationMixin(ItemSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["oprpg-native","op-document-sheet"], tag: "form", position: {width: 610, height: 730}, window: {resizable: true},
    form: {submitOnChange: true, closeOnSubmit: false},
    actions: {
      addItemRule:guarded(function(){return configureItemRule(this.item);}),
      editItemRule:guarded(function(_e,target){return configureItemRule(this.item,Number(target.dataset.index));}),
      removeItemRule:guarded(function(_e,target){if(!this.item.isOwner)throw new Error("Sem permissão.");return this.item.update({"system.rules":this.item.toObject().system.rules.filter((_,index)=>index!==Number(target.dataset.index))});}),
      configureRequirements:guarded(function(){return configureRequirements(this.item);}),
      configureStyleProficiencies:guarded(function(){return configureStyleProficiencies(this.item);}),
      addAdvancement:guarded(function(){return configureAdvancement(this.item);}),
      editAdvancement:guarded(function(_event,target){return configureAdvancement(this.item,Number(target.dataset.index));}),
      removeAdvancement:guarded(function(_event,target){if(!this.item.isOwner)throw new Error("Sem permissão.");const steps=this.item.toObject().system.advancements;return this.item.update({"system.advancements":steps.filter((_,index)=>index!==Number(target.dataset.index))});}),
      addTrainingException:guarded(function(){return configureTrainingException(this.item);}),
      editTrainingException:guarded(function(_event,target){return configureTrainingException(this.item,Number(target.dataset.index));}),
      removeTrainingException:guarded(function(_event,target){if(!this.item.isOwner)throw new Error("Sem permissão.");return this.item.update({"system.training.modifiers":this.item.toObject().system.training.modifiers.filter((_,index)=>index!==Number(target.dataset.index))});}),
      toggleEditMode:guarded(function(){if(!this.item.isOwner)return;this.editMode=this.editMode===false;return this.render({force:true});}),
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
      useActivity:guarded(async function(event){if(this._using)return;this._using=true;try{const result=await activityUseDialog(this.item,{requestId:foundry.utils.randomID(),variantId:this.selectedVariant,advantage:event.shiftKey,disadvantage:event.altKey});if(result?.deliveryError)ui.notifications.warn("Recursos confirmados, mas o cartão falhou. Não repita o uso para tentar reenviar o cartão.");return result;}finally{this._using=false;}}),
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
  async _onRender(context,options){await super._onRender(context,options);editToggle(this,context,this.item.isOwner);for(const field of this.element.querySelectorAll('.op-body input,.op-body select,.op-body textarea'))field.disabled=!context.editable;}
  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const source=this.item.system;
    const variantIndex=source.variants?.findIndex(variant=>variant.id===this.selectedVariant)??-1;
    if(variantIndex<0)this.selectedVariant=null;
    const selected=source.activity?activityFor(this.item,this.selectedVariant):null;
    const system={...source,activity:selected?.activity??source.activity,resolution:selected?.resolution??source.resolution};
    return {...context, item: this.item, system, editable: this.item.isOwner&&this.editMode!==false, category: CATEGORIES[this.item.type],
      itemRules:(source.rules??[]).map((rule,index)=>({...rule,index,kindLabel:RULE_KINDS[rule.kind]??rule.kind})),isTraining:this.item.type==="training",hasAdvancement:["species","style","background","training","feature"].includes(this.item.type),advancementSteps:(source.advancements??[]).map((step,index)=>({...step,index,scopeLabel:step.scope==="character"?"personagem":"estilo"})),trainingExceptions:(source.training?.modifiers??[]).map((rule,index)=>({...rule,index,name:rule.target})),
      isSpecies: this.item.type === "species", isTechnique: this.item.type === "technique", hasActivity: Boolean(system.activity),
      isHakiTalent:this.item.type==="hakiTalent",hakiFocus:selectOptions({armament:"Armamento",observation:"Observação",king:"Rei"},system.hakiTalent?.focus),hakiStages:selectOptions({Latente:"Latente",Inexperiente:"Inexperiente",Treinado:"Treinado",Perito:"Perito"},system.hakiTalent?.minimumStage),
      styleProficiency:system.activity?.proficiencyMode==="style",ammunitionOptions:(this.item.actor?.items??[]).filter(item=>["equipment","weapon"].includes(item.type)).map(item=>({id:item.id,name:item.name,selected:item.id===system.activity?.ammunitionItem})),canRoll: Boolean(this.item.actor?.isOwner && system.activity && system.activity.activation!=="passive"),isProgression:this.item.type==="style",isProfession:this.item.type==="profession",isEquipment:["weapon","equipment"].includes(this.item.type),
      professionRanks:selectOptions({professional:"Profissional",specialist:"Especialista",master:"Mestre",grandMaster:"Grão-Mestre"},system.profession?.rank),
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
