import React from 'react'
import withReactions from './withReactions'

function Laugh(props) {

  const { increment, count } = props
  return (
    <div>
      <button onClick={increment}>Laugh</button>
      <div>{count}</div>
    </div>
  )
}

export default withReactions(Laugh)