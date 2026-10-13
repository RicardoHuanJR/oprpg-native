export const PATH_OBJECTIVES={knowledge:'Conhecimento',freedom:'Liberdade',power:'Poder'};
export const PATH_MEANS={companionship:'Companheirismo',strength:'Força',deception:'Enganação'};
export function characterPath(objective,means){
 if(!Object.hasOwn(PATH_OBJECTIVES,objective)||!Object.hasOwn(PATH_MEANS,means))throw new Error('Selecione objetivo e meio válidos.');
 return `${PATH_OBJECTIVES[objective]} ${means==='companionship'?'pelo':'pela'} ${PATH_MEANS[means]}`;
}
