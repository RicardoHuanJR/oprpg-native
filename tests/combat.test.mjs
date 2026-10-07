import test from "node:test";
import assert from "node:assert/strict";
import {activationPlan} from "../scripts/combat-rules.mjs";
const context={encounter:"fight",actorUUID:"Actor.player",globalEpoch:"fight:1:0",ownEpoch:"fight:player:1",ownRound:1,isOwnTurn:true,round:1,turn:0};
test("ação e poderosa são reservas distintas e ataques extras pertencem à mesma ação",()=>{
 let state=activationPlan({}, {context,category:"weapon",activation:"action",attacksPerAction:2}).state;
 assert.equal(state.attacksRemaining,1);
 state=activationPlan(state,{context,category:"technique",activation:"powerful"}).state;
 state=activationPlan(state,{context,category:"weapon",activation:"action",attacksPerAction:2}).state;
 assert.equal(state.attacksRemaining,0);
 assert.throws(()=>activationPlan(state,{context,category:"weapon",activation:"action"}));
});
test("técnica com bônus é exceção ao limite geral, mas bônus só é gasto uma vez",()=>{
 let state=activationPlan({}, {context,category:"technique",activation:"powerful"}).state;
 state=activationPlan(state,{context,category:"auxiliary",activation:"bonus"}).state;
 assert.throws(()=>activationPlan(state,{context,category:"auxiliary",activation:"bonus"}));
 assert.throws(()=>activationPlan(state,{context,category:"technique",activation:"reaction"}));
});
test("reação se recupera no começo do próprio turno, não no turno de outra criatura",()=>{
 let state=activationPlan({}, {context,category:"feature",activation:"reaction"}).state;
 const other={...context,isOwnTurn:false,globalEpoch:"fight:1:1",turn:1};
 assert.throws(()=>activationPlan(state,{context:other,category:"feature",activation:"reaction"}));
 const next={...context,globalEpoch:"fight:2:0",ownEpoch:"fight:player:2",ownRound:2,round:2};
 assert.equal(activationPlan(state,{context:next,category:"feature",activation:"reaction"}).state.reactionUsed,true);
});
test("lendária exige janela válida, reserva e uma execução por fim de turno",()=>{
 const other={...context,isOwnTurn:false,actorUUID:"Actor.boss",ownEpoch:"fight:boss:0",ownRound:0,legendaryWindow:{actorUUID:"Actor.player",round:1,turn:0}};
 const first=activationPlan({}, {context:other,category:"legendary",activation:"legendary",legendaryValue:3,legendaryMax:3});
 assert.equal(first.legendaryValue,2);
 assert.throws(()=>activationPlan(first.state,{context:other,category:"legendary",activation:"legendary",legendaryValue:2,legendaryMax:3}));
 assert.throws(()=>activationPlan({}, {context:{...other,legendaryWindow:null},category:"legendary",activation:"legendary",legendaryValue:3}));
});
