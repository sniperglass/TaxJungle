import { combineReducers } from "redux"
import authReducer from "./authReducer"
import taxesReducer from "./taxesReducer"
import articlesReducer from "./blogReducer"


export default combineReducers({
    authReducer,
    taxesReducer,
    articlesReducer
})
