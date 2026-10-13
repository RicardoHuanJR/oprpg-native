export function professionRollTotal(total,natural,rank){return total+(['master','grandMaster'].includes(rank)&&natural<10?10-natural:0);}
export function recoveredResource(resource){
 const amount=resource.recoveryAmount??resource.max;
 return {...resource,value:Math.min(resource.max,resource.value+amount)};
}
export function professionReserve(resources,item,kind){
 const id=`profession:${item.id}:${kind}`;
 let reserve=resources.find(resource=>resource.id===id);
 if(!reserve){reserve={id,name:`${item.name} · ${kind==='advantage'?'vantagem':'sucesso'}`,value:3,max:3,recovery:'long',recoveryAmount:kind==='success'?1:null,source:item.uuid};resources.push(reserve);}
 if(reserve.value<1)throw new Error('Não há usos profissionais restantes.');
 reserve.value--;return reserve;
}
export function professionPlan(actor,source,skills=[],{trainingConfirmed=false}={}){
 const existing=[...(actor.items??[])].filter(item=>item.type==='profession');
 const without=source.system.identifier==='sem-profissao';
 if(without&&skills.some(skill=>['haki','supernatural','luck'].includes(skill)))throw new Error('Foco não permite Haki, Sobrenatural ou Sorte.');
 if(existing.some(item=>item.system.identifier==='sem-profissao'))throw new Error('Sem Profissão impede aprender profissões.');
 if(without&&existing.length)throw new Error('A escolha Sem Profissão exige não possuir profissões.');
 const level=actor.system.progression.level;
 if(source.type!=='profession')throw new Error('Selecione uma profissão.');
 if(existing.some(item=>item.system.identifier&&item.system.identifier===source.system.identifier))throw new Error('Esta profissão já está na ficha.');
 const maximum=actor.type==='npc'?1:1+Math.floor(level/5);
 if(existing.length>=maximum)throw new Error('Não há uma escolha de profissão disponível neste nível.');
 if(existing.length&&!trainingConfirmed)throw new Error('Confirme o aprendizado por livro ou tutor e seu prazo.');
 const initial=actor.type==='character'&&level===1&&existing.length===0;
 const count=initial||without?(source.system.profession?.initialSkillCount??0):0;
 const options=source.system.profession?.skillOptions??[];
 if(skills.length!==count||new Set(skills).size!==skills.length||skills.some(skill=>!options.includes(skill)))throw new Error(`Escolha ${count} perícia(s) inicial(is) válidas e distintas.`);
 return {initial,benefits:skills.map(key=>({kind:'skill',key,amount:1}))};
}
