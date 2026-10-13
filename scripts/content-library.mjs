import {contentArtwork} from './content-art.mjs';
import {CATALOG} from './catalog.mjs';

/** One readable library for pickers and all subsequent progression choices. */
export function contentLibrary(type=null){
  const world=[...(globalThis.game?.items??[])].filter(item=>item.testUserPermission?.(globalThis.game?.user,'OBSERVER'));
  const catalog=CATALOG.map(item=>({...item,uuid:`catalog:${item.id}`}));
  return [...world.filter(item=>!['species','style'].includes(item.type)),...catalog].filter(item=>!type||item.type===type);
}
export function contentReference(reference,library=contentLibrary()){return library.find(item=>item.uuid===reference);}
