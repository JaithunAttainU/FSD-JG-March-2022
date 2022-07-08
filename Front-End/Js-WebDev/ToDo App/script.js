const addBtnEle = document.querySelector('#add-btn')
const inputEle = document.querySelector('#task-input')

const toDoList = document.querySelector('#to-do')
// console.log(toDoList.classList)

addBtnEle.addEventListener('click', () => {
  // console.log("Add btn clicked")

  // console.log(inputEle)
  // console.log(inputEle.value) //get value from the input element
  const newTask = inputEle.value //user input 

  const oldTasks = toDoList.innerHTML //get old task
  console.log(oldTasks)

  // toDoList.innerHTML = `${oldTasks}<li>${newTask}<button>X</button></li>` //add task tasks aling with old one
  inputEle.value = null


  //create HtmlElemt li
  const liEle = document.createElement('li') //<li></li>
  liEle.innerText = newTask //<li>Task 3</li>

  //create button ele
  const deleteBtnEle = document.createElement('button') //<button></button>
  deleteBtnEle.innerText = 'X' //<button>X</button>
  deleteBtnEle.addEventListener('click', removeTaskHandler)

  //apend button to li tag
  liEle.append(deleteBtnEle) //<li>Task 3<button>X</button></li>

  // liEle.appendChild(deleteBtnEle) //Only HTMLNodes
  //append li tag to unordered list
  toDoList.prepend(liEle)
})

//Get the parent of button(i.e; li tag) and then remove it
function removeTaskHandler(event) {
  console.log("Delete button is clicked", event)
  event.target.parentElement.remove()
}

/**add, toggle, prepend, appendChild, before after */