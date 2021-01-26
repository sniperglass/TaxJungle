import { combineReducers } from "redux"
import sessionReducer from "./sessionReducer"
import signUpReducer from "./signUpReducer"
import postsReducer from "./postsReducer"

export default combineReducers({
    sessionReducer,
    signUpReducer,
    postsReducer,
})
