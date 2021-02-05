<<<<<<< HEAD
import { SIGNIN, SIGNOUT, SIGNUP_STEP, SIGNUP_REGISTRATION, UPDATE_USER } from "../actionTypes"
=======
import { SIGNIN, SIGNOUT, SIGNUP_STEP, SIGNUP_REGISTRATION } from "../actionTypes"
>>>>>>> c32b90048e7d1bc63007d3005d3557b9ef31d000

const initialState = {
    user: {
        first_name: "",
        last_name: "",
        location: "",
        about: "",
        username: "",
        email: ""
    },
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
        case UPDATE_USER: {
            const newState = {...state}
            newState.user = action.payload
            return newState
        }
        default:
            return state
    }
} 

export default authReducer