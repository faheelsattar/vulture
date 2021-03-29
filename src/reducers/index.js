import { combineReducers } from "redux"
import { csrfReducer } from './csrftoken'
import { authReducer } from './auth'
const allReducers = combineReducers({
    csrfReducer,
    authReducer,
})

export default allReducers
