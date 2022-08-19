const mongoose = require('mongoose')

async function initDB() {
  try {
    console.log(process.env.MONGO_URL)
    await mongoose.connect(process.env.MONGO_URL, { dbName: 'UserDB' })
    console.log("Connected to DB Successfully")
  } catch (err) {
    console.log("Error connecting to DB")
  }
}

module.exports = {
  initDB
}