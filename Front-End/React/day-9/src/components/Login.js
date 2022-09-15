import React, { useEffect, useState } from 'react'
import { useLocalStorage } from '../customHooks'

function Login() {

  const [email, setEmail] = useLocalStorage('email', '')
  const [password, setPassword] = useLocalStorage('pass', '')


  return (
    <div>
      <input value={email} type="text" placeholder='Enter Email...' onChange={(event) => {
        setEmail(event.target.value)
      }
      } />
      <input value={password} type="password" placeholder='Enter Passwrd..' onChange={(event) => {
        setPassword(event.target.value)
      }
      } />
    </div>
  )
}

export default Login