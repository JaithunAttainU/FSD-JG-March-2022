import './App.css';
import React, { useState } from 'react'
import UsersList from './components/UsersList';
import UsersListFunc from './components/UsersListFunc';

function App() {

  const [showUser, setShowUser] = useState(false)

  const updateShowUser = () => {
    // showUser ? setShowUser(false) : setShowUser(true)
    setShowUser(!showUser)
  }

  return (
    <div className='d-grid m-4'>
      <button className='btn btn-primary' onClick={updateShowUser}>Show Users</button>

      {showUser ? <UsersListFunc /> : null}
    </div>
  );
}

export default App;
