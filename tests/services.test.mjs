import test from "node:test";
import assert from "node:assert/strict";
import {actorCommand,damageActor,healActor,useActivity,finishLongRest,startLongRest,finishShortRest} from "../scripts/services.mjs";
let rollFailure=false,chatFailure=false;
globalThis.game={user:{isGM:true},time:{worldTime:28800},settings:{get:()=>"blindroll"}};
globalThis.foundry={utils:{escapeHTML:x=>String(x).replaceAll('<','&lt;')}};
globalThis.ChatMessage={getSpeaker:()=>({actor:'actor'}),applyRollMode:()=>{},create:async()=>{if(chatFailure)throw new Error('Chat indisponível');}};
globalThis.Roll=class {constructor(formula){this.formula=formula;this.total=15;this.dice=[{faces:20,results:[{result:12,active:true}]}];}async evaluate(){if(rollFailure)throw new Error('Rolagem cancelada');return this;}async toMessage(){if(chatFailure)throw new Error('Chat indisponível');}};
function actor(){return {isOwner:true,type:'character',uuid:'Actor.test',flags:{},updates:0,system:{progression:{level:3},power:{value:12,max:12},vitality:{value:20,max:20,temporary:0,negative:0},vitalityState:{dead:false,deathPolicy:'player'},damageMitigation:{resistances:[],vulnerabilities:[],immunities:[]},exhaustion:0,attributes:{strength:{modifier:3}},proficiency:{bonus:2},hitDice:{max:3,available:0},resources:[],rest:{lastLongRest:null,startedAt:0,startHP:20,startExhaustion:1}},getFlag(_ns,key){return this.flags[key];},getRollData(){return {};},async update(changes){this.updates++;for(const [key,value]of Object.entries(changes)){if(key.startsWith('flags.oprpg-native.')){this.flags[key.slice(19)]=value;continue;}const parts=key.split('.');let target=this;for(const part of parts.slice(0,-1))target=target[part];target[parts.at(-1)]=value;}}};}
function item(owner){return {actor:owner,type:'weapon',name:'Exemplo',uuid:'Item.test',system:{levelRequirement:1,activity:{powerCost:3,attribute:'strength',proficient:true,requirements:'',range:'',duration:''},uses:{max:0},resolution:{kind:'attack',attackBonus:null,addAttributeToAttack:true,criticalThreshold:20}}};}
test('comandos concorrentes no mesmo cliente são serializados; falta de propriedade bloqueia',async()=>{
 const doc=actor();const order=[];
 await Promise.all([actorCommand(doc,async()=>{order.push('A1');await new Promise(r=>setTimeout(r,5));order.push('A2');}),actorCommand(doc,()=>order.push('B'))]);
 assert.deepEqual(order,['A1','A2','B']);doc.isOwner=false;await assert.rejects(()=>actorCommand(doc,()=>{}));
});
test('mesmo identificador de uso não cobra PP duas vezes',async()=>{
 const doc=actor(),activity=item(doc);
 const results=await Promise.all([useActivity(activity,{requestId:'same'}),useActivity(activity,{requestId:'same'})]);
 assert.equal(doc.system.power.value,9);assert.equal(doc.updates,1);assert.equal(results[1].duplicate,true);
});
test('cancelamento da rolagem ou falta de PP preserva saldo',async()=>{
 const doc=actor(),activity=item(doc);rollFailure=true;
 await assert.rejects(()=>useActivity(activity,{requestId:'cancel'}));rollFailure=false;
 assert.equal(doc.system.power.value,12);assert.equal(doc.updates,0);
 doc.system.power.value=1;await assert.rejects(()=>useActivity(activity,{requestId:'insufficient'}));assert.equal(doc.updates,0);
});
test('falha de entrega do cartão não disfarça gasto confirmado',async()=>{
 const doc=actor();chatFailure=true;
 const result=await useActivity(item(doc),{requestId:'delivery'});chatFailure=false;
 assert.equal(result.committed,true);assert.equal(doc.system.power.value,9);
 assert.equal((await useActivity(item(doc),{requestId:'delivery'})).duplicate,true);
});
test('aplicação de dano e cura atualiza somente reservas da ficha',async()=>{
 const doc=actor();await damageActor(doc,{components:[{type:'fire',amount:5}]});assert.equal(doc.system.vitality.value,15);
 await healActor(doc,3);assert.equal(doc.system.vitality.value,18);assert.equal(doc.system.power.value,12);
});
test('decisão permanente do mestre usa p.36 no descanso com exaustão',async()=>{
 const doc=actor();doc.system.power.value=0;doc.system.exhaustion=1;
 await finishLongRest(doc);assert.equal(doc.system.power.value,6);assert.equal(doc.system.exhaustion,0);assert.equal(doc.system.rest.startedAt,null);
});
test('recuperação de PP considera a exaustão registrada no início do descanso',async()=>{
 const doc=actor();doc.system.power.value=0;doc.system.exhaustion=0;
 await finishLongRest(doc);assert.equal(doc.system.power.value,6);
 const rested=actor();rested.system.rest.startExhaustion=0;rested.system.power.value=0;
 await finishLongRest(rested);assert.equal(rested.system.power.value,12);
});
test('usos e PP são confirmados no mesmo documento do ator',async()=>{
 const doc=actor(),activity=item(doc);activity.id='ability';activity.system.uses={value:2,max:2,recovery:'long'};
 await useActivity(activity,{requestId:'limited-1'});assert.equal(doc.system.resources[0].value,1);
 await useActivity(activity,{requestId:'limited-2'});assert.equal(doc.system.resources[0].value,0);
 await assert.rejects(()=>useActivity(activity,{requestId:'limited-3'}));assert.equal(doc.system.power.value,6);
});
test('descanso curto valida os 30 minutos antes de liberar DV',async()=>{
 const doc=actor();game.time.worldTime=0;await startLongRest(doc,'short');
 game.time.worldTime=1799;await assert.rejects(()=>finishShortRest(doc));
 game.time.worldTime=1800;await finishShortRest(doc);assert.equal(doc.system.rest.shortEligible,true);
 game.time.worldTime=28800;
});
