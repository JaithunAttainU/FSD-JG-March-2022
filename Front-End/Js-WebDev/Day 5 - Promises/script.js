const btnEle = document.querySelector('#getJokeBtn')
const jokeDisplayEle = document.querySelector('#joke')

btnEle.addEventListener('click', (event) => {
  const fetchPromise = fetch('https://v2.jokeapi.dev/joke/Any')

  const responsePromiseObj = fetchPromise.then((response) => { //handling fulfilled state
    console.log(response)

    return response.json() //convert stream to actual json data
  })
  responsePromiseObj.then(fulfilledFunc, rejectedFunc).catch((err) => {
    console.log("error")
  })
})

const fulfilledFunc = (result) => { //fulfilled

  if (result.error) {
    jokeDisplayEle.innerText = 'Error Occured'
    return
  }

  if (result.type === 'single') {
    jokeDisplayEle.innerText = result.joke
    return
  }
  if (result.type === 'twopart') {
    jokeDisplayEle.innerText = `${result.setup} - ${result.delivery}`
  }

  const dummy = result.esfaerf.dfearfg
}

const rejectedFunc = (error) => {
  console.log("Error Occured", error)
  jokeDisplayEle.innerText = 'Error Occured'
}


//async - await
let result;
btnEle.addEventListener('click', async (event) => {

  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any') //only works with async
    result = await response.json()

    if (result.error) {
      jokeDisplayEle.innerText = 'Error Occured'
      return
    }

    if (result.type === 'single') {
      jokeDisplayEle.innerText = result.joke
      return
    }
    if (result.type === 'twopart') {
      jokeDisplayEle.innerText = `${result.setup} - ${result.delivery}`
    }
  } catch (err) { //hanlde errors
    console.log(err)
    jokeDisplayEle.innerText = 'Error Occured'
  }
})


async function add() {

}