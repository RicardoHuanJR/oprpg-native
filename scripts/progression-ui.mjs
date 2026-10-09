import {ATTRIBUTES} from './rules.mjs';
import {SKILLS} from './engine.mjs';
import {levelSteps,trainingQuote,primaryStyle,dependentChoices} from './advancement.mjs';
import {CATALOG,resolveContent,advanceStyle,applyOrigin,learnTraining,synchronizeCulturalPoints,removeOrigin,registerExistingStyles} from './progression-services.mjs';
const esc=value=>foundry.utils.escapeHTML(String(value??''));
const prompt=options=>foundry.applications.api.DialogV2.prompt({...options,classes:['oprpg-native','op-dialog','op-flow'],position:{width:650}});
export function availableContent(type) {
 const catalog=CATALOG.filter(item=>item.type===type).map(item=>({uuid:`catalog:${item.id}`,name:item.name,source:item.system.source,homebrew:false}));
 const world=game.items.filter(item=>item.type===type&&item.testUserPermission(game.user,'OBSERVER')).map(item=>({uuid:item.uuid,name:item.name,source:item.system.source,homebrew:item.system.origin==='homebrew'}));
 return [...world,...catalog];
}
function choiceMarkup(steps) {
 return steps.map((step,index)=>`<fieldset class="op-choice"><legend>${esc(step.label)}</legend><p class="op-hint">${step.count} escolha(s)${step.allowRepeat?' · Pode repetir a opção':''}${step.kind==='attribute'?` · Limite ${step.cap}`:''}</p>${Array.from({length:step.count},(_,slot)=>`<label>Escolha ${slot+1}<select name="choice-${index}-${slot}" required><option value="">Selecione</option>${step.options.map(key=>`<option value="${esc(key)}">${esc(step.kind==='attribute'?ATTRIBUTES[key]:['skill','skillMultiplier'].includes(step.kind)?SKILLS[key]?.label:CATALOG.find(item=>`catalog:${item.id}`===key)?.name||key)}</option>`).join('')}</select></label>`).join('')}</fieldset>`).join('');
}
function readChoices(form,steps) {
 return Object.fromEntries(steps.map((step,index)=>[step.id,Array.from({length:step.count},(_,slot)=>form.elements.namedItem(`choice-${index}-${slot}`).value)]));
}
export async function chooseOrigin(actor,type='species',selected=null) {
 const uuid=selected||await contentPicker(type,type==='species'?'Escolher espécie / raça':'Escolher antecedente');if(!uuid)return;
 const item=await resolveContent(uuid);const steps=item.system.advancements??[];
 const choice=await prompt({window:{title:item.name},content:`<p class="op-hint">${esc(item.system.source)}</p>${type==='species'?`<div class="op-flow-summary"><span>PV base <b>${item.system.baseHP}</b></span><span>Deslocamento <b>${item.system.movement} m</b></span></div>`:''}${choiceMarkup(steps)}<p class="op-hint">Os atributos base são preservados; os aumentos ficam registrados nesta origem. Traços situacionais devem ser conferidos na fonte.</p>`,ok:{label:'Aplicar escolhas',callback:(_event,_button,app)=>readChoices(app.element.querySelector("form"),steps)}});
 if(choice)await applyOrigin(actor,item,choice);
}
export async function contentPicker(type,title) {
 const content=availableContent(type);
 return prompt({window:{title},content:`<label>${esc(title)}<select name="content" required><option value="">Selecione</option>${content.map(item=>`<option value="${esc(item.uuid)}">${esc(item.name)}${item.homebrew?' · Homebrew':''}</option>`).join('')}</select></label><p class="op-hint">Os conteúdos da sua mesa aparecem junto às referências do livro. As definições personalizadas podem configurar suas próprias escolhas.</p>`,ok:{label:'Continuar',callback:(_event,_button,app)=>app.element.querySelector("form").elements.content.value}});
}
export async function advanceDialog(actor,selectedStyle=null) {
 if(!actor.isOwner)throw new Error('Sem permissão.');
 const uuid=selectedStyle||await contentPicker('style','Avançar estilo de combate');if(!uuid)return;
 const style=await resolveContent(uuid);const plan=levelSteps(actor.system,style,{multiStyle:game.settings.get('oprpg-native','multiStyle')});
 const summary=`<div class="op-flow-summary"><span>Personagem <b>${plan.next}</b></span><span>${esc(style.name)} <b>${plan.styleLevel}</b></span><span>PP máximos <b>${plan.next*4}</b></span></div>`;
 const note=[plan.first?style.system.initialEquipmentNote||'':'',plan.techniqueGrade?`Técnica de ${plan.techniqueGrade}º grau: escolha apresentada abaixo.`:'',plan.auxiliaryChoice?'Escolha de técnica auxiliar neste nível.':'',plan.first?'Equipamento inicial e arma favorita pertencem ao primeiro estilo.':'O novo estilo não concede outro equipamento inicial.'].filter(Boolean).join(' ');
 const result=await prompt({window:{title:`Avanço · ${style.name}`},content:`${summary}<p class="op-hint">${esc(style.system.source)} · ${esc(note)}</p>${choiceMarkup(plan.steps)}${plan.first?`<p>Primeiro nível: Dado de Vida máximo (${style.system.hitDie}).</p>`:`<fieldset class="op-choice"><legend>Pontos de Vida deste nível</legend><label>Método<select name="hpMethod"><option value="roll">Rolar 1d${style.system.hitDie}</option><option value="record">Registrar resultado já rolado</option></select></label><label>Resultado já rolado<input type="number" name="hpRoll" min="1" max="${style.system.hitDie}" value="1"></label></fieldset>`}<p class="op-hint">A Constituição entra no cálculo total. Este avanço não cura PV nem repõe PP.</p>`,ok:{label:'Confirmar avanço',callback:(_event,_button,app)=>({choices:readChoices(app.element.querySelector("form"),plan.steps),hpMethod:app.element.querySelector("form").elements.hpMethod?.value,hpRoll:Number(app.element.querySelector("form").elements.hpRoll?.value||style.system.hitDie)})}});
 if(!result)return;
 const dependent=dependentChoices(plan.steps,result.choices);
 if(dependent.length){const additional=await prompt({window:{title:'Escolhas do benefício selecionado'},content:choiceMarkup(dependent),ok:{label:'Confirmar escolhas',callback:(_e,_b,app)=>readChoices(app.element.querySelector("form"),dependent)}});if(!additional)return;Object.assign(result.choices,additional);}
 if(result.hpMethod==='roll'){const roll=await new Roll(`1d${style.system.hitDie}`).evaluate();result.hpRoll=roll.total;await roll.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:`Avanço: ${style.name} — Dado de Vida`},{rollMode:game.settings.get('core','rollMode')});}
 await advanceStyle(actor,style,result.choices,{hpRoll:result.hpRoll});
}
export async function trainingDialog(actor,selected=null) {
 const uuid=selected||await contentPicker('training','Aprender treinamento');if(!uuid)return;
 const item=await resolveContent(uuid);const steps=item.system.advancements??[];
 const modifiers=actor.items.filter(item=>item.system.training?.state==='learned').flatMap(item=>(item.system.training.modifiers??[]).map(rule=>`${item.name}: ${rule.target}, ${rule.cost??'custo original'} PT`));
 const options=await prompt({window:{title:item.name},content:`<div class="op-flow-summary"><span>Saldo <b>${actor.system.training.points} PT</b></span><span>Custo base <b>${item.system.training.cost} PT</b></span><span>Tempo base <b>${item.system.training.days} dias</b></span></div><p class="op-hint">${esc(item.system.source)}</p><label class="op-checkbox"><input type="checkbox" name="creation">Traços culturais na criação: dispensar tutor e tempo</label><label class="op-checkbox"><input type="checkbox" name="tutor">Tutor presente e aprovado pelo Narrador</label>${choiceMarkup(steps)}${modifiers.length?`<details><summary>Exceções dos treinamentos aprendidos</summary><p>${modifiers.map(esc).join('<br>')}</p></details>`:''}<p class="op-hint">Cada dia exige 6 horas dedicadas, sem profissão ou batalhas. O custo final será apresentado antes da aquisição.</p>`,ok:{label:'Conferir requisitos',callback:(_e,_b,app)=>({choices:readChoices(app.element.querySelector("form"),steps),creation:app.element.querySelector("form").elements.creation.checked,tutor:app.element.querySelector("form").elements.tutor.checked})}});
 if(!options)return;
 if(options.creation&&actor.system.progression.level>1)throw new Error('Dispensa cultural da criação não se aplica após o primeiro nível.');
 const quote=trainingQuote(actor.system,item,[...actor.items],options);
 const confirm=await foundry.applications.api.DialogV2.confirm({classes:['oprpg-native','op-dialog','op-flow'],window:{title:'Confirmar treinamento'},content:`<h3>${esc(item.name)}</h3><p>Custo final: <b>${quote.cost} PT</b> · Tempo: <b>${quote.days} dias</b>.</p>${quote.sources.length?`<p>Benefício concedido por ${quote.sources.map(esc).join(', ')}.${quote.ignoreRequirements?' Requisitos dispensados.':''}</p>`:''}<p>Saldo após aquisição: ${actor.system.training.points-quote.cost} PT.</p>`});
 if(confirm)await learnTraining(actor,item,options.choices,options);
}
export async function progressionDialog(actor) {
 const styles=actor.system.progression.styles;const primary=primaryStyle(actor.system);
 const action=await prompt({window:{title:'Progressão e origens'},content:`<div class="op-flow-summary"><span>Nível <b>${actor.system.progression.level}</b></span><span>PT <b>${actor.system.training.points}</b></span></div><ul>${styles.map(style=>`<li>${esc(style.name)} ${style.levels} · d${style.hitDie}${style.key===primary?.key?' · Principal':''}</li>`).join('')||'<li>Nenhum estilo automatizado registrado.</li>'}</ul><label>Operação<select name="operation"><option value="level">Avançar um nível de estilo</option><option value="species">Escolher espécie</option><option value="background">Escolher antecedente</option><option value="training">Aprender treinamento</option><option value="culture">Receber PT de Sabedoria permanente</option><option value="primary">Alterar estilo principal / cabeçalho</option><option value="existing">Registrar distribuição dos níveis existentes</option><option value="existing">Registrar distribuição dos níveis existentes</option><option value="removeOrigin">Remover origem para substituição</option></select></label><details><summary>Histórico de escolhas</summary><ol>${actor.system.progression.receipts.map(receipt=>`<li>${esc(receipt.name)}${receipt.kind==='level'?` · ${receipt.level}º nível (estilo ${receipt.styleLevel})`:''} · ${receipt.benefits.length} benefício(s)</li>`).join('')}</ol></details>`,ok:{label:'Continuar',callback:(_event,_button,app)=>app.element.querySelector("form").elements.operation.value}});
 if(action==='level')return advanceDialog(actor);
 if(action==='existing'){
  const available=availableContent('style');
  const distribution=await prompt({window:{title:'Registrar níveis já existentes'},content:`<p>Distribua os ${actor.system.progression.level} níveis atuais. Os PV máximos são preservados; benefícios, PT, PP e equipamento inicial não serão concedidos novamente.</p>${[0,1,2,3].map(index=>`<div class="op-pair"><label>Estilo ${index+1}<select name="style-${index}"><option value="">Nenhum</option>${available.map(item=>`<option value="${esc(item.uuid)}">${esc(item.name)}</option>`).join('')}</select></label><label>Níveis<input type="number" min="0" max="20" name="levels-${index}" value="0"></label></div>`).join('')}`,ok:{label:'Registrar distribuição',callback:(_e,_b,app)=>[0,1,2,3].map(index=>({uuid:app.element.querySelector("form").elements.namedItem(`style-${index}`).value,levels:Number(app.element.querySelector("form").elements.namedItem(`levels-${index}`).value)})).filter(entry=>entry.uuid&&entry.levels)}});if(distribution)await registerExistingStyles(actor,distribution);
 }
 if(action==='species'||action==='background')return chooseOrigin(actor,action);
 if(action==='training')return trainingDialog(actor);
 if(action==='culture'){const delta=await synchronizeCulturalPoints(actor);ui.notifications.info(`${delta} PT cultural(is) recebido(s).`);}
 if(action==='primary') {
  const key=await prompt({window:{title:'Estilo principal'},content:`<label>Estilo<select name="style">${styles.map(style=>`<option value="${esc(style.key)}">${esc(style.name)}</option>`).join('')}</select></label><p class="op-hint">A imagem usa o estilo escolhido. Sem escolha explícita, segue o estilo com mais níveis, como na ficha antiga.</p>`,ok:{callback:(_e,_b,app)=>app.element.querySelector("form").elements.style.value}});
  if(key&&styles.some(style=>style.key===key))await actor.update({'system.progression.primaryStyle':key,'system.identity.combatStyle':styles.find(style=>style.key===key).name,'system.appearance.wallpaper':''});
 }
 if(action==='removeOrigin'){
  const origins=actor.system.progression.receipts.filter(r=>['species','background'].includes(r.kind));
  const key=await prompt({window:{title:'Remover origem'},content:`<label>Origem<select name="origin">${origins.map(r=>`<option value="${esc(r.id)}">${esc(r.name)}</option>`).join('')}</select></label><p>Os aumentos e itens concedidos por esta origem serão removidos. Confira PV e atributos após a troca.</p>`,ok:{label:'Remover origem',callback:(_e,_b,app)=>app.element.querySelector("form").elements.origin.value}});if(key)await removeOrigin(actor,key);
 }
}
