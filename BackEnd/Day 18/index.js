const express = require('express')
const authRouter = require('./routes/auth')
require('dotenv').config()
const { initDB } = require('./dbConfig')
const cookieParser = require('cookie-parser')
const movieRouter = require('./routes/movies')
const app = express()
initDB()

//middlewares
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send("Home Route")
})

//add auth routes
app.use('/', authRouter)

//movie routes
app.use('/movies', movieRouter)
app.listen(8000, () => {
  console.log("Started Successfully")
})

