import {bookDescription} from './book-descriptions.mjs';
import {contentArtwork,isGenericArtwork} from './content-art.mjs';
import {activeItemRules} from './item-rules.mjs';
import {activityCost} from './mechanics.mjs';
import {ATTRIBUTES,attributeModifier} from './rules.mjs';
import {SKILLS,DAMAGE_TYPES} from './engine.mjs';
import {primaryStyle,progressionHP} from './advancement.mjs';
import {CATALOG} from './catalog.mjs';
const ranks={professional:'Profissional',specialist:'Especialista',master:'Mestre',grandMaster:'Grão-Mestre'};
const bookPortraits={celestiais:'celestiais',arqueologo:'arqueologo',criminoso:'criminoso'};
function referencePortrait(item,name=''){
  const key=(item?.system?.identifier||name).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const art=bookPortraits[key]??(key.startsWith('celestiais')?'celestiais':null);
  const custom=!isGenericArtwork(item?.img),portrait=contentArtwork(item??{name,type:'species'});
  return {img:custom?item.img:!isGenericArtwork(portrait)?portrait:art?`systems/oprpg-native/ui/book/${art}.webp`:null,art:custom?'custom':art,icon:key==='adestrador'?'paw':'briefcase'};
}
export function sheetSummary(system,items=[]){
  const receipts=system.progression?.receipts??[],rules=activeItemRules(system,items);
  const origin=kind=>{const entry=receipts.find(r=>r.kind===kind);const uuid=entry?.source||(kind==='species'?system.identity?.species?.uuid:'');const name=entry?.name||(kind==='species'?system.identity?.species?.name:system.personal?.background);const item=items.find(i=>i.type===kind&&(i.uuid===uuid||i.name===name))??CATALOG.find(i=>`catalog:${i.id}`===uuid||i.type===kind&&i.name===name);return {traits:bookDescription(item??{})?.traits??item?.system?.traits,uuid,id:items.includes(item)?item.id:null,...referencePortrait(item,name),name};};
  const primary=primaryStyle(system);
  const professions=items.filter(i=>i.type==='profession').map(i=>({id:i.id,...referencePortrait(i,i.name),name:i.name,withoutProfession:i.system.identifier==='sem-profissao',rank:i.system.identifier==='sem-profissao'?'':ranks[i.system.profession?.rank]??'',description:i.system.description??''}));
  const traits=[{label:'Tamanho',value:({tiny:'Minúsculo',small:'Pequeno',medium:'Médio',large:'Grande',huge:'Enorme',immense:'Imenso'})[system.environment?.sizeCategory]},
    ...['senses','languages'].map(key=>({label:key==='senses'?'Sentidos':'Idiomas',value:system.referenceTraits?.[key]})),
    ...Object.entries({resistances:'Resistências',immunities:'Imunidades',vulnerabilities:'Vulnerabilidades'}).map(([key,label])=>({label,value:(system.damageMitigation?.[key]??[]).map(id=>DAMAGE_TYPES[id]??id).join(', ')}))].filter(t=>t.value);
  const skillDetails=Object.fromEntries(Object.entries(SKILLS).map(([id,config])=>{
    const skill=system.skills?.[id];if(!skill)return [id,''];
    const lines=[`${ATTRIBUTES[config.attribute]}: ${system.attributes?.[config.attribute]?.modifier??0}`,`Proficiência: ${skill.proficient?system.proficiency?.bonus??0:0} × ${skill.effectiveMultiplier??skill.multiplier}`,`Bônus manual: ${skill.bonus??0}`];
    for(const receipt of receipts)for(const benefit of receipt.benefits??[])if(benefit.key===id&&['skill','skillBonus','skillMultiplier'].includes(benefit.kind))lines.push(`${receipt.name}: ${benefit.kind==='skill'?'proficiência':benefit.kind==='skillMultiplier'?`proficiência × ${benefit.amount}`:`bônus ${benefit.amount}`}`);
    for(const rule of rules)if(rule.key===id&&['skill','skillProficiency','skillMultiplier'].includes(rule.kind)||rule.key===config.attribute&&['attributeProficiency','attributeMultiplier'].includes(rule.kind))lines.push(`${rule.source}: ${rule.kind.includes('Multiplier')?`proficiência × ${rule.value}`:rule.kind.includes('Proficiency')?'proficiência':`bônus ${rule.value}`}`);
    if(id==='haki'&&['Treinado','Perito'].includes(system.haki?.stage))lines.push(`Haki ${system.haki.stage}: proficiência`);
    if(skill.override!==null&&skill.override!==undefined)lines.push(`Total excepcional antes da exaustão: ${skill.override}`);
    lines.push(`Exaustão: −${2*(system.exhaustion??0)}`,`Total: ${skill.total??0}`);return [id,lines.join('\n')];
  }));
  const hp=progressionHP(system),levels=receipts.filter(r=>r.kind==='level'),legacy=receipts.find(r=>r.kind==='legacy');
  const hpLines=hp===null?[`Máximo informado: ${system.vitality?.max??0}`]:[...receipts.filter(r=>r.kind==='species').map(r=>`${r.name}: ${r.baseHP} PV base`),...levels.map(r=>`${r.name} · nível ${r.styleLevel}: ${r.hpRoll} PV`),...(legacy?[`Níveis anteriores: ${legacy.baseHP} PV base`]:[]),`Constituição: ${attributeModifier(system.attributes.constitution.base)} × ${levels.length+(legacy?.level??0)}`,`Ajustes adicionais: ${(system.vitality?.max??0)-hp}`,`Máximo: ${system.vitality?.max??0}`];
  const powerExplanation=system.power?.maxOverride!==null&&system.power?.maxOverride!==undefined?`Máximo excepcional: ${system.power.maxOverride} PP`:`4 × nível ${system.progression?.level??1} = ${system.power?.max??0} PP`;
  const movementExplanation=[system.movement?.automatic!==false?'Base automática da raça':'Base manual',`Caminhada base: ${system.movement?.distance??0} m`,...rules.filter(r=>['movement','movementBonus','movementMultiplier'].includes(r.kind)).map(r=>`${r.source}: ${r.kind==='movementMultiplier'?'multiplicador ×':r.kind==='movement'?'mínimo':'adicional'} ${r.value}`),`Exaustão: ${system.exhaustion??0}`,`Caminhada atual: ${system.movementModes?.distance??system.effectiveMovement??0} m`].join('\n');
  return {speciesReference:origin('species'),backgroundReference:origin('background'),professions,traitSummary:traits,legacyProfession:professions.length?'':system.identity?.profession,hpExplanation:hpLines.join('\n'),powerExplanation,movementExplanation,
    styleSummary:(system.progression?.styles??[]).map(s=>({...s,primary:s.key===primary?.key})),skillDetails};
}
export function itemSummary(item,system,items=[]){
  const activity=item.system.activity,training=item.system.training,uses=item.system.uses;
  let cost=activity?.powerCost,costExplanation='';
  if(activity&&activity.activation!=='passive')try{const quote=activityCost(item,activity,system,items);cost=quote.cost;costExplanation=[`Registrado: ${quote.base} PP`,`Redução de construção: ${quote.creationDiscount+quote.limitedDiscount}`,`Redução de benefícios: ${quote.reduction}`,`Multiplicador: ${quote.factor}`,`Custo atual: ${quote.cost} PP`,...quote.sources].join('\n');}catch(error){costExplanation=error.message;}
  const requirements=[activity?.requirements,item.system.prerequisite,training?.manualRequirement,...(training?.requirements??[]).map(r=>`${r.attributes.map(a=>ATTRIBUTES[a]??a).join(' ou ')} ≥ ${r.minimum}`)].filter(Boolean).join(' · ');
  return {cost,costExplanation,requirements,usesSummary:uses?.max>0?`${uses.value}/${uses.max} usos`:'',trainingSummary:training?`${training.state==='unlearned'?training.cost:training.paidCost} PT · ${training.state==='unlearned'?training.days:training.requiredDays} dias${training.tutorRequired?' · tutor exigido':''}`:''};
}
