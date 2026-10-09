import {ATTRIBUTES,attributeModifier,proficiencyBonus} from "./rules.mjs";
const finite=(value,fallback)=>Number.isFinite(value)?value:fallback;
export function actorNumbers(system,type="character") {
  const exhaustion=finite(system.exhaustion,0);
  const level=finite(system.progression?.level,1);
  const proficiency=Number.isFinite(system.proficiency?.bonus)?system.proficiency.bonus:type==="npc"?finite(system.proficiencyOverride,0):proficiencyBonus(level);
  const attributes=Object.fromEntries(Object.entries(ATTRIBUTES).map(([id,label])=>{
    const source=system.attributes?.[id]??{};
    const base=finite(source.base,10);
    const modifier=finite(source.modifier,attributeModifier(base));
    const save=(Number.isFinite(source.saveOverride)?source.saveOverride:modifier+(source.saveProficient?Math.floor(proficiency*(source.saveMultiplier??1)):0))-2*exhaustion;
    return [id,{...source,base,modifier,label,saveTotal:save,signedModifier:modifier>=0?`+${modifier}`:String(modifier)}];
  }));
  return {attributes,proficiency,exhaustion,initiative:attributes.dexterity.modifier-2*exhaustion};
}
