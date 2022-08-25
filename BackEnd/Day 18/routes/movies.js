const express = require('express')
const { getMovies, getMoviesByID, postMovie, updateMovieById, deleteMovieByID } = require('../controllers/movies');
const { authMiddleware } = require('../middlewares/auth');
const authRouter = require('./auth');
const movieRouter = express.Router()

const path = require('path')

// movieRouter.use(authMiddleware)

movieRouter.get('/showMovies', (req, res) => {
  const indexPath = path.join(__dirname, '../')
  console.log(__dirname, __filename)
  res.sendFile(`${indexPath}public/index.html`)
})
movieRouter.get('/', getMovies);
movieRouter.get('/:movieID', getMoviesByID);
movieRouter.post('/', postMovie);
movieRouter.put('/:movieID', updateMovieById);
movieRouter.delete('/:movieID', deleteMovieByID);

module.exports = movieRouter