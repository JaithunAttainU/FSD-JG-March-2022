// const inputEle = document.querySelector('#search-input')
// const btnEle = document.querySelector('#btn')
// const searchChangeHandler = (event) => {
//   console.log(event.target.value, "input")
// }

// const keyPressHandler1 = () => { //location1
//   console.log("Key Press 1")
// }
// //addEventListener(eventName, handlerFunc)
// inputEle.addEventListener('input', searchChangeHandler, {
//   once: true
// })

// inputEle.addEventListener('keypress', keyPressHandler1, {}) //location1

// inputEle.addEventListener('keypress', () => { //location2
//   console.log("Key Press 2")
// })

// //removeEventListener(eventName, handlerFunc)
// inputEle.removeEventListener('keypress', keyPressHandler1) //location1

// inputEle.addEventListener('keyup', (event) => {
//   console.log("Key Up ", event)
// })


// const btnHandler = () => {
//   buttonCounter++
//   console.log("Btn Handler")
//   if (buttonCounter === 3) {
//     btnEle.removeEventListener('click', btnHandler)
//     return
//   }
// }

// let buttonCounter = 0
// btnEle.addEventListener('click', btnHandler)


// const users = []
// fetch('url').then((res) => {
//   users = res //get users array
// })

// constructTable(users)
// //add event listener(input) to input element

// inputEle.addEventListener('input', (event) => {
//   const searchText = event.target.value

//   const selectedUsers = users.filter((user) => {
//     const searchTextLowCas = searchText.toLowerCase()
//     const userLowCas = user.name.toLowerCase()


//     //RegEx - 
//     const regPatt = '[0-9][a-z]'
//     return userLowCas.includes(searchTextLowCas) || user.username.includes(searchText)
//   })
//   constructTable(selectedUsers)

// })


// function constructTable(users) {

//   //create a table 
//   const tableEle = document.createElement('table')

//   let tableRows = `<tr><th>Name</th><th>UserName</th></tr>`
//   for (let index = 0; index < users.length; index++) {
//     const userObj = users[index];

//     //destructing
//     const username = userObj.username
//     const name = userObj.name
//     tableRows += `<tr><th>${name}</th><th>${username}</th></tr > `
//   }
//   tableEle.append(tableRows)


//   //append table in dom
//   usersTableEle.append(tableEle)
// }


async function fetchJoke() {
  const responseObj = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    }
  })

  const data = await responseObj.json()
  console.log("🚀 ~ file: script.js ~ line 97 ~ fetchJoke ~ data", data)
  console.log(data)
}

fetchJoke()


function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
const member = new Person('Lydia', 'Hallie');
console.log(member)


console.log(member.getFullName());

function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';

bark: {
  animal = 'dog'
}