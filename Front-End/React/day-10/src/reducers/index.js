import { combineReducers } from "redux";
import updateCounter from './counter'

const reducers = combineReducers({
  count: updateCounter
})

export default reducers
