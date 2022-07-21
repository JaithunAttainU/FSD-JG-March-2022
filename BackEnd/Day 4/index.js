// Without Express also server can be created
// Express Framework - Templates
// Node - Runtime Env (Js Engine, DB, fs, http, os)

const express = require('express') //commonJS Modules //import express from 'express' -Es6
const mockData = require('../Day 3/mock/posts.js') //object
const app = express()

//add middlewares
app.use(express.json()) //accept json form of data

// app.methodname(pathname, funcToHandleReq)
app.get('/', (request, response) => {
  console.log("Get Call executed")
  response.sendFile('/Users/jmahirakz/FSD-JG-March-2022/BackEnd/Day 3/index.html')
})

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

//port numbers to be explained on Mon

// https://university.attainu.com/session

// http / https - protocol
// university.attainu.com - domain names
//   / session - path
//   ? ie = UTF8 & node=5257472031 = query params
// https://www.amazon.in/b?ie=UTF8&node=5257472031&pf_rd_r=6RKGBV11PSCNPQA05K0K&pf_rd_p=9ff36f11-82d6-4600-a8fb-e52bb32e171c&pd_rd_r=992d4936-f19b-4189-bf41-54d4c36bdd99&pd_rd_w=hkBbf&pd_rd_wg=oFXBE&ref_=pd_gw_unk


// const http = require('http')

// const server = http.createServer(function (request, response) {
//   const url = request.url
//   if (url == '/') {
//     response.write("Hello")
//     response.end()
//   }
//   console.log("Url", url)
// })

// server.listen(8080)