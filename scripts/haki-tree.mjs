import {bookDescription} from './book-descriptions.mjs';
import {HAKI_LAYOUT} from './haki-layout.mjs';
import {HAKI_CATALOG} from './haki-catalog.mjs';
import {hakiStage} from './engine.mjs';
import {learnHakiTalent,awardAmbition,hakiPurchaseQuote} from './haki.mjs';
import {nativePrompt,searchText} from './dialog-ui.mjs';
const focusNames={armament:'Armamento',observation:'Observação',king:'Rei'};
const layoutKeys={armament:'armamento',observation:'observacao',king:'rei'};
export function hakiTreeContext(actor,focus='armament',selectedId=null){
 const haki=actor.system.haki,layout=HAKI_LAYOUT[layoutKeys[focus]],owned=[...actor.items];
 const definitions=[...HAKI_CATALOG,...owned.filter(item=>item.type==='hakiTalent'&&!HAKI_CATALOG.some(entry=>entry.system.identifier===item.system.identifier))].filter(item=>item.system.hakiTalent.focus===focus);
 const nodes=definitions.map((definition,index)=>{
  const matches=i=>i.type==='hakiTalent'&&(definition.system.identifier?i.system.identifier===definition.system.identifier:i.uuid===definition.uuid);
  const item=owned.find(i=>matches(i)&&haki.learned.includes(i.uuid))??owned.find(matches);
  const config=item?.system.hakiTalent??definition.system.hakiTalent;
  const rank=item&&haki.learned.includes(item.uuid)?Math.max(1,config.rank):0;
  const pos=layout.pos[definition.system.identifier]??{x:220+(index%5)*190,y:layout.height+80+Math.floor((index-HAKI_CATALOG.filter(entry=>entry.system.hakiTalent.focus===focus).length)/5)*90};
  const candidate=item??{...definition,uuid:`catalog:${definition.id}`};
  let quote=null,reason='';try{quote=hakiPurchaseQuote(actor,candidate);}catch(error){reason=error.message;}
  const state=rank>=config.maxRank?'complete':quote?'available':'blocked';
  const required=currentStage(config.minimumStage,rank);
  const prerequisiteNames=(config.requirements??[]).map(key=>HAKI_CATALOG.find(d=>d.system.identifier===key)?.name??owned.find(d=>d.system.identifier===key)?.name??key);
  for(const key of config.requirements??[])reason=reason.replaceAll(key,HAKI_CATALOG.find(d=>d.system.identifier===key)?.name??key);
  return {description:bookDescription(definition)?.description??definition.system.description,state,stateLabel:{complete:'Completo',available:'Disponível',blocked:'Bloqueado'}[state],selected:(definition.system.identifier||definition.uuid)===selectedId,canBuy:Boolean(quote),reason,requiredStage:quote?.requiredStage??required,nextRemaining:quote?.remaining,nextForm:['Base','Dominada','Avançada'][rank]??'Completo',prerequisiteNames,search:searchText(item?.name??definition.name),id:definition.system.identifier||definition.uuid,name:item?.name??definition.name,x:pos.x-70,y:pos.y-28,cost:config.cost,rank,maxRank:config.maxRank,learned:rank>0,requirements:config.requirements,source:item?.system.source??definition.system.source,stars:Array.from({length:config.maxRank},(_,n)=>({filled:n<rank}))};
 });
 const links=nodes.flatMap(node=>(node.requirements??[]).flatMap(id=>{const parent=nodes.find(n=>n.id===id);if(!parent)return [];return [{path:`M ${parent.x+70} ${parent.y+56} C ${parent.x+70} ${(parent.y+56+node.y)/2}, ${node.x+70} ${(parent.y+56+node.y)/2}, ${node.x+70} ${node.y}`,learned:parent.learned&&node.learned}];}));
 const spent=haki.armament+haki.observation+haki.king;
 return {selectedNode:nodes.find(n=>n.id===selectedId),actor,focus,focuses:Object.entries(focusNames).map(([id,label])=>({id,label,active:id===focus})),stage:hakiStage(spent),spent,remaining:haki.unspent,total:spent+haki.unspent,stages:[{label:'Inexperiente',range:'1–20 PA'},{label:'Treinado',range:'21–70 PA'},{label:'Perito',range:'71+ PA'}].map(entry=>({...entry,active:entry.label===hakiStage(spent)})),awakened:haki.awakened,kingLocked:focus==='king'&&!haki.kingAllowed,canBuy:actor.isOwner,nodes,links,width:layout.width,height:Math.max(layout.height,...nodes.map(n=>n.y+90)),branches:layout.branches,bands:layout.bands.map(b=>({...b,label:{inexperiente:'Inexperiente',treinado:'Treinado',perito:'Perito'}[b.stage],height:b.y1-b.y0}))};
}
function currentStage(minimum,rank){const stages=['Latente','Inexperiente','Treinado','Perito'];return rank===0?minimum:stages[Math.max(stages.indexOf(minimum),rank===1?2:3)];}
const screens=new Map();
let Tree;
export function openHakiTree(actor){
 if(!Tree){const {ApplicationV2,HandlebarsApplicationMixin}=foundry.applications.api;
 Tree=class extends HandlebarsApplicationMixin(ApplicationV2){
  constructor(actor){super();this.actor=actor;this.focus='armament';this.zoom=1;this.selected=null;this.query='';this.hooks=[];
   if(globalThis.Hooks){const refresh=doc=>{if(doc.uuid===this.actor.uuid||doc.parent?.uuid===this.actor.uuid){if(this.rendered)this.render({force:true});}};for(const name of ['updateActor','updateItem','createItem','deleteItem'])this.hooks.push([name,Hooks.on(name,refresh)]);this.hooks.push(['deleteActor',Hooks.on('deleteActor',doc=>{if(doc.uuid===this.actor.uuid)this.close();})]);}
  }
  static DEFAULT_OPTIONS={classes:['oprpg-native','op-haki-tree'],window:{title:'Árvore de Haki · Pontos de Ambição'},position:{width:1200,height:850},actions:{manage:async function(){try{await this.manageHaki();await this.render({force:true});}catch(error){ui.notifications.error(error.message);}},focus:async function(_e,t){this.focus=t.dataset.focus;this.selected=null;this.render({force:true});},node:function(_e,t){this.selected=t.dataset.node;this.render({force:true});},buy:async function(){try{await this.inspectNode(this.selected);await this.render({force:true});}catch(error){ui.notifications.error(error.message);}},zoom:function(_e,t){this.zoom=Math.min(1.5,Math.max(.5,this.zoom+Number(t.dataset.step)));this.applyZoom();}}};
  static PARTS={body:{template:'systems/oprpg-native/templates/legacy/haki-tree.hbs',scrollable:['.op-haki-viewport']}};
  async _prepareContext(){return {...hakiTreeContext(this.actor,this.focus,this.selected),canManage:game.user.isGM};}
  applyZoom(){const canvas=this.element.querySelector('.op-haki-canvas');if(canvas)canvas.style.zoom=this.zoom;}
  async manageHaki(){
   if(!game.user.isGM||!this.actor.isOwner)throw new Error('Somente o Narrador pode autorizar o despertar e conceder PA.');
   const haki=this.actor.system.haki;
   const result=await nativePrompt({classes:['oprpg-native','op-dialog'],window:{title:'Despertar e Pontos de Ambição'},position:{width:460},content:`<fieldset class="op-choice"><legend>Autorizações do Narrador</legend><label class="op-checkbox"><input name="awakened" type="checkbox" ${haki.awakened?'checked':''}> Haki desperto</label><label class="op-checkbox"><input name="king" type="checkbox" ${haki.kingAllowed?'checked':''}> Autorizar Haki do Rei</label><label>Conceder PA adicionais<input name="amount" type="number" min="0" step="1" value="0"></label><p class="op-hint">Após o despertar, o saldo de PA não distribuídos está limitado a 20. PA já distribuídos e talentos aprendidos são preservados.</p></fieldset>`,validate:r=>{if(!Number.isInteger(r.amount)||r.amount<0)throw new Error('Informe PA inteiros e não negativos.');},ok:{label:'Aplicar',callback:(_e,_b,app)=>{const f=app.element.querySelector('form').elements;return {awakened:f.awakened.checked,king:f.king.checked,amount:Number(f.amount.value)};}}});
   if(!result)return;
   const {actorCommand}=await import('./services.mjs');
   await actorCommand(this.actor,()=>this.actor.update({'system.haki.awakened':result.awakened,'system.haki.kingAllowed':result.king,'system.haki.unspent':result.awakened?Math.min(20,this.actor.system.haki.unspent):this.actor.system.haki.unspent}));
   if(result.amount){const award=await awardAmbition(this.actor,result.amount);ui.notifications.info(`${award.awarded} PA concedidos; ${award.lost} excedentes ao limite.`);}
  }
  _onRender(){this.applyZoom();const search=this.element.querySelector('[data-haki-search]');search.value=this.query;const filter=()=>{this.query=search.value;const words=searchText(this.query).split(/\s+/).filter(Boolean);let visible=0;for(const node of this.element.querySelectorAll('.op-haki-node')){node.hidden=!words.every(word=>node.dataset.search.includes(word));if(!node.hidden)visible++;}this.element.querySelector('[data-haki-search-status]').textContent=`${visible} talentos`;this.element.querySelector('.op-haki-links').hidden=words.length>0;};search.addEventListener('input',filter);filter();
   for(const node of this.element.querySelectorAll('.op-haki-node'))node.addEventListener('keydown',event=>{const vectors={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},v=vectors[event.key];if(!v)return;event.preventDefault();const x=parseFloat(node.style.left),y=parseFloat(node.style.top);const candidates=[...this.element.querySelectorAll('.op-haki-node')].filter(n=>n!==node&&!n.hidden).map(n=>({n,dx:parseFloat(n.style.left)-x,dy:parseFloat(n.style.top)-y})).filter(n=>n.dx*v[0]+n.dy*v[1]>0).sort((a,b)=>(Math.hypot(a.dx,a.dy)+Math.abs(a.dx*v[1]-a.dy*v[0])*2)-(Math.hypot(b.dx,b.dy)+Math.abs(b.dx*v[1]-b.dy*v[0])*2));candidates[0]?.n.focus();});
  const viewport=this.element.querySelector('.op-haki-viewport');let drag=null;viewport.addEventListener('pointerdown',e=>{if(e.button!==0||e.target.closest('button'))return;drag={x:e.clientX,y:e.clientY,left:viewport.scrollLeft,top:viewport.scrollTop};viewport.setPointerCapture(e.pointerId);});viewport.addEventListener('pointermove',e=>{if(drag){viewport.scrollLeft=drag.left-e.clientX+drag.x;viewport.scrollTop=drag.top-e.clientY+drag.y;}});viewport.addEventListener('pointerup',()=>drag=null);viewport.addEventListener('pointercancel',()=>drag=null);}
  async inspectNode(id){
   const definition=HAKI_CATALOG.find(i=>i.system.identifier===id)??[...this.actor.items].find(i=>i.type==='hakiTalent'&&(i.system.identifier===id||i.uuid===id));if(!definition)return;
   const matches=i=>i.type==='hakiTalent'&&(i.system.identifier===id||i.uuid===id);
   let item=[...this.actor.items].find(i=>matches(i)&&this.actor.system.haki.learned.includes(i.uuid))??[...this.actor.items].find(matches);
   const c=item?.system.hakiTalent??definition.system.hakiTalent,esc=value=>foundry.utils.escapeHTML(String(value??''));
   const rank=item&&this.actor.system.haki.learned.includes(item.uuid)?Math.max(1,c.rank):0;
   const quote=hakiPurchaseQuote(this.actor,item??{...definition,uuid:`catalog:${definition.id}`});
   const requirements=c.requirements.map(key=>HAKI_CATALOG.find(i=>i.system.identifier===key)?.name??key);
   const buy=await nativePrompt({classes:['oprpg-native','op-dialog'],window:{title:definition.name},position:{width:480},content:`<fieldset class="op-choice"><legend>${esc(definition.name)}</legend><p>Formas aprendidas: ${rank}/${c.maxRank} · Próxima forma: ${c.cost} PA</p><p>Próxima forma exige ${esc(quote.requiredStage)}. Saldo após aquisição: ${quote.remaining} PA.</p><p>Pré-requisitos: ${esc(requirements.join(', ')||'Nenhum')}.</p><p class="op-hint">${esc(definition.system.source)}</p><p>Os efeitos e escolhas situacionais seguem a regra do talento. A aquisição confere despertar, autorização do Rei, estágio, formas e saldo de PA.</p></fieldset>`,ok:{label:rank>=c.maxRank?'Fechar':this.actor.isOwner?'Aprender próxima forma':'Fechar',callback:()=>this.actor.isOwner&&rank<c.maxRank}});
   if(!buy)return;
   let created=false;
   if(!item){const data=structuredClone(definition);delete data.id;[item]=await this.actor.createEmbeddedDocuments('Item',[data]);created=true;}
   try{await learnHakiTalent(item);}catch(error){if(created)await this.actor.deleteEmbeddedDocuments('Item',[item.id]);throw error;}
  }
  async close(options){for(const [name,id] of this.hooks)Hooks.off(name,id);this.hooks=[];screens.delete(this.actor.uuid);return super.close(options);}
 };}
 let screen=screens.get(actor.uuid);if(!screen){screen=new Tree(actor);screens.set(actor.uuid,screen);}return screen.render({force:true});
}
