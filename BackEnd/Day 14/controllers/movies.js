const { initDB } = require('../dbConfig')
const { ObjectId } = require('mongodb')
let movieCollection;

//IIFE
(async function () {
  movieCollection = await initDB('Movies')
})();


// async function getMovieCollection() {
//   movieCollection = await initDB()
// }
// getMovieCollection()


const getMovies = async (req, res) => {

  const { language, name } = req.query //english

  const movies = await movieCollection.find().toArray()
  console.log(movies)
  res.send({ status: 'success', movies: movies })
}

const getMoviesByID = async (req, res) => {
  const { movieID } = req.params

  const movie = await movieCollection.findOne({ _id: new ObjectId(movieID) })
  res.send({ status: 'success', movie: movie })
}

const postMovie = async (req, res) => {
  const movieData = req.body

  //validation
  try {
    const response = await movieCollection.insertOne(movieData)
    console.log(response)
    if (response.acknowledged) {
      res.status(201).send({ status: 'success' })
    } else {
      res.status(500).send({ status: 'error', msg: 'Internal Error' })
    }
  } catch (err) {
    //log in a file for debug err
    res.status(500).send({ status: 'error', msg: 'Internal Error' })
  }

}

const updateMovieById = async (req, res) => {

  const { movieID } = req.params
  const updatedMovieData = req.body //{language, name, id}
  try {
    await movieCollection.updateOne({ _id: new ObjectId(movieID) }, { $set: updatedMovieData })
    res.send({ status: 'Updated Successfully' })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'Cannot Update Movie' })
  }

}

const deleteMovieByID = async (req, res) => {
  const { movieID } = req.params
  try {
    await movieCollection.deleteOne({ _id: new ObjectId(movieID) })
    res.send({ status: 'Deleted Successfully' })
  } catch (err) {
    res.status(500).send({ status: 'Cannot delete movie due to internal error' })
  }
}

module.exports = {
  getMovies,
  getMoviesByID,
  postMovie,
  updateMovieById,
  deleteMovieByID
}