const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

const UserModel = mongoose.model('Users', userSchema)
module.exports = UserModel