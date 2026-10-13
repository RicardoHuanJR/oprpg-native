/** Classic chamfered frame. Presentation only; no foreign engine or styles. */
export default class FiligreeBoxElement extends HTMLElement {
 static tagName='op-filigree-box';
 constructor(){
  super();
  const root=this.attachShadow({mode:'open'}),style=document.createElement('style');
  style.textContent=`:host{position:relative;isolation:isolate;min-height:56px}.backdrop{position:absolute;inset:0;z-index:-2;background:var(--filigree-background-color,#120d19);clip-path:polygon(12px 0,calc(100% - 12px) 0,100% 12px,100% calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,0 calc(100% - 12px),0 12px)}svg{position:absolute;fill:var(--filigree-border-color,#b38a22);z-index:-1;pointer-events:none}.top,.bottom{height:30px}.top{top:0}.bottom{bottom:0;transform:scaleY(-1)}.left,.right{width:25px}.left{left:0}.right{right:0;transform:scaleX(-1)}.bottom.right{transform:scale(-1,-1)}.block{width:calc(100% - 50px);left:25px}.inline{height:calc(100% - 60px);top:30px}`;
  root.append(style);
  const backdrop=document.createElement('div');backdrop.className='backdrop';backdrop.setAttribute('aria-hidden','true');root.append(backdrop);
  const paths={corner:'M 3 21.7 C 5.383 14.227 9.646 7.066 18.1 3.2 L 12.2 3.2 L 3 12.8 Z M 6.9 15.7 C 5.088 19.235 3.776 23.004 3 26.9 L 2.999 30 L 0 30 L 0 11.5 L 11 0 L 25 0 L 25 3.1 L 22.4 3.1 C 16.737 4.586 11.822 8.112 8.6 13 L 8.6 30 L 6.9 30 Z',block:'M 0 0 L 10 0 L 10 3.1 L 0 3.1 Z',inline:'M 0 10 L 0 0 L 2.99 0 L 2.989 10 Z M 6.9 10 L 6.9 0 L 8.6 0 L 8.6 10 Z'};
  for(const [kind,positions]of [['corner','top left'],['corner','top right'],['corner','bottom left'],['corner','bottom right'],['block','top'],['block','bottom'],['inline','left'],['inline','right']]){
   const svg=document.createElementNS('http://www.w3.org/2000/svg','svg'),path=document.createElementNS('http://www.w3.org/2000/svg','path');
   svg.setAttribute('class',`${kind} ${positions}`);svg.setAttribute('viewBox',`0 0 ${kind==='block'?10:25} ${kind==='inline'?10:30}`);svg.setAttribute('preserveAspectRatio','none');svg.setAttribute('aria-hidden','true');path.setAttribute('d',paths[kind]);svg.append(path);root.append(svg);
  }
  root.append(document.createElement('slot'));
 }
}
