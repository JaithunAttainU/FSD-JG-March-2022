const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
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