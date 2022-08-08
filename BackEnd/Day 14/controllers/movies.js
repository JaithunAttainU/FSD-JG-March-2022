const { getCollection } = require('../dbConfig')

const collection = getCollection()
const getMovies = async (req, res) => {

  const { language, name } = req.query //english

  const movies = await collection.find().toArray()
  console.log(movies)
  // let filteredMovies = movies

  // if (language) {
  //   filteredMovies = filteredMovies.filter(movie => {
  //     if (movie.language === language) {
  //       return true
  //     } else {
  //       return false
  //     }
  //     // return movie.language === language
  //   })
  // }

  // if (name) {
  //   filteredMovies = filteredMovies.filter(movie => {
  //     return movie.name === name
  //   })
  // }

  // res.send(filteredMovies)
  res.send({ status: 'success' })
}

const getMoviesByID = (req, res) => {
  const { movieID } = req.params

  // const movie = movies.find((movie) => {
  //   return movie.id === movieID
  // })

  // if (movie) {
  //   res.send(movie)
  // } else {
  //   res.status(404).send({ msg: 'No Movie found' })
  // }

  res.send({ status: 'success' })
}

const postMovie = (req, res) => {
  const movieData = req.body
  // movies.push(movieData)
  res.status(201).send({ status: 'success' })
}

const updateMovieById = (req, res) => {

  const { movieID } = req.params
  const updatedMovieData = req.body //{language, name, id}

  // movies = movies.map(movie => {
  //   if (movie.id === movieID) {
  //     const { name, language } = updatedMovieData

  //     if (name) {
  //       movie.name = name
  //     }

  //     if (language) {
  //       movie.language = language
  //     }
  //   }
  //   return movie
  // })

  res.send({ status: 'Updated Successfully' })
}

const deleteMovieByID = (req, res) => {
  const { movieID } = req.params

  // movies = movies.filter(movie => {
  //   return movie.id !== movieID
  // })

  res.send({ status: 'Deleted Successfully' })
}

module.exports = {
  getMovies,
  getMoviesByID,
  postMovie,
  updateMovieById,
  deleteMovieByID
}