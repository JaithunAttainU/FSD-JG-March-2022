const MovieModel = require("../models/movies")
const ReviewModel = require("../models/reviews")

const addReview = async (req, res) => {




  const { comment } = req.body
  const { movieID } = req.params
  //1. // add new document in Review Model
  try {
    const review = await ReviewModel.create(req.body)

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

module.exports = {
  addReview
}