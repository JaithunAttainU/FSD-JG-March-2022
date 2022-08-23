const express = require('express')
const { getMovies, getMoviesByID, postMovie, updateMovieById, deleteMovieByID } = require('../controllers/movies');
const { addReview, getReviews } = require('../controllers/reviews');
const movieRouter = express.Router()

movieRouter.get('/', getMovies);
movieRouter.get('/:movieID', getMoviesByID);
movieRouter.post('/', postMovie);
movieRouter.put('/:movieID', updateMovieById);
movieRouter.delete('/:movieID', deleteMovieByID);

movieRouter.post('/:movieID/reviews', addReview);
movieRouter.get('/:movieID/reviews', getReviews)
module.exports = movieRouter