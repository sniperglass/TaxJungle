import { BLOG_CATEGORY, FETCH_ALL_ARTICLES, SINGLE_ARTICLE } from '../actionTypes'

const initialState = {
    articles: [],
    category: "",
    current: null,
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
        case SINGLE_ARTICLE: {
            return {...state, current:action.payload}
        }

        default:
            return state
    }
}

export default blogReducer;