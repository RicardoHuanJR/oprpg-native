import {actorCommand,damageActor,healActor} from './services.mjs';
import {actorNumbers} from './actor-numbers.mjs';
import {conditionSet,conditionModifiers,targetAttackModifiers} from './conditions.mjs';
import {itemRuleAdvantage} from './item-rules.mjs';
import {applicableLeaderAura} from './auras.mjs';
import {timedBoundary,lifecycleOf} from './lifecycle.mjs';
export async function savingThrow(actor,attribute,dc,{advantage=false,disadvantage=false,useLegendary=false,bonus=0}={}){
  return actorCommand(actor,async()=>{
    if(!Number.isFinite(dc)||dc<0)throw new Error('CD inválida.');
    const numbers=actorNumbers(actor.system,actor.type),value=numbers.attributes[attribute];if(!value)throw new Error('Atributo desconhecido.');
    const conditions=conditionModifiers(conditionSet(actor.statuses,{...actor.system.vitality,dead:actor.system.vitalityState?.dead}),{kind:'save',attribute});
    advantage||=conditions.advantage||itemRuleAdvantage(actor.system,[...(actor.items??[])],'saveAdvantage',attribute);disadvantage||=conditions.disadvantage;
    let roll=null,success=false;
    const expertise=actor.getFlag('oprpg-native','expertise');
    if(attribute==='dexterity'&&expertise?.kind==='autoDexSave'){success=!conditions.automaticFailure;await actor.update({'flags.oprpg-native.expertise':null});}
    else if(!conditions.automaticFailure){const aura=applicableLeaderAura(actor);roll=await new Roll(`${advantage===disadvantage?'1d20':advantage?'2d20kh':'2d20kl'} + ${value.saveTotal+bonus}${aura?' + '+aura.dice:''}`).evaluate();success=roll.total>=dc;}
    if(!success&&useLegendary&&!conditions.automaticFailure){const remaining=actor.system.npcFeatures?.legendaryResistance?.value??0;if(remaining<1)throw new Error('Sem resistências lendárias.');await actor.update({'system.npcFeatures.legendaryResistance.value':remaining-1});success=true;}
    if(roll)try{await roll.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:`Salvaguarda · CD ${dc} · ${success?'sucesso':'falha'}`},{rollMode:game.settings.get('core','rollMode')});}catch{}
    return {success,roll,automaticFailure:conditions.automaticFailure};
  });
}
export async function resolveAgainstTargets(item,operation,{targets,damage,legendaryTargets=[],statuses=[],distance=null,coverage='none',area=false,extraDamage=[]}){
  if(!game.user.isGM)throw new Error('O Narrador confirma a aplicação aos alvos.');
  if(!operation?.requestId||operation.itemUUID!==item.uuid)throw new Error('Operação de origem inválida.');
  if(operation.prepared)throw new Error('Libere a técnica antes de aplicar ao alvo.');
  if(!Number.isInteger(damage)||damage<0)throw new Error('Dano inválido.');
  if(extraDamage.length!==(operation.extraDamageComponents??[]).length||extraDamage.some(amount=>!Number.isInteger(amount)||amount<0))throw new Error('Informe separadamente o dano adicional de Electro/Heat.');
  if(!['none','half','threeQuarters','total'].includes(coverage))throw new Error('Cobertura desconhecida.');
  if(coverage==='total'&&!area)throw new Error('Cobertura total impede alvo direto. Confirme um efeito de área quando aplicável.');
  const cover=coverage==='half'?2:coverage==='threeQuarters'?5:0;
  const source=operation.resolution,results=[];
  for(const target of targets){
    const marks=target.getFlag('oprpg-native','resolvedActivities')??[];
    if(marks.includes(operation.requestId)){results.push({actor:target.uuid,duplicate:true});continue;}
    if(!target.isOwner)throw new Error('Sem permissão sobre o alvo.');
    let amount=damage,success=false,hit=true;
    if(source.kind==='save'){
      const dc=source.saveDC??(item.actor.type==='npc'?item.actor.system.saveDifficulty:8+item.actor.system.attributes[operation.activity.attribute].modifier+item.actor.system.proficiency.bonus);
      const save=await savingThrow(target,source.saveAttribute,dc,{useLegendary:legendaryTargets.includes(target.uuid),bonus:source.saveAttribute==='dexterity'?cover:0});success=save.success;if(success)amount=source.onSave==='half'?Math.floor(damage/2):0;
    }else if(source.kind==='attack'){
      const attack=operation.attack;if(!attack)throw new Error('Ataque ainda não foi rolado.');hit=attack.natural===20||attack.natural!==1&&attack.total>=target.system.defense.rating+cover;
      const expertise=target.getFlag('oprpg-native','expertise');if(expertise?.kind==='autoMiss'){if(attack.natural!==20)hit=false;await target.update({'flags.oprpg-native.expertise':null});}if(!hit)amount=0;
    }
    let result=null;
    if(source.kind==='healing')result=await healActor(target,amount);
    else {const components=[{type:source.damageType,amount},...(operation.extraDamageComponents??[]).map((value,index)=>({type:value.type,amount:!hit||success&&source.onSave!=='half'?0:success?Math.floor(extraDamage[index]/2):extraDamage[index]}))];if(components.some(value=>value.amount>0))result=await damageActor(target,{components});}
    let secondaryPassed=false;if(hit&&source.secondarySaveAttribute){const secondary=await savingThrow(target,source.secondarySaveAttribute,source.saveDC);secondaryPassed=secondary.success;}
    if(hit&&!success){const applied=[...new Set([...statuses,...(source.status?[source.status]:[]),...(source.secondaryStatus&&!secondaryPassed?[source.secondaryStatus]:[])])];if(applied.length){
      const concentration=lifecycleOf(item.actor).concentration;
      const [effect]=await target.createEmbeddedDocuments('ActiveEffect',[{name:`${item.name??'Ataque desarmado'} · condições`,statuses:applied,system:{changes:[]},flags:{'oprpg-native':{operation:operation.requestId,...(operation.activity.concentration&&concentration?{concentrationSource:item.actor.uuid,concentrationId:concentration.id}:{})}}}]);
      if(source.statusNextTurn){const boundary=timedBoundary(game.combat,target);if(boundary){const state=lifecycleOf(target);state.timers=[...(state.timers??[]),{...boundary,effectId:effect.id}];await target.update({'flags.oprpg-native.lifecycle':state});}}
    }}
    await target.update({'flags.oprpg-native.resolvedActivities':[...marks,operation.requestId].slice(-128)});
    results.push({actor:target.uuid,success,hit,amount,result});
  }
  return results;
}
