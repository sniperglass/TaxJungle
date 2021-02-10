import { BLOG_CATEGORY, FETCH_ALL_ARTICLES, SINGLE_ARTICLE, NEW_COMMENT, SEARCH_ARTICLE } from '../actionTypes'

const initialState = {
    articles: [],
    category: "",
    current: null,
    comment: {},
    search_article: []
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
            console.log('data', action.payload)

            return {...state, current:action.payload}
            
        }
        // case SEARCH_ARTICLE: {
        //     console.log('data', action.payload)

        //     return {...state, search_article:action.payload}
        // }
        // case NEW_COMMENT: {
        //     return {...state, comment:action.payload}
        // }

        default:
            return state
    }
}

export default blogReducer;