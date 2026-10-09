import {conditionSet,conditionModifiers} from './conditions.mjs';
export function applicableLeaderAura(actor){
  if(!actor.system.environment?.affiliation)return null;
  if(actor.statuses?.has('blinded'))return null;
  const targetTokens=actor.getActiveTokens?.()??[];
  for(const source of game.actors??[]){
    const aura=source.system.npcFeatures?.leaderAura;if(!aura?.enabled||aura.affiliation!==actor.system.environment.affiliation)continue;
    if(conditionModifiers(conditionSet(source.statuses,{...source.system.vitality,dead:source.system.vitalityState?.dead}),{}).incapacitated||source.system.vitalityState?.dead)continue;
    const sourceTokens=source.getActiveTokens?.()??[];
    for(const a of sourceTokens)for(const b of targetTokens){
      if(!globalThis.canvas?.grid?.measurePath||!a.center||!b.center)continue;
      const distance=canvas.grid.measurePath([a.center,b.center]).distance;
      const visible=b.vision?.los?.contains?.(a.center.x,a.center.y);
      if(distance<=aura.range&&aura.range>=0&&visible===true&&/^\d+d\d+$/.test(aura.dice))return {dice:aura.dice,source:source.name,uuid:source.uuid};
    }
  }
  return null;
}
