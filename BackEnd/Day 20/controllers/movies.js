const MovieModel = require('../models/movies')

const getMovies = async (req, res) => {

  const { language, title, rating, size } = req.query
  try {
    // const movies = await MovieModel.find({});

    const movies = await MovieModel.aggregate([{
      $match: {
        year: 2015,
        "imdb.rating": {
          $gt: 8.0
        }
      }
    }, //20
    {
      $lookup: {
        from: 'comments', //collection name
        localField: "_id",
        foreignField: "movie_id",
        as: "comments"
      }
    },
    {
      $project: {
        title: 1,
        cast: true,
        year: 1,
        "imdb.votes": 1,
        "imdb.rating": 1,
        "comments.text": 1
      }
    },
    {
      $limit: 5
    },
    {
      $sort: {
        title: -1
      }
    },
    {
      $unwind: "$cast" //destructing an array
    }
    ])
    res.send({ status: 'success', movies })
  } catch (err) {
    console.log(err)
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