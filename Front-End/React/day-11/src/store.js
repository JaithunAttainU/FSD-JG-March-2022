import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'

import thunk from 'redux-thunk'

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//applyMiddleware(logger)
const store = createStore(reducers, compose(applyMiddleware(logger, thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store