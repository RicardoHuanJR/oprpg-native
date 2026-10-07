import test from "node:test";
import assert from "node:assert/strict";
import {awardAmbition,learnHakiTalent} from "../scripts/haki.mjs";
globalThis.game={user:{isGM:true}};
function actor(){return {isOwner:true,system:{haki:{awakened:true,kingAllowed:false,unspent:19,armament:0,observation:0,king:0,learned:[]}},async update(data){for(const [path,value]of Object.entries(data))this.system.haki[path.split('.').at(-1)]=value;}};}
test('PA ociosos despertos respeitam o limite e informam excesso',async()=>{
 const doc=actor();const result=await awardAmbition(doc,5);assert.deepEqual(result,{awarded:1,lost:4});assert.equal(doc.system.haki.unspent,20);
});
test('primeiro talento desperta o tipo e não é cobrado duas vezes',async()=>{
 const doc=actor(),item={actor:doc,type:'hakiTalent',uuid:'Item.talent',system:{source:'referência',hakiTalent:{focus:'armament',cost:1,minimumStage:'Inexperiente'}}};
 await learnHakiTalent(item);assert.equal(doc.system.haki.armament,1);assert.equal(doc.system.haki.unspent,18);
 await assert.rejects(()=>learnHakiTalent(item));assert.equal(doc.system.haki.unspent,18);
});
test('Haki do Rei exige autorização e Perito não pode ser adquirido no estágio inicial',async()=>{
 const doc=actor(),item={actor:doc,type:'hakiTalent',uuid:'Item.king',system:{hakiTalent:{focus:'king',cost:1,minimumStage:'Inexperiente'}}};
 await assert.rejects(()=>learnHakiTalent(item));item.system.hakiTalent.focus='armament';item.system.hakiTalent.minimumStage='Perito';await assert.rejects(()=>learnHakiTalent(item));
});
