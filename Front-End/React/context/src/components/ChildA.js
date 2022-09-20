import React from 'react'
import ChildB from './ChildB'

function ChildA() {
  // const { userName, isLoggedIn } = props
  return (
    <div className='childA'>ChildA
      <ChildB />
    </div>
  )
}

export default ChildA