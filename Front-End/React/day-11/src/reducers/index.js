
import { updateSong, fetchSongList } from "./song"
import { combineReducers } from "redux";

const reducers = combineReducers({
  selectedSong: updateSong,
  songs: fetchSongList
})

export default reducers