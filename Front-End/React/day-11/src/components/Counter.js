import React, { useState, useRef } from 'react'

function Counter() {

  const [dummy, setDummy] = useState("Hello")

  let count = 0 //{current: 0}
  console.log(count)
  console.log("Componenet Rerendered")
  return (
    <><div><button onClick={() => {
      // setCount(count + 1)
      count++;
      console.log(count)
    }}>Sign In!</button></div>

      <button onClick={() => {
        setDummy("Hi")
      }}>Change Dummy {dummy}</button>
    </>

  )
}

export default Counter