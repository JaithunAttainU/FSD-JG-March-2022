import './App.css';
import React, { useState } from 'react'
import Login from './components/Login';
import Message from './components/Message';
function App() {
  const [data, setData] = useState(0)
  return (
    <>
      <div className='container'>
        <Login data={data} />
        <Message />
      </div>
    </>
  )
}

export default App;
