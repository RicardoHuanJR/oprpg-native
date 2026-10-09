import {progressionHP} from './advancement.mjs';
import {ATTRIBUTES} from './rules.mjs';
import {SKILLS} from './engine.mjs';
const escape=value=>foundry.utils.escapeHTML(String(value??''));
const prompt=options=>foundry.applications.api.DialogV2.prompt({...options,classes:['oprpg-native','op-dialog','op-flow'],position:{width:620}});
const guarded=handler=>async function(...args){try{return await handler.apply(this,args);}catch(error){console.error('OP RPG',error);ui.notifications.error(error.message);}};
export const legacyConfigurationActions={
  configureResources:guarded(async function(){
    if(!this.actor.isOwner)throw new Error('Sem permissão de edição.');
    const source=this.actor.toObject().system,automatic=progressionHP(this.actor.system)!==null;
    const result=await prompt({window:{title:'Pontos de Vida e de Poder'},content:`<fieldset class="op-choice"><legend>Pontos de Vida</legend>${automatic?`<p>Máximo calculado: <strong>${this.actor.system.vitality.max}</strong></p><p class="op-hint">A espécie, os níveis, a Constituição e os benefícios definem este valor. Ajuste sua origem na progressão ou adicione um benefício condicional.</p>`:`<label>Máximo informado<input name="hp" type="number" min="0" step="1" value="${source.vitality.max}" required></label>`}<label>PV negativos<input name="negative" type="number" min="0" step="1" value="${source.vitality.negative}" required></label></fieldset><fieldset class="op-choice"><legend>Pontos de Poder</legend><p class="op-hint">O cálculo padrão é 4 × nível. Deixe vazio para usar esse cálculo.</p><label>Máximo excepcional<input name="pp" type="number" min="0" step="1" value="${source.power.maxOverride??''}"></label></fieldset>`,ok:{label:'Salvar',callback:(_e,_b,app)=>{
      const form=app.element.querySelector('form').elements;
      return {...(!automatic?{'system.vitality.max':Number(form.hp.value)}:{}),'system.vitality.negative':Number(form.negative.value),'system.power.maxOverride':form.pp.value===''?null:Number(form.pp.value)};
    }}});if(result)await this.actor.update(result);
  }),
  configureSkill:guarded(async function(_event,target){
    if(!this.actor.isOwner)throw new Error('Sem permissão de edição.');
    const id=target.dataset.skill;if(!Object.hasOwn(SKILLS,id))throw new Error('Perícia desconhecida.');
    const source=this.actor.toObject().system.skills[id];
    const result=await prompt({window:{title:`Configurar ${SKILLS[id].label}`},content:`<fieldset class="op-choice"><legend>${escape(SKILLS[id].label)} · ${escape(ATTRIBUTES[SKILLS[id].attribute])}</legend><p class="op-hint">Proficiências de origem, bônus raciais e exaustão entram automaticamente no cálculo.</p><label>Aplicação da proficiência<select name="multiplier">${[[0.5,'Metade'],[1,'Normal'],[1.5,'Uma vez e meia'],[2,'Dobro']].map(([value,label])=>`<option value="${value}" ${source.multiplier===value?'selected':''}>${label}</option>`).join('')}</select></label><label>Bônus manual adicional<input name="bonus" type="number" step="1" value="${source.bonus}" required></label><label>Total excepcional da fonte (vazio: calcular)<input name="override" type="number" step="1" value="${source.override??''}"></label></fieldset>`,ok:{label:'Salvar',callback:(_e,_b,app)=>{
      const form=app.element.querySelector('form').elements;
      return Object.fromEntries(Object.entries({multiplier:Number(form.multiplier.value),bonus:Number(form.bonus.value),override:form.override.value===''?null:Number(form.override.value)}).map(([key,value])=>[`system.skills.${id}.${key}`,value]));
    }}});if(result)await this.actor.update(result);
  })
};
