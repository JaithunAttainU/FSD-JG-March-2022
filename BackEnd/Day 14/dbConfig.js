const { MongoClient } = require('mongodb')
const mongoDBURL = 'mongoURL' //copy url from atlas and replace

const client = new MongoClient(mongoDBURL);
const dbName = 'TicketNew'

let collection = null

async function initDB() {
  await client.connect()
  console.log('Connected successfully to server');

  const db = client.db(dbName) //dbName
  return db.collection('Movies') //collectionName
}

async function getCollection() {
  let collection = initDB()
  return collection
}

module.exports = {
  initDB: initDB,
  getCollection
}