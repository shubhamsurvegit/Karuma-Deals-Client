import {combineReducers} from 'redux'
import sell from './sell'
import auth from './auth'
export default combineReducers({
    sell,
    auth
})