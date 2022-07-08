const addBtnEle = document.querySelector('#add-btn')
const inputEle = document.querySelector('#task-input')
const toDoList = document.querySelector('#to-do')

addBtnEle.addEventListener('click', () => {
  // console.log("Add btn clicked")
  // console.log(inputEle.value)
  const newTask = inputEle.value

  console.log(toDoList)
  const oldTasks = toDoList.innerHTML
  console.log(oldTasks)
  toDoList.innerHTML = `${oldTasks}<li>${newTask}</li>`
  inputEle.value = null
})