import { Task } from "./Task.js"
import { ToDoList } from "./TodoList.js"

const addBtnEle = document.querySelector('#add-btn')
const inputEle = document.querySelector('#task-input')

const toDoList = document.querySelector('#to-do')
// console.log(toDoList.classList)

const toDoListCons = new ToDoList() //[]

addBtnEle.addEventListener('click', () => {
  let newTask = inputEle.value //user input 

  newTask = new Task(newTask) //{text: 'hello', status: 'PENDING'}
  toDoListCons.addTask(newTask)  //[{text: 'hello', status: 'PENDING'}]
  updateList(toDoListCons.getAllTasks())
  inputEle.value = null
})

//Get the parent of button(i.e; li tag) and then remove it
function removeTaskHandler(event) {
  console.log("Delete button is clicked", event)
  event.target.parentElement.remove()
}


function updateList(todoList) {
  toDoList.innerHTML = ''
  for (const task of todoList) {
    //create HtmlElemt li
    const liEle = document.createElement('li') //<li></li>
    liEle.innerText = task.text //<li>Task 3</li>

    //create a input checkbox
    const checkBoxEle = document.createElement('input')
    checkBoxEle.type = 'checkbox'
    checkBoxEle.addEventListener('change', (event) => {
      liEle.classList.toggle('checked-style')
      toDoListCons.toggleStatus(task)
    })

    //create button ele
    const deleteBtnEle = document.createElement('button') //<button></button>
    deleteBtnEle.innerText = 'X' //<button>X</button>
    deleteBtnEle.addEventListener('click', removeTaskHandler)


    //prepend a checkbox
    liEle.prepend(checkBoxEle) //<li><input type="checkbox"/>Task 3</li>
    //apend button to li tag
    liEle.append(deleteBtnEle) //<li>Task 3<button>X</button></li>

    // liEle.appendChild(deleteBtnEle) //Only HTMLNodes
    //append li tag to unordered list
    toDoList.prepend(liEle)
  }
}
/**add, toggle, prepend, appendChild, before after */

// ['write', 'read', 'walk']

// [{ text: 'write', status: 'COMPLETED' }, { text: 'read', status: 'PENDING' }]