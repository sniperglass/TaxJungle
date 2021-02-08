import { BlogHeaderCompStyle } from '../BlogHeaderComponent/styles'
import React, { useState} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { getAvatar } from "../../store/utils"
import { signoutAction } from "../../store/actions/authActions"
import { blogCategoryAction } from "../../store/actions/blogAction"

import search from '../../assets/icons/search.svg'

const BlogHeaderComponent = () => {
    const user = useSelector(state => state.authReducer.user)
    const authenticated = useSelector(state => state.authReducer.authenticated)
    const dispatch = useDispatch()

    const logoutHandler = (e) => {
        localStorage.removeItem("currentUser")
        dispatch(signoutAction())
    }

    const blogCategoryHandler = (e) => {
        dispatch(blogCategoryAction(""))
    }

    return(
        <BlogHeaderCompStyle>
            <header className="header">
                <div className="nav-left">
                    <ul className="nav1">
                        <Link to="/profile">
                            <img src={getAvatar(user)} className="avatar" height="35px" alt="avatar"></img>
                            <li>profile</li>
                        </Link>
                    </ul>
                    <ul className="nav2">
                        <Link to="/blog" onClick={blogCategoryHandler}>blog</Link>
                        <Link to="/">tax-map</Link>
                    </ul>
                </div>
                <ul className="nav-right">
                    <ul className="nav3">
                        <Link to="/blog/create">create blog</Link>
                    </ul>
                    {
                        authenticated ? 
                            <Link to="/blog" onClick={logoutHandler}><li>logout</li></Link> :
                            <>
                                <Link to="/signin"><li>sign in</li></Link>
                                <Link to="/signup"><li>sign up</li></Link>
                            </>
                    }
                </ul>
            </header>
        </BlogHeaderCompStyle>   
    )
}
export default BlogHeaderComponent;
