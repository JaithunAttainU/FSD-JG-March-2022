const express = require('express')
const { getMovies, getMoviesByID, postMovie, updateMovieById, deleteMovieByID } = require('../controllers/movies');
const { authMiddleware } = require('../middlewares/auth');
const authRouter = require('./auth');
const movieRouter = express.Router()

movieRouter.use(authMiddleware)

movieRouter.get('/', getMovies);
movieRouter.get('/:movieID', getMoviesByID);
movieRouter.post('/', postMovie);
movieRouter.put('/:movieID', updateMovieById);
movieRouter.delete('/:movieID', deleteMovieByID);

module.exports = movieRouter