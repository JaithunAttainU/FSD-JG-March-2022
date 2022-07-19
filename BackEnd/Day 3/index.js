// Without Express also server can be created
// Express Framework - Templates
// Node - Runtime Env (Js Engine, DB, fs, http, os)

const express = require('express') //commonJS Modules //import express from 'express' -Es6
const mockData = require('../Day 3/mock/posts.js') //object
const app = express()

// app.methodname(pathname, funcToHandleReq)
app.get('/', (request, response) => {
  console.log("Get Call executed")
  response.send('Hello World!')
})


app.get('/posts', (req, res) => {
  console.log("GET - /posts")
  res.json(mockData.posts) //from DB
})

app.get('/posts', (req, res) => {
  console.log("fromm handler 2")
  res.end()
})


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