// const friends = [
//    {
//      name: 'Костя',
//      link: '/friends.html',
//    },
//    {
//      name: 'Дима',
//      link: '/friends.html',
//    },
//    {
//      name: 'Андрей',
//      link: '/friends.html',
//    },
//  ]
 
// //  attrs: { classNames: string, [otherAttrs]: unknown }
//  export const createNode = (tagName, attrs, content, children) => {
//    const elem = document.createElement(tagName)
 
//    if (attrs) {
//      const { classNames, ...rest } = attrs
 
//      if (classNames) {
//        elem.classList.add(classNames)
//      }
 
//      Object.entries(rest).forEach(([key, value]) => {
//        elem[key] = value
//      })
//    }
 
//    if (content) {
//      elem.innterText = content
//    }
 
//    if (children && children.length) {
//      children.forEach(child => {
//        elem.appendChild(child)
//      })
//    }
 
//    return elem
//  }
 
//  const friendsLinks = friends.map(friend => {
//    return createNode('a', { classNames: 'hrev', href: friend.link }, friend.name)
//  })
 
//  const friensList = createNode(
//    'li',
//    { classNames: 'variants' },
//    null,
//    friendsLinks,
//  )
//  const ul = createNode('ul', null, null, friensList)
//  const header = createNode('h3', null, 'Друзья')

export function createFriends() {
   const div = document.createElement('div')
   console.log(div)
   div.classList.add('container')
   const body = document.body
   body.appendChild(div)
   const container = document.createElement('div')
   container.classList.add('btn')
   div.appendChild(container)
   const header = document.createElement('h2')
   header.textContent = 'Криворукие друзья'
   div.appendChild(header);
   container.innerHTML = `
   <a class="nav" href="javascript:history.go(-1)">Назад</a>
   <a class="nav" href="javascript:history.go(+1)">Вперед</a>
   `
   const menu = document.createElement('div')
   div.appendChild(menu)
   menu.classList.add('men')
   menu.innerHTML = `
   <div class="menu">
      <div class="template">
      <h3>Костя</h3>
      <ul>
         <li class="variants">29 лет</li>
         <li class="variants">Junior Software Engineer</li>
         <li class="variants">+7 915 000 00 00</li>
      </ul>
      </div>
      <div class="template">
         <h3>Фото</h3>
         <img src="/img/me.JPG" alt="me">
         </div>
         <div class="template">
            <h3>Сообщения</h3>
            <ul>
               <li class="variants">
               <a href="/messages.html" class="hrev">От Кости</a>
               </li>
            </ul>
         </div>
   </div>
   <div class="menu">
      <div class="template">
      <h3>Дима</h3>
      <ul>
         <li class="variants">18 лет</li>
         <li class="variants">Head of Nodejs Practice</li>
         <li class="variants">+7 905 000 00 00</li>
      </ul>
      </div>
      <div class="template">
         <h3>Фото</h3>
         <img src="/img/dv.png" alt="me">
         </div>
         <div class="template">
            <h3>Сообщения</h3>
            <ul>
               <li class="variants">
               <a href="/messages.html" class="hrev">От Димы</a>
               </li>
            </ul>
         </div>
   </div>
   <div class="menu">
      <div class="template">
      <h3>Андрей</h3>
      <ul>
         <li class="variants">16 лет</li>
         <li class="variants">Buisnessman</li>
         <li class="variants">+7 960 000 00 00</li>
      </ul>
      </div>
      <div class="template">
         <h3>Фото</h3>
         <img src="/img/bat.jpg" alt="me">
         </div>
         <div class="template">
            <h3>Сообщения</h3>
            <ul>
               <li class="variants">
               <a href="/messages.html" class="hrev">От Андрея</a>
               </li>
            </ul>
         </div>
   </div>
</div>
   `
}