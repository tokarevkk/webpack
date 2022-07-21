import { createNode } from "../utils/utils";


export const renderImageInfo = (friend) => {
   const h3 = createNode('h3', 'Фото')
   const img = createNode('img', null, { src: friend.image })
   return createNode('div', null, { classNames: 'template'},[h3, img])
   
}