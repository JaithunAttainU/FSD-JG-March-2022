const express = require('express') //commonJS Modules //import express from 'express' -Es6
const mockData = require('./mock/posts.js') //object
const app = express()

//add middlewares
app.use(express.json()) //accept json form of data

//default middleware
app.use(express.static('public')) //expose all files inside public to the client

// app.methodname(pathname, funcToHandleReq)
// app.get('/', (request, response) => {
//   console.log("Get Call executed")
//   // console.log(__dirname, "directoryName")
//   // console.log(__filename, "filename")
//   response.sendFile(`${__dirname}/files/index.html`)
// })


// app.get('/script.js', (req, res) => {
//   res.sendFile(`${__dirname}/files/script.js`)
// })

//GET Operations
app.get('/posts', (req, res) => {

  const queryParams = req.query
  const { userID, title } = queryParams

  let filteredPosts = mockData.posts
  if (userID) {
    filteredPosts = filteredPosts.filter((post) => {
      return post.userId === Number(userID) ? true : false
    })
  }

  if (title) {
    filteredPosts = filteredPosts.filter((post) => {
      return post.title === title ? true : false
    })
  }
  res.json(filteredPosts) //from DB
})

app.get('/posts/:postID', (req, res) => {
  //return posts with ID - postID
  const paramObj = req.params
  const { postID } = paramObj //{postID: '1'} - destructuring
  const post = mockData.posts.find((post) => {
    return post.id === Number(postID) ? true : false
  })

  if (post) {
    res.json(post)
  } else {
    res.status(404).json({ status: 'No Data Found' }) //send response along with different status code
  }
})

//add posts
app.post('/posts', (req, res) => {
  const postData = req.body
  mockData.posts.push(postData)
  res.status(201).send(postData)
})

app.delete('/posts/:postID', (req, res) => {
  const pathParams = req.params
  const { postID } = pathParams

  mockData.posts = mockData.posts.filter(post => {
    return post.id === Number(postID) ? false : true
  })

  res.status(200).json({ status: 'Deleted Successfully' })
})

// error: {
//   msg: 'Invalid Input',
//   location: 'postData.userID',
//   cause: 'Please give integer value instead of string'
// }

app.put('/posts/:postID', (req, res) => {
  const pathParams = req.params
  const { postID } = pathParams

  const newPostData = req.body
  const { title, body, userId } = newPostData

  //validate - express-validator
  mockData.posts = mockData.posts.map(post => {
    if (post.id === Number(postID)) {

      if (title) {
        post.title = title
      }
      if (body) {
        post.body = body
      }
    }
    return post
  })

  res.status(200).send(newPostData)
})

// app.get('/category/:subCategory1/:subCategory2', (req, res) => {
//   //return posts with ID - postID
//   const paramObj = req.params
//   console.log(paramObj)
//   res.end()
// })

app.listen(8000, () => {
  console.log("Server Started Successfully at Port 8000")
})

//delete & put

//how to serve static files from express server
//How to accept form data from client