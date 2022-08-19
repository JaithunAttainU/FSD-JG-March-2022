const express = require('express')
const authRouter = require('./routes/auth')
require('dotenv').config()
const { initDB } = require('./dbConfig')
const app = express()
initDB()
//middlewares
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Home Route")
})
//add auth routes
app.use('/', authRouter)

app.listen(8000, () => {
  console.log("Started Successfully")
})