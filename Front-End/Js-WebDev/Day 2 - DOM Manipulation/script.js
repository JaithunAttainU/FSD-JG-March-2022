// const childEle = document.getElementById('child')

// childEle.addEventListener('click', (event) => {
//   console.log(event)
//   event.stopImmediatePropagation()
//   console.log("Child 1 is clicked")
// })

// childEle.addEventListener('click', (event) => {
//   console.log(event)
//   event.stopImmediatePropagation()
//   console.log("Child 2 is clicked")
// })

// childEle.addEventListener('click', (event) => {
//   console.log(event)
//   console.log("Child 3 is clicked")
// })
// const parentEle = document.getElementById('parent')

// parentEle.addEventListener('click', (event) => {
//   console.log("Parent is clicked")
// })

// parentEle.addEventListener('focus', () => {
//   console.log("Parent is focused")
// })

// const grandParentEle = document.getElementById('grandparent')

// grandParentEle.addEventListener('click', (event) => {
//   // event.stopPropagation()

//   console.log("Grand Parent is clicked")
// })

// document.addEventListener('click', (event) => {
//   event.stopPropagation()

//   console.log("Document is clicked")
// })

//PreventDefault

const anchorEle = document.getElementById('link-tag')
anchorEle.addEventListener('click', (event) => {
  event.preventDefault()
  console.log("Google Anchor tag is clicked")
})

const formEle = document.getElementById('form')

formEle.addEventListener('submit', (event) => {
  // event.preventDefault()
  console.log("Form Submitted")
})