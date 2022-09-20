import React, { createContext, useState } from 'react'
import ChildA from './ChildA'
import '../App.css'
import { UserContext } from './context'
// export const UserContext = createContext() //1

function App() {

  const [userName, setUserName] = useState('Nilesh')
  const [isLoggedIn, setisLoggedIn] = useState(false)

  const contextObj = {
    userName, isLoggedIn
  }

  return (
    <div className='app container d-flex'>
      App
      {/* //2 - 3 */}
      <div>

      </div>
      <UserContext.Provider value={contextObj}>
        <ChildA />
      </UserContext.Provider>
    </div>
  )
}

export default App 