import { createNode } from "../utils/utils";


export const renderGeneralInfo = (friend) => {
   const h3 = createNode('h3', friend.name)
   const normalizedInfo = normalizeGeneralInfo(friend)
   const generalInfo = Object.keys(normalizedInfo).map(key => {
      return createNode('li', normalizedInfo[key],{ classNames: 'variants'})
   })
   const ul = createNode('ul', null, null, generalInfo)
   return createNode('div', null, { classNames: 'template'},[h3, ul])
} 

export const normalizeGeneralInfo = (friend) => {
   const { age, ocupation, phone } = friend
   return { age, ocupation, phone }
}