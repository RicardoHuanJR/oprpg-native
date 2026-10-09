import {activationPlan} from './combat-rules.mjs';
import {lifecycleOf} from './lifecycle.mjs';
export function racialBoostPlan(actor,{kind='',alternative=false,context,state,resources}){
 const sulong=Boolean(lifecycleOf(actor).sulong);
 if(sulong)kind='electro';if(!kind)return {state,resources,components:[]};
 const species=actor.system.identity?.species;if(!species)throw new Error('Escolha a origem do personagem.');
 if(!['electro','heat'].includes(kind))throw new Error('Benefício racial desconhecido.');
 const native=kind==='electro'?species.identifier.startsWith('minks'):species.identifier.startsWith('lunarianos');
 if(!native&&!species.traits.toLowerCase().includes(kind))throw new Error('A origem não concede esse benefício.');
 if(sulong)return {state,resources,components:[{type:'lightning',formula:'1d10'}]};
 if(!context?.isOwnTurn)throw new Error('O benefício precisa de um ataque no próprio turno.');
 const epoch=`${context.encounter}:${context.round}`;if(actor.getFlag('oprpg-native','racialBoostRound')===epoch)throw new Error('Electro, Heat e efeitos semelhantes compartilham o limite de uma vez por rodada.');
 const pool=(id,name,max)=>{let value=resources.find(value=>value.id===id);if(!value){value={id,name,max,value:max,recovery:'long',source:species.uuid};resources.push(value);}else if(value.max!==max){value.value=Math.max(0,Math.min(max,value.value+max-value.max));value.max=max;}if(value.value<1)throw new Error(`Sem usos disponíveis de ${name}.`);value.value--;};
 pool(`racial:${kind}`,kind==='heat'?'Heat':'Electro',actor.system.progression.level);
 if(alternative)pool(`racial:${kind}:alternative`,'Uso sem ação bônus',5);else state=activationPlan(state,{context,category:'common',activation:'bonus'}).state;
 return {state,resources,round:epoch,components:[{type:kind==='heat'?'fire':'lightning',formula:'1d10'}]};
}
