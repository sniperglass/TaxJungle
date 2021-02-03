import { combineReducers } from "redux"
import authReducer from "./authReducer"
import taxesReducer from "./taxesReducer"


export default combineReducers({
    authReducer,
    taxesReducer
})
