import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import Comments from './Comments'
function Post(props) {

  const { postId, title, body } = props
  return (
    <Container>
      <Header as='h1'>{title}</Header>
      <p>{body}</p>
      <Comments postId={postId} />
    </Container>

  )
}

export default Post