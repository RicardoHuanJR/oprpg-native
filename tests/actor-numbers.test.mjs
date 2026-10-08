import test from 'node:test';import assert from 'node:assert/strict';
import {actorNumbers} from '../scripts/actor-numbers.mjs';
test('ficha de versão anterior sem exaustão ou modificadores derivados não produz NaN',()=>{
 const old={progression:{level:5},attributes:{strength:{base:16,saveProficient:true},dexterity:{base:14}}};
 const before=JSON.stringify(old);const values=actorNumbers(old);
 assert.equal(values.attributes.strength.saveTotal,6);assert.equal(values.initiative,2);
 assert.ok(Object.values(values.attributes).every(attribute=>Number.isFinite(attribute.saveTotal)));
 assert.equal(JSON.stringify(old),before);
});
test('bônus zero do bloco e exaustão prevalecem sem somar proficiência duas vezes',()=>{
 const values=actorNumbers({progression:{level:10},proficiencyOverride:5,exhaustion:2,attributes:{strength:{base:18,saveProficient:true,saveOverride:0}}},'npc');
 assert.equal(values.attributes.strength.saveTotal,-4);assert.equal(values.proficiency,5);
});
