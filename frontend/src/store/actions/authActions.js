import { SIGNIN, SIGNOUT, SIGNUP_REGISTRATION, SIGNUP_STEP, UPDATE_USER } from "../actionTypes"
import { baseBackendURL } from "../constants"


export const signinAction = (user, accessToken, refreshToken, authenticated) => {
    return {
        type: SIGNIN,
        user: user,
        accessToken: accessToken,
        refreshToken: refreshToken,
        authenticated: authenticated,
    }
}

export const signIn = (data) => async (dispatch, getState) => {
    const headers = new Headers({
        "Content-type": "application/json"
    })
    const body = JSON.stringify(data)
    const config = {
        method: "POST",
        headers: headers,
        body: body,
    }

    const response = await fetch(`${baseBackendURL}/auth/token/`, config)
    const json = await response.json()

    if (json.access) {
        localStorage.setItem("currentUser", JSON.stringify(json))
        dispatch(signinAction(json.user, json.access, json.refresh, true))
    } else {
        dispatch(signinAction(null, "", "", false))
    }

    return json
}

export const signoutAction = () => {
    return {
        type: SIGNOUT,
    }
}

export const signupStepAction = (step) => {
    return {
        type: SIGNUP_STEP,
        step: step,
    }
}

export const signupRegistrationAction = (registrationData) => {
    return {
        type: SIGNUP_REGISTRATION,
        email: registrationData.email,
    }
}

export const signupRegistration = (data) => async (dispatch, getState) => {
    const headers = new Headers({
        "Content-type": "application/json"
    })
    const body = JSON.stringify(data)
    const config = {
        method: "POST",
        headers: headers,
        body: body,
    }

    const response = await fetch(`${baseBackendURL}/auth/registration/`, config)
    if (!response.ok) {
        const json = await response.json()
        return json
    }
    dispatch(signupRegistrationAction(data))

    return null
}

export const signupValidation = (data) => async (dispatch, getState) => {
    const headers = new Headers({
        "Content-type": "application/json"
    })
    const body = JSON.stringify(data)
    const config = {
        method: "PUT",
        headers: headers,
        body: body,
    }

    const response = await fetch(`${baseBackendURL}/auth/registration/validation/`, config)

    if (!response.ok) {
        const json = await response.json()
        return json
    }

    return null
}

export const updateUserAction = (userData) => {
    return {
        type: UPDATE_USER,
        payload: userData,
    }
}

export const updateUser = (method, user) => async (dispatch, getState) => {
    const token = getState().authReducer.accessToken
    const headers = new Headers ({
        'Authorization': ` Bearer ${token} `
    })

    let config = {}
    user ? 
    config = {
        method: method,
        headers: headers,
        body: user
    }
    :
    config = {
        method: method,
        headers: headers,
    }

    const response = await fetch(`${baseBackendURL}/users/me/`, config)
    if (response.ok) {
        const userData = await response.json()
        dispatch(updateUserAction(userData))
        const currentUser = {
            access: getState().authReducer.accessToken,
            refresh: getState().authReducer.refreshToken,
            user: userData,
        }
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
    }

    return response
}