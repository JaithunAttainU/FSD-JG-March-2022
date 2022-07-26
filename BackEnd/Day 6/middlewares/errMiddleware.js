function errHandler(error, req, res, next) {
  console.log(error)
  //production apps - log errors for debugging purpose
  res.status(error.status).send(error)
}

module.exports = errHandler