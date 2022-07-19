
import { renderNav } from "../utils/nav"
import { createNode } from "../utils/utils"
import { friendsData } from "../data/friends.data"
import messages from '../data/messages'

const renderGeneralInfo = (friend) => {
   const h3 = createNode('h3', friend.name)
   const normalizedInfo = normalizeGeneralInfo(friend)
   const generalInfo = Object.keys(normalizedInfo).map(key => {
      return createNode('li', normalizedInfo[key],{ classNames: 'variants'})
   })
   const ul = createNode('ul', null, null, generalInfo)
   return createNode('div', null, { classNames: 'template'},[h3, ul])
} 

const renderImageInfo = (friend) => {
   const h3 = createNode('h3', 'Фото')
   const img = createNode('img', null, { src: friend.image })
   return createNode('div', null, { classNames: 'template'},[h3, img])
   
}

const renderMessages = () => {
   return createNode(
     'ul',
     null,
     null,
     messages.map(message => {
       return createNode(
         'li',
         null,
         {
           classNames: 'hrev',
         },
         [createNode('a', message, { href: '/messages' })],
       )
     }),
   )
}
 
const renderMessagesContent = () => {
   const messages = renderMessages()
   const h3 = createNode('h3', 'Сообщения')
   const template = createNode('div', null, { classNames: 'template' }, [
     h3,
     messages,
   ])
 
   return template
 }


const root = document.getElementById('root')

const normalizeGeneralInfo = (friend) => {
   const { age, ocupation, phone } = friend
   return { age, ocupation, phone }
}

const renderFriend = (friend) => {
   
   const templateGeneral = renderGeneralInfo(friend)
   const templateImage = renderImageInfo(friend)
   const templateMessage = renderMessagesContent()
   const menu = createNode(
      'div',
      null,
      { classNames: 'menu' },
      [templateGeneral,templateImage,templateMessage]
   ) 
   return menu
}
   

    
export function createFriends() {

   root.innerHTML = ''
   const header = createNode('h3', 'Криворукие Друзья')
   const container = createNode('div', null, { classNames: 'btn' }, renderNav())
   const friends = friendsData.map(friend => {
      return renderFriend(friend)
   } )
   const div = createNode('div', null, null, [container, header, ...friends])
   
   

   


//   const div = document.createElement('div')
//   console.log(div)
//   div.classList.add('container')
//   const container = document.createElement('div')
//   container.classList.add('btn')
//   div.appendChild(container)
//   
//   div.appendChild(header)
//   container.innerHTML = `
//    <a class="nav" href="javascript:history.go(-1); return false;">Назад</a>
//    <a class="nav" href="javascript:history.go(+1); return false;">Вперед</a>
//    `
//   const menu = document.createElement('div')
//   div.appendChild(menu)
//   menu.classList.add('men')
//   menu.innerHTML = `
//    <div class="menu">
//       <div class="template">
//       <h3>Костя</h3>
//       <ul>
//          <li class="variants">29 лет</li>
//          <li class="variants">Junior Software Engineer</li>
//          <li class="variants">+7 915 000 00 00</li>
//       </ul>
//       </div>
//       <div class="template">
//          <h3>Фото</h3>
//          <img src="/img/me.JPG" alt="me">
//          </div>
//          <div class="template">
//             <h3>Сообщения</h3>
//             <ul>
//                <li class="variants">
//                <a href="/messages.html" class="hrev">От Кости</a>
//                </li>
//             </ul>
//          </div>
//    </div>
//    <div class="menu">
//       <div class="template">
//       <h3>Дима</h3>
//       <ul>
//          <li class="variants">18 лет</li>
//          <li class="variants">Head of Nodejs Practice</li>
//          <li class="variants">+7 905 000 00 00</li>
//       </ul>
//       </div>
//       <div class="template">
//          <h3>Фото</h3>
//          <img src="/img/dv.png" alt="me">
//          </div>
//          <div class="template">
//             <h3>Сообщения</h3>
//             <ul>
//                <li class="variants">
//                <a href="/messages.html" class="hrev">От Димы</a>
//                </li>
//             </ul>
//          </div>
//    </div>
//    <div class="menu">
//       <div class="template">
//       <h3>Андрей</h3>
//       <ul>
//          <li class="variants">16 лет</li>
//          <li class="variants">Buisnessman</li>
//          <li class="variants">+7 960 000 00 00</li>
//       </ul>
//       </div>
//       <div class="template">
//          <h3>Фото</h3>
//          <img src="/img/bat.jpg" alt="me">
//          </div>
//          <div class="template">
//             <h3>Сообщения</h3>
//             <ul>
//                <li class="variants">
//                <a href="/messages.html" class="hrev">От Андрея</a>
//                </li>
//             </ul>
//          </div>
//    </div>
// </div>
//    `

  root.appendChild(div)
}
