import axios from "axios"
import { fetchAlbumsList } from "../reducers/albums"

export const selectSongAction = (song) => {
  return {
    type: 'SELECT_SONG',
    payload: song
  }
}

//Actions creater is now returning a promise
export const fetchAlbums = () => {
  return async function (dispatch, getState) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
    dispatch({
      type: 'FETCH_ALBUMS',
      payload: response.data
    })
  }
  // return {
  //   type: 'FETCH_ALBUMS',
  //   payload: [{ title: 'dfsg' }]
  // }
}