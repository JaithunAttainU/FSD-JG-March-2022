const express = require('express')
const app = express()
require('dotenv').config() //load all key-value pairs in .env file to proces.env object
const movieRouter = require('./routes/movies')
const { initDB } = require('./dbConfig')

//middlewares
app.use(express.json())

//connect to DB
initDB()

app.use('/movies', movieRouter)

app.listen(8000, () => {
  console.log("Started Successfully")
})
