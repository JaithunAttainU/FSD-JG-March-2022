import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSongAction } from '../actions/index'

function SongList() {

  const songsList = useSelector((state) => {
    return state.songs
  })

  const dispatch = useDispatch()

  const selectedSong = useSelector((state) => {
    return state.selectedSong
  })

  console.log(selectedSong)
  return (
    <div>
      {
        songsList.map(song => {
          return (
            <div className='card'>
              <div>Name: {song.title}</div>
              <div>Duration: {song.duration}</div>
              <button onClick={() => {
                dispatch(selectSongAction(song)) //{title: 'Song 2'}
              }}>Select</button>
            </div>
          )
        })
      }
    </div>
  )
}

2

export default SongList