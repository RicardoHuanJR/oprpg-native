import test from "node:test";
import assert from "node:assert/strict";
import * as e from "../scripts/engine.mjs";
const vitality=(value=20)=>({value,max:20,temporary:0,negative:0,dead:false});
test("perícias são OP RPG, passivos e proficiência não vazam para testes não proficientes",()=>{
  assert.equal(e.SKILLS.medicine.attribute,"wisdom");assert.equal(e.SKILLS.perception.attribute,"will");assert.equal(Object.keys(e.SKILLS).length,19);
  const check=e.skillCheck({attributeValue:15,proficiency:3,proficient:false,multiplier:2,exhaustion:1,advantage:true});
  assert.equal(check.bonus,0);assert.equal(check.passive,15);assert.equal(check.formula,"2d20kh + 0 + 0");
});
test("progressão PE e estágios PA usam fronteiras das tabelas",()=>{
  assert.equal(e.levelForXP(299),1);assert.equal(e.levelForXP(300),2);assert.equal(e.levelForXP(355000),20);
  assert.deepEqual([0,1,20,21,70,71].map(e.hakiStage),["Latente","Inexperiente","Inexperiente","Treinado","Treinado","Perito"]);
  assert.equal(e.naturalAmbition(7),0);assert.equal(e.naturalAmbition(8),5);assert.equal(e.naturalAmbition(9),17);
});
test("dano: redução precede resistência; resistências repetidas contam uma vez",()=>{
  const hit=e.resolveDamage(vitality(),{components:[{type:"bludgeoning",amount:25,reduction:5}],resistances:["bludgeoning","bludgeoning"]});
  assert.equal(hit.total,10);assert.equal(hit.vitality.value,10);assert.equal(hit.trace[0].final,10);
});
test("temporários absorvem primeiro, cura não os restaura nem excede máximo",()=>{
  const start={...vitality(10),temporary:5};
  const hit=e.resolveDamage(start,{components:[{type:"fire",amount:7}]});
  assert.equal(hit.vitality.temporary,0);assert.equal(hit.vitality.value,8);assert.equal(start.temporary,5);
  const healed=e.resolveHealing(hit.vitality,100);assert.equal(healed.vitality.value,20);assert.equal(healed.vitality.temporary,0);
  assert.throws(()=>e.temporaryHP(10,12),e.RuleDecisionRequired);assert.equal(e.temporaryHP(10,12,"replace"),12);assert.equal(e.temporaryHP(10,12,"keep"),10);
});
test("PV negativos só contam dano subsequente; cura reinicia contador",()=>{
  const first=e.resolveDamage(vitality(6),{components:[{type:"fire",amount:10}]});assert.equal(first.vitality.negative,0);assert.equal(first.vitality.dead,false);
  const next=e.resolveDamage(first.vitality,{components:[{type:"fire",amount:7}]});assert.equal(next.vitality.negative,7);assert.equal(next.vitality.dead,false);
  assert.equal(e.resolveHealing(next.vitality,1).vitality.negative,0);
  assert.equal(e.resolveDamage(next.vitality,{components:[{type:"fire",amount:13}]}).vitality.dead,true);
  assert.equal(e.resolveDamage(vitality(6),{components:[{type:"fire",amount:26}]}).massive,true);
});
test("efeito que ignora mitigação/temporários não segue pipeline normal",()=>{
  const hit=e.resolveDamage({...vitality(),temporary:10},{components:[{type:"fire",amount:6,reduction:5}],resistances:["fire"],bypassMitigation:true,bypassTemporary:true});
  assert.equal(hit.vitality.value,14);assert.equal(hit.vitality.temporary,10);
  assert.equal(e.resolveDamage(vitality(),{components:[{type:"true",amount:6}],immunities:["true"],resistances:["true"]}).total,6);
});
test("resistência/vulnerabilidade simultâneas exigem decisão; não inventar ordem",()=>{
  assert.throws(()=>e.resolveDamage(vitality(),{components:[{type:"fire",amount:7}],resistances:["fire"],vulnerabilities:["fire"]}),e.RuleDecisionRequired);
});
test("proteção com descarte de excedente é distinta de proteção comum",()=>{
  assert.deepEqual(e.absorbProtection(10,15),{value:0,absorbed:10,overflow:5});
  assert.equal(e.absorbProtection(10,15,{discardOverflow:true}).overflow,0);
});
test("sobrecarga usa grau da fonte e não aceita auxiliar inferido por custo",()=>{
  assert.deepEqual(e.powerCostPlan({current:4,cost:3,category:"technique"}),{power:1,exhaustion:0,cost:3});
  assert.throws(()=>e.powerCostPlan({current:0,cost:9,category:"auxiliary",overload:true}),e.RuleDecisionRequired);
  assert.throws(()=>e.powerCostPlan({current:0,cost:2,category:"technique",grade:2,exhaustion:4,overload:true}));
  assert.equal(e.powerCostPlan({current:0,cost:9,category:"technique",grade:1,exhaustion:0,overload:true}).exhaustion,1);
});
test("descanso respeita duração, início, recuperação de DV e intervalo",()=>{
  const system={vitality:{max:30},power:{value:1,max:12},hitDice:{available:0,max:3},exhaustion:0,rest:{lastLongRest:null}};
  const rest=e.longRestPlan(system,{startedAt:0,completedAt:28800,startHP:1,startExhaustion:0});
  assert.equal(rest['system.hitDice.available'],1);assert.equal(rest['system.power.value'],12);
  assert.throws(()=>e.longRestPlan(system,{startedAt:0,completedAt:28800,startHP:0,startExhaustion:0}));
  assert.throws(()=>e.longRestPlan(system,{startedAt:0,completedAt:28800,startHP:1,startExhaustion:1}),e.RuleDecisionRequired);
});
test("modificadores de ataque comum não alcançam técnicas por acidente",()=>{
  const modifiers=[{id:"common",categories:["weapon"]},{id:"tech",categories:["technique"],minimumGrade:2},{id:"one",activityId:"other"}];
  assert.deepEqual(e.scopedModifiers(modifiers,{category:"technique",grade:1,activityId:"primary"}),[]);
  assert.deepEqual(e.scopedModifiers(modifiers,{category:"weapon",grade:null,activityId:"primary"}).map(m=>m.id),["common"]);
});
test("ataque mantém natural separado do total, falha 1 e crítico 20",()=>{
  assert.equal(e.attackResult({natural:1,total:40,targetCR:10}).hit,false);
  assert.equal(e.attackResult({natural:20,total:18,targetCR:30}).naturalCritical,true);
  assert.equal(e.attackResult({natural:19,total:24,targetCR:20,criticalThreshold:19}).critical,true);
  assert.equal(e.attackResult({natural:19,total:24,targetCR:20,criticalThreshold:19}).naturalCritical,false);
});
