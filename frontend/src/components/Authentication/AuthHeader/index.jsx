import { Link } from 'react-router-dom'
import { AuthHeaderStyle } from './styles'

const AuthHeader = (props) => {
    return(
        <AuthHeaderStyle>
            <div>
                <Link to="/">home</Link>
                <Link to="/blog">blog</Link>
            </div>
            <div>
                <p className="no-account">{props.signup ? "Already have an account?" : "Don't have an account?"}</p>
                {props.signup ? 
                    <Link to='/signin'>sign in</Link> :
                    <Link to='/signup'>sign up</Link>
                }
            </div>
        </AuthHeaderStyle>
    )
}

export default AuthHeader
