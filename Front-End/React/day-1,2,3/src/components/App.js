import React, { useEffect } from 'react'
import YoutubeCard from './YoutubeCard'
import videoData from '../mock/videoData'

//coming from aPi
//Functional Component
function App() {

  return (
    <div className='container d-flex'>
      {videoData.map(data => {
        return <YoutubeCard videoDetail={data} />
      })}
    </div>
  ) // should return JSX
}

export default App //module.exports = App