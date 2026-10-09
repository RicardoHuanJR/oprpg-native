const normalize=value=>String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
export function weaponProperties(item){const values=(item.system.weapon?.properties??[]).map(normalize),has=name=>values.some(value=>value.includes(name));return {finesse:has('acuidade'),heavy:has('pesada'),reach:has('alcance'),siege:has('cerco'),twoHands:has('duas maos'),throwing:has('arremesso'),versatile:values.map(value=>value.match(/versatil.*?(\d+d\d+)/)?.[1]).find(Boolean),martial:item.system.tags?.includes('weaponCategory:armas-marciais'),ranged:has('distancia')&&!has('arremesso')||values.length===0&&(item.system.weapon?.normalRange??0)>0};}
export function martialDamage(base,{allow2d6=false}={}){const steps=['1','1d4','1d6','1d8','1d10','1d12',...(allow2d6?['2d6']:[])],index=steps.indexOf(base.trim());if(index<0)throw new Error('Configure o dado de dano desarmado antes de usar a arma marcial.');return steps[Math.min(index+1,steps.length-1)];}
export function weaponAttackSetup(item,actor,{attributeOverride,twoHands=false,throwing=false,targetDistance=null,baseFormula}={}){
  const properties=weaponProperties(item);if(throwing&&!properties.throwing)throw new Error('Esta arma não permite arremesso.');let attribute=properties.ranged?'dexterity':'strength';
  if(attributeOverride){if(!['strength','dexterity'].includes(attributeOverride)||attributeOverride==='dexterity'&&!properties.finesse&&!properties.ranged&&!properties.throwing)throw new Error('O atributo não é permitido por esta arma.');attribute=attributeOverride;}
  if(properties.twoHands&&!twoHands)throw new Error('Confirme a empunhadura com duas mãos.');
  const size=actor.system.environment?.sizeCategory??'medium';
  const max=properties.ranged||throwing?item.system.weapon.maximumRange:properties.reach?3:1.5;
  if(targetDistance!==null&&max>0&&targetDistance>max)throw new Error('Alvo além do alcance máximo desta forma de ataque.');
  let formula=baseFormula??item.system.activity.damageFormula;
  if(properties.martial)formula=martialDamage(actor.system.combat.unarmedDamage??'1',{allow2d6:actor.system.combat.martial2d6});
  if(twoHands&&properties.versatile)formula=properties.versatile;
  if(actor.statuses?.has('empowered')&&!properties.ranged&&!throwing&&['1','1d4','1d6','1d8','1d10'].includes(formula))formula='1d12';
  if(!properties.ranged&&!throwing&&(actor.items??[]).some(item=>item.system.identifier==='guerreiro-nato'&&item.system.training?.state==='learned')&&['1','1d4','1d6','1d8','1d10'].includes(formula))formula='1d12';
  return {attribute,damageFormula:formula,disadvantage:properties.heavy&&['tiny','small'].includes(size),siege:properties.siege};
}
