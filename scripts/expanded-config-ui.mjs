import {openRulePanel} from './rule-panel.mjs';
import {COMMON_ACTIONS,performCommonAction,recordMovement} from './action-services.mjs';
import {movementSpeeds} from './mechanics.mjs';
import {combatContext} from './combat-rules.mjs';
import {DAMAGE_TYPES} from './engine.mjs';
import {EFFECT_FIELDS,effectChange} from './effect-fields.mjs';
import {CONDITIONS} from './conditions.mjs';
const esc=value=>foundry.utils.escapeHTML(String(value??''));
const prompt=options=>foundry.applications.api.DialogV2.prompt({...options,classes:['oprpg-native','op-dialog','op-flow'],position:{width:640}});
const guarded=handler=>async function(...args){try{return await handler.apply(this,args);}catch(error){console.error('OP RPG',error);ui.notifications.error(error.message);}};
const modes={distance:'Caminhada',swimming:'Natação',climbing:'Escalada',flying:'Voo'};
export const expandedConfigurationActions={
  openRulesPanel:guarded(function(){return openRulePanel(this.actor);}),
  openCombatPanel:guarded(async function(){
    if(!this.actor.isOwner)throw new Error('Sem permissão.');
    const context=combatContext(game.combat,this.actor),stored=this.actor.system.combat.state;
    const state=context?.ownEpoch===stored.ownEpoch?stored:{};
    const choice=await prompt({window:{title:'Ações do turno'},content:`<fieldset class="op-choice"><legend>Reservas atuais</legend><div class="op-status-grid">${[['Ação',state.actionUsed],['Poderosa',state.powerfulUsed],['Bônus',state.bonusUsed],['Reação',state.reactionUsed]].map(([name,used])=>`<span>${name}: <strong>${used?'usada':'disponível'}</strong></span>`).join('')}</div></fieldset><fieldset class="op-choice"><legend>Ação comum</legend><label>Atividade<select name="action">${Object.entries(COMMON_ACTIONS).map(([key,label])=>`<option value="${key}">${label}</option>`).join('')}</select></label><label class="op-checkbox"><input type="checkbox" name="bonus"> Usar como bônus (exige benefício ativo)</label><label>Gatilho para preparar<input name="trigger" value="${esc(state.readyTrigger)}"></label><p class="op-hint">Ataques e técnicas usam o botão de uso de seus itens. Ajudar, procurar e influenciar registram a ação; seus alvos e testes dependem da cena. Técnicas preparadas precisam também de PP, ação poderosa e concentração.</p></fieldset>`,ok:{label:'Registrar ação',callback:(_e,_b,app)=>{const form=app.element.querySelector('form').elements;return {action:form.action.value,useBonus:form.bonus.checked,trigger:form.trigger.value};}}});
    if(choice)await performCommonAction(this.actor,choice);
  }),
  configureMovement:guarded(async function(){
    if(!this.actor.isOwner)throw new Error('Sem permissão.');
    const raw=this.actor.toObject().system.movement;
    const choice=await prompt({window:{title:'Configurar deslocamentos'},content:`<fieldset class="op-choice"><legend>Valores base em metros</legend><div class="op-pair">${Object.entries(modes).map(([key,label])=>`<label>${label}<input type="number" name="${key}" min="0" step="any" value="${raw[key]??0}"></label>`).join('')}</div><p class="op-hint">A espécie define a caminhada quando escolhida. Benefícios condicionais e exaustão são aplicados sem alterar estes valores base.</p></fieldset><fieldset class="op-choice"><legend>Ambiente</legend>${[['submerged','Completamente submerso'],['aquatic','Criatura aquática por outra origem'],['breathesUnderwater','Respira debaixo da água']].map(([key,label])=>`<label class="op-checkbox"><input name="env-${key}" type="checkbox" ${this.actor.system.environment?.[key]?'checked':''}>${label}</label>`).join('')}<p class="op-hint">Povo do Mar e sua ancestralidade aquática são reconhecidos pela origem. A respiração ainda precisa ser conferida ao sofrer dano.</p></fieldset>`,ok:{label:'Salvar',callback:(_e,_b,app)=>Object.fromEntries([...Object.keys(modes).map(key=>[`system.movement.${key}`,Number(app.element.querySelector('form').elements.namedItem(key).value)]),...['submerged','aquatic','breathesUnderwater'].map(key=>[`system.environment.${key}`,app.element.querySelector('form').elements.namedItem(`env-${key}`).checked])])}});
    if(choice)await this.actor.update(choice);
  }),
  openMovementPanel:guarded(async function(){
    if(!this.actor.isOwner)throw new Error('Sem permissão.');
    const speeds=movementSpeeds(this.actor.system,[...this.actor.items],this.actor.statuses);
    const context=combatContext(game.combat,this.actor),state=this.actor.system.combat.state;
    const spent=context?.ownEpoch===state.ownEpoch?state.movementSpent:0;
    const choice=await prompt({window:{title:'Deslocamento do turno'},content:`<fieldset class="op-choice"><legend>Movimento compartilhado</legend><p>Gasto neste turno: <strong>${spent??0} m</strong></p><p>${Object.entries(modes).map(([key,label])=>`${label}: ${speeds[key]} m`).join(' · ')}</p><label>Modo<select name="mode">${Object.entries(modes).map(([key,label])=>`<option value="${key}">${label}</option>`).join('')}</select></label><label>Distância percorrida (m)<input name="distance" type="number" min="0" step="any" value="1.5"></label><label class="op-checkbox"><input name="difficult" type="checkbox"> Terreno difícil</label><label class="op-checkbox"><input name="stand" type="checkbox"> Levantar do chão</label><p class="op-hint">Rastejar e terreno difícil acrescentam seus custos. Nadar/escalar sem deslocamento próprio também custa mais. Este registro não move o token.</p></fieldset>`,ok:{label:'Registrar',callback:(_e,_b,app)=>{const form=app.element.querySelector('form').elements;return {mode:form.mode.value,distance:Number(form.distance.value),difficult:form.difficult.checked,stand:form.stand.checked};}}});
    if(choice){const plan=await recordMovement(this.actor,choice);ui.notifications.info(`${plan.cost} m gastos; ${plan.remaining} m disponíveis nesse modo.`);}
  }),
  configureMitigation:guarded(async function(){
    if(!this.actor.isOwner)throw new Error('Sem permissão.');
    const source=this.actor.toObject().system.damageMitigation;
    const choice=await prompt({window:{title:'Defesas contra dano'},content:`<div class="op-three-col">${[['resistances','Resistências'],['vulnerabilities','Vulnerabilidades'],['immunities','Imunidades']].map(([key,label])=>`<fieldset class="op-choice"><legend>${label}</legend>${Object.entries(DAMAGE_TYPES).map(([id,name])=>`<label class="op-checkbox"><input name="${key}-${id}" type="checkbox" ${source[key].includes(id)?'checked':''}>${name}</label>`).join('')}</fieldset>`).join('')}</div>`,ok:{label:'Salvar',callback:(_e,_b,app)=>Object.fromEntries(Object.keys(source).map(key=>[`system.damageMitigation.${key}`,Object.keys(DAMAGE_TYPES).filter(id=>app.element.querySelector('form').elements.namedItem(`${key}-${id}`).checked)]))}});
    if(choice)await this.actor.update(choice);
  }),
  createEffect:guarded(function(){return effectEditor(this.actor);}),
  editEffect:guarded(function(_event,target){return effectEditor(this.actor,this.actor.effects.get(target.dataset.effectId));})
};

export async function effectEditor(actor,effect=null){
  if(!game.user.isGM||!actor.isOwner)throw new Error('O Narrador configura os efeitos.');
  const source=effect?.toObject()??{name:'Novo efeito',disabled:false,system:{changes:[]},duration:{value:null,units:'seconds',expiry:null}};
  const changes=source.system.changes??[];
  if(changes.some(change=>!EFFECT_FIELDS.some(field=>field.path===change.key)))throw new Error('Este efeito contém campos fora do editor OP RPG. Revise sua origem antes de substituir dados.');
  const choice=await prompt({window:{title:effect?'Editar efeito':'Criar efeito'},content:`<label>Nome<input name="name" required value="${esc(source.name)}"></label><label class="op-checkbox"><input name="disabled" type="checkbox" ${source.disabled?'checked':''}> Desativado</label><fieldset class="op-choice"><legend>Condições</legend><div class="op-pair">${Object.entries(CONDITIONS).map(([key,label])=>`<label class="op-checkbox"><input name="status-${key}" type="checkbox" ${Array.from(source.statuses??[]).includes(key)?'checked':''}>${label}</label>`).join('')}</div></fieldset><fieldset class="op-choice"><legend>Modificadores</legend>${[...changes,null].map((change,index)=>`<div class="op-effect-row"><label>Campo<select name="path-${index}"><option value="">${change?'Remover este modificador':'Adicionar modificador'}</option>${EFFECT_FIELDS.map(field=>`<option value="${field.path}" ${field.path===change?.key?'selected':''}>${esc(field.label)}</option>`).join('')}</select></label><label>Operação<select name="operator-${index}">${[['add','Somar'],['subtract','Subtrair'],['multiply','Multiplicar'],['override','Definir'],['upgrade','Valor mínimo'],['downgrade','Valor máximo']].map(([value,label])=>`<option value="${value}" ${value===change?.type?'selected':''}>${label}</option>`).join('')}</select></label><label>Valor<input name="value-${index}" type="number" step="any" value="${change?.value??1}"></label></div>`).join('')}</fieldset><fieldset class="op-choice"><legend>Duração</legend><label>Duração (vazio: permanente)<input name="duration" type="number" min="0" value="${source.duration.value??''}"></label><label>Unidade<select name="units">${[['seconds','Segundos'],['minutes','Minutos'],['hours','Horas'],['days','Dias'],['months','Meses'],['years','Anos'],['rounds','Rodadas'],['turns','Turnos']].map(([value,label])=>`<option value="${value}" ${value===source.duration.units?'selected':''}>${label}</option>`).join('')}</select></label><label>Momento de expiração<select name="expiry"><option value="">Sem evento definido</option>${[['combatStart','Início do combate'],['roundStart','Início da rodada'],['turnStart','Início do turno'],['combatEnd','Fim do combate'],['roundEnd','Fim da rodada'],['turnEnd','Fim do turno']].map(([value,label])=>`<option value="${value}" ${value===source.duration.expiry?'selected':''}>${label}</option>`).join('')}</select></label></fieldset>`,ok:{label:'Salvar efeito',callback:(_e,_b,app)=>{
    const form=app.element.querySelector('form').elements;
    return {name:form.name.value.trim(),disabled:form.disabled.checked,statuses:[...Array.from(source.statuses??[]).filter(key=>!Object.hasOwn(CONDITIONS,key)),...Object.keys(CONDITIONS).filter(key=>form.namedItem(`status-${key}`).checked)],system:{changes:[...changes,null].flatMap((_change,index)=>{const key=form.namedItem(`path-${index}`).value;return key?[effectChange(key,form.namedItem(`operator-${index}`).value,Number(form.namedItem(`value-${index}`).value))]:[];})},duration:{value:form.duration.value===''?null:Number(form.duration.value),units:form.units.value,expiry:form.duration.value===''?null:form.expiry.value||null}};
  }}});
  if(!choice)return;if(!choice.name)throw new Error('Informe um nome.');
  if(effect)await effect.update(choice);else await actor.createEmbeddedDocuments('ActiveEffect',[{...choice,img:'icons/svg/lightning.svg'}]);
}
