import { createNode } from "./utils"

export const renderNav = () => {
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

