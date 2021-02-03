import { FETCH_TAXES } from "../actionTypes"


const fetchTaxesAction = (taxData) => {
    return {
        type: FETCH_TAXES,
        payload: taxData,
    }
}

export const fetchTaxes = (queryString) => async (dispatch, getState) => {
    const baseTaxURL = "https://antp5lwq3i.execute-api.eu-west-1.amazonaws.com/dev/steuern?"

    const headers = {
        "x-api-key": "ZzjM5cQPzL6w6eqVAkFn41Je2snct0Gf6Dx8ivlu",
    }

    const config = {
        method: "GET",
        headers: headers,
    }

    // Default query string 
    if (!queryString) {
        queryString = "einkommen1=100000&jahrgang1=1990&zivilstand=0&kinder=0&kirche=0&plz=0"
    }

    const response = await fetch(baseTaxURL + queryString, config)
    if (response.ok) {
        const json = await response.json()
        dispatch(fetchTaxesAction(json))
        return json
    }

    return null
}