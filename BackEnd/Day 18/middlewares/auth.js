const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  //verification of token
  const token = req.cookies.jwt

  if (token) {
    try {
      const userData = jwt.verify(token, process.env.AUTH_SECRET_KEY)
      console.log(userData)
      req.userData = userData//email, roles
      next()
    } catch (err) {
      console.log(err)
      res.status(401).send({ status: 'error', msg: 'Not Authenticated' })
    }
  } else {
    res.status(401).send({ status: 'error', msg: 'Not Authenticated' })
  }
}

module.exports = {
  authMiddleware
}