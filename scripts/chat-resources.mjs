import {damageActor,healActor,grantTemporary} from './services.mjs';
import {DAMAGE_TYPES} from './engine.mjs';
export async function resolveChatActivity(message,kind='resolve'){
  if(!message?.isContentVisible)throw new Error('Atividade indisponível.');
  const flags=message.flags?.['oprpg-native'];
  if(!flags?.operation)throw new Error('Esta mensagem não contém um contexto de atividade.');
  const actor=await fromUuid(flags.actorUUID);
  if(!actor?.isOwner)throw new Error('Sem permissão sobre o personagem de origem.');
  const {openRulePanel}=await import('./rule-panel.mjs');
  return openRulePanel(actor,{selectedOperation:kind,activityContext:structuredClone(flags.operation)});
}
const esc=value=>foundry.utils.escapeHTML(String(value??''));
export function chatResourceActors(){
  const controlled=typeof canvas==='undefined'?[]:canvas?.tokens?.controlled??[];
  const selected=controlled.map(token=>token.actor).filter(actor=>actor?.isOwner&&actor.type!=='ship');
  const actors=selected.length?selected:game.user.character?.isOwner?[game.user.character]:[];
  return [...new Map(actors.filter(actor=>actor.type!=='ship').map(actor=>[actor.uuid,actor])).values()];
}
export async function applyChatResource(kind,message){
  if(!message?.isContentVisible)throw new Error('Rolagem indisponível.');
  const actors=chatResourceActors();if(!actors.length)throw new Error('Selecione um token que você controla.');
  const totals=(message.rolls??[]).map(roll=>roll.total).filter(Number.isFinite);
  const amount=totals.length===1?Math.max(0,totals[0]):'';
  const labels={damage:'Aplicar dano',heal:'Aplicar cura',temporary:'Conceder PV temporários'};
  const choice=await foundry.applications.api.DialogV2.prompt({classes:['oprpg-native','op-dialog','op-flow'],window:{title:labels[kind]},content:`<label>Personagem<select name="actor">${actors.map(actor=>`<option value="${esc(actor.uuid)}">${esc(actor.name)}</option>`).join('')}</select></label><label>Valor<input name="amount" type="number" min="0" step="1" value="${amount}" required></label>${kind==='damage'?`<label>Tipo de dano<select name="type">${Object.entries(DAMAGE_TYPES).map(([key,label])=>`<option value="${key}">${esc(label)}</option>`).join('')}</select></label>`:''}${kind==='temporary'?'<label>Temporários atuais<select name="choice"><option value="replace">Substituir</option><option value="keep">Manter</option></select></label>':''}<p class="op-hint">Confira o valor e se esta rolagem já foi aplicada antes de confirmar.</p>`,ok:{label:'Aplicar',callback:(_e,_b,app)=>{const f=app.element.querySelector('form').elements;return {actor:f.actor.value,amount:Number(f.amount.value),type:f.type?.value,choice:f.choice?.value};}}});
  if(!choice)return;
  const actor=actors.find(actor=>actor.uuid===choice.actor);if(!actor?.isOwner)throw new Error('Personagem indisponível.');
  if(!Number.isInteger(choice.amount)||choice.amount<0)throw new Error('Valor inválido.');
  if(kind==='damage')return damageActor(actor,{components:[{type:choice.type,amount:choice.amount}]});
  if(kind==='heal')return healActor(actor,choice.amount);
  if(kind==='temporary')return grantTemporary(actor,choice.amount,choice.choice);
  throw new Error('Operação desconhecida.');
}
export function registerChatResources(){
  if(!Hooks.on)return;
  Hooks.on('getChatMessageContextOptions',(_app,options)=>{
    for(const [kind,label]of [['resolve','Resolver esta atividade e seus alvos'],['expertise','Aplicar expertise deste crítico']])options.push({label,icon:'fa-solid fa-crosshairs',visible:li=>{const message=game.messages.get(li.dataset.messageId),operation=message?.flags?.['oprpg-native']?.operation;return Boolean(game.user.isGM&&message?.isContentVisible&&operation&&!operation.prepared&&(kind==='resolve'||operation.attack?.natural===20&&operation.activity?.proficient&&!operation.unarmed));},onClick:async(_event,li)=>{try{await resolveChatActivity(game.messages.get(li.dataset.messageId),kind);}catch(error){ui.notifications.error(error.message);}}});
    for(const [kind,label,icon]of [['damage','Aplicar valor como dano','fa-heart-crack'],['heal','Aplicar valor como cura','fa-heart'],['temporary','Conceder PV temporários','fa-shield-heart']])options.push({label,icon:`fa-solid ${icon}`,visible:li=>{const message=game.messages.get(li.dataset.messageId);return Boolean(message?.isContentVisible&&message.rolls?.length&&chatResourceActors().length);},onClick:async(_event,li)=>{try{await applyChatResource(kind,game.messages.get(li.dataset.messageId));}catch(error){ui.notifications.error(error.message);}}});
  });
}
