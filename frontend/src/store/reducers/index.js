import { combineReducers } from "redux"
import authReducer from "./authReducer"
import mapReducer from "./mapReducer"
import blogReducer from "./blogReducer"


export default combineReducers({
    authReducer,
    mapReducer,
    blogReducer,
})
