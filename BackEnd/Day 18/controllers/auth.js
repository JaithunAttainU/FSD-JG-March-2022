const UserModel = require('../models/user')
const jwt = require('jsonwebtoken')

const signUpController = async (req, res) => {
  const { userName, email, password } = req.body

  try {
    const newUser = await UserModel.create({ userName, email, password })
    res.send({ status: 'success', user: newUser })
  } catch (err) {
    res.status(500).send(err)
  }
}

const loginController = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await UserModel.findOne({ email, password }) //{isAdmin}

    if (!user) {
      res.status(401).send({ status: 'error', msg: 'User Not Found' })
    }
    //user is verfied

    const userPayload = { email, roles: user.roles }

    //token creation payload, secret key, optional - algo, expirationTime
    const token = jwt.sign(userPayload, process.env.AUTH_SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })
    res.cookie('jwt', token, { maxAge: 900000 })
    res.send({ status: 'success' })

  } catch (err) {
    res.status(401).send({ status: 'error', msg: err })
  }
}

const logoutController = (req, res) => {
  res.cookie('jwt', '', { maxAge: 3000 })
  res.send({ status: 'success', msg: 'Logged out successfully' })
}

module.exports = {
  loginController,
  logoutController,
  signUpController
}
