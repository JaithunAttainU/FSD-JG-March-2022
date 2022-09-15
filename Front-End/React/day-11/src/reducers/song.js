//Principles of Reducers


export const updateSong = (prevState = {}, action) => {

  switch (action.type) {
    case 'SELECT_SONG': {

      //Update of prevstate is not allowed
      // prevState.tile = 'Hello'
      // prevState = action.payload
      // return prevState

      //No side Effects (Pure Functions)
      //       console.log()
      // async await api calls
      
      // return {
      //   ...prevState,
      //   title: 'Hello'
      // }
      return action.payload
    }
    default:
      return prevState
  }
}

export const fetchSongList = (prevState = {}, action) => {
  return [
    {
      title: 'Song 1',
      duration: 20
    },
    {
      title: 'Song 2',
      duration: 20
    },
    {
      title: 'Song 3',
      duration: 20
    }
  ]
}