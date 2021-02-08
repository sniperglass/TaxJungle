import {BLOG_CATEGORY, FETCH_ALL_ARTICLES} from '../actionTypes'
import {baseBackendURL} from '../constants'


export const newArticleAction = (article) => (dispatch, getState) => {
    const token = getState().authReducer.accessToken
    const headers = new Headers ({
        'Authorization': `Bearer ${token}`
    })
    const config = {
        method: 'POST',
        headers: headers,
        body: article
    }

     fetch(`${baseBackendURL}/article/new/`, config)
    .then(response => response.json())
    .then(data => {
       return data
    })
}

const fetchAllArticlesAction = (articles) => {
    return {
        type: FETCH_ALL_ARTICLES,
        payload: articles
    }
}

export const fetchAllArticles = (category) => async (dispatch, getState) => {
    const config = {
        method: "GET",
    }

    const response = await fetch (`${baseBackendURL}/article/${category ? "category/" + category : ""}`, config)
    if (response.ok) {
        const json = await response.json()
        dispatch(fetchAllArticlesAction(json.results))
        return json
    }
    return null
}

export const searchOnArticlesByCategory = (category, toSearch) => async (dispatch, getState) => {
    const config = {
        method: "GET",
    }

    const response = await fetch (`${baseBackendURL}/article/${category}/?search=${toSearch}`, config)
    if (response.ok) {
        const json = await response.json()
        dispatch(fetchAllArticlesAction(json.results))
        return json
    }
    return null
}

export const blogCategoryAction = (category) => {
    return {
        type: BLOG_CATEGORY,
        payload: category,
    }
}


