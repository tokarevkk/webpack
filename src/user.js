


export function write() {
   console.log('webpack load')
}

export function createPage() {
   const div = document.createElement('div')
   console.log(div)
   div.classList.add('container')
   const body = document.body
   body.appendChild(div)
   const container = document.createElement('div')
   container.classList.add('btn')
   div.appendChild(container)
   const header = document.createElement('h2')
   header.textContent = 'Криворукограмм'
   div.appendChild(header);
   container.innerHTML = `
   <a class="nav" href="javascript:history.go(-1)">Назад</a>
   <a class="nav" href="javascript:history.go(+1)">Вперед</a>
   `
   const menu = document.createElement('div')
   div.appendChild(menu)
   menu.classList.add('menu')
   menu.innerHTML = `
   <div class="template">
      <h3>Пользователь</h3>
      <ul>
         <li class="variants">Ксюша</li>
         <li class="variants">24 года</li>
         <li class="variants">Инфлюэнсер</li>
      </ul>
      </div>
      <div class="template">
         <h3>Друзья</h3>
         <ul>
            <li class="variants">
               <a href="/friends.html" class="hrev">Костя</a>
               </li>
               <li class="variants">
               <a href="/friends.html" class="hrev">Дима</a>
               </li>
               <li class="variants">
               <a href="/friends.html" class="hrev">Андрей</a>
               </li>
         </ul>
         </div>
         <div class="template">
            <h3>Сообщения</h3>
            <ul>
               <li class="variants">
               <a href="/messages.html" class="hrev">От Кости</a>
               </li>
               <li class="variants">
               <a href="/messages.html" class="hrev">От Димы</a>
               </li>
               <li class="variants">
               <a href="/messages.html" class="hrev">От Андрея</a>
               </li>
            </ul>
            </div>
   `
}



