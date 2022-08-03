const express = require('express')
const app = express()


app.get('/posts/:postID', (req, res) => {
  res.sendFile(`${__dirname}/public/post.html`)
})

app.get('/api/posts/:postID', (req, res) => {

  const postID = req.params.postID
  //json placeholder

  res.send({ postId: postID, title: 'fsr' })
})

app.listen(8000, () => {
  console.log("Started Successfully")
})