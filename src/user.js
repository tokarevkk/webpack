


export function write() {
   console.log('webpack load')
}

export function createPage() {
   const div = document.createElement('div')
   console.log(div)
   div.classList.add('wrapper')
   const body = document.body
   body.appendChild(div)
   const header = document.createElement('h1')
   console.log(header)
   header.textContent = 'Пробное приложение в webpack'
   div.appendChild(header);
   const container = document.createElement('container')
   container.classList.add('container')
   div.appendChild(container)
   container.innerText = 123
}



