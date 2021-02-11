import { BlogHeaderCompStyle } from '../BlogHeaderComponent/styles';
import { useSelector, useDispatch} from "react-redux";
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getAvatar } from "../../store/utils";
import { signoutAction } from "../../store/actions/authActions";
import { blogCategoryAction } from "../../store/actions/blogActions";
import SettingsButton from '../SettingsButton';
import PopUp from '../SettingsPopUp';


const BlogHeaderComponent = () => {
    const user = useSelector(state => state.authReducer.user);
    const authenticated = useSelector(state => state.authReducer.authenticated);
    let category = useSelector(state => state.blogReducer.category);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const [openConfig, setOpenConfig] = useState(false);

    const logoutHandler = (e) => {
        localStorage.removeItem("currentUser")
        dispatch(signoutAction())
    }

    const blogCategoryHandler = (e) => {
        dispatch(blogCategoryAction(""))
    }

    const Title = () => {
        let location = useLocation();
        if (location.pathname === "/blog" || location.pathname === "/blog/search" || location.pathname === "/blog/taxes" 
                || location.pathname === "/blog/insurance" || location.pathname === "/blog/renting" || location.pathname === "/blog/banking") {
            return (
                <ul className="nav-center">
                    <p className="title">TaxJungle Blog</p> 
                </ul>
            );
        } else {
            return null
        }
      }

    const ArticleLink = () => {
        let location = useLocation();
        if (location.pathname === "/blog") {
            return (
                <Link to="/blog" style={{fontWeight: 700}} onClick={blogCategoryHandler}>latest articles</Link> 
            );
        } else {
            return <Link to="/blog" style={{color: "white"}} onClick={blogCategoryHandler}>latest articles</Link>
        }
    }


    const profileConfigurationOpenButtonHandler = (e) => {
        e.preventDefault();
        setOpenConfig(!openConfig);
    };


    const profileSettings = [ 

        {
            feature: "profile", 
            eventHandler: () => {history.push("/profile")}
        },

        {
            feature: "logout", 
            eventHandler: logoutHandler
        }
    ]

    const closePopUp = () => {
        if (openConfig) {
            setOpenConfig(false)
        }
    }

    return(
        <BlogHeaderCompStyle>
            <header className="header">
                <ul className="nav-left">
                    <Link to="/">map</Link>
                    <ArticleLink/>
                </ul>
                <Title/>
                <ul className="nav-right">
                    {
                        authenticated ? 
                            <div className="nav-profile-info">
                                <button className="profile-btn" onClick={profileConfigurationOpenButtonHandler}>
                                    <li className="username" >Welcome { user.first_name}!</li>
                                    <div style={{"backgroundImage": `url(${getAvatar(user)})`}} className="avatar" height="35px" alt="avatar"></div>
                                </button>
                                <div className="positionSettingsButton"> 
                                    {openConfig ? <PopUp settings={profileSettings}/> : ""} 
                                </div> 
                            </div> :
                            <>
                                <Link className="sign-btn1" to="/signin"><li>sign in</li></Link>
                                <Link className="sign-btn2" to="/signup"><li>sign up</li></Link>
                            </>
                    }
                </ul>
            </header>
        </BlogHeaderCompStyle>   
    )
}
export default BlogHeaderComponent;


//these lines kept as reference when implementing logout link-button

/* {
    authenticated ? 
        <Link to="/blog" onClick={logoutHandler}><li>logout</li></Link> :
        <>
            <Link to="/signin"><li>sign in</li></Link>
            <Link to="/signup"><li>sign up</li></Link>
        </>
} */
