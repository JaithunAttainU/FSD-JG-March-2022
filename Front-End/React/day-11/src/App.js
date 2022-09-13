import './App.css';
import React, { useState } from 'react'
import SongList from './components/SongList';
function App() {

  return (
    <>
      <div className='container'>
        <SongList />
      </div>
    </>
  )
}

export default App;
