export const RULE_KINDS=Object.freeze({shortRestMinutes:'Duração do descanso curto (minutos)',defense:'Bônus de CR',movement:'Deslocamento mínimo',movementBonus:'Deslocamento adicional',movementMultiplier:'Multiplicador de deslocamento',ignoreDifficultTerrain:'Ignorar terreno difícil',vitality:'PV máximos adicionais',skill:'Bônus em perícia',skillProficiency:'Conceder proficiência em perícia',skillMultiplier:'Multiplicador de proficiência em perícia',saveProficiency:'Conceder proficiência em salvaguarda',attackBonus:'Bônus de ataque',saveMultiplier:'Multiplicador de proficiência em salvaguarda',attributeProficiency:'Proficiência em teste de atributo',attributeMultiplier:'Multiplicador de proficiência em teste de atributo',weaponProficiency:'Proficiência em arma',powerReduction:'Redução de custo em PP',powerMultiplier:'Multiplicador do custo em PP',bonusAction:'Permitir ação comum como bônus',attacks:'Ataques por ação (maior valor)',skillAdvantage:'Vantagem em perícia',saveAdvantage:'Vantagem em salvaguarda'});
export function activeItemRules(system,items=[]) {
 const learned=items.filter(item=>item.type!=='training'||item.system.training?.state==='learned');
 const result=[];
 for(const item of learned)for(const rule of item.system.rules??[]) {
  if(!Object.hasOwn(RULE_KINDS,rule.kind)||!Number.isFinite(rule.amount))continue;
  const condition=rule.condition??{};
  if(condition.minimumLevel&&(system.progression?.level??1)<condition.minimumLevel)continue;
  if(condition.context&&!system.situations?.includes(condition.context))continue;
  if(condition.training&&!learned.some(entry=>entry.type==='training'&&entry.system.identifier===condition.training))continue;
  if(condition.aboveHalfHP&&system.vitality.value<=system.vitality.max/2)continue;
  if(condition.equipped&&!item.system.equipment?.equipped)continue;
  const styleKey=item.system.tags?.find(tag=>tag.startsWith('style:'))?.slice(6);
  const factor=rule.scale==='character'?(system.progression?.level??1):rule.scale==='style'?(system.progression?.styles??[]).find(style=>style.identifier===styleKey)?.levels??0:rule.scale==='proficiency'?(system.proficiency?.bonus??2):1;
  result.push({...rule,value:rule.amount*factor,source:item.name});
 }
 return result;
}
export function itemRuleAdvantage(system,items,kind,key) {return activeItemRules(system,items).some(rule=>rule.kind===kind&&rule.key===key);}
