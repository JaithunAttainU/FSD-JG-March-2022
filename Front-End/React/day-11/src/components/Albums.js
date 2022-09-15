import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from '../actions'

function Albums() {

  // const fetchAlbums = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
  //   setAlbums(response.data)
  // }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAlbums())
  }, [])


  const albums = useSelector((state) => {
    return state.albums
  })

  return (
    <div>
      {albums.map(album => {
        return (<div key={album.title}>{album.title}</div>)
      })}
    </div>
  )
}

export default Albums

const person = {
  name: 'hdk',
  address: {
    stret: 'dfert'
  }
}

const newPerson = {
  ...person
}