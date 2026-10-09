import {actorCommand} from './services.mjs';
import {activeItemRules} from './item-rules.mjs';
export function ammunitionPlan(actor,activity) {
 const amount=activity.ammunitionCost??0;if(!amount)return null;
 if(!Number.isInteger(amount)||amount<0)throw new Error('Quantidade de munição inválida.');
 const item=actor.items?.get(activity.ammunitionItem);
 if(!item||!['equipment','weapon'].includes(item.type))throw new Error('Selecione a munição na configuração da atividade.');
 const quantity=item.system.equipment.quantity;if(quantity<amount)throw new Error('Munição insuficiente.');
 return {item,before:quantity,after:quantity-amount};
}
export function weaponProficient(actor,item) {
 if(!actor)return false;
 const groups=[...(actor.system.progression?.styles??[]).flatMap(style=>style.equipmentProficiencies??[]),...activeItemRules(actor.system,[...(actor.items??[])]).filter(rule=>rule.kind==='weaponProficiency').map(rule=>rule.key)];
 const normalize=text=>String(text).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-');
 const categories=(item.system.tags??[]).filter(tag=>tag.startsWith('weaponCategory:')).map(tag=>tag.slice(15));
 const names=item.name.split('/').map(normalize);
 return groups.some(group=>categories.some(category=>normalize(group).includes(category))||names.some(name=>normalize(group).includes(name)));
}
export function consumeEquipment(actor,item,amount=1) {
 return actorCommand(actor,async()=>{
  if(item.actor!==actor||!item.system.equipment?.consumable)throw new Error('Este item não é um consumível deste personagem.');
  if(!Number.isInteger(amount)||amount<1||amount>item.system.equipment.quantity)throw new Error('Quantidade de consumo inválida ou estoque insuficiente.');
  await item.update({'system.equipment.quantity':item.system.equipment.quantity-amount});
  return amount;
 });
}
