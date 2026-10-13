export function activeHakiRank(actor,identifier){
 if(!actor?.system.haki?.active?.includes(identifier))return 0;
 const talent=[...(actor.items??[])].find(item=>item.type==='hakiTalent'&&item.system.identifier===identifier&&actor.system.haki.learned.includes(item.uuid));
 return talent?Math.max(1,talent.system.hakiTalent.rank??0):0;
}
export function hakiCommonDamage(actor,formula,type){
 const rank=activeHakiRank(actor,'endurecimento-ofensivo');
 if(!rank||!['bludgeoning','slashing','piercing'].includes(type))return formula;
 return `${formula} + ${rank>=3?'1d6':rank>=2?'1d4':'1'}`;
}
export function hakiMaximizesCommonDamage(actor,natural,critical=false){
 const rank=activeHakiRank(actor,'emissao-ofensiva');
 return Boolean(rank&&!critical&&natural<20&&natural>=(rank>=3?14:rank>=2?16:18));
}
export function additionalMeleeReach(actor){
 const fruit=actor.system.fruit;
 return (activeHakiRank(actor,'emissao-ofensiva')?1.5:0)+(fruit?.category==='zoan'&&fruit.form==='animal'&&fruit.traits?.includes('animal-grande')?1.5:0);
}
