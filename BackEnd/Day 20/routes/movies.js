const express = require('express')
const { getMovies, getMoviesByID, postMovie, updateMovieById, deleteMovieByID } = require('../controllers/movies');
const movieRouter = express.Router()

movieRouter.get('/', getMovies);
movieRouter.get('/:movieID', getMoviesByID);
movieRouter.post('/', postMovie);
movieRouter.put('/:movieID', updateMovieById);
movieRouter.delete('/:movieID', deleteMovieByID);

module.exports = movieRouter