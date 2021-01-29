import React from 'react';
import {Link} from 'react-router-dom';
//img
import leticia from '../../../assets/users/leticia.png'


//css
import {BlogHeaderCompStyle} from '../BlogHeaderComponent/styles';

const BlogHeaderComponent =()=>{

const str = ""
    return(
        <BlogHeaderCompStyle>
            <header className="header">
                <ul className="nav-left">
                    <img src={ leticia } className="avatar" height="35px" alt="avatar"></img>
                    <Link to=""><li>my Profile</li></Link>
                </ul>
                <ul className="nav-center">
                    <Link to="/blogs"><li>Taxes</li></Link>
                    <Link to="/renting"><li>Renting</li></Link>
                    <Link to="/insurance"><li>Insurance</li></Link>
                    <Link to="/banking"><li>Banking</li></Link>
                </ul> 
                <ul className="nav-right">
                    <Link to=""><li>LogIn</li></Link>
                    <Link to=""><li>SignIn</li></Link>
                </ul>
            </header>
        </BlogHeaderCompStyle>   
    )
}
export default BlogHeaderComponent;

