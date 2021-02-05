import { SIGNIN, SIGNOUT, SIGNUP_STEP, SIGNUP_REGISTRATION } from "../actionTypes"

const initialState = {
    user: {},
    accessToken: "",
    authenticated: false,
    signupStep: 1,
    signupEmail: "",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN: {
            const newState = {...state}
            newState.user = action.user
            newState.accessToken = action.accessToken
            newState.authenticated = action.authenticated
            return newState
        }
        case SIGNOUT: {
            const newState = initialState
            return newState
        }
        case SIGNUP_STEP: {
            const newState = {...state}
            newState.signupStep = action.step
            return newState
        }
         case SIGNUP_REGISTRATION: {
            const newState = {...state}
            newState.signupEmail = action.email
            return newState
        }
        default:
            return state
    }
} 

export default authReducer