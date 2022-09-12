import React, { useState } from 'react'

function Login() {

  const [email, setEmail] = useState(() => {
    const email = window.localStorage.getItem('email')
    return email || ''
  })

  const [password, setPassword] = useState(() => {
    const pass = window.localStorage.getItem('pass')
    return pass || ''
  })

  return (
    <div>
      <input value={email} type="text" placeholder='Enter Email...' onChange={(event) => {
        setEmail(event.target.value)
        window.localStorage.setItem('email', event.target.value)
      }
      } />
      <input value={password} type="password" placeholder='Enter Passwrd..' onChange={(event) => {
        setPassword(event.target.value)
        window.localStorage.setItem('pass', event.target.value)
      }
      } />
    </div>
  )
}

export default Login