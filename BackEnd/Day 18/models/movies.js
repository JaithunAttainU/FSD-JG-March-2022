const mongoose = require('mongoose')


const moviesSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    // lowercase: true,
    maxLength: 50
  },
  releaseDate: {
    type: Date,
    default: Date.now()
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  language: String,
  cast: [String],
  is3D: Boolean,
  reviews: [String]
})

//collectionName, Schema
const MovieModel = mongoose.model('Movies', moviesSchema)

module.exports = MovieModel