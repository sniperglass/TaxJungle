import { BLOG_CATEGORY, FETCH_ALL_ARTICLES } from '../actionTypes'

const initialState = {
    articles: [],
    category: ""
}


const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case BLOG_CATEGORY: {
            const newState = {...state}
            newState.category = action.payload
            return newState
        }
        case FETCH_ALL_ARTICLES: {
            return {...state, articles:action.payload}
            
        }
        default:
            return state
    }
}

export default blogReducer;