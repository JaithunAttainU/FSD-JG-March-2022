import React, { useState } from 'react'

function CartCounterFunc(props) {
  const [counter, setCounter] = useState(0) //initialization

  const { imageUrl } = props

  console.log(props)
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div className='card w-25 m-2'>
      <img src={imageUrl} alt="cartImage" />
      <div className='d-flex'>
        <button onClick={increment}>+</button>
        {/* access state values */}
        <div id="count">Ordered: {counter}</div>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default CartCounterFunc