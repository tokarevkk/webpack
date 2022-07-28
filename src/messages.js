
import { renderNav } from "./utils/nav"
import { createNode } from './utils/utils'
import { messagesContent } from "./data/messages"
import { renderGeneralInfo } from "./frends-page/friend.info";
import { renderMessage } from "./messages-page/messages.recent";
import { renderMessageOld } from "./messages-page/messages.old";




const root = document.getElementById('root')

const renderFriend = (friend) => {
   
   const templateGeneral = renderGeneralInfo(friend)
   const templateImage = renderMessage(friend)
   const templateMessage = renderMessageOld(friend)
   const menu = createNode(
      'div',
      null,
      { classNames: 'menu' },
      [templateGeneral,templateImage,templateMessage]
   ) 
   return menu
}

export function createMessages() {

   root.innerHTML = ''
   const header = createNode('h3', 'Криворукие Сообщения')
   const container = createNode('div', null, { classNames: 'btn' }, renderNav())
   const friends = messagesContent.map(friend => {
      return renderFriend(friend)
   } )
   const div = createNode('div', null, null, [container, header, ...friends])
  root.appendChild(div)
}

