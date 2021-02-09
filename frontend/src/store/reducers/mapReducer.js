import { SEARCH_MAP, CONFIGURE_TAXES, FETCH_TAXES } from "../actionTypes"


const initialState = {
    searchedMunicipality: null,
    taxes: [],
    taxesConfiguration: {
        einkommen1: 100000,
        einkommen2: null,
        jahrgang1: 1990,
        jahrgang2: null,
        zivilstand: "Single",
        kinder: 0,
        kirche: "Roman Catholic",
        plz: 0,
    },
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MAP: {
            const newState = {...state}
            newState.searchedMunicipality = action.payload
            return newState
        }
        case CONFIGURE_TAXES: {
            const newState = {...state}
            newState.taxesConfiguration = action.payload
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