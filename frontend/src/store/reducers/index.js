import { combineReducers } from "redux"
import authReducer from "./authReducer"
import taxesReducer from "./taxesReducer"
import blogReducer from "./blogReducer"


export default combineReducers({
    authReducer,
    taxesReducer,
    blogReducer,
})
