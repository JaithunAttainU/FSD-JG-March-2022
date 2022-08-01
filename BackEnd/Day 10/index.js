const express = require('express')
const movies = require('./mock/movies.js')

const app = express()

//Application level middleware to accept json data
app.use(express.json())

//Application level middleware to accept form data
app.use(express.urlencoded())

//GET API
app.get('/movies', (req, res) => {
  // res.json(movies)
  res.send(movies)
})

//GET based on movieID - /movies/2
app.get('/movies/:movieID', (req, res) => {
  // console.log(req.p)
  // const { movieID } = req.params //to get dynamic param values {movieID, name, id} 
  //all dynamic values in endpoint will be present inside req.params
  const movieID = req.params.movieID
  const movie = movies.find((movie) => {
    return movie.id === movieID
  })

  if (movie) {
    res.send(movie)
  } else {
    res.status(404).json({ msg: 'No Movie Found' })
  }

})

//POST API - Add

//json 
//form-data
app.post('/movies', express.json(), (req, res) => {
  const movieData = req.body

  movies.push(movieData)

  res.send({ status: 'success' })
  console.log(movieData)
})

//PUT API - edit
app.put('/movies/:movieID', express.json(), (req, res) => {

})

//DELETE API
app.delete('/movies/:movieID', (req, res) => {

})

app.listen(8000, () => {
  console.log("Server Started Successfully")
})
