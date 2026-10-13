export function boundedValue(value,maximum){
  if(!Number.isFinite(Number(value))||!Number.isFinite(maximum)||maximum<0)throw new Error('Valor de recurso inválido.');
  return Math.min(maximum,Math.max(0,Number(value)));
}
export function limitResourceChanges(changes,system,source=system){
  for(const [key,resource]of [['vitality',system.vitality],['power',system.power]]){
    if(!resource||!Number.isFinite(resource.max))continue;
    const current=source[key]?.value??resource.value;
    const value=boundedValue(current,resource.max);
    if(value===current)continue;
    const path=`system.${key}.value`;
    if(Object.hasOwn(changes,path)||!changes.system)changes[path]=value;
    else {changes.system[key]??={};changes.system[key].value=value;}
  }
  if(system.haki&&Number.isFinite(system.haki.shieldMax)){
    const current=source.haki?.shield??system.haki.shield;
    const value=boundedValue(current,system.haki.shieldMax);
    if(value!==current){if(!changes.system)changes['system.haki.shield']=value;else{changes.system.haki??={};changes.system.haki.shield=value;}}
  }
  return changes;
}
export function boundPreparedResources(system,source=system){
  for(const key of ['vitality','power']){
    const resource=system[key];
    if(resource&&Number.isFinite(resource.max)){resource.max=Math.max(0,resource.max);resource.value=boundedValue(source[key]?.value??resource.value,resource.max);}
  }
  if(system.haki&&Number.isFinite(system.haki.shieldMax))system.haki.shield=boundedValue(source.haki?.shield??system.haki.shield,system.haki.shieldMax);
}
