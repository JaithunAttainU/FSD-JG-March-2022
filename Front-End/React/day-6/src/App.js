import './App.css';
import React, { useState } from 'react'
import UsersList from './components/UsersList';

function App() {

  const [showUser, setShowUser] = useState(false)

  return (
    <div className='d-grid m-4'>
      <button className='btn btn-primary' onClick={() => {
        setShowUser(!showUser)
      }}>Show Users</button>


      {showUser ? <UsersList /> : null}
    </div>
  );
}

export default App;
