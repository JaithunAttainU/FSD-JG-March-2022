const MovieModel = require("../models/movies")
const ReviewModel = require("../models/reviews")
const mongoose = require('mongoose')
const addReview = async (req, res) => {

  const { comment } = req.body
  const { movieID } = req.params
  //1. // add new document in Review Model
  try {
    const review = await ReviewModel.create({ comment, movie_id: movieID })

    // Get the _id
    // push the _id in movie collection
    const movieDoc = await MovieModel.findByIdAndUpdate(movieID, {
      $push: {
        reviews: review._id
      }
    })
    console.log(review)
    res.send({ status: 'success' })
  } catch (err) {
    console.log(err)
    res.send({ status: 'error' })
  }
}

const getReviews = async (req, res) => {
  const { movieID } = req.params

  //1. // add new document in Review Model
  try {
    const reviews = await ReviewModel.find({ movie_id: movieID }).populate('movie_id', { name: 1 })
    res.send({ status: 'success', reviews })
  } catch (err) {
    console.log(err)
    res.send({ status: 'error' })
  }
}
module.exports = {
  addReview,
  getReviews
}