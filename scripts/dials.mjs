import {actorCommand,damageInside} from './services.mjs';
import {activationPlan,combatContext} from './combat-rules.mjs';
import {attackResult} from './engine.mjs';
export const DIALS=Object.freeze({
 ball:{seconds:60,kind:'save',formula:'3d6',type:'bludgeoning',area:6,cargo:true},breath:{seconds:60,duration:60,area:9,cargo:true},cool:{seconds:60,rapid:12,type:'cold',formula:'2d6',kind:'attack',melee:true},
 flash:{seconds:60,kind:'save',save:'constitution',status:'blinded',area:3},flavor:{seconds:60,duration:30,area:9,cargo:true},heat:{seconds:60,rapid:12,type:'fire',formula:'2d6',kind:'attack',melee:true},lamp:{seconds:60,duration:21600,continuous:true,area:9},milk:{seconds:60,range:18},tone:{seconds:300,continuous:true,cargo:true},vision:{seconds:0,continuous:true,cargo:true},water:{seconds:60,kind:'attack',formula:'1d6',type:'bludgeoning',range:12,secondarySave:'strength',secondaryStatus:'prone'},
 axe:{seconds:60,kind:'attack',formula:'2d10',type:'slashing',range:6,siege:true},flame:{seconds:60,kind:'attack',formula:'2d10',type:'fire',range:6,rapid:20,secondarySave:'constitution',secondaryStatus:'burned'},frozen:{seconds:60,kind:'attack',formula:'2d10',type:'cold',range:6,rapid:20,secondarySave:'constitution',secondaryStatus:'lethargic'},impact:{seconds:0,kind:'attack',type:'bludgeoning',limit:100,rapid:100,melee:true,selfDamage:true},
 jet:{seconds:30,kind:'attack',formula:'2d10',type:'bludgeoning',melee:true},thunder:{seconds:60,kind:'attack',formula:'2d10',type:'lightning',range:6,rapid:20,secondarySave:'constitution',secondaryStatus:'paralyzed'},control:{seconds:0,continuous:true,range:120},eisen:{seconds:60,kind:'attack',formula:'1d10',type:'bludgeoning',range:9,melee:true},reject:{seconds:0,kind:'attack',type:'bludgeoning',limit:500,rapid:500,melee:true,selfDamage:true,factor:2}
});
export async function operateDial(item,{operation,contactConfirmed=false,damage=0,damageType='bludgeoning',cargo='',strongWind=false,trigger='',remoteItem=null,remoteOperation=null,distance=null,controller=null}={}){
  const actor=controller??item.actor;if(!actor?.isOwner||!item?.isOwner)throw new Error('Use um dial pertencente ao personagem.');
  const model=item.system.dial.model,profile=DIALS[model];if(!profile)throw new Error('Escolha um modelo de dial.');
  if(operation==='sync'){
    if(model!=='control'||!remoteItem?.isOwner||remoteItem===item||!DIALS[remoteItem.system.dial?.model]||!contactConfirmed||!Number.isFinite(distance)||distance>120||distance<0)throw new Error('Confirme o dial escolhido em sequência de proximidade, até 120 m.');
    return item.update({'system.dial.synchronizedUUID':remoteItem.uuid});
  }
  if(operation==='control'){
    if(model!=='control'||!remoteItem?.isOwner||remoteItem===item||!Number.isFinite(distance)||distance>120||distance<0)throw new Error('Selecione um dial sincronizado a até 120 m.');
    if(item.system.dial.synchronizedUUID!==remoteItem.uuid||!['charge','release'].includes(remoteOperation))throw new Error('Sincronize antes de controlar absorção ou liberação.');
    return operateDial(remoteItem,{operation:remoteOperation,contactConfirmed,damage,damageType,cargo,strongWind,trigger,controller:actor});
  }
  return actorCommand(actor,async()=>{
    const source=item.toObject().system.dial;
    if(source.destroyed)throw new Error('O dial está destruído.');
    const context=combatContext(game.combat,actor),state=actor.system.combat.state;
    const planFor=activation=>{let plan=activationPlan(state,{context,category:'common',activation:controller?'action':activation});if(controller)plan=activationPlan(plan.state,{context,category:'common',activation:'bonus'});return plan;};
    if(['wall','retract','wallDamage'].includes(operation)){
      if(model!=='eisen')throw new Error('A parede exige um Eisen Dial.');
      if(operation==='wallDamage'){if(!game.user.isGM||!source.wallActive||!Number.isInteger(damage)||damage<0)throw new Error('O Narrador confirma dano na parede.');const hp=Math.max(0,source.wallHP-damage);await item.update({'system.dial.wallHP':hp,...(hp===0?{'system.dial.wallActive':false,'system.dial.charged':false,'system.dial.reformsAt':game.time.worldTime+3600}:{})});return {wallHP:hp};}
      if(operation==='retract'){if(!source.wallActive)throw new Error('Não existe parede ativa.');const plan=planFor('bonus');await item.update({'system.dial.wallActive':false,'system.dial.charged':true});await actor.update({'system.combat.state':plan.state});return {retracted:true};}
      if(!source.charged||source.wallActive||source.reformsAt!==null&&game.time.worldTime<source.reformsAt)throw new Error('A nuvem precisa estar carregada e recuperada.');
      const plan=planFor('action');await item.update({'system.dial.wallActive':true,'system.dial.wallHP':90,'system.dial.charged':false});await actor.update({'system.combat.state':plan.state});return {wallHP:90,width:5,height:5,thickness:1};
    }
    let activation=operation==='rapid'?'reaction':'action';
    if(operation==='finishCharge'){
      if(source.chargingAt===null||game.time.worldTime-source.chargingAt<source.chargingSeconds)throw new Error('A absorção ainda não terminou.');
      return item.update({'system.dial.charged':true,'system.dial.chargingAt':null});
    }
    if(operation==='prepare'){
      if(source.charged||!profile.rapid||!trigger.trim())throw new Error('Absorção rápida exige dial vazio e gatilho.');
      const plan=planFor('action');
      await actor.update({'system.combat.state':plan.state,'flags.oprpg-native.dialPrepared':{uuid:item.uuid,ownEpoch:context?.ownEpoch,trigger}});return {prepared:true};
    }
    if(operation==='charge'){
      if(!contactConfirmed||source.charged)throw new Error('Confirme a fonte de absorção para um dial vazio.');
      if(profile.cargo&&!cargo.trim())throw new Error('Registre o composto/conteúdo aprovado pelo Narrador.');
      const plan=planFor('action');
      if(profile.limit&&(!Number.isInteger(damage)||damage<1||damageType!==profile.type))throw new Error('Informe um impacto válido do tipo absorvido pelo dial.');
      if(profile.limit&&damage>profile.limit){await item.update({'system.dial.destroyed':true,'system.dial.charged':false});await actor.update({'system.combat.state':plan.state,'system.rest.startedAt':null});return {destroyed:true,absorbed:0,remaining:damage};}
      const seconds=strongWind&&['breath','flavor'].includes(model)?30:profile.seconds;
      await item.update({'system.dial.chargingAt':seconds?game.time.worldTime:null,'system.dial.chargingSeconds':seconds,'system.dial.charged':seconds===0,'system.dial.cargo':cargo,'system.dial.stored':profile.limit?damage:0});
      await actor.update({'system.combat.state':plan.state,'system.rest.startedAt':null});return {chargingSeconds:seconds};
    }
    if(operation==='rapid'){
      const prepared=actor.getFlag('oprpg-native','dialPrepared');if(!prepared||prepared.uuid!==item.uuid||prepared.ownEpoch!==context?.ownEpoch||source.charged)throw new Error('Prepare antes a absorção rápida deste dial.');
      if(!Number.isInteger(damage)||damage<1||profile.type!==damageType||!profile.rapid)throw new Error('O dano não corresponde à absorção do dial.');
      const plan=planFor(activation);
      if(profile.limit&&damage>profile.limit){await item.update({'system.dial.destroyed':true,'system.dial.charged':false});await actor.update({'system.combat.state':plan.state,'flags.oprpg-native.dialPrepared':null});return {destroyed:true,absorbed:0};}
      const absorbed=Math.min(damage,profile.rapid);
      await item.update({'system.dial.charged':true,'system.dial.stored':absorbed});await actor.update({'system.combat.state':plan.state,'flags.oprpg-native.dialPrepared':null});return {absorbed,remaining:damage-absorbed};
    }
    if(operation!=='release'||!source.charged)throw new Error('Carregue o dial antes da liberação.');
    const plan=planFor('action'),attribute=profile.melee?'strength':'dexterity';
    let roll=null,attack=null;if(profile.kind==='attack'){roll=await new Roll(`1d20 + ${actor.system.attributes[attribute].modifier+actor.system.proficiency.bonus-2*actor.system.exhaustion}`).evaluate();attack=attackResult({natural:roll.dice.find(die=>die.faces===20).results.find(result=>result.active!==false&&!result.discarded).result,total:roll.total});}
    const primary=actor.items.find(value=>value.type==='style'&&value.system.identifier===actor.system.progression.styles.find(value=>value.key===actor.system.progression.primaryStyle)?.identifier)??actor.items.find(value=>value.type==='style');
    const dc=actor.type==='npc'?actor.system.saveDifficulty:8+actor.system.attributes[primary?.system.primaryAttribute??'strength'].modifier+actor.system.proficiency.bonus;
    const formula=profile.cargo&&source.damageFormula?source.damageFormula:profile.formula??(profile.limit?String(source.stored*(profile.factor??1)):source.damageFormula||'');
    const use={requestId:foundry.utils.randomID(),itemUUID:item.uuid,activity:{attribute},resolution:{kind:profile.kind??'utility',saveAttribute:profile.save??'dexterity',saveDC:dc,onSave:'none',damageType:profile.type??source.damageType,secondarySaveAttribute:profile.secondarySave,secondaryStatus:profile.secondaryStatus,status:profile.status,statusNextTurn:model==='flash'},attack,damageFormula:formula};
    await item.update({'system.dial.charged':Boolean(profile.continuous),'system.dial.stored':profile.continuous?source.stored:0,'system.dial.activeUntil':profile.duration?game.time.worldTime+profile.duration:null});
    await actor.update({'system.combat.state':plan.state,'flags.oprpg-native.lastActivity':use,'system.rest.startedAt':null});
    if(profile.selfDamage)await damageInside(actor,{components:[{type:profile.type,amount:source.stored*(profile.factor??1)}]});
    const message={speaker:ChatMessage.getSpeaker({actor}),content:`<article class="oprpg-chat"><h3>${foundry.utils.escapeHTML(item.name)}</h3><p>Dial liberado · ${foundry.utils.escapeHTML(formula||source.cargo||'efeito utilitário')} · CD ${dc}</p><p>Alcance/área: ${profile.range??profile.area??1.5} m</p></article>`};ChatMessage.applyRollMode(message,game.settings.get('core','rollMode'));try{await ChatMessage.create(message);}catch{ui.notifications.warn('Dial liberado; o cartão não foi enviado. Não repita a liberação.');}return use;
  });
}
