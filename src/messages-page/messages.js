import { createNode } from '../utils/utils'
import { renderNav } from "../utils/nav";
import { friendsData } from "../data/friends.data"
import { renderGeneralInfo } from "../frends-page/friend.info";
import { renderImageInfo } from "../frends-page/friend.image";
import { renderMessagesInfo } from "../frends-page/friend.massages";


const root = document.getElementById('root')

const renderFriend = (friend) => {
   
   const templateGeneral = renderGeneralInfo(friend)
   const templateImage = renderImageInfo(friend)
   const templateMessage = renderMessagesInfo()
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
   const header = createNode('h3', 'Криворукие Cообщения')
   
   const container = createNode('div', null, { classNames: 'btn' }, renderNav())
   
   const friends = friendsData.map(friend => {
      
      return renderFriend(friend)
   })
   
   const div = createNode('div', null, null, [container, header, ...friends])
   root.appendChild(div)
  
}


