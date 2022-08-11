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

let dummyName = "bvjhg"
const dummyName2 = 'defwer'

{
  let var1 = "dfse"
  const var2 = "dsvsfd"
}


//hoisting is moving the variables top

var b = 10;
function getName() {
  return 'abc'
}
const language = 'english'

//Pure function
var acc = 5;
function add(a, b) {
  return a + b
}

//Impure function
function addAcc(a, b) {
  return a + b + acc
}

addAcc(4, 5) //14

acc = 10;
addAcc(4, 5) //19
i) return same output for same input

//4,5 = 14
//2,3 = 5
//4,5 = 9
f(x) = g(x) + 1

function greaterThan(n) {
    return x => x > n;
  }
let greaterThanTwo = greaterThan(2);
console.log(greaterThanTwo(5));

//impure function
function add(a, b) {
  4
  console.log()
  fs.read()

  a = 3
  return a + b
}

var arr = [1, 5, 4, 3]
arr.sort()

//[1,3,4,5]

const arr2 = arr.map((item) => { name: 'dfe' })


//hoisting
//closure
//currying - recursive currying
//arrow functions vs normal
//constructor function /class
//Event loop
//promises - call back hell
//let and const (temporal dead zone)



class Person {
  constructor() {
    this.name = 'dfe'
  }
}