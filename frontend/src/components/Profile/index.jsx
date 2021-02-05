import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import { useHistory} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../store/actions/authActions'
//img
import jennifer from '../../assets/users/jennifer.png';

import BlogHeaderComponent from '../BlogOverview/BlogHeaderComponent';
import BlogCardComponent from '../BlogOverview/BlogCardComponent';

//css
import {ProfileStyle} from '../Profile/styles';

const Profile=()=>{

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.authReducer.user);
    /* const token = useSelector(state => state.token); */
    const [editMode, setEditMode] = useState(false)
    const [userInfo, setUserInfo] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        location: user.location,
        about: user.about,
        username: user.username,
        email: user.email
    })

    const userInfoChange = (event) => {
        const { name, value } = event.target
        setUserInfo({...userInfo, [name]: value})
    }

    const saveHandler = () => {
        if (!editMode === true) {
            setEditMode(!editMode)
        } 
    };

    const editHandler = (event) => {
        setEditMode(!editMode)
        if (event.target.value === "cancel") {
            setUserInfo({
                first_name: "",
                last_name: "",
                location: "",
                about: "",
                username: "",
                email: ""
            })
        }
    };

/*    const deleteHandler = () => {
        dispatch(updateUser("DELETE", undefined));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        dispatch(updateUser("PATCH", userInfo));

    } */

    //new code for image upload
    const onSubmitHandler = e => {
        console.log(userInfo)
        e.preventDefault()
        
        
        const formData = new FormData();
        formData.append('first_name', userInfo.first_name);
        formData.append('last_name', userInfo.last_name);
        formData.append('location', userInfo.location);
        formData.append('about', userInfo.about);
        formData.append('username', userInfo.username);
        formData.append('email', userInfo.email);
        formData.append('profile_picture', userInfo.profile_picture);

        console.log(formData)
        dispatch(updateUser(formData, user))
    }


    return(
        
        <ProfileStyle>
            <div className="left">
                <Link to="/blog">back</Link>
                <p className="title">My Profile</p>
                <div className="round-pic">
                <img className="blog-img" src={jennifer} alt=""/>
                    {/* <img className="blog-img" src={userInfo.profile_picture ? userInfo.profile_picture : jennifer} alt="" name='profile_image' type="file" accept="image/jpeg, image/png" multiple placeholder="Image"/> */}
                </div>
            </div>
            <form className="right" onSubmit={ onSubmitHandler }>
                <div className="personal-info">
                    <div className="names">
                        <div className="fn-label">
                            <label htmlFor="firstaname">Firstname</label>
                            <input className="firstname" name="first_name" onChange= { userInfoChange } value = {userInfo.first_name} required placeholder="firstname" disabled={editMode}/>
                        </div>
                        <div className="ln-label">
                            <label htmlFor="lastname">Lastname</label>
                            <input className="lastname"  name="last_name" placeholder="lastname" onChange= { userInfoChange } value = {userInfo.last_name} required disabled={editMode}/>
                        </div>
                    </div>
                    <div className="location-box">
                        <label htmlFor="location-label">Location</label>
                        <textarea className="location" name="location" onChange= { userInfoChange } value = {userInfo.location} required disabled={editMode} placeholder="type your adress here"/>
                    </div>
                </div>
                <div className="about-box">
                    <label htmlFor="about-label">About</label>
                    <textarea className="about" name="about" onChange= { userInfoChange } value = {userInfo.about} required  disabled={editMode} placeholder="give more information about yourself..."/>
                </div>
                <div className="known-credentials">
                    <div className="un-label">
                        <label htmlFor="username">Username<span> *</span></label>
                        <input className="username"  name="username" onChange= { userInfoChange } value = {userInfo.username} placeholder="username" /* value="sara_grace" */ disabled={editMode}/>
                    </div>
                    <div className="email-label">
                        <label htmlFor="email">Email<span> *</span></label>
                        <input className="email"  name="email" onChange= { userInfoChange } value = {userInfo.email} placeholder="email" /* value="sara@gmail.com" */ disabled={editMode}></input>
                    </div>
                </div>
                <div className="footer-btn">
                    <input type="button" type="submit" className="save" disabled={editMode} value="save" /* onClick={ saveHandler } *//>
                    <input type="button" className="edit" value={ editMode ? "edit" : "cancel"} onClick={ editHandler }/>
                </div>
                <div className="delete">
                    <button className="delete-btn" /* onClick={deleteHandler} */>delete account</button>
                </div>
            </form>
                

        </ProfileStyle>
    )
}
export default Profile;
