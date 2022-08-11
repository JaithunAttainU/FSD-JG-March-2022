const express = require('express')
require('dotenv').config()

const movieRouter = require('./routes/movies.js')
const usersRouter = require('./routes/users.js')

console.log(process.env)
const app = express()
app.use(express.json())
// '/users'
// '/tickets'
// '/theatres'

app.use('/movies', movieRouter)
app.use('/users', usersRouter)

app.listen(8000, () => {
  console.log("Started Successfully")
})



var b = 10;
function getName() {
  return 'abc'
}
const language = 'english'