const express = require('express') //commonJS Modules //import express from 'express' -Es6
const multer = require('multer') //import lib
const Base64 = require('js-base64')

const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: ''
})

//fs module
const app = express()
const products = []
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public')) //{index:false}

const upload = multer({
  storage: multer.memoryStorage()
})
app.post('/products', upload.single('image'), function (req, res, next) {
  const productData = req.body
  const fileData = req.file

  if (fileData) {
    productData.image = fileData.filename

    //convert binary to string
    const base64String = Base64.encode(fileData.buffer)
    cloudinary.uploader.upload(`data:${fileData.mimetype};base64,${base64String}`,
      function (error, result) {
        productData.image = result.secure_url //https://res.cloudinary.com/attainu-jaithun/image/upload/v1647537492/b8dbg50fxdwol71gbbyy.jpg
        console.log(result.secure_url)
        console.log(result, error);
      });
    console.log(base64String)
  }

  products.push(productData)
  res.sendFile(`${__dirname}/public/AddProduct.html`)
})

app.get('/products', (req, res) => {
  res.send(products)
})

app.listen(8000, () => {
  console.log("Server Started Successfully at Port 8000")
})



