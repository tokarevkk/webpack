
export const createNode = (tagName, content, attrs, children) => {
  const elem = document.createElement(tagName)

  if (attrs) {
    const { classNames, ...rest } = attrs

    if (classNames) {
      elem.classList.add(classNames)
    }

    Object.entries(rest).forEach(([key, value]) => {
      elem.setAttribute(key, value)
    })
  }
//  console.log(elem)
  if (content) {
    elem.textContent = content
  }

  if (children && children.length) {
   //  console.log(elem, children)
    children.forEach(child => {
      elem.appendChild(child)
    })
  }

  return elem
}
