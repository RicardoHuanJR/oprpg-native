import {startLongRest,finishLongRest,finishShortRest,spendHitDie} from './services.mjs';
import {nativePrompt} from './dialog-ui.mjs';
import {longRestPlan} from './engine.mjs';
import {RULE_DECISIONS} from './rule-decisions.mjs';
import {activeItemRules} from './item-rules.mjs';
export const escape=value=>foundry.utils.escapeHTML(String(value??''));
export function calculationCard(label,value,lines){
 return `<fieldset class="op-choice op-calculation"><legend>${escape(label)}</legend><div class="op-final-value">${escape(value)}</div><ul>${String(lines??'').split('\n').filter(Boolean).map(line=>`<li>${escape(line)}</li>`).join('')}</ul></fieldset>`;
}
export function choiceCards(name,entries,{selected='',required=true}={}){
 return `<div class="op-picker">${entries.length>=8?'<label class="op-search-label">Buscar por nome ou fonte<input type="search" data-op-search placeholder="Digite para filtrar"></label><p class="op-hint" data-op-search-status role="status" aria-live="polite"></p>':''}<div class="op-pick-list">${entries.map(entry=>`<div class="op-pick-entry"><label><input type="radio" name="${escape(name)}" value="${escape(entry.uuid??entry.id)}" ${required?'required':''} ${(entry.uuid??entry.id)===selected?'checked':''}><img src="${escape(entry.img||'icons/svg/book.svg')}" alt=""><span><strong>${escape(entry.label??entry.name)}</strong>${entry.source?`<small>${escape(entry.source)}</small>`:''}</span>${entry.homebrew?'<small>Homebrew</small>':''}</label>${entry.previewHTML?`<details class="op-choice-description"><summary>Características principais</summary>${entry.previewHTML}</details>`:entry.description?`<details class="op-choice-description"><summary>Descrição</summary>${entry.description.replace(/<[^>]*>/g,' ').split(/\n\s*\n/).filter(Boolean).map(p=>`<p>${escape(p.trim())}</p>`).join('')}</details>`:''}</div>`).join('')||'<p class="op-hint">Nenhuma opção disponível.</p>'}</div></div>`;
}
export function restMarkup(actor){
 const system=actor.system,active=system.rest.startedAt!==null&&system.rest.kind==='long',pools=system.hitDice.pools??[];
 const limit=Math.min(pools.reduce((sum,p)=>sum+p.max-p.available,0),Math.max(1,Math.floor(system.hitDice.max/2)));
 const content=`<div class="op-flow-summary"><span>PV <b>${system.vitality.value} / ${system.vitality.max}</b></span><span>PP <b>${system.power.value} / ${system.power.max}</b></span><span>Dados <b>${system.hitDice.available} / ${system.hitDice.max}</b></span></div><fieldset class="op-choice"><legend>Descanso longo</legend>${choiceCards('operation',[...(active?[{id:'finish',name:'Concluir descanso em andamento'}]:[]),{id:'start',name:active?'Reiniciar descanso':'Iniciar descanso'}],{selected:active?'finish':'start'})}</fieldset><fieldset class="op-choice op-rest-recovery"><legend>Dados de Vida a recuperar</legend><p>${limit?`Distribua ${limit} dado(s) entre os tipos gastos.`:'Todos os dados já estão disponíveis.'}</p>${pools.map(pool=>`<label>d${pool.faces} · ${pool.available}/${pool.max} disponíveis<input name="dice-${pool.faces}" type="number" min="0" max="${Math.min(limit,pool.max-pool.available)}" value="${pools.length===1?limit:0}"></label>`).join('')}${game.user.isGM?'<label class="op-checkbox"><input name="narratorConfirmed" type="checkbox"> Confirmo as oito horas e a elegibilidade de um descanso a cada 24 horas, sem avançar o relógio.</label>':''}</fieldset><details class="op-choice"><summary>Benefícios e condições do descanso</summary><p>Os benefícios são aplicados somente ao concluir um descanso válido. A recuperação de PP considera a exaustão registrada no início. Recuperar Dados de Vida não significa gastar dados para cura.</p></details>`;
 return {content,pools,limit};
}
export async function longRestDialog(actor){
 if(!actor.isOwner)throw new Error('Sem permissão.');
 const {content,pools,limit}=restMarkup(actor);
 const validate=result=>{
  if(result.operation!=='finish')return;
  longRestPlan(actor.system,{startedAt:actor.system.rest.startedAt,completedAt:game.time.worldTime,startHP:actor.system.rest.startHP,startExhaustion:actor.system.rest.startExhaustion,powerPolicy:RULE_DECISIONS.exhaustedLongRestPower,durationConfirmed:result.narratorConfirmed,intervalConfirmed:result.narratorConfirmed});
  if(pools.length){let total=0;for(const pool of pools){const amount=result.dice[pool.faces];if(!Number.isInteger(amount)||amount<0||amount>pool.max-pool.available)throw new Error('Confira os tipos de Dados de Vida gastos.');total+=amount;}if(total!==limit)throw new Error(`Distribua ${limit} Dado(s) de Vida para recuperar.`);}
 };
 const result=await nativePrompt({classes:['oprpg-native','op-dialog','op-flow','op-rest-dialog'],position:{width:660},window:{title:'Descanso longo'},content,validate,ok:{label:'Confirmar descanso',callback:(_e,_b,app)=>{const f=app.element.querySelector('form').elements;return {operation:f.operation.value,dice:pools.length?Object.fromEntries(pools.map(p=>[p.faces,Number(f.namedItem(`dice-${p.faces}`).value)])):null,narratorConfirmed:game.user.isGM&&Boolean(f.narratorConfirmed?.checked)};}}});
 if(!result)return;
 if(result.operation==='start'){await startLongRest(actor);ui.notifications.info('Descanso iniciado. Abra esta janela novamente para concluir.');}
 else if(result.operation==='finish')await finishLongRest(actor,undefined,result.dice,{narratorConfirmed:result.narratorConfirmed});
}
export async function shortRestDialog(actor){
 if(!actor.isOwner)throw new Error('Sem permissão.');
 while(true){
  const system=actor.system,active=system.rest.startedAt!==null&&system.rest.kind==='short',eligible=system.rest.shortEligible;
  const pools=system.hitDice.pools?.length?system.hitDice.pools:[{faces:system.hitDice.faces,available:system.hitDice.available}];
  const operations=[...(active?[{id:'finish',name:'Concluir descanso em andamento'}]:[]),...(eligible&&system.hitDice.available>0?[{id:'spend',name:'Gastar um Dado de Vida para recuperar PV'}]:[]),{id:'start',name:active?'Reiniciar descanso':'Iniciar descanso'}];
  const choice=await nativePrompt({classes:['oprpg-native','op-dialog','op-flow'],window:{title:'Descanso curto'},position:{width:600},validate:choice=>{
    if(choice.operation==='finish'){
      const minutes=Math.min(30,...activeItemRules(system,[...actor.items]).filter(rule=>rule.kind==='shortRestMinutes'&&rule.value>0).map(rule=>rule.value));
      if(!active||(!choice.confirmed&&game.time.worldTime-system.rest.startedAt<60*minutes))throw new Error('O descanso ainda não cumpriu a duração. Avance o tempo ou solicite confirmação do Narrador.');
    }
    if(choice.operation==='spend'&&(!eligible||!pools.some(pool=>pool.faces===choice.faces&&pool.available>0)))throw new Error('Escolha um Dado de Vida disponível após concluir o descanso.');
  },content:`<div class="op-flow-summary"><span>PV <b>${system.vitality.value}/${system.vitality.max}</b></span><span>Dados <b>${system.hitDice.available}/${system.hitDice.max}</b></span></div>${choiceCards('operation',operations,{selected:operations[0].id})}${eligible?`<fieldset class="op-choice"><legend>Dado de Vida</legend><label>Tipo disponível<select name="faces">${pools.filter(pool=>pool.available>0).map(pool=>`<option value="${pool.faces}">d${pool.faces} · ${pool.available} disponível(is)</option>`).join('')}</select></label><p>Gaste um dado por vez. Após a rolagem, você pode escolher outro.</p></fieldset>`:''}${active&&game.user.isGM?'<label class="op-checkbox"><input name="confirmed" type="checkbox"> Confirmo a duração e as condições na cena, sem avançar o relógio.</label>':''}<p class="op-hint">Descanso curto libera o gasto de Dados de Vida para cura. Descanso longo recupera os dados gastos.</p>`,ok:{label:'Confirmar',callback:(_e,_b,app)=>{const f=app.element.querySelector('form').elements;return {operation:f.operation.value,faces:Number(f.faces?.value),confirmed:game.user.isGM&&Boolean(f.confirmed?.checked)};}}});
  if(!choice)return;
  if(choice.operation==='start'){await startLongRest(actor,'short');ui.notifications.info('Descanso curto iniciado.');return;}
  if(choice.operation==='finish')await finishShortRest(actor,{narratorConfirmed:choice.confirmed});
  if(choice.operation==='spend')await spendHitDie(actor,choice.faces);
 }
}
