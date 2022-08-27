const mongoose = require('mongoose')

async function initDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: 'TicketNew' })
    console.log("Connected to DB Successfully")
  } catch (err) {
    console.log("Error connecting to DB")
  }
}

module.exports = {
  initDB
}


var name = 'dfsefg'
name = 5

name = [resgeg, erfegs]


int num = 5
num = 'sdfsg'

String name = 'dferd'
name = 5
