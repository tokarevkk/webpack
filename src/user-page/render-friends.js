import friends from '../data/friends.data'
import { createNode } from '../utils/utils'
import { createFriends } from '../frends-page/friends'

const navigateToFriends = () => {
  window.history.pushState(null, null, 'friends')
  createFriends()
}

const renderFriends = () => {
  return createNode(
    'ul',
    null,
    null,
    friends.map(friend => {
      const node = createNode('li', friend, { classNames: 'hrev' })
      node.addEventListener('click', navigateToFriends)

      return node
    }),
  )
}

export const renderFriendsContent = () => {
  const friends = renderFriends()
  const h3 = createNode('h3', 'Друзья')
  const template = createNode('div', null, { classNames: 'template' }, [
    h3,
    friends,
  ])

  return template
}
