const express = require('express') //commonJS Modules //import express from 'express' -Es6
const mockData = require('./mock/posts.js') //object
var morgan = require('morgan')
const app = express()

//add middlewares
app.use(express.json()) //accept json form of data

app.use(express.urlencoded({ extended: true }))

//default middleware
app.use(express.static('public')) //expose all files inside public to the client
// app.use(logger)
app.use(morgan())
app.use(auth)
// app.methodname(pathname, funcToHandleReq)
// app.get('/', (request, response) => {
//   console.log("Get Call executed")
//   // console.log(__dirname, "directoryName")
//   // console.log(__filename, "filename")
//   response.sendFile(`${__dirname}/files/index.html`)
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

app.get('/posts/:postID', (req, res) => { //route ;level
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
  //authenticate
  //logging
  //validate
  //add the data 
  const postData = req.body

  console.log(postData, "New Posts")
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

app.put('/posts/:postID', (req, res) => {
  const pathParams = req.params
  const { postID } = pathParams

  const newPostData = req.body
  const { title, body, userId } = newPostData

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

function logger(req, res, next) {
  console.log("Date &  Time:", new Date())
  console.log("Url", req.url)
  next()
}

function auth(req, res, next) {
  let isValid = true; //hard coding values

  // if (req.userName == userName && req.password === password) {
  //   isValid = true
  // } els e{
  //   isValid = false
  // }

  console.log("Auth Middleware")
  if (isValid) {
    next()
  } else {
    res.status(401).send({ status: 'Not Authenticated' })
  }

}

app.listen(8000, () => {
  console.log("Server Started Successfully at Port 8000")
})

//How to accept form data from client
