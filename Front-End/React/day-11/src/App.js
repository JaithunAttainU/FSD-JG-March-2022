import './App.css';
import React from 'react'
import SongList from './components/SongList';
import Albums from './components/Albums';
import FormRef from './components/FormRef';
import Counter from './components/Counter';
import Reactions from './components/Reactions';
function App() {

  return (
    <>
      <div className='container'>
        {/* <SongList />
        <Albums /> */}
        {/* <FormRef />
        <Counter /> */}

        <Reactions />
      </div>
    </>
  )
}

export default App;

let a = 5
let c = -10

a += c //a = a + c

a = +c