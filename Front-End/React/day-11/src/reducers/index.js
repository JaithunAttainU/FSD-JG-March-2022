
import { updateSong, fetchSongList } from "./song"
import { fetchAlbumsList } from "./albums";
import { combineReducers } from "redux";

const reducers = combineReducers({
  selectedSong: updateSong,
  songs: fetchSongList,
  albums: fetchAlbumsList
})

export default reducers