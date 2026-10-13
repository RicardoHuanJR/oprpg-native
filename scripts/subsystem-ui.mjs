import {nativePrompt} from './dialog-ui.mjs';
import {ZOAN_TRAITS} from './zoan-traits.mjs';
import {pointSlots} from './fruit.mjs';
import {ATTRIBUTES} from './rules.mjs';
import {professionOperation} from './advanced-operations.mjs';
import {professionPlan} from './profession.mjs';
import {SKILLS} from './engine.mjs';
import {characterPath,PATH_OBJECTIVES,PATH_MEANS} from './paths.mjs';
const esc=value=>foundry.utils.escapeHTML(String(value??''));
const prompt=options=>nativePrompt({...options,classes:['oprpg-native','op-dialog','op-flow'],position:{width:600}});
async function withoutProfessionDialog(item){
 const actor=item.actor;
 const reserve=actor.system.resources.find(r=>r.id===`no-profession:help:${item.id}`),available=reserve?.value??3;
 const confirmed=await prompt({window:{title:'Sem Profissão'},validate:confirmed=>{if(!confirmed)throw new Error('Confirme o contexto da ajuda antes de gastar um uso.');if(available<1)throw new Error('Sem usos de Ajudante Perfeito.');},render:(_event,app)=>{const check=app.element.querySelector('[name=confirmed]'),button=app.element.querySelector('[data-action=ok]');if(button){const sync=()=>button.disabled=available<1||!check.checked;check.addEventListener('change',sync);sync();}},content:`<fieldset class="op-choice"><legend>Benefícios</legend><p class="op-flow-summary">Ajudante Perfeito <strong>${available}/3 usos</strong></p><p><b>Ajudante Perfeito:</b> +5 no teste de profissão de outra criatura; 3 usos por descanso longo. Em combate, exige a ação Ajudar.</p><p><b>Foco:</b> duas perícias escolhidas na aquisição, exceto Haki, Sobrenatural e Sorte.</p><p><b>Parceiro de Treino:</b> metade do tempo, arredondado para cima, quando o treino não exige tutor. Nesse período, você não realiza seus próprios treinamentos.</p><p><b>Tempo Livre:</b> até cinco funções do navio.</p><p class="op-hint">Esta escolha impede adquirir profissões. Jogador 2.1, p.134.</p><label class="op-checkbox"><input name="confirmed" type="checkbox"> Estou ajudando outra criatura em um teste profissional e cumpri a ação Ajudar, se em combate.</label></fieldset>`,ok:{label:'Usar Ajudante Perfeito',callback:(_e,_b,app)=>app.element.querySelector('form').elements.confirmed.checked}});
 if(!confirmed)return;
 const {actorCommand}=await import('./services.mjs');
 return actorCommand(actor,async()=>{
  if(!actor.items.get(item.id)||item.system.identifier!=='sem-profissao')throw new Error('A escolha Sem Profissão não está na ficha.');
  const before=actor.system.resources.map(r=>({...r})),resources=before.map(r=>({...r})),id=`no-profession:help:${item.id}`;
  let reserve=resources.find(r=>r.id===id);
  if(!reserve){reserve={id,name:'Ajudante Perfeito',value:3,max:3,recovery:'long',recoveryAmount:null,source:item.uuid};resources.push(reserve);}
  if(reserve.value<1)throw new Error('Sem usos de Ajudante Perfeito.');
  reserve.value--;
  await actor.update({'system.resources':resources});
  try{await ChatMessage.create({speaker:ChatMessage.getSpeaker({actor}),content:`<p><b>Ajudante Perfeito:</b> conceda +5 ao teste profissional da criatura ajudada. ${reserve.value}/3 usos restantes.</p>`});}catch(error){await actor.update({'system.resources':before});throw error;}
 });
}
export async function choosePath(actor){
 if(!actor.isOwner)throw new Error('Sem permissão.');
 const result=await prompt({window:{title:'Caminho do personagem'},content:`<fieldset class="op-choice"><legend>Objetivo e meio</legend><label>Objetivo<select name="objective">${Object.entries(PATH_OBJECTIVES).map(([id,label])=>`<option value="${id}">${label}</option>`).join('')}</select></label><label>Meio<select name="means">${Object.entries(PATH_MEANS).map(([id,label])=>`<option value="${id}">${label}</option>`).join('')}</select></label></fieldset>`,ok:{label:'Escolher',callback:(_e,_b,app)=>{const f=app.element.querySelector('form').elements;return characterPath(f.objective.value,f.means.value);}}});
 if(result)await actor.update({'system.personal.path':result});
}
export async function chooseProfession(actor){
 if(!actor.isOwner)throw new Error('Sem permissão.');
 const {contentPicker}=await import('./progression-ui.mjs');
 const {resolveContent,acquireProfession}=await import('./progression-services.mjs');
 const reference=await contentPicker('profession','Escolher profissão');if(!reference)return;
 const source=await resolveContent(reference),existing=[...actor.items].filter(item=>item.type==='profession');
 const initial=actor.type==='character'&&actor.system.progression.level===1&&!existing.length;
 const without=source.system.identifier==='sem-profissao';
 const count=initial||without?(source.system.profession.initialSkillCount??0):0;
 const skillOptions=source.system.profession.skillOptions??[];
 const result=await prompt({window:{title:source.name},validate:result=>professionPlan(actor,source,result.skills,{trainingConfirmed:result.confirmed}),content:`${without?'<p class="op-hint">Sem Profissão impede aprender profissões. Escolha as duas perícias de Foco; Ajudante Perfeito, Parceiro de Treino e Tempo Livre ficam disponíveis na ficha.</p>':' '}<fieldset class="op-choice"><legend>Escolhas da profissão</legend>${Array.from({length:count},(_,index)=>`<label>Perícia ${index+1}<select name="skill-${index}"><option value="">Selecione</option>${skillOptions.map(id=>`<option value="${esc(id)}">${esc(SKILLS[id]?.label??id)}</option>`).join('')}</select></label>`).join('')}${existing.length?'<label class="op-checkbox"><input name="confirmed" type="checkbox"> Li o livro ou recebi instrução, cumprindo o prazo de aprendizado (90 dias ou 2 níveis)</label>':''}<p class="op-hint">Somente a profissão do primeiro nível concede perícias e equipamentos iniciais. Equipamento e características específicos devem ser conferidos na fonte.</p></fieldset>`,ok:{label:'Adquirir profissão',callback:(_e,_b,app)=>{const f=app.element.querySelector('form').elements;return {skills:Array.from({length:count},(_,index)=>f.namedItem('skill-'+index).value),confirmed:!existing.length||f.confirmed.checked};}}});
 if(result)return acquireProfession(actor,source,result.skills,{trainingConfirmed:result.confirmed});
}
export async function configureFruit(actor){
 if(!actor.isOwner||actor.type==='ship')throw new Error('Selecione um personagem controlável.');
 const fruit=actor.toObject().system.fruit;
 const options=(map,current)=>Object.entries(map).map(([id,label])=>`<option value="${id}" ${id===current?'selected':''}>${label}</option>`).join('');
 const result=await prompt({window:{title:'Akuma no Mi e formas'},content:`<fieldset class="op-choice"><legend>Fruto</legend><label>Nome<input name="name" value="${esc(fruit.name)}"></label><label>Categoria<select name="category">${options({none:'Nenhuma',paramecia:'Paramecia',logia:'Logia',zoan:'Zoan'},fruit.category)}</select></label><label>Tipo de Zoan<select name="subtype">${options({common:'Comum',ancestral:'Ancestral',mythical:'Mítica'},fruit.subtype)}</select></label><label>Forma atual<select name="form">${options({normal:'Normal',hybrid:'Híbrida / Point',animal:'Animal'},fruit.form)}</select></label><label>Point ativo<input name="point" value="${esc(fruit.point)}"></label><p class="op-hint">${pointSlots(actor.system.progression.level)} Point(s) disponíveis pelo nível. Registre o nome do Point e suas características. Declare a transformação conforme as regras da mesa.</p></fieldset><details class="op-choice"><summary>Traços Zoan · conferir seleção no livro</summary><p class="op-hint">Até 3 comuns; Predador e até 3 específicos, ou até 5 específicos. Ancestral recebe um traço ancestral e pode trocar específicos por ancestrais. Traços personalizados usam características próprias.</p>${['common','specific','ancestral'].map(category=>`<fieldset class="op-choice"><legend>${{common:'Comuns',specific:'Específicos',ancestral:'Ancestrais'}[category]}</legend><div class="op-trait-grid">${ZOAN_TRAITS.filter(trait=>trait.category===category).map(trait=>`<label class="op-checkbox"><input name="trait-${trait.id}" type="checkbox" ${(fruit.traits??[]).includes(trait.id)?'checked':''}> ${esc(trait.name)}</label>`).join('')}</div></fieldset>`).join('')}</details><label>Observações<textarea name="notes">${esc(fruit.notes)}</textarea></label>`,ok:{label:'Aplicar',callback:(_e,_b,app)=>{const f=app.element.querySelector('form').elements;return {'system.fruit.name':f.name.value.trim(),'system.fruit.category':f.category.value,'system.fruit.subtype':f.subtype.value,'system.fruit.form':f.category.value==='zoan'?f.form.value:'normal','system.fruit.point':f.point.value.trim(),'system.fruit.traits':ZOAN_TRAITS.filter(trait=>f.namedItem('trait-'+trait.id).checked).map(trait=>trait.id),'system.fruit.notes':f.notes.value};}}});
 if(result)await actor.update(result);
}
export async function professionDialog(item){
 const actor=item.actor;if(!actor?.isOwner||item.type!=='profession')throw new Error('Selecione uma profissão da sua ficha.');
 if(item.system.identifier==='sem-profissao')return withoutProfessionDialog(item);
 const targets=[...(game.actors??[])].filter(target=>target.isOwner&&target.type!=='ship');if(!targets.some(target=>target.uuid===actor.uuid))targets.unshift(actor);
 const choice=await prompt({window:{title:item.name+' · característica profissional'},validate:result=>{if(!result.confirmed)throw new Error('Confirme ferramenta, tempo e requisitos da característica.');if(!Number.isInteger(result.cost)||result.cost<0||!Number.isInteger(result.difficulty)||result.difficulty<0)throw new Error('Confira custo e CD.');},content:`<fieldset class="op-choice"><legend>Valores da fonte</legend><label>Atributo<select name="attribute">${Object.entries(ATTRIBUTES).map(([id,label])=>`<option value="${id}">${label}</option>`).join('')}</select></label><label>Custo predeterminado (฿)<input name="cost" type="number" min="0" value="0"></label><label>CD predeterminada<input name="difficulty" type="number" min="0" value="15"></label><label>Dado de recuperação<select name="die">${[0,4,6,8,10,12].map(value=>`<option value="${value}">${value?'d'+value:'Não recupera recursos'}</option>`).join('')}</select></label><label>Recurso<select name="resource"><option value="vitality">PV</option><option value="power">PP</option></select></label><label>Alvo controlável<select name="target">${targets.map(target=>`<option value="${esc(target.uuid)}">${esc(target.name)}</option>`).join('')}</select></label><p class="op-hint">A graduação aplica o desconto, reduz a CD e aumenta o dado de recuperação. Não altera dados de dano nem custos gerais de compras.</p><label class="op-checkbox"><input name="advantage" type="checkbox"> Usar vantagem de Especialista (3 por descanso longo)</label><label class="op-checkbox"><input name="forceSuccess" type="checkbox"> Usar sucesso de Grão-Mestre apenas se falhar (recupera 1 uso por descanso longo)</label><label class="op-checkbox"><input name="confirmed" type="checkbox"> Conferi ferramenta, tempo e requisitos da fonte</label></fieldset>`,ok:{label:'Realizar teste',callback:(_e,_b,app)=>{const f=app.element.querySelector('form').elements;return {attribute:f.attribute.value,cost:Number(f.cost.value),difficulty:Number(f.difficulty.value),die:Number(f.die.value),restoration:Number(f.die.value)>0,resource:f.resource.value,target:targets.find(target=>target.uuid===f.target.value),confirmed:f.confirmed.checked,advantage:f.advantage.checked,forceSuccess:f.forceSuccess.checked};}}});
 if(choice)return professionOperation(item,choice);
}
