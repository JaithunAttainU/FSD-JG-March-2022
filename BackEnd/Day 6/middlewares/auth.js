

function auth(req, res, next) {
  let isValid = true; //hard coding values

  // if (req.userName == userName && req.password === password) {
  //   isValid = true
  // } els e{
  //   isValid = false
  // }

  console.log("Auth Middleware")
  if (isValid) {
    next()
  } else {
    res.status(401).send({ status: 'Not Authenticated' })
  }

}

module.exports = auth