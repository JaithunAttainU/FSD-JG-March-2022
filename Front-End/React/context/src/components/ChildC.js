import React, { useContext } from 'react'
import { UserContext } from './context'

function ChildC() {

  const contextData = useContext(UserContext)
  console.log(contextData)
  return (
    <div className='childC'>ChildC
      {/* <UserContext.Consumer>
        {(value) => {
          const { userName, isLoggedIn } = value
          return (
            <>
              <div>The username is {userName}</div>
              <div> LoggedIn Status: {`${isLoggedIn}`}</div>
            </>
          )
        }}
      </UserContext.Consumer> */}


      {/* Get data frommuseContext Hook */}
      <div>The username is {contextData.userName}</div>
      <div> LoggedIn Status: {`${contextData.isLoggedIn}`}</div>
    </div>
  )
}

export default ChildC