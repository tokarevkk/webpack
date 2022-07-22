import { createNode } from '../utils/utils'
import { renderUserContent } from './render-user'
import { renderFriendsContent } from './render-friends'
import { renderMessagesContent } from './render-messages'

const root = document.getElementById('root')

const renderNav = () => {
  return [
    createNode('a', 'Назад', {
      classNames: 'nav',
      href: 'javascript:history.go(-1)',
    }),
    createNode('a', 'Вперед', {
      classNames: 'nav',
      href: 'javascript:history.go(+1)',
    }),
  ]
}

const createContent = () => {
  return createNode('div', null, { classNames: 'menu' }, [
    renderUserContent(),
    renderFriendsContent(),
    renderMessagesContent(),
  ])
}

export function createPage() {
  root.innerHTML = ''
  const header = createNode('h3', 'Криворукие сообщения')
  const container = createNode('div', null, { classNames: 'btn' }, renderNav())
  const content = createContent()
  const div = createNode('div', null, null, [container, header, content])

  root.appendChild(div)
}

export function createMessages() {
   const div = document.createElement('div')
   console.log(div)
   div.classList.add('container')
   const body = document.body
   body.appendChild(div)
   const container = document.createElement('div')
   container.classList.add('btn')
   div.appendChild(container)
   const header = document.createElement('h2')
   header.textContent = 'Сообщения'
   div.appendChild(header);
   container.innerHTML = `
   <a class="nav" href="javascript:history.go(-1)">Назад</a>
   <a class="nav" href="javascript:history.go(+1)">Вперед</a>
   `
   const menu = document.createElement('div')
   div.appendChild(menu)
   menu.classList.add('menu')
   menu.innerHTML = `
   <div class="menu">
      <div class="template">
      <h3>От Кости</h3>
      <ul>
         <li class="variants">29 лет</li>
         <li class="variants">Junior Software Engineer</li>
         <li class="variants">+7 915 000 00 00</li>
      </ul>
      </div>
      <div class="template">
         <h3>Дата</h3>
         <ul>
            <li class="variants">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non voluptas ad dolor impedit sit culpa dolorem alias distinctio. Expedita et porro nam tenetur deserunt, magnam unde.  Sit debitis excepturi cum!
            </li>
         </ul>
         </div>
         <div class="template">
            <h3>Дата</h3>
            <ul>
               <li class="variants">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsum accusantium culpa hic architecto quis ducimus voluptate dolorum aperiam voluptates, vitae eveniet illum voluptatum repellendus quam, cumque incidunt doloremque accusamus?
               </li>
            </ul>
         </div>
   </div>
</div>
<div class="menu">
   <div class="template">
   <h3>От Димы</h3>
   <ul>
      <li class="variants">18 лет</li>
      <li class="variants">Head of Nodejs Practice</li>
      <li class="variants">+7 905 000 00 00</li>
   </ul>
   </div>
   <div class="template">
      <h3>Дата</h3>
      <ul>
         <li class="variants">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non voluptas ad dolor impedit sit culpa dolorem alias distinctio. Expedita et porro nam tenetur deserunt, magnam unde. Sit debitis excepturi cum!
         </li>
      </ul>
      </div>
      <div class="template">
         <h3>Дата</h3>
         <ul>
            <li class="variants">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsum accusantium culpa hic architecto quis ducimus voluptate dolorum aperiam voluptates, vitae eveniet illum voluptatum repellendus quam, cumque incidunt doloremque accusamus?
            </li>
         </ul>
      </div>
</div>
<div class="menu">
   <div class="template">
   <h3>От Андрея</h3>
   <ul>
      <li class="variants">16 лет</li>
      <li class="variants">Buisnessman</li>
      <li class="variants">+7 960 000 00 00</li>
   </ul>
   </div>
   <div class="template">
      <h3>Дата</h3>
      <ul>
         <li class="variants">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non voluptas ad dolor impedit sit culpa dolorem alias distinctio. Expedita et porro nam tenetur deserunt, magnam unde. Sit debitis excepturi cum!
         </li>
      </ul>
      </div>
      <div class="template">
         <h3>Дата</h3>
         <ul>
            <li class="variants">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsum accusantium culpa hic architecto quis ducimus voluptate dolorum aperiam voluptates, vitae eveniet illum voluptatum repellendus quam, cumque incidunt doloremque accusamus?
            </li>
         </ul>
      </div>
</div>
   `
}