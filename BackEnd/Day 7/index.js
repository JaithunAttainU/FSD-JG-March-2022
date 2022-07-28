const express = require('express') //commonJS Modules //import express from 'express' -Es6
const multer = require('multer') //import lib

//fs module
const app = express()
const products = []
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//express-fileupload
//multer
//multiparty
app.use(express.static('public')) //{index:false}
// const upload = multer({ dest: 'files/' }) //configure dest

const storage = multer.diskStorage({
  destination: function (req, file, callBackfunc) {
    callBackfunc(null, 'public/files')
  },
  filename: function (req, file, callBackfunc) {
    const uniqueSuffix = Date.now()
    callBackfunc(null, uniqueSuffix + file.originalname)
  }
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10000000
  },
  fileFilter: function fileFilter(req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted

    if (file.mimetype === 'image/jpeg') {
      // To accept the file pass `true`, like so:
      cb(null, true)
    } else {
      // To reject this file pass `false`, like so:
      cb(null, false)
    }



    // You can always pass an error if something goes wrong:
    cb(new Error('I don\'t have a clue!'))

  }
})

// const uploadMultiFile = upload.array('image', 3)

const uploadSingleFile = upload.single('image')
const postFileHandler = function (req, res, next) {
  const productData = req.body
  uploadSingleFile(req, res, function (err) {
    if (err) {
      res.send({ status: 400, msg: 'File too big' })
    } else {

      const fileData = req.file
      if (fileData) {
        productData.image = fileData.filename
      }

      products.push(productData)
      res.sendFile(`${__dirname}/public/AddProduct.html`)
    }
  })
}

app.post('/products', postFileHandler)

app.get('/products', (req, res) => {
  res.send(products)
})

app.listen(8000, () => {
  console.log("Server Started Successfully at Port 8000")
})



