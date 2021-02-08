import { BlogHeaderCompStyle } from '../BlogHeaderComponent/styles';
import { useSelector, useDispatch} from "react-redux";
import React, { useState, useEffect, useHistory } from 'react';
import { Link } from 'react-router-dom';
import { getAvatar } from "../../store/utils";
import { signoutAction } from "../../store/actions/authActions";
import { blogCategoryAction } from "../../store/actions/blogActions";


const BlogHeaderComponent = () => {
    const user = useSelector(state => state.authReducer.user);
    const authenticated = useSelector(state => state.authReducer.authenticated);
    let category = useSelector(state => state.blogReducer.category);
    const dispatch = useDispatch();
    /* const history = useHistory(); */

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
                <ul className="nav-left">
                    <Link to="/">tax-map</Link>
                    <Link to="/blog" style={category === "" ? {fontWeight: 700} :  {color: "white"}} onClick={blogCategoryHandler}>articles</Link>  
                </ul>
                <ul className="nav-center">
                   {/*  <p className="title">TaxJungle Blog</p>  */}
                </ul>
                <ul className="nav-right">
                    {
                        authenticated ? 
                            <div className="nav-profile-info">
                                <Link to="/profile">
                                    <li className="username">Welcome { user.first_name}!</li>
                                    <img src={getAvatar(user)} className="avatar" height="35px" alt="avatar"></img>
                                </Link>
                            </div> :
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


{/* <ul className="nav1">
<Link to="/profile">
    <img src={getAvatar(user)} className="avatar" height="35px" alt="avatar"></img>
    <li>profile</li>
</Link>
</ul> */}

/* {
    authenticated ? 
        <Link to="/blog" onClick={logoutHandler}><li>logout</li></Link> :
        <>
            <Link to="/signin"><li>sign in</li></Link>
            <Link to="/signup"><li>sign up</li></Link>
        </>
} */