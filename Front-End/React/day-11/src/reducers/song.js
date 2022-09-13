export const updateSong = (prevState = {}, action) => {
  switch (action.type) {
    case 'SELECT_SONG': {
      return action.payload
    }
    default:
      return prevState
  }
}

export const fetchSongList = () => {
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