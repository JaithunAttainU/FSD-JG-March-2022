function btnClickHandler() {
  console.log("Button Clicked")
}

function paraMouseEnter() {
  console.log("Mouse Enter Para")
}

function paraMouseLeave() {
  console.log("Mouse Leave Para")
}

const loginBtnEle = document.getElementById('loginBtn')
console.log(loginBtnEle)

// (eventName, handler/function)
loginBtnEle.addEventListener('click', function () {
  console.log("Login Click")
})

loginBtnEle.addEventListener('click', btnClickHandler)
const btnElements = document.getElementsByClassName('btn')
console.log(btnElements)

const btnElementsByTag = document.getElementsByTagName('button')
console.log(btnElementsByTag)


console.log("querySelector", document.querySelector('#loginBtn'))