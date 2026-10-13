import {bookDescription} from './book-descriptions.mjs';
import {contentArtwork} from './content-art.mjs';
import {nativePrompt} from './dialog-ui.mjs';
import {contentLibrary,contentReference} from './content-library.mjs';
import {choiceCards} from './classic-dialogs.mjs';
import {ATTRIBUTES} from './rules.mjs';
import {SKILLS} from './engine.mjs';
import {speciesFamilies,levelOptions} from './selection-options.mjs';
import {levelSteps,trainingQuote,primaryStyle,dependentChoices,validateChoices} from './advancement.mjs';
import {CATALOG,resolveContent,advanceStyle,applyOrigin,learnTraining,synchronizeCulturalPoints,removeOrigin,registerExistingStyles} from './progression-services.mjs';
const esc=value=>foundry.utils.escapeHTML(String(value??''));
const stages=current=>`<ol class="op-flow-steps" aria-label="Etapas da origem">${['Raça','Variante','Benefícios'].map((label,index)=>`<li class="${index===current?'current':''}" ${index===current?'aria-current="step"':''}>${index+1} · ${label}</li>`).join('')}</ol>`;
const prompt=options=>nativePrompt({...options,classes:['oprpg-native','op-dialog','op-flow'],position:{width:650}});
export function availableContent(type) {
 return contentLibrary(type).map(item=>({uuid:item.uuid,name:item.name,identifier:item.system.identifier,family:item.system.family,source:item.system.source,homebrew:item.system.origin==='homebrew',img:contentArtwork(item),description:item.system.description,previewHTML:item.system.origin==='official'?bookDescription(item)?.summaryHTML:null}));
}
function choiceMarkup(steps) {
 return steps.map((step,index)=>`<fieldset class="op-choice"><legend>${esc(step.label)}</legend><p class="op-hint">${step.count} escolha(s)${step.allowRepeat?' · Pode repetir a opção':''}${step.kind==='attribute'?` · Limite ${step.cap}`:''}</p>${Array.from({length:step.count},(_,slot)=>`<label>Escolha ${slot+1}<select name="choice-${index}-${slot}" required><option value="">Selecione</option>${step.options.map(key=>`<option value="${esc(key)}">${esc(step.kind==='attribute'?ATTRIBUTES[key]:['skill','skillMultiplier'].includes(step.kind)?SKILLS[key]?.label:contentReference(key)?.name||key)}</option>`).join('')}</select></label>`).join('')}</fieldset>`).join('');
}
function readChoices(form,steps) {
 return Object.fromEntries(steps.map((step,index)=>[step.id,Array.from({length:step.count},(_,slot)=>form.elements.namedItem(`choice-${index}-${slot}`).value)]));
}
export async function chooseOrigin(actor,type='species',selected=null) {
 const uuid=selected||await (type==='species'?speciesPicker():contentPicker(type,'Escolher antecedente'));if(!uuid)return;
 const item=await resolveContent(uuid);const steps=item.system.advancements??[];
 const choice=await prompt({window:{title:item.name},validate:choices=>validateChoices(steps,choices,actor.system),content:`${type==='species'?stages(2):''}<p class="op-hint">${esc(item.system.source)}</p>${type==='species'?`<div class="op-flow-summary"><span>PV base <b>${item.system.baseHP}</b></span><span>Deslocamento <b>${item.system.movement} m</b></span></div>`:''}${choiceMarkup(steps)}<p class="op-hint">Os atributos base são preservados; os aumentos ficam registrados nesta origem. Traços situacionais devem ser conferidos na fonte.</p>`,ok:{label:'Aplicar escolhas',callback:(_event,_button,app)=>readChoices(app.element.querySelector("form"),steps)}});
 if(choice)await applyOrigin(actor,item,choice);
}
export async function contentPicker(type,title) {
 const content=availableContent(type);
 return prompt({window:{title},content:`${choiceCards('content',content)}<p class="op-hint">Escolha uma opção. As referências do livro e os conteúdos da mesa aparecem nesta lista.</p>`,ok:{label:'Continuar',callback:(_event,_button,app)=>app.element.querySelector("form").elements.content.value}});
}
export async function speciesPicker(){
 const families=speciesFamilies(availableContent('species'));
 let selectedFamily='';
 while(true){
 const family=await prompt({window:{title:'Escolher raça · 1 de 2'},content:stages(0)+choiceCards('family',families.map(group=>({id:group.id,name:group.name,img:group.bases[0]?.img})),{selected:selectedFamily}),ok:{label:'Continuar',callback:(_e,_b,app)=>app.element.querySelector('form').elements.family.value}});
 if(!family)return null;
 const group=families.find(group=>group.id===family);
 if(!group)return null;
 const variants=group.variants;
 if(!variants.length)return group.bases[0]?.uuid??null;
 selectedFamily=family;
 const variant=await prompt({window:{title:`Sub-raça · ${family} · 2 de 2`},content:`${stages(1)}<p>Raça escolhida: <strong>${esc(family)}</strong></p>${choiceCards('content',variants)}`,buttons:[{action:'back',label:'Voltar',type:'button',callback:()=> '__op_back__'}],ok:{label:'Continuar',callback:(_e,_b,app)=>app.element.querySelector('form').elements.content.value}});
 if(variant==='__op_back__')continue;
 return variant;
 }
}
export async function levelPicker(actor){
 const content=availableContent('style');
 for(const item of actor.items.filter(item=>item.type==='style'&&CATALOG.some(entry=>entry.type==='style'&&entry.system.identifier===item.system.identifier)))if(item.uuid&&!content.some(entry=>entry.uuid===item.uuid))content.unshift({uuid:item.uuid,name:item.name,identifier:item.system.identifier});
 const options=levelOptions(actor.system,content,{multiStyle:game.settings.get('oprpg-native','multiStyle')});
 const existing=options.filter(option=>option.existing),fresh=options.filter(option=>!option.existing);
 const markup=entries=>entries.map(option=>`<option value="${esc(option.uuid)}">${esc(option.label)}</option>`).join('');
 return prompt({window:{title:'Subir nível'},content:`${existing.length?`<fieldset class="op-choice"><legend>Subir um estilo atual</legend>${choiceCards('content',existing)}</fieldset>`:''}${fresh.length?`<fieldset class="op-choice"><legend>${existing.length?'Adicionar outro estilo':'Escolher estilo'}</legend>${choiceCards('content',fresh)}</fieldset>`:''}${actor.system.progression.styles.length&&!game.settings.get('oprpg-native','multiStyle')?'<p class="op-hint">Multiestilo desativado.</p>':''}`,ok:{label:'Continuar',callback:(_e,_b,app)=>app.element.querySelector('form').elements.content.value}});
}
export async function advanceDialog(actor,selectedStyle=null) {
 if(!actor.isOwner)throw new Error('Sem permissão.');
 const uuid=selectedStyle||await levelPicker(actor);if(!uuid)return;
 const style=await resolveContent(uuid);const plan=levelSteps(actor.system,style,{multiStyle:game.settings.get('oprpg-native','multiStyle')});const die=actor.system.training.forcedHitDie??style.system.hitDie;
 const constitution=actor.system.attributes.constitution.modifier;
 const summary=`<div class="op-flow-summary"><span>Personagem <b>${plan.next}</b></span><span>${esc(style.name)} <b>${plan.styleLevel}</b></span><span>PV do nível <b>${plan.first?die:'1d'+die} ${constitution>=0?'+':'−'} ${Math.abs(constitution)}</b></span><span>PP máximos <b>${actor.system.power.maxOverride??plan.next*4}</b></span></div>`;
 const note=[plan.first?style.system.initialEquipmentNote||'':'',plan.techniqueGrade?`Técnica de ${plan.techniqueGrade}º grau: escolha apresentada abaixo.`:'',plan.auxiliaryChoice?'Escolha de técnica auxiliar neste nível.':'',plan.first?'Equipamento inicial e arma favorita pertencem ao primeiro estilo.':'O novo estilo não concede outro equipamento inicial.'].filter(Boolean).join(' ');
 const result=await prompt({window:{title:`Avanço · ${style.name}`},validate:result=>validateChoices(plan.steps,result.choices,actor.system),content:`${summary}<p class="op-hint">${esc(style.system.source)} · ${esc(note)}</p>${choiceMarkup(plan.steps)}${plan.first?`<p>Primeiro nível: Dado de Vida máximo (${die}).</p>`:`<fieldset class="op-choice"><legend>Pontos de Vida deste nível</legend><label>Método<select name="hpMethod"><option value="roll">Rolar 1d${die}</option><option value="record">Registrar resultado já rolado</option></select></label><label class="op-hp-record">Resultado já rolado<input type="number" name="hpRoll" min="1" max="${die}" value="1"></label></fieldset>`}<p class="op-hint">A Constituição entra no cálculo total. Este avanço não cura PV nem repõe PP.</p>`,ok:{label:'Confirmar avanço',callback:(_event,_button,app)=>({choices:readChoices(app.element.querySelector("form"),plan.steps),hpMethod:app.element.querySelector("form").elements.hpMethod?.value,hpRoll:Number(app.element.querySelector("form").elements.hpRoll?.value||die)})}});
 if(!result)return;
 const dependent=dependentChoices(plan.steps,result.choices);
 if(dependent.length){const additional=await prompt({window:{title:'Escolhas do benefício selecionado'},validate:choices=>validateChoices([...plan.steps,...dependent],{...result.choices,...choices},actor.system),content:choiceMarkup(dependent),ok:{label:'Confirmar escolhas',callback:(_e,_b,app)=>readChoices(app.element.querySelector("form"),dependent)}});if(!additional)return;Object.assign(result.choices,additional);}
 if(result.hpMethod==='roll'){const roll=await new Roll(`1d${die}`).evaluate();result.hpRoll=roll.total;await roll.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:`Avanço: ${style.name} — Dado de Vida`},{rollMode:game.settings.get('core','rollMode')});}
 await advanceStyle(actor,style,result.choices,{hpRoll:result.hpRoll});
}
export async function trainingDialog(actor,selected=null) {
 const uuid=selected||await contentPicker('training','Aprender treinamento');if(!uuid)return;
 const item=await resolveContent(uuid);const steps=item.system.advancements??[];
 const modifiers=actor.items.filter(item=>item.system.training?.state==='learned').flatMap(item=>(item.system.training.modifiers??[]).map(rule=>`${item.name}: ${rule.target}, ${rule.cost??'custo original'} PT`));
 const options=await prompt({window:{title:item.name},validate:options=>{if(options.creation&&actor.system.progression.level>1)throw new Error('Dispensa cultural da criação não se aplica após o primeiro nível.');validateChoices(steps,options.choices,actor.system);trainingQuote(actor.system,item,[...actor.items],options);},content:`<div class="op-flow-summary"><span>Saldo <b>${actor.system.training.points} PT</b></span><span>Custo base <b>${item.system.training.cost} PT</b></span><span>Tempo base <b>${item.system.training.days} dias</b></span></div><p class="op-hint">${esc(item.system.source)}</p><fieldset class="op-choice"><legend>Condições do treinamento</legend><label>Assistência<select name="assistance"><option value="none">Sem assistência</option><option value="tutor">Tutor aprovado pelo Narrador</option>${!item.system.training.tutorRequired?'<option value="partner">Parceiro de Treino · Sem Profissão</option>':''}</select></label>${actor.system.progression.level===1?'<label class="op-checkbox"><input type="checkbox" name="creation">Traços culturais na criação: dispensar tutor e tempo</label>':''}<p class="op-hint">Parceiro de Treino exige que o ajudante não realize seus próprios treinamentos neste período.</p></fieldset>${choiceMarkup(steps)}${modifiers.length?`<details><summary>Exceções dos treinamentos aprendidos</summary><p>${modifiers.map(esc).join('<br>')}</p></details>`:''}<p class="op-hint">Cada dia exige 6 horas dedicadas, sem profissão ou batalhas. O custo final será apresentado antes da aquisição.</p>`,ok:{label:'Conferir requisitos',callback:(_e,_b,app)=>({choices:readChoices(app.element.querySelector("form"),steps),creation:Boolean(app.element.querySelector("form").elements.creation?.checked),tutor:app.element.querySelector("form").elements.assistance.value==='tutor',partner:app.element.querySelector("form").elements.assistance.value==='partner'})}});
 if(!options)return;
 if(options.creation&&actor.system.progression.level>1)throw new Error('Dispensa cultural da criação não se aplica após o primeiro nível.');
 const quote=trainingQuote(actor.system,item,[...actor.items],options);
 const confirm=await foundry.applications.api.DialogV2.confirm({classes:['oprpg-native','op-dialog','op-flow'],window:{title:'Confirmar treinamento'},content:`<h3>${esc(item.name)}</h3><div class="op-flow-summary"><span>Custo original <b>${item.system.training.cost} PT</b></span><span>Custo final <b>${quote.cost} PT</b></span><span>Tempo final <b>${quote.days} dias</b></span></div><fieldset class="op-choice"><legend>Requisitos e benefícios</legend><p>${quote.ignoreRequirements?"Requisitos dispensados pelo benefício indicado.":"Requisitos de aprendizado conferidos."} ${quote.tutorRequired?"Tutor exigido.":"Tutor não exigido."}</p></fieldset>${quote.sources.length?`<p>Benefício concedido por ${quote.sources.map(esc).join(', ')}.${quote.ignoreRequirements?' Requisitos dispensados.':''}</p>`:''}<p>Saldo após aquisição: ${actor.system.training.points-quote.cost} PT.</p>`});
 if(confirm)await learnTraining(actor,item,options.choices,options);
}
export async function progressionDialog(actor) {
 const styles=actor.system.progression.styles;const primary=primaryStyle(actor.system);
 const action=await prompt({window:{title:'Progressão e origens'},content:`<div class="op-flow-summary"><span>Nível <b>${actor.system.progression.level}</b></span><span>PT <b>${actor.system.training.points}</b></span></div><ul>${styles.map(style=>`<li>${esc(style.name)} ${style.levels} · d${style.hitDie}${style.key===primary?.key?' · Principal':''}</li>`).join('')||'<li>Nenhum estilo registrado.</li>'}</ul><fieldset class="op-choice"><legend>Estilos</legend>${choiceCards('operation',[{id:'level',name:'Subir nível'},{id:'primary',name:'Escolher estilo principal'}])}</fieldset><fieldset class="op-choice"><legend>Origens e treinamentos</legend>${choiceCards('operation',[{id:'species',name:'Escolher raça'},{id:'background',name:'Escolher antecedente'},{id:'training',name:'Aprender treinamento'},{id:'culture',name:'Conferir PT de Sabedoria'}])}</fieldset><details class="op-choice"><summary>Correções e substituições</summary>${choiceCards('operation',[{id:'existing',name:'Registrar níveis anteriores'},{id:'removeOrigin',name:'Remover origem para substituição'}])}</details><details><summary>Histórico de escolhas</summary><ol>${actor.system.progression.receipts.map(receipt=>`<li>${esc(receipt.name)}${receipt.kind==='level'?` · ${receipt.level}º nível (estilo ${receipt.styleLevel})`:''} · ${receipt.benefits.length} benefício(s)</li>`).join('')}</ol></details>`,ok:{label:'Continuar',callback:(_event,_button,app)=>app.element.querySelector("form").elements.operation.value}});
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
