const fetchRes = fetch('https://jsonplaceholder.typicode.com/users').then((res) => {

  res.json().then((res) => {
    console.log(res)
  }).catch(()=> {
    
  })
}, () => {

})
console.log(fetchRes)



async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  const data = await response.json()

  console.log(data)
}

getData()