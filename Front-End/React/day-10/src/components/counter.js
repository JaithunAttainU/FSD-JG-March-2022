import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAction, decrementAction } from '../actions/index'
function Counter() {

  //fetch data from store
  const countFromStore = useSelector((state) => {
    return state.count
  })

  const dispatch = useDispatch()

  const increment = () => {
    dispatch(incrementAction())
  }

  const decrement = () => {
    dispatch(decrementAction())
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <div>Count is {countFromStore}</div>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter