const submitButtonId = document.getElementById('submitBtn')
const idEle = document.getElementById('id')
const nameEle = document.getElementById('name')
const languageEle = document.getElementById('language')

submitButtonId.addEventListener('click', async function () {
  const movieId = idEle.value
  const movieName = nameEle.value
  const language = languageEle.value
  const response = await fetch('/movies', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      id: movieId,
      name: movieName,
      language: language
    }
  })

  const data = await response.json()
  console.log(data)
})