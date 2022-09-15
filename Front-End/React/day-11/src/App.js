import './App.css';
import React from 'react'
import SongList from './components/SongList';
import Albums from './components/Albums';
function App() {

  return (
    <>
      <div className='container'>
        <SongList />
        <Albums />
      </div>
    </>
  )
}

export default App;
