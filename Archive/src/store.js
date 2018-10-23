import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import App from './lib/app/reducer'
import NavigationReducer from './lib/navigation/NavigationReducer'

const store = createStore(combineReducers({
    App,
    NavigationReducer
}), {}, applyMiddleware(createLogger(), thunk))

export default store
