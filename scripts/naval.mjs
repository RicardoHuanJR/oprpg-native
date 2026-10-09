import {actorCommand} from './services.mjs';
import {combatContext} from './combat-rules.mjs';
import {savingThrow} from './target-resolution.mjs';
import {lifecycleOf,timedBoundary} from './lifecycle.mjs';
export const SHIP_SIZES=Object.freeze({small:{name:'Pequeno',wood:200,masts:1,fortification:40,days:12,hp:150,crew:1},medium:{name:'Médio',wood:300,masts:1,fortification:60,days:18,hp:300,crew:2},large:{name:'Grande',wood:500,masts:2,fortification:80,days:25,hp:500,crew:3},huge:{name:'Enorme',wood:600,masts:2,fortification:120,days:30,hp:750,crew:7},colossal:{name:'Colossal',wood:800,masts:3,fortification:160,days:40,hp:1000,crew:12}});
export const WOODS=Object.freeze({cedar:{name:'Cedro',price:30000,cr:10,resistance:5},oak:{name:'Carvalho',price:80000,cr:12,resistance:10},cherry:{name:'Cerejeira',price:150000,cr:15,resistance:15},adam:{name:'Adam',price:400000,cr:18,resistance:30}});
export const CANNONS=Object.freeze({common:{name:'Canhão Comum',normal:90,max:120,bonus:2,multiplier:1,hp:50},improved:{name:'Canhão Aprimorado',normal:120,max:240,bonus:4,multiplier:1,hp:70},superior:{name:'Canhão Superior',normal:45,max:90,bonus:6,multiplier:2,hp:90},long:{name:'Canhão de Longo Alcance',normal:500,max:750,bonus:5,multiplier:.5,hp:120},energy:{name:'Canhão de Energia',normal:500,max:500,bonus:0,formula:'50d12',save:18,batteries:5,hp:250}});
export function shipDamageState(value,max){if(max<=0)return {label:'Sem estrutura definida',loss:0,irreparable:false};const fraction=value/max;return fraction<=.05?{label:'Irreparável',loss:20,irreparable:true}:fraction<=.5?{label:'Muito danificado',loss:8,irreparable:false}:fraction<=.8?{label:'Avariado',loss:4,irreparable:false}:{label:'Normal',loss:0,irreparable:false};}
export function shipSpeed(system){const condition=shipDamageState(system.vitality.value,system.vitality.max),max=system.naval.maximumKnots;const maximum=Math.min(max,Math.max(8,max-condition.loss));return {condition,maximum,meters:system.vitality.value<=0?0:.75*Math.max(0,Math.min(system.naval.currentKnots,maximum)+system.naval.currentBonusKnots)};}
export function shipConstruction({size,wood}){const selected=SHIP_SIZES[size],material=WOODS[wood];if(!selected||!material)throw new Error('Escolha tamanho e madeira.');return {...selected,...material,woodPieces:selected.wood,price:selected.wood*material.price,constructionDays:selected.days};}
export function shipDamage(actor,amount,{repair=false}={}){
  return actorCommand(actor,async()=>{
    if(actor.type!=='ship'||!Number.isInteger(amount)||amount<0)throw new Error('Dano/reparo naval inválido.');
    if(repair&&shipDamageState(actor.system.vitality.value,actor.system.vitality.max).irreparable&&!(actor.system.naval.kairoseki&&actor.system.vitality.value>=1))throw new Error('A estrutura está irreparável.');
    const mitigated=!repair&&actor.system.naval.fortification==='tempered'?Math.floor(amount/2):amount;
    const net=repair?amount:Math.max(0,mitigated-(WOODS[actor.system.naval.wood]?.resistance??0));
    const value=repair?Math.min(actor.system.vitality.max,actor.system.vitality.value+net):Math.max(0,actor.system.vitality.value-net);
    await actor.update({'system.vitality.value':value});return shipDamageState(value,actor.system.vitality.max);
  });
}
export async function navalCollision(actor,target,{confirmed=false}={}){
  if(!game.user.isGM||!confirmed||actor===target||actor.type!=='ship'||target?.type!=='ship'||!actor.isOwner||!target.isOwner)throw new Error('O Narrador confirma os dois navios envolvidos na colisão.');
  if(Math.max(actor.system.naval.currentKnots,target.system.naval.currentKnots)<=14)throw new Error('Dano de colisão exige velocidade superior a 14 nós.');
  const sizes=['small','medium','large','huge','colossal','greater'],dice=[5,10,15,20,30,40];
  const index=Math.max(sizes.indexOf(actor.system.naval.size),sizes.indexOf(target.system.naval.size));if(index<0)throw new Error('Defina o tamanho dos navios.');
  const damage=(await new Roll(`${dice[index]}d10`).evaluate()).total;
  const first=actor.system.defense.rating>target.system.defense.rating?Math.floor(damage/2):damage,second=target.system.defense.rating>actor.system.defense.rating?Math.floor(damage/2):damage;
  await shipDamage(actor,first);await shipDamage(target,second);return {damage,first,second};
}
export async function protectShip(protector,ship){
 if(!game.user.isGM||!protector?.isOwner||!ship?.isOwner||ship.type!=='ship'||protector.system.progression?.level<8)throw new Error('O Narrador escolhe um protetor de nível 8 ou superior.');
 const context=combatContext(game.combat,protector);if(!context?.isOwnTurn)throw new Error('Proteger o navio exige pular o próprio turno.');
 const effects=[...ship.effects].filter(effect=>effect.flags?.['oprpg-native']?.shipProtector);if(effects.length>=3)throw new Error('O bônus de proteção do navio já atingiu +3.');
 if(effects.some(effect=>effect.flags['oprpg-native'].shipProtector===protector.uuid))throw new Error('Esta criatura já está protegendo o navio.');
 const raw=protector.system.combat.state;if(raw.ownEpoch===context.ownEpoch&&[raw.actionUsed,raw.powerfulUsed,raw.bonusUsed,raw.movementSpent>0].some(Boolean))throw new Error('O turno já foi usado parcialmente.');
 await actorCommand(protector,()=>protector.update({'system.combat.state':{...raw,ownEpoch:context.ownEpoch,actionUsed:true,powerfulUsed:true,bonusUsed:true,attacksRemaining:0,movementSpent:1000000},'system.rest.startedAt':null}));
 await actorCommand(ship,async()=>{const [effect]=await ship.createEmbeddedDocuments('ActiveEffect',[{name:`Proteção · ${protector.name}`,system:{changes:[{key:'system.defense.rating',type:'add',value:1,phase:'initial',priority:null}]},flags:{'oprpg-native':{shipProtector:protector.uuid}}}]);const state=lifecycleOf(ship);state.timers=[...(state.timers??[]),{...timedBoundary(game.combat,protector,{point:'start'}),effectId:effect.id}];await ship.update({'flags.oprpg-native.lifecycle':state});});
}
export async function navalInitiative(ship){
 if(!ship.isOwner||ship.type!=='ship')throw new Error('Selecione uma embarcação.');
 const captain=await fromUuid(ship.system.naval.captainUUID);if(!captain?.isOwner||captain.type==='ship')throw new Error('Defina um capitão controlável.');
 const roll=await new Roll(`1d20 + ${captain.system.attributes.presence.modifier-2*captain.system.exhaustion}`).evaluate();
 const combatants=game.combat?.turns.filter(turn=>turn.actor?.uuid===ship.uuid)??[];if(combatants.length!==1)throw new Error('Inclua o navio uma vez no combate.');
 await game.combat.setInitiative(combatants[0].id,roll.total);try{await roll.toMessage({speaker:ChatMessage.getSpeaker({actor:ship}),flavor:'Iniciativa naval · Presença do capitão'});}catch{}return roll;
}
export function navalManoeuvre(actor,{action,knots,steersmanConfirmed=false}){
  return actorCommand(actor,async()=>{
    if(actor.type!=='ship'||!steersmanConfirmed)throw new Error('Confirme capitão, navegador ou timoneiro no comando.');
    if(actor.system.vitality.value<=0)throw new Error('O navio não pode navegar com 0 PV.');
    const context=combatContext(game.combat,actor);if(!context?.isOwnTurn)throw new Error('A manobra exige o turno do navio.');
    const state=actor.system.naval.state.epoch===context.ownEpoch?{...actor.system.naval.state}:{epoch:context.ownEpoch,manoeuvreUsed:false,combatUsed:false,cannons:[]};
    if(state.manoeuvreUsed)throw new Error('A manobra deste turno já foi usada.');
    const minimum=SHIP_SIZES[actor.system.naval.size]?.crew??actor.system.crew.required;if(actor.system.crew.current<minimum)throw new Error('Efetivo insuficiente para navegar.');
    const updates={};
    if(action==='speed'){
      const maximum=shipSpeed(actor.system).maximum;if(!Number.isFinite(knots)||knots<2||knots>maximum||Math.abs(knots-actor.system.naval.currentKnots)>6)throw new Error('Ajuste entre 2 nós e o máximo, até 6 nós por manobra.');
      if(actor.system.naval.anchorDown)throw new Error('Recolha a âncora antes de acelerar.');updates['system.naval.currentKnots']=knots;
    }else if(action==='port'||action==='starboard')updates['system.naval.headingDegrees']=(actor.system.naval.headingDegrees+(action==='port'?-45:45)+360)%360;
    else if(action==='anchor'){
      updates['system.naval.anchorDown']=!actor.system.naval.anchorDown;
      if(!actor.system.naval.anchorDown){const lifecycle=lifecycleOf(actor);lifecycle.timers=[...(lifecycle.timers??[]),{...timedBoundary(game.combat,actor,{point:'end',next:false}),reason:'anchorStop'}];updates['flags.oprpg-native.lifecycle']=lifecycle;}
    }
    else throw new Error('Manobra desconhecida.');
    state.manoeuvreUsed=true;await actor.update({...updates,'system.naval.state':state});return updates;
  });
}
export async function navalAttack(actor,{cannonIndex,target,distance,ammunitionItem,gunnersDexterity,crewConfirmed=false,strategy='attack',hitDamage=0,preparedEnergy=false}){
  if(actor.type!=='ship'||!actor.isOwner||!target?.isOwner||target.type!=='ship'||target===actor)throw new Error('O Narrador confirma os navios/alvos.');
  const result=await actorCommand(actor,async()=>{
    const context=combatContext(game.combat,actor);if(!context?.isOwnTurn)throw new Error('Ataque exige turno do navio.');
    const state=actor.system.naval.state.epoch===context.ownEpoch?{...actor.system.naval.state}:{epoch:context.ownEpoch,manoeuvreUsed:false,combatUsed:false,cannons:[]};
    const slot=actor.system.naval.cannons[cannonIndex],profile=CANNONS[slot?.model];if(!profile||state.cannons.includes(cannonIndex)||slot.destroyed)throw new Error('Canhão indisponível neste turno.');
    if(!crewConfirmed||!Number.isFinite(distance)||distance<0||distance>profile.max)throw new Error('Confirme efetivo, apontamento e alcance.');
    if(profile.batteries&&!preparedEnergy)throw new Error('Canhão de energia exige 10 minutos de preparo e concentração.');
    const ammo=actor.items.get(ammunitionItem),needed=profile.batteries??1;if(!ammo||ammo.system.equipment.quantity<needed)throw new Error('Munição/baterias insuficientes.');
    const captain=await fromUuid(actor.system.naval.captainUUID);if(!captain?.isOwner||captain.type==='ship')throw new Error('Escolha um capitão sob seu controle.');
    const modifier=Math.max(captain.system.attributes.presence.modifier,gunnersDexterity)+profile.bonus;
    const count=state.cannons.length;if(count>=3&&!['bombardment','test'].includes(strategy))throw new Error('Depois do terceiro canhão, escolha Bombardeio ou Tiros de Teste.');
    let amount=0,hit=false,roll=null;
    if(strategy==='test'){state.testBonus=(state.testBonus??0)+3;}
    else if(strategy==='bombardment'){amount=Math.floor((await new Roll(ammo.system.ammunitionDamage).evaluate()).total*profile.multiplier/2);hit=hitDamage>0;if(!hit)throw new Error('Bombardeio exige ataque anterior bem-sucedido confirmado.');}
    else if(profile.save){const commander=await fromUuid(target.system.naval.captainUUID);if(!commander?.isOwner||commander.type==='ship')throw new Error('Defina o comandante do alvo para a salvaguarda.');const save=await savingThrow(commander,'dexterity',profile.save);amount=(await new Roll(profile.formula).evaluate()).total;if(save.success)amount=Math.floor(amount/2);hit=true;}
    else {roll=await new Roll(`${distance>profile.normal?'2d20kl':'1d20'} + ${modifier+(state.testBonus??0)}`).evaluate();state.testBonus=0;const natural=roll.dice.find(die=>die.faces===20).results.find(value=>value.active!==false&&!value.discarded).result;hit=natural===20||natural!==1&&roll.total>=target.system.defense.rating;amount=hit?Math.floor((await new Roll(profile.formula??ammo.system.ammunitionDamage).evaluate()).total*(profile.multiplier??1)):0;}
    const before=ammo.system.equipment.quantity;state.cannons=[...state.cannons,cannonIndex];state.combatUsed=true;
    await ammo.update({'system.equipment.quantity':before-needed});try{await actor.update({'system.naval.state':state});}catch(error){await ammo.update({'system.equipment.quantity':before});throw error;}
    return {amount,hit,roll};
  });
  if(result.amount)await shipDamage(target,result.amount);return result;
}
