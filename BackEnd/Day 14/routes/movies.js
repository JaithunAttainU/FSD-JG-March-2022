const express = require('express')
const { getMovies, getMoviesByID, postMovie, updateMovieById, deleteMovieByID } = require('../controllers/movies')

const moviesRouter = express.Router()

moviesRouter.get('/', getMovies)
moviesRouter.get('/:movieID', getMoviesByID)
moviesRouter.post('/', postMovie)
moviesRouter.put('/:movieID', updateMovieById)
moviesRouter.delete('/:movieID', deleteMovieByID)


module.exports = moviesRouter