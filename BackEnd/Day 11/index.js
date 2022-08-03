const express = require('express')
const multer = require('multer')

// const cloudinary = require('cloudinary').v2
const base64 = require('js-base64')

let movies = require('./mock/movies.js')
const app = express()

const upload = multer({ storage: multer.memoryStorage() })
// cloudinary.config({
//   cloud_name: 'attainu-jaithun',
//   api_key: '155771143626964',
//   api_secret: 'bKvrk1ek4aQTPUO2Kqt8tIk7-q4'
// })


app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

//multipart/form-data(multer, express-fileupload)

//add a middleware to serve all clinet/static files
app.use(express.static('public'))

app.get('/movies', (req, res) => {

  const { language, name } = req.query //english

  let filteredMovies = movies

  if (language) {
    filteredMovies = filteredMovies.filter(movie => {
      if (movie.language === language) {
        return true
      } else {
        return false
      }
      // return movie.language === language
    })
  }

  if (name) {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.name === name
    })
  }

  res.send(filteredMovies)
})

app.get('/movies/:movieID', (req, res) => {
  const { movieID } = req.params

  const movie = movies.find((movie) => {
    return movie.id === movieID
  })

  if (movie) {
    res.send(movie)
  } else {
    res.status(404).send({ msg: 'No Movie found' })
  }
})

app.post('/movies', (req, res) => {
  const movieData = req.body
  console.log(movieData)
  const fileData = req.file

  // if (fileData) {
  //   //convert buffer to base64
  //   const base64FileData = base64.encode(fileData.buffer)
  //   console.log(fileData)
  //   cloudinary.uploader.upload(`data:${fileData.mimetype};base64,${base64FileData}`, function (error, response) {
  //     if (error) {
  //       res.status(500).send({ status: 'Error Occured in uploading file' })
  //     }
  //     movieData.imageUrl = response.secure_url //{id, name, language, imageUrl}
  //     movies.push(movieData)
  //     res.status(201).send({ status: 'success' })
  //   })
  // }
  movies.push(movieData)
  res.status(201).send({ status: 'success' })

})

app.put('/movies/:movieID', upload.single('movieImage'), (req, res) => {

  const { movieID } = req.params
  const updatedMovieData = req.body //{language, name, id}

  movies = movies.map(movie => {
    if (movie.id === movieID) {
      const { name, language } = updatedMovieData

      if (name) {
        movie.name = name
      }

      if (language) {
        movie.language = language
      }
    }
    return movie
  })

  res.send({ status: 'Updated Successfully' })
})

app.delete('/movies/:movieID', (req, res) => {
  const { movieID } = req.params

  movies = movies.filter(movie => {

    // if (movie.id === movieID) {
    //   return false
    // } else {
    //   return true
    // }
    return movie.id !== movieID
  })

  res.send({ status: 'Deleted Successfully' })
})

app.listen(8000, () => {
  console.log("Started Successfully")
})