// const fetchResponse = window.fetch('https://v2.jokeapi.dev/joke/Ay')
// console.log(fetchResponse)

// //will be triggered when promise moves from pending to fulfilled/rejected
// const jsonResponse = fetchResponse.then((responseObj) => {
//   console.log(responseObj)
//   return responseObj.json() //default method which returns promise used to convert readablestream to actual data
// })
// console.log(jsonResponse)
// //actual data
// jsonResponse.then((result) => {
//   console.log(result)
// })


// chaining
// fetch('https://v2.jokeapi.dev/joke/Any').then(responseObj => responseObj.json()).then(res => console.log(res))






const getJokeBtn = document.querySelector('#getJokeBtn')
const jokeDisplayTag = document.querySelector('#joke')

getJokeBtn.addEventListener('click', (event) => {
  fetch('https://v2.jokeapi.dev/joke/Any').then(responseObj => responseObj.json()).then(res => { //handle fulfill state
    console.log(res)
    if (res.error) {
      jokeDisplayTag.innerText = 'Error in fetching Joke'
      return
    }

    if (res.type === 'single') {
      jokeDisplayTag.innerText = res.joke
    } else {
      jokeDisplayTag.innerText = `${res.setup} - ${res.delivery}`
    }

    // console.log(res.firstDummy.random)
  }, (rejResponse) => { //handle rejected state
    console.log("Promise Rejected", rejResponse)
    jokeDisplayTag.innerText = 'Error in fetching Joke'
    console.log(res.firstDummy.random)
  }).catch((err) => {
    console.log("error occured")
  })
})



// //Async Await
// getJokeBtn.addEventListener('click', async () => {
//   const response = await fetch('https://v2.jokeapi.dev/joke/Any')
//   const res = await response.json()
//   if (res.error) {
//     jokeDisplayTag.innerText = 'Error in fetching Joke'
//     return
//   }

//   if (res.type === 'single') {
//     jokeDisplayTag.innerText = res.joke
//   } else {
//     jokeDisplayTag.innerText = `${res.setup} - ${res.delivery}`
//   }
// })