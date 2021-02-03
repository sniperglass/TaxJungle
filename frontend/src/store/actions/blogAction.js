import {NEW_ARTICLE} from '../actionTypes'
import {baseBackendURL} from '../constants'

//token need to be replaced
export const newArticleAction = (article, history) => (dispatch, getState) => {
    const token = getState().token
    const headers = new Headers ({
        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEyNzkwODA1LCJqdGkiOiI0MmUyNzVjODg1ODU0MWI5OWIzYjNjNzRjNzA2YTQyZCIsInVzZXJfaWQiOjF9.Xd-KGvS55V_52xjTXZb3nDgjQM6dCohT2XXZSb5jYy0"
    })
    console.log('action', article)
    const config = {
        method: 'POST',
        headers: headers,
        body: article
    }

     fetch(`${baseBackendURL}/article/new/`, config)
    .then(response => response.json())
    .then(data => {
        if (data.status===200){
            history.push('/')
        }
    })
}
