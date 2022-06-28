const model = [
   { type: 'Title', value: 'Пробное приложение в Webpack' },
   { type: 'text', value: 'Создание HTML элементов по средствам JS' },
   {
      type: 'Columns', value: [
            'Сообщения',
            'Друзья'
      ]
   }
   
]



const $site = document.querySelector('#site')
console.log()
model.forEach(block => {
   
   let html = ''
   if (block.type === 'title') {
      html = title(block)
   } else if (block.type === 'text') {
      html = text(block)
   } else if (block.type === 'columns') {
      html = title(columns)
   }
   body.insertAdjacentElement('beforeend', html)
})




function title(block) {
   return `
   <header class="row">
      <div class="col-sm">
         <h1>${block.value}</h1>
      </div>
   </header>
   `
}

function text(block) {
   return `
   <div class="row">
      <div class="col-sm">
         <p>${block.value}</p>
      </div>
   </div>
   `
}

function columns(block) {
   const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
   return `
   <div class="row">
      ${html.join('')}
   </div>
`
}