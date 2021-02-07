import { BlogHeaderCompStyle } from '../BlogHeaderComponent/styles'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { getAvatar } from "../../../store/utils"
import { signoutAction } from "../../../store/actions/authActions"
import { blogCategoryAction } from "../../../store/actions/blogActions"

const BlogHeaderComponent = () => {
    const user = useSelector(state => state.authReducer.user)
    const authenticated = useSelector(state => state.authReducer.authenticated)
    const dispatch = useDispatch()

    const logoutHandler = (e) => {
        localStorage.removeItem("currentUser")
        dispatch(signoutAction())
    }

    const blogCategoryHandler = (e) => {
        dispatch(blogCategoryAction(e.target.id))
    }

    return(
        <BlogHeaderCompStyle>
            <header className="header">
                <ul className="nav-left">
                    <Link to="/profile">
                        <img src={getAvatar(user)} className="avatar" height="35px" alt="avatar"></img>
                        <li>profile</li>
                    </Link>
                </ul>
                <ul className="nav-center">
                    <Link id="1" to="/blog/taxes" onClick={blogCategoryHandler}>Taxes</Link>
                    <Link id="2" to="/blog/renting" onClick={blogCategoryHandler}>Renting</Link>
                    <Link id="3" to="/blog/banking" onClick={blogCategoryHandler}>Banking</Link>
                    <Link id="4" to="/blog/insurance" onClick={blogCategoryHandler}>Insurance</Link>
                </ul> 
                <ul className="nav-right">
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

