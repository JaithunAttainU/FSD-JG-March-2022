const express = require('express')
const { getMovies, getMoviesByID, postMovie, updateMovieById, deleteMovieByID } = require('../controllers/movies')

const usersRouter = express.Router()

usersRouter.get('/', getMovies)
usersRouter.get('/:userID', getMoviesByID)
usersRouter.post('/', postMovie)
usersRouter.put('/:userID', updateMovieById)
usersRouter.delete('/:userID', deleteMovieByID)


module.exports = usersRouter