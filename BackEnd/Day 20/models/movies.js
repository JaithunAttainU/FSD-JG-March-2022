const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
  "title": String,
  "year": Number,
  "runtime": Number,
  "released": Date,
  "poster": String,
  "plot": String,
  "fullplot": String,
  "lastupdated": String,
  "type": String,
  "directors": [String],
  "imdb": {
    "rating": Number,
    "votes": Number,
    "id": Number,
  },
  "cast": [String],
  "countries": [String],
  "genres": [String],
  "tomatoes": {
    "viewer": {
      "rating": Number,
      "numReviews": Number
    },
    "lastUpdated": Date
  },
  "num_mflix_comments": Number
})

//collectionName, Schema
const MovieModel = mongoose.model('movies', moviesSchema)

module.exports = MovieModel