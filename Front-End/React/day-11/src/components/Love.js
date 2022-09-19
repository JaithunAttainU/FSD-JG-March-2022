import React from 'react'
import withReactions from './withReactions'
function Love(props) {
  const { increment, count } = props
  return (
    <div>
      <button onClick={increment}>Love</button>
      <div>{count}</div>
    </div>
  )
}

export default withReactions(Love)