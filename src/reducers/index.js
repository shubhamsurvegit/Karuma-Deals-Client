import {combineReducers} from 'redux'
import sell from './sell'
import auth from './auth'
import mydeals from './deals'
export default combineReducers({
    sell,
    auth,
    mydeals
})