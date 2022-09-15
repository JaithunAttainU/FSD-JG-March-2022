import './App.css';
import React, { useState } from 'react'
import { getPosts } from './mock/posts';
import Post from './components/Post';
import 'semantic-ui-css/semantic.min.css'

function App() {

  const [posts, setPosts] = useState(() => {
    return getPosts() || []
  })

  return (
    <>
      <div className='container'>
        {posts.map(post => {
          return <Post postId={post.postId} title={post.title} body={post.body} />
        })}
      </div>
    </>
  )
}

export default App;
