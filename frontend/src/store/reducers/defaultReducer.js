import { USER_SIGNIN } from "../actionTypes"

const initialState = {
    user: {},
    accessToken: "",
    authenticated: false,
}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNIN: {
            const newState = {...state}
            newState.user = action.user
            newState.accessToken = action.accessToken
            newState.authenticated = action.authenticated
            return newState
        }
        default:
            return state
    }
} 

export default sessionReducer