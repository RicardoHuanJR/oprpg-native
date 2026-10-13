import {actorCommand} from './services.mjs';
import {combatContext} from './combat-rules.mjs';
export function hakiUseProfile(identifier,rank=1){
 if(identifier==='ver-o-futuro')return {max:3,recovery:'long',cost:0};
 if(['antevisao-profetica','previsao-profetica'].includes(identifier))return {max:rank>=3?5:rank>=2?3:1,recovery:rank>=3?'shortOrLong':'long',cost:0};
 if(identifier==='emissao-defensiva')return {max:1,recovery:rank>=2?'shortOrLong':'long',cost:0};
 if(identifier==='defesa-suprema')return {max:0,cost:rank>=2?0:2};
 if(identifier==='armamento-do-rei')return {max:0,cost:3,oncePerTurn:true};
 if(['endurecimento-ofensivo','endurecimento-defensivo','emissao-ofensiva','chama-do-armamento','antevisao','corpo-armadurado'].includes(identifier))return {max:0,cost:0,toggle:true};
 return {max:0,cost:0,reference:true};
}
export async function renewHakiShield(actor){
 if(!actor?.isOwner)throw new Error('Sem permissão.');
 return actorCommand(actor,async()=>{
  const talent=[...actor.items].find(item=>item.type==='hakiTalent'&&item.system.identifier==='endurecimento-defensivo'&&actor.system.haki.learned.includes(item.uuid));
  if(!talent)throw new Error('Aprenda Endurecimento Defensivo primeiro.');
  if((actor.system.haki.shieldReadyAt??0)>game.time.worldTime)throw new Error('Aguarde dez minutos sem usar Armamento antes de renovar o escudo.');
  const active=[...(actor.system.haki.active??[])];
  if(!active.includes('endurecimento-defensivo'))active.push('endurecimento-defensivo');
  await actor.update({'system.haki.shield':20*Math.max(1,talent.system.hakiTalent.rank??0),'system.haki.active':active,'system.haki.shieldReadyAt':game.time.worldTime+600});
 });
}
export async function useHakiTalent(item){
 const actor=item.actor;if(!actor?.isOwner||item.type!=='hakiTalent')throw new Error('Selecione um talento de sua ficha.');
 return actorCommand(actor,async()=>{
  if(!actor.system.haki.learned.includes(item.uuid))throw new Error('Aprenda este talento primeiro.');
  const identifier=item.system.identifier,rank=Math.max(1,item.system.hakiTalent.rank??0),profile=hakiUseProfile(identifier,rank);
  const resources=actor.system.resources.map(resource=>({...resource})),updates={},active=[...(actor.system.haki.active??[])];
  if(profile.toggle){
   const on=!active.includes(identifier);
   updates['system.haki.active']=on?[...active,identifier]:active.filter(id=>id!==identifier);
   if(identifier==='endurecimento-defensivo'){
    if(on&&actor.system.haki.shieldReadyAt!==null&&actor.system.haki.shieldReadyAt>game.time.worldTime)throw new Error('O escudo ainda aguarda dez minutos sem uso do Armamento.');
    updates['system.haki.shield']=on?20*rank:0;
   }
  }
  else if(!profile.reference){
   if(actor.system.power.value<profile.cost)throw new Error('PP insuficientes.');
   updates['system.power.value']=actor.system.power.value-profile.cost;
   if(profile.max){
    const id=`haki:${item.id}`;let reserve=resources.find(resource=>resource.id===id);
    if(!reserve){reserve={id,name:item.name,value:profile.max,max:profile.max,recovery:profile.recovery,source:item.uuid};resources.push(reserve);}
    reserve.max=profile.max;reserve.recovery=profile.recovery;reserve.value=Math.min(reserve.value,profile.max);
    if(reserve.value<1)throw new Error('Sem usos disponíveis.');reserve.value--;updates['system.resources']=resources;
   }
   if(profile.oncePerTurn){
    const context=combatContext(game.combat,actor);
    if(context){const used={...(actor.getFlag('oprpg-native','hakiTurnUses')??{})};if(used[identifier]===context.globalEpoch)throw new Error('Este talento já foi usado neste turno.');used[identifier]=context.globalEpoch;updates['flags.oprpg-native.hakiTurnUses']=used;}
   }
  }
  if(Object.keys(updates).length&&item.system.hakiTalent.focus==='armament')updates['system.haki.shieldReadyAt']=game.time.worldTime+600;
  if(Object.keys(updates).length)await actor.update(updates);
  return {profile,rank,active:updates['system.haki.active']?.includes(identifier),source:item.system.source};
 });
}
export function learnedHakiSummary(actor){
 if(!actor.system.haki)return [];
 return [...actor.items].filter(item=>item.type==='hakiTalent'&&actor.system.haki.learned.includes(item.uuid)).map(item=>{
  const rank=Math.max(1,item.system.hakiTalent.rank??0),profile=hakiUseProfile(item.system.identifier,rank),reserve=actor.system.resources.find(resource=>resource.id===`haki:${item.id}`);
  return {id:item.id,name:item.name,rank,source:item.system.source,active:actor.system.haki.active?.includes(item.system.identifier),toggle:profile.toggle,reference:profile.reference,cost:profile.cost,max:profile.max,remaining:reserve?.value??profile.max};
 });
}
