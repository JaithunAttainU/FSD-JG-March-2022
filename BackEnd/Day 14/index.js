const express = require('express')


const movieRouter = require('./routes/movies.js')
const usersRouter = require('./routes/users.js')

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