const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  movie_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'movies'
  },
  // posted_by: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'users'
  // }
  // },
  // rating: {
  //   type: Number
  // }
  // postedBy: {

  // },
})

//collectionName, Schema
const ReviewModel = mongoose.model('reviews', reviewSchema)

module.exports = ReviewModel