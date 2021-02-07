import { combineReducers } from "redux"
import isToggledReducer from './istoggled'
import cartCounterReducer from './cartcounter'
import {csrfReducer} from './csrftoken'
import {authReducer} from './auth'
import {servicesReducer} from './services'
import {progressBarReducer} from './progressbar'
import {cartReducer} from './cart'
import {notificationReducer} from './notification'
const allReducers = combineReducers({
    isToggledReducer,
    cartCounterReducer,
    csrfReducer,
    authReducer,
    servicesReducer,
    cartReducer,
    notificationReducer,
    progressBarReducer
})

export default allReducers
