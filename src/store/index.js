import { createStore, combineReducers } from 'redux'
import { settings } from './reducers'


const rootReducer = combineReducers({
  settings
})

const store = createStore(
  rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
