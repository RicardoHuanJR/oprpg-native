import {identifier} from './advancement.mjs';
import {actorCommand} from './services.mjs';
import {activationPlan,combatContext} from './combat-rules.mjs';
import {lifecycleOf} from './lifecycle.mjs';
export async function composeMixedSpecies({first,second,traitsConfirmed,firstBenefit='',secondBenefit='',difficulty='',extraDifficulty='',culture='Ancestralidade'}){
  if(!game.user.isGM||!first||!second||first===second||first.type!=='species'||second.type!=='species'||!traitsConfirmed)throw new Error('O Narrador escolhe duas origens e confirma os traços.');
  if(!firstBenefit.trim()||!secondBenefit.trim()||!difficulty.trim())throw new Error('Registre um benefício de cada origem e uma dificuldade.');
  const restricted=['corpo-pequeno','hospede-feerico','forca-colossal','heat','electro','corpo-marinho'];
  const special=[firstBenefit,secondBenefit].filter(value=>restricted.some(key=>identifier(value).includes(key)));
  if(special.length>1||special.length&&!extraDifficulty.trim())throw new Error('A miscigenação permite só um benefício restrito e exige dificuldade adicional.');
  const ancestry=[...new Set([...first.system.ancestries,...second.system.ancestries,first.system.identifier,second.system.identifier].filter(Boolean))];
  const adjustments={id:'racial-attributes',label:'Ajuste do mestiço',kind:'attribute',count:2,amount:1,cap:20,allowRepeat:true,options:['strength','dexterity','constitution','will','wisdom','presence']};
  return Item.create({name:`Mestiço · ${first.name} / ${second.name}`,type:'species',system:{origin:'homebrew',identifier:`mestico-${first.system.identifier}-${second.system.identifier}`,source:'Jogador 2.1 p.27 · escolhas do Narrador',baseHP:Math.floor((first.system.baseHP+second.system.baseHP)/2),movement:Math.max(first.system.movement,second.system.movement),swimming:Math.max(first.system.swimming,second.system.swimming),ancestries:ancestry,advancements:[adjustments],traits:`${culture}; ${firstBenefit}; ${secondBenefit}; dificuldade: ${difficulty}${extraDifficulty?'; dificuldade adicional: '+extraDifficulty:''}`}});
}
export async function setTransformation(actor,{mode,confirmed=false}){
  return actorCommand(actor,async()=>{
    const state=lifecycleOf(actor),context=combatContext(game.combat,actor);
    if(mode==='end'){
      if(!state.sulong||!confirmed)throw new Error('Confirme um turno sem olhar para a lua e uma ação para cobrir os olhos.');
      const plan=activationPlan(actor.system.combat.state,{context,category:'common',activation:'action'});delete state.sulong;await actor.update({'flags.oprpg-native.lifecycle':state,'system.combat.state':plan.state});return;
    }
    const ancestry=[actor.system.identity.species.identifier,...actor.system.identity.species.ancestries];
    if(state.sulong)throw new Error('A forma Sulong já está ativa.');
    if(mode!=='sulong'||!confirmed||!ancestry.some(key=>key.startsWith('minks')))throw new Error('Sulong exige origem Mink e lua cheia observada por seis segundos.');
    const plan=activationPlan(actor.system.combat.state,{context,category:'common',activation:'action'});
    state.sulong={startedAt:game.time.worldTime,combat:context?.encounter,round:context?.round,controlled:actor.items.some(item=>item.type==='training'&&item.system.identifier==='leao-da-lua'&&item.system.training.state==='learned')};
    await actor.update({'flags.oprpg-native.lifecycle':state,'system.combat.state':plan.state});
    if(!state.sulong.controlled)ui.notifications.warn('Sulong está sob controle dos instintos; o Narrador conduz as ações.');
  });
}
