import test from 'node:test';
import assert from 'node:assert/strict';
import {ammunitionPlan,consumeEquipment,weaponProficient} from '../scripts/inventory.mjs';
test('ammunition stock rejects unavailable quantities and points to an owned item',()=>{
 const ammo={type:'equipment',system:{equipment:{quantity:6}}};const actor={items:{get:id=>id==='ammo'?ammo:null}};assert.equal(ammunitionPlan(actor,{ammunitionItem:'ammo',ammunitionCost:3}).after,3);assert.throws(()=>ammunitionPlan(actor,{ammunitionItem:'ammo',ammunitionCost:7}),/insuficiente/);assert.throws(()=>ammunitionPlan(actor,{ammunitionItem:'other',ammunitionCost:1}),/Selecione/);assert.equal(ammunitionPlan(actor,{}),null);
});
test('weapon proficiency reads native style groups, including multiple groups in one source',()=>{
 const actor={system:{progression:{styles:[{equipmentProficiencies:['Armas de Fogo, Armas de Navio','Kanabo/Tacape']}]}}};assert.equal(weaponProficient(actor,{name:'Pistola',system:{tags:['weaponCategory:armas-de-fogo']}}),true);assert.equal(weaponProficient(actor,{name:'Kanabo/Tacape',system:{tags:[]}}),true);assert.equal(weaponProficient(actor,{name:'Katana',system:{tags:['weaponCategory:armas-cortantes']}}),false);
});
test('consumables serialize stock changes and preserve stock on invalid requests',async()=>{
 const actor={isOwner:true};const item={actor,system:{equipment:{consumable:true,quantity:2}},async update(changes){item.system.equipment.quantity=changes['system.equipment.quantity'];}};await Promise.all([consumeEquipment(actor,item),consumeEquipment(actor,item)]);assert.equal(item.system.equipment.quantity,0);await assert.rejects(consumeEquipment(actor,item),/estoque/);assert.equal(item.system.equipment.quantity,0);
});
