import { BlogHeaderCompStyle } from '../BlogHeaderComponent/styles'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { getAvatar } from "../../../store/utils"
import { signoutAction } from "../../../store/actions/authActions"

const BlogHeaderComponent = () => {
    const user = useSelector(state => state.authReducer.user)
    const authenticated = useSelector(state => state.authReducer.authenticated)
    const dispatch = useDispatch()

    const logoutHandler = (e) => {
        localStorage.removeItem("currentUser")
        dispatch(signoutAction())
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
                    <Link to="/blog/taxes"><li>Taxes</li></Link>
                    <Link to="/blog/renting"><li>Renting</li></Link>
                    <Link to="/blog/insurance"><li>Insurance</li></Link>
                    <Link to="/blog/banking"><li>Banking</li></Link>
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

