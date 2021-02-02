import { FETCH_TAXES } from "../actionTypes"

const initialState = {
    taxes: [],
    configuration: {
        incomeOne: 100000,
        incomeTwo: null,
        status: "Single",
        children: 0,
        confession: "Roman Catholic",
    },
}

const taxesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TAXES: {
            const newState = {...state}
            newState.taxes = action.payload
            return newState
        }
        default:
            return state
    }
} 

export default taxesReducer