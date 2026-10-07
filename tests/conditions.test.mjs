import test from "node:test";
import assert from "node:assert/strict";
import {conditionSet,conditionModifiers,targetAttackModifiers,movementFromConditions} from "../scripts/conditions.mjs";
test('inconsciência implica caído/incapacitado; ficha ainda sem PV definidos não é um cadáver',()=>{
 const ids=conditionSet([],{value:0,max:20});assert.ok(ids.has('prone'));assert.ok(ids.has('incapacitated'));
 assert.equal(conditionSet([],{value:0,max:0}).has('unconscious'),false);
});
test('medo afeta ataque comum com fonte visível, sem vazar automaticamente para técnica',()=>{
 assert.equal(conditionModifiers(['frightened'],{kind:'attack',category:'weapon',fearSourceVisible:true}).disadvantage,true);
 assert.equal(conditionModifiers(['frightened'],{kind:'attack',category:'technique',fearSourceVisible:true}).disadvantage,false);
});
test('condições não usam regras de outro sistema: atordoado falha força/destreza e crítico adiciona dados',()=>{
 assert.equal(conditionModifiers(['stunned'],{kind:'save',attribute:'strength'}).automaticFailure,true);
 assert.equal(conditionModifiers(['stunned'],{kind:'save',attribute:'constitution'}).automaticFailure,false);
 assert.equal(targetAttackModifiers(['stunned']).extraCriticalDice,2);
});
test('caído exige distância para vantagem/desvantagem e agarrado impede movimento',()=>{
 assert.equal(targetAttackModifiers(['prone'],{distance:1.5}).advantage,true);
 assert.equal(targetAttackModifiers(['prone'],{distance:9}).disadvantage,true);
 assert.equal(movementFromConditions(9,['grappled']),0);
});
