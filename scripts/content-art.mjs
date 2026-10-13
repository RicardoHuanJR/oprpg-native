// Local artwork registry. Never replace a custom portrait with a catalog default.
const ROOT='systems/oprpg-native/';
const ART={
  "aprimoramento-de-atributo": "ui/native-art/aprimoramento-de-atributo.webp",
  "concentracao-inabalavel": "ui/native-art/concentracao-inabalavel.webp",
  "corpo-de-guerreiro": "ui/native-art/corpo-de-guerreiro.webp",
  "defesa-ofensiva": "ui/native-art/defesa-ofensiva.webp",
  "dificuldade-inefavel": "ui/native-art/dificuldade-inefavel.webp",
  "gerenciamento-de-energia": "ui/native-art/gerenciamento-de-energia.webp",
  "mente-e-corpo": "ui/native-art/mente-e-corpo.webp",
  "mira-treinada": "ui/native-art/mira-treinada.webp",
  "perito-em-tecnicas": "ui/native-art/perito-em-tecnicas.webp",
  "preparacao-para-a-batalha": "ui/native-art/preparacao-para-a-batalha.webp",
  "primeiros-socorros": "ui/native-art/primeiros-socorros.webp",
  "prodigio-do-combate": "ui/native-art/prodigio-do-combate.webp",
  "quebrador-de-regras": "ui/native-art/quebrador-de-regras.webp",
  "recuo-estrategico": "ui/native-art/recuo-estrategico.webp",
  "reflexo-afiado": "ui/native-art/reflexo-afiado.webp",
  "retomar-o-folego": "ui/native-art/retomar-o-folego.webp",
  "robusto": "ui/native-art/robusto.webp",
  "sortudo": "ui/native-art/sortudo.webp",
  "superando-limites": "ui/native-art/superando-limites.webp",
  "superioridade-absoluta": "ui/native-art/superioridade-absoluta.webp",
  "humanos": "ui/native-art/humanos.webp",
  "povo-do-mar-homem-peixe": "ui/native-art/povo-do-mar-homem-peixe.webp",
  "anoes": "ui/native-art/anoes.webp",
  "gigantes": "ui/native-art/gigantes.webp",
  "lunarianos": "ui/native-art/lunarianos.webp",
  "minks": "ui/native-art/minks.webp",
  "povo-do-mar": "ui/native-art/povo-do-mar.webp",
  "aventureiro": "ui/native-art/aventureiro.webp",
  "celestiais": "ui/book/celestiais.webp",
  "atirador": "ui/official/classes/atirador.webp",
  "brutamontes": "ui/official/classes/brutamontes.webp",
  "carateca-homem-peixe": "ui/official/classes/carateca.webp",
  "ciborgue": "ui/official/classes/ciborgue.webp",
  "espadachim": "ui/official/classes/espadachim.webp",
  "guerrilheiro": "ui/official/classes/guerrilheiro.webp",
  "lutador": "ui/official/classes/lutador.webp",
  "ninja": "ui/official/classes/ninja.webp",
  "okama-kenpo": "ui/official/classes/okama.webp",
  "rokushiki": "ui/official/classes/rokushiki.webp",
  "samurai": "ui/official/classes/samurai.webp"
};
const GENERIC=new Set(['icons/svg/book.svg','icons/svg/mystery-man.svg','icons/svg/item-bag.svg','icons/svg/sword.svg','icons/svg/aura.svg','icons/svg/item.svg']);
const normalize=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export function catalogArtwork(item){
 const key=item.system?.identifier||normalize(item.name);
 if(ART[key])return ROOT+ART[key];
 if(item.type==='species')for(const family of ['celestiais','humanos','minks','povo-do-mar'])if(key.startsWith(family+'-'))return ROOT+ART[family];
 if(item.type==='feature')for(const [style,path] of Object.entries(ART))if(key.includes('-'+style+'-')&&path.includes('/classes/'))return ROOT+path;
 return null;
}
export function contentArtwork(item){return item?.img&&!GENERIC.has(item.img)?item.img:catalogArtwork(item??{})??item?.img??'icons/svg/book.svg';}
export function isGenericArtwork(img){return !img||GENERIC.has(img);}
