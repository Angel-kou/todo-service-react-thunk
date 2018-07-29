import { combineReducers } from 'redux'
import todo from './todo'
import users from './users'
import {routerReducer } from 'react-router-redux'



const rootReducer = combineReducers({
    users,
    todo,
    routing: routerReducer
})

export default rootReducer