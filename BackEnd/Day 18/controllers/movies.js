const MovieModel = require('../models/movies')

const getMovies = async (req, res) => {

  try {
    const movies = await MovieModel.find();
    res.send({ status: 'success', movies })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'error fetching movies' })
  }
}


const getMoviesByID = async (req, res) => {
  const { movieID } = req.params

  const movie = await MovieModel.findById(movieID)
  if (movie) {
    res.send(movie)
  } else {
    res.status(404).send({ status: 'error', msg: 'Not found' })
  }
}


const postMovie = async (req, res) => {
  const movieData = req.body
  try {
    const result = await MovieModel.create(movieData)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }

}


const updateMovieById = async (req, res) => {

  const { movieID } = req.params
  const updatedMovieData = req.body //{language, name, id}

  try {
    const updatedResult = await MovieModel.findByIdAndUpdate(movieID, updatedMovieData, { new: true, runValidators: true })
    res.send(updatedResult)
  } catch (err) {
    res.status(500).send(err)
  }
}


const deleteMovieByID = async (req, res) => {
  const { movieID } = req.params

  const deletedData = await MovieModel.findByIdAndDelete(movieID)
  res.send(deletedData)
}


module.exports = {
  getMovies,
  getMoviesByID,
  postMovie,
  updateMovieById,
  deleteMovieByID
}