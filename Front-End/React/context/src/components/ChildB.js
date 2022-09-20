import React from 'react'
import ChildC from './ChildC'

function ChildB() {
  return (
    <div className='childB'>ChildB
      <ChildC />
    </div>
  )
}

export default ChildB