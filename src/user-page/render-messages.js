import messages from '../data/messages'
import { createNode } from '../utils/utils'

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
        [createNode('a', message, { href: '/messages.html' })],
      )
    }),
  )
}

export const renderMessagesContent = () => {
  const messages = renderMessages()
  const h3 = createNode('h3', 'Сообщения')
  const template = createNode('div', null, { classNames: 'template' }, [
    h3,
    messages,
  ])

  return template
}
