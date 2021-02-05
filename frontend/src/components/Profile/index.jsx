import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import { useHistory} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../store/actions/authActions';
import { signoutAction } from "../../store/actions/authActions";
import {getAvatar} from '../../store/utils';
//img

import BlogHeaderComponent from '../BlogOverview/BlogHeaderComponent';
import BlogCardComponent from '../BlogOverview/BlogCardComponent';

//css
import {ProfileStyle} from '../Profile/styles';

const Profile=()=>{

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.authReducer.user);
    const [editMode, setEditMode] = useState(false)
    const [userInfo, setUserInfo] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        location: user.location,
        about: user.about,
        username: user.username,
        email: user.email,
        profile_picture: user.profile_picture
    })

    const userInfoChange = (event) => {
        let { name, value } = event.target
        if(name === 'profile_picture'){
            value = event.target.files[0]
        }
        setUserInfo({...userInfo, [name]: value})
    }

    const editHandler = (event) => {
        setEditMode(!editMode)
        if (event.target.value === "cancel") {
            setUserInfo({
                first_name: "",
                last_name: "",
                location: "",
                about: "",
                username: "",
                email: "",
                profile_picture: ""
            })
        }
    };

    const deleteHandler = () => {
        if (window.confirm('Are you sure you want to delete your account?')) {

            dispatch(updateUser("DELETE", user)).then(result => {
                localStorage.removeItem("currentUser")
                dispatch(signoutAction())
            })
        }

    }

    const onSubmitHandler = e => {
        e.preventDefault()

        if (!editMode === true) {
            setEditMode(!editMode)
        } 

        const formData = new FormData();
        formData.append('first_name', userInfo.first_name);
        formData.append('last_name', userInfo.last_name);
        formData.append('location', userInfo.location);
        formData.append('about', userInfo.about);
        formData.append('username', userInfo.username);
        formData.append('email', userInfo.email);
        formData.append('profile_picture', userInfo.profile_picture);

        dispatch(updateUser("PATCH", formData))
    }


    return(
        
        <ProfileStyle>
            <div className="left">
                <Link to="/blog">back</Link>
                <p className="title">My Profile</p>
                <div className="round-pic">
                <button className="label-btn">
                    <label htmlFor="profile_picture" className="change-pic" style={ editMode ? {opacity: 1} : {backgroundColor: "white", borderRadius: "50%"}}>
                        <img className="blog-img" 
                            src={getAvatar(user)} alt="" 
                            style={ editMode ? {opacity: 1} : {opacity: 0.2}}/>
                    </label>
                </button>
                </div>
                <div className="delete">
                    <button className="delete-btn" onClick={deleteHandler}>delete account</button>
                </div>
            </div>
            <form className="right" onSubmit={ onSubmitHandler }>
                <div className="personal-info">
                    <div className="names">
                        <div className="fn-label">
                            <label htmlFor="firstname">Firstname</label>
                            <input className="firstname" name="first_name" onChange= { userInfoChange } value = {userInfo.first_name} required placeholder="firstname" disabled={editMode}/>
                        </div>
                        <div className="ln-label">
                            <label htmlFor="lastname">Lastname</label>
                            <input className="lastname"  name="last_name" placeholder="lastname" onChange= { userInfoChange } value = {userInfo.last_name} required disabled={editMode}/>
                        </div>
                    </div>
                    <div className="location-box">
                        <label htmlFor="location-label">Location</label>
                        <textarea className="location" name="location" onChange= { userInfoChange } required value = {userInfo.location} disabled={editMode} placeholder="type your adress here"/>
                    </div>
                </div>
                <div className="about-box">
                    <div className="about-pic">
                        <label htmlFor="about-label">About</label>
                        <input className="pic-input" name='profile_picture' id="profile_picture" type="file" accept="image/jpeg, image/png" 
                            multiple placeholder="Image" onChange= { userInfoChange } 
                            disabled={editMode}/>
                    </div>
                    <textarea className="about" name="about" onChange= { userInfoChange } value = {userInfo.about} disabled={editMode} placeholder="give more information about yourself..."/>
                </div>
                <div className="known-credentials">
                    <div className="un-label">
                        <label htmlFor="username">Username<span> *</span></label>
                        <input className="username"  name="username" onChange= { userInfoChange } value = {userInfo.username} placeholder="username" disabled={editMode}/>
                    </div>
                    <div className="email-label">
                        <label htmlFor="email">Email<span> *</span></label>
                        <input className="email"  name="email" onChange= { userInfoChange } value = {userInfo.email} placeholder="email" disabled={editMode}></input>
                    </div>
                </div>
                <div className="footer-btn">
                    <input type="button" type="submit" className="save" disabled={editMode} value="save"/>
                    <input type="button" className="edit" value={ editMode ? "edit" : "cancel"} onClick={ editHandler }/>
                </div>
            </form>
                

        </ProfileStyle>
    )
}
export default Profile;
