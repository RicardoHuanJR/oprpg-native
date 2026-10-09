import test from 'node:test';
import assert from 'node:assert/strict';
import {CATALOG} from '../scripts/catalog.mjs';
import {levelPlan,levelSteps,trainingQuote,validateChoices,headerImage,hitDicePools,progressionHP,dependentChoices} from '../scripts/advancement.mjs';
const source=name=>{const item=CATALOG.find(i=>i.name===name);return {...item,uuid:`catalog:${item.id}`};};
const system=()=>({attributes:Object.fromEntries(['strength','dexterity','constitution','wisdom','presence','will'].map(id=>[id,{base:16}])),skills:{},identity:{species:{name:'Celestiais',identifier:'celestiais',ancestries:[]}},progression:{level:1,styles:[],receipts:[]},training:{points:20,spentHitDice:{}}});
const choices=steps=>{const selected=Object.fromEntries(steps.map(step=>[step.id,step.allowRepeat?Array(step.count).fill(step.options[0]):step.options.slice(0,step.count)]));for(const step of dependentChoices(steps,selected))selected[step.id]=step.allowRepeat?Array(step.count).fill(step.options[0]):step.options.slice(0,step.count);return selected;};
test('first style uses maximum die, grants initial choices and never heals',()=>{
 const s=system(),style=source('Lutador'),steps=levelSteps(s,style).steps;
 const plan=levelPlan(s,style,choices(steps));assert.equal(plan.hpRoll,12);assert.equal(plan.next,1);assert.equal(plan.styles[0].levels,1);assert.equal(plan.pt,0);assert.ok(plan.benefits.some(b=>b.kind==='save'));assert.equal(plan.vitality,undefined);
});
test('multistyle prerequisites, one skill, no new innate or saves; total level rewards',()=>{
 const s=system();s.progression.styles=[{key:'lutador',identifier:'lutador',levels:1,hitDie:12}];
 assert.throws(()=>levelSteps(s,source('Ninja')),/habilitar/);
 const ninja=source('Ninja'),steps=levelSteps(s,ninja,{multiStyle:true}).steps;
 const plan=levelPlan(s,ninja,choices(steps),{multiStyle:true,hpRoll:3});assert.equal(plan.next,2);assert.equal(plan.styleLevel,1);assert.equal(plan.pt,3);assert.equal(plan.benefits.filter(b=>b.kind==='skill').length,1);assert.equal(plan.benefits.filter(b=>b.kind==='save').length,0);assert.ok(!steps.some(step=>step.id==='innate'));
 s.attributes.dexterity.base=15;assert.throws(()=>levelSteps(s,ninja,{multiStyle:true}),/pré-requisitos/);
});
test('mixed hit dice retain pools and spent dice; HP includes racial and constitution per total level',()=>{
 const s=system();s.progression.styles=[{key:'lutador',levels:3,hitDie:12},{key:'ninja',levels:2,hitDie:8}];s.training.spentHitDice={12:1};assert.deepEqual(hitDicePools(s),[{faces:12,max:3,available:2},{faces:8,max:2,available:2}]);
 s.progression.receipts=[{kind:'species',baseHP:10},{kind:'level',hpRoll:12},{kind:'level',hpRoll:4}];assert.equal(progressionHP(s),32);
});
test('canonical celestial discount requires learned affinity, removes time and ability prerequisites',()=>{
 const s=system();s.attributes.wisdom.base=10;const affinity=source('Afinidade Cultural'),knowledge=source('Conhecimento Celestial');
 assert.throws(()=>trainingQuote(s,knowledge,[]),/Atributos/);
 affinity.system={...affinity.system,training:{...affinity.system.training,state:'inProgress'}};
 assert.throws(()=>trainingQuote(s,knowledge,[affinity]),/Atributos/);
 affinity.system.training.state='learned';const quote=trainingQuote(s,knowledge,[affinity]);assert.equal(quote.cost,1);assert.equal(quote.days,0);assert.equal(quote.ignoreRequirements,true);assert.deepEqual(quote.sources,['Afinidade Cultural']);
 s.identity.species.identifier='humanos';assert.throws(()=>trainingQuote(s,affinity,[]),/espécie/);
});
test('tutor halves optional time upward and creation never removes attribute requirements',()=>{
 const s=system(),knowledge=source('Conhecimento Celestial');assert.equal(trainingQuote(s,knowledge,[],{tutor:true}).days,8);
 s.attributes.wisdom.base=10;assert.throws(()=>trainingQuote(s,knowledge,[],{creation:true}),/Atributos/);
});
test('nature connection condition overrides plants cost, tutor and requirements',()=>{
 const s=system();for(const a of Object.values(s.attributes))a.base=10;
 const connection=source('Conexão Com A Natureza');connection.system={...connection.system,training:{...connection.system.training,state:'learned'}};
 const quote=trainingQuote(s,source('Entusiasta De Plantas'),[connection]);assert.equal(quote.cost,1);assert.equal(quote.days,0);assert.equal(quote.tutorRequired,false);
});
test('choices enforce caps, count, allowed options and nonrepeatable skills',()=>{
 const s=system();s.attributes.strength.base=20;
 const step={id:'ava',label:'AVA',kind:'attribute',count:2,amount:1,cap:20,allowRepeat:true,options:['strength','dexterity']};assert.throws(()=>validateChoices([step],{ava:['strength','strength']},s),/limite/);assert.throws(()=>validateChoices([step],{ava:['dexterity']},s),/2 opção/);assert.throws(()=>validateChoices([step],{ava:['wisdom','wisdom']},s),/inválida/);
});
test('header follows largest style, explicit principal and manual artwork precedence',()=>{
 const s=system();s.progression.styles=[{key:'ninja',identifier:'ninja',levels:1},{key:'lutador',identifier:'lutador',levels:3}];assert.ok(headerImage(s).endsWith('/lutador.webp'));s.progression.primaryStyle='ninja';assert.ok(headerImage(s).endsWith('/ninja.webp'));s.appearance={wallpaper:'my/header.webp'};assert.equal(headerImage(s),'my/header.webp');
});
