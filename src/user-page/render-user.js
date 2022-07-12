import users from '../data/users'
import { createNode } from '../utils/utils'

const renderUsers = () => {
  return users.map(user => {
    const renderUser = () => {
      return Object.keys(user).map(key => {
        return createNode('li', user[key], { classNames: 'variants' })
      })
    }

    return createNode('ul', null, null, renderUser()) 
  })
}

export const renderUserContent = () => {
  const users = renderUsers()
  const h3 = createNode('h3', 'Пользователь')
  const template = createNode('div', null, { classNames: 'template' }, [
    h3,
    ...users,
  ])

  return template
}
