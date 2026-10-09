import {shipConstruction,SHIP_SIZES} from './naval.mjs';
export const MASTS={simple:{name:'Simples',cost:160000,days:1,knots:8},compound:{name:'Composto',cost:320000,days:1,knots:12},multiple:{name:'Múltiplo',cost:480000,days:2,knots:16}};
export const ENGINES={none:{name:'Sem motor',cost:0,days:0,knots:0},manual:{name:'Manual',cost:1600000,days:3,knots:4},steam:{name:'Vapor',cost:20000000,days:5,knots:6},combustion:{name:'Combustão',cost:48000000,days:15,knots:8},turbine:{name:'Turbina',cost:100000000,days:20,knots:8},jet:{name:'Propulsão a jato',cost:1200000000,days:45,knots:0}};
export function constructionQuote({size,wood,mast='simple',mastCount=null,engine='none',fortification='none',kairoseki=false}={}){
 const hull=shipConstruction({size,wood}),index=Object.keys(SHIP_SIZES).indexOf(size),count=mastCount??hull.masts,maximum=[1,2,2,3,3][index];
 if(!Number.isInteger(count)||count<hull.masts||count>maximum||!MASTS[mast]||!ENGINES[engine]||!['none','steel','tempered'].includes(fortification))throw new Error('Escolha componentes válidos e respeite os limites de mastros.');
 if(!['none','manual'].includes(engine)&&index<2)throw new Error('Este motor exige navio Grande ou maior.');
 const parts=[{name:'Casco',cost:hull.price,days:hull.days},{name:'Mastros',cost:MASTS[mast].cost*count,days:MASTS[mast].days*count},{name:'Leme',cost:index<2?25000:55000,days:(index<2?2:5)/24},{name:'Âncora',cost:index<3?600000:900000,days:index<3?3:6}];
 if(engine!=='none')parts.push({...ENGINES[engine]});
 if(fortification!=='none')parts.push({name:'Fortificação',cost:hull.fortification*(fortification==='steel'?450000:600000)+900000,days:index<3?15:30});
 if(kairoseki)parts.push({name:'Kairoseki',cost:[100,150,200,300,400][index]*10000000+[1500000,2000000,3000000,3500000,4500000][index],days:hull.days});
 return {...hull,parts,total:parts.reduce((sum,part)=>sum+part.cost,0),sequentialDays:parts.reduce((sum,part)=>sum+part.days,0),maximumKnots:MASTS[mast].knots*count+(['turbine','jet'].includes(engine)?0:ENGINES[engine].knots),cr:hull.cr+(fortification==='tempered'?2:fortification==='steel'?1:0)+(kairoseki?1:0),physicalResistance:fortification==='tempered',kairoseki,fortification};
}
