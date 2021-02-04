import { NEW_ARTICLE, FETCH_ALL_ARTICLES } from '../actionTypes'

const initialState = {
    articles: [],

}


const articlesReducer = (state = initialState, action) => {
    console.log('state', state)

    switch (action.type) {
        case NEW_ARTICLE: {
            const newState = {...state}
            newState.newArticle = action.payload
            return newState
        }
        case FETCH_ALL_ARTICLES: {
            console.log('reducer',action.payload)
            return {...state, articles:action.payload}
            
        }
        default:
            return state
    }
}

export default articlesReducer;