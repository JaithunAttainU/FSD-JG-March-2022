import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { getComments } from '../mock/comments'

function CommentReplies(props) {

  const { comment } = props

  const replyComments = getComments()?.filter(itr => {
    return itr.parentId === comment.id ? true : false
  })

  return (
    <div>
      <Comment>
        <Comment.Avatar src={'../../public/user-icon.png'} />
        <Comment.Content>
          <Comment.Author as='a'>{comment.username}</Comment.Author>
          <Comment.Metadata>
            <div>{comment.createdAt}</div>
          </Comment.Metadata>
          <Comment.Text>{comment.body}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        {replyComments.map(reply => {
          return <CommentReplies comment={reply} />
        })}
      </Comment>
    </div>
  )
}

export default CommentReplies