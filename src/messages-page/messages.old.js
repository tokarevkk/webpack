import { createNode } from "../utils/utils";

export const renderMessageOld = (friend) => {
   const h3 = createNode('h3',
      new Date().toString())
   const normalizeRecent = normalizeMessagesRecent(friend)
   const generalInfo = Object.keys(normalizeRecent).map(key => {
      return createNode('li', normalizeRecent[key],{ classNames: 'variants'})
   })
   const ul = createNode('ul', null, null, generalInfo)
   return createNode('div', null, { classNames: 'template'},[h3, ul])
} 

export const normalizeMessagesRecent = (friend) => {
   const { messagesOld } = friend
   return { messagesOld }
}