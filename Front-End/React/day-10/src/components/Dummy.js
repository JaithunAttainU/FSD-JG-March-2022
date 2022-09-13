import React from 'react'
import { useSelector } from 'react-redux'
function Dummy() {

  //fetch data from store
  const countFromStore = useSelector((state) => {
    return state.count
  })

  console.log("Dummy Rerender")
  return (
    <div>Dummy {countFromStore}</div>
  )
}

export default Dummy