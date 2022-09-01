import React, { useState } from 'react'

function CartCounterFunc() {
  const [counter, setCounter] = useState(0) //initialization

  return (
    <div className='card w-25'>
      <img src='https://occ-0-1001-590.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxJFBDckfZw1YUEIPwyuIg43Kw_HUBLvnCcgdOlvvf5Nc90SF3HSAi5L8uLyBqjziKBY-kGD2wu2JAqVsdHVR0frb6qG26I_U5v.jpg?r=77f' />
      <div className='d-flex'>
        <button onClick={() => {
          setCounter(counter + 1)
        }}>+</button>
        {/* access state values */}
        <div id="count">Ordered: {counter}</div>
        <button onClick={() => {
          setCounter(counter - 1)
        }}>-</button>
      </div>
    </div>
  )
}

export default CartCounterFunc