const { MongoClient } = require('mongodb')

const client = new MongoClient(process.env.MONGO_URL);
const dbName = 'TicketNew'

async function initDB(collectionName) {

  try {
    await client.connect()
    console.log('Connected successfully to server');

    const db = client.db(dbName) //dbName
    return db.collection(collectionName) //collectionName
  } catch (err) {
    console.log("Cannot connect to DB", err)
    process.exit(1)
  }

}

module.exports = {
  initDB: initDB
}

console.log("MongoUrl", process.env.MONGO_URL)