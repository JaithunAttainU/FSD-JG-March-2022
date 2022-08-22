const express = require('express')
const { signUpController, loginController, logoutController } = require('../controllers/auth')

const authRouter = express.Router()

// authRouter.get('/signup',) //html to signup

authRouter.post('/signup', signUpController)
authRouter.post('/login', loginController)
authRouter.post('/logout', logoutController)

authRouter.get('/products', (req, res) => {
  if (req.userData.isAdmin) {
    res.sendFile()
  } else {
    res.send({})
  }

})
module.exports = authRouter