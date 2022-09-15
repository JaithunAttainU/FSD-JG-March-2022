
export const fetchAlbumsList = (prevState = [], action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS': {
      return action.payload
    }
    default:
      return prevState
  }
}