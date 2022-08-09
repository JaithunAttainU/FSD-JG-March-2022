const { MongoClient } = require('mongodb')
const mongoDBURL = 'url'

const client = new MongoClient(mongoDBURL);
const dbName = 'TicketNew'

let collection = null

async function initDB(collectionName) {
  await client.connect()
  console.log('Connected successfully to server');

  const db = client.db(dbName) //dbName
  return db.collection(collectionName) //collectionName
}

module.exports = {
  initDB: initDB
}