import { SEARCH_MAP, FETCH_TAXES } from "../actionTypes"


const initialState = {
    searchedMunicipality: null,
    taxes: [],
    taxesConfiguration: {
        incomeOne: 100000,
        incomeTwo: null,
        status: "Single",
        children: 0,
        confession: "Roman Catholic",
    },
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MAP: {
            const newState = {...state}
            newState.searchedMunicipality = action.payload
            return newState
        }
        case FETCH_TAXES: {
            const newState = {...state}
            newState.taxes = action.payload
            return newState
        }
        default:
            return state
    }
} 

export default mapReducer