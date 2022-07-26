const express = require('express') //commonJS Modules //import express from 'express' -Es6
const multer = require('multer') //import lib

//fs module

const app = express()

const upload = multer({ dest: 'files/' }) //configure dest

const products = []
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//express-fileupload
//multer
//multiparty
app.use(express.static('public')) //{index:false}

app.post('/products', upload.single('image'), (req, res) => { //add middleware

  const fileData = req.file
  console.log("FileData", fileData)

  const productData = req.body
  products.push(productData)
  console.log(productData, "Hello")
  res.send("OK")
})

app.get('/products', (req, res) => {
  res.send(products)
})

app.listen(8000, () => {
  console.log("Server Started Successfully at Port 8000")
})

//How to accept form data from client
