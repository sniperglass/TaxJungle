import {BLOG_CATEGORY, FETCH_ALL_ARTICLES, SINGLE_ARTICLE, NEW_COMMENT, SEARCH_ARTICLE} from '../actionTypes'
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

export const searchOnArticlesByCategory = (toSearch) => async (dispatch, getState) => {
    const config = {
        method: "GET",
    }
    const response = await fetch (`${baseBackendURL}/article/?search=${toSearch}`, config)
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

const fetchSingleArticleAction = (article) => {
    return {
        type: SINGLE_ARTICLE,
        payload: article

    }
}

export const fetchSingleArticle = (article_id) => async (dispatch, getState) => {
    const token = getState().authReducer.accessToken;
    const headers = new Headers({
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    })
    const config = {
        method: "GET",
        headers: headers
    }

    const response = await fetch (`${baseBackendURL}/article/search/${article_id}`, config)
    if (response.ok) {
        const json = await response.json()
        dispatch(fetchSingleArticleAction(json))
        return json
    }
    
    return null
}

export const createCommentAction = (article_id, content) => (dispatch, getState) => {
    const token = getState().authReducer.accessToken
    const headers = new Headers ({
        'Authorization': `Bearer ${token}`,
        "Content-type": "application/json"    
    })
    const config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({content:content})
    }

     fetch(`${baseBackendURL}/article/comment/${article_id}/`, config)
    .then(response => response.json())
    .then(data => {
       dispatch(fetchSingleArticle(article_id))
    })
}

