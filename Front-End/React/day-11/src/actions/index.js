export const selectSongAction = (song) => {
  return {
    type: 'SELECT_SONG',
    payload: song
  }
}