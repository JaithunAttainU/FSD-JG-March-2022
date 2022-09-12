import React from 'react'
import { useLocalStorage } from '../customHooks'

function SignUp() {

  const [newData, setNewData] = useLocalStorage('userName', '')
  return (
    <div>
      <input type="text" placeholder='Enter Email...' />
      <input type="password" placeholder='Enter Passwrd..' />
    </div>
  )
}

export default SignUp