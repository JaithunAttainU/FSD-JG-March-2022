import './App.css';
import React from 'react'
import Counter from './components/counter';
import Dummy from './components/Dummy';

function App() {
  return (
    <>
      <div className='container'>
        <Counter />
        <Dummy />
      </div>
    </>
  )
}

export default App;
