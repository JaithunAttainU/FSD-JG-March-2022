import React, { useState, useEffect } from 'react'
import { getComments } from '../mock/comments'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import CommentReplies from './CommentReplies'

function Comments(props) {

  const { postId } = props
  const [comments, setComments] = useState([])

  const rootComments = comments?.filter(comment => {
    return comment.parentId ? false : true
  })

  useEffect(() => {
    setComments(getComments(postId))
  }, [postId])

  return (
    <div>
      <Comment.Group>
        {rootComments.map(comment => {
          return (
            <CommentReplies comment={comment} />
          )
        })}
      </Comment.Group>
    </div>
  )
}

export default Comments