import { createNode } from '../utils/utils'
import { renderUserContent } from './render-user'
import { renderFriendsContent } from './render-friends'
import { renderMessagesContent } from './render-messages'
import { renderNav } from "../utils/nav";

const root = document.getElementById('root')

const createContent = () => {
  return createNode('div', null, { classNames: 'menu' }, [
    renderUserContent(),
    renderFriendsContent(),
    renderMessagesContent(),
  ])
}

export function createPage() {
  root.innerHTML = ''
  const header = createNode('h3', 'Криворукограмм')
  const container = createNode('div', null, { classNames: 'btn' }, renderNav())
  const content = createContent()
  const div = createNode('div', null, null, [container, header, content])

  root.appendChild(div)
}
