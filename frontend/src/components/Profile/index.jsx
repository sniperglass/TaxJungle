import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import { useHistory} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
//img
import jennifer from '../../assets/users/jennifer.png';

import BlogHeaderComponent from '../BlogOverview/BlogHeaderComponent';
import BlogCardComponent from '../BlogOverview/BlogCardComponent';

//css
import {ProfileStyle} from '../Profile/styles';

const Profile=()=>{

    const dispatch = useDispatch();
    const history = useHistory();
    /* const token = useSelector(state => state.token); */
    const [editMode, setEditMode] = useState(false)
    const [userInfo, setUserInfo] = useState({
        firstname: "",
        lastname: "",
        location: "",
        about: "",
        username: "",
        email: ""
    })

    const userInfoChange = (event) => {
        const { name, value } = event.target
        setUserInfo({...userInfo, [name]: value})
    }

    const saveHandler = () => {
        if (!editMode === true) {
            //save value to backend
            setEditMode(!editMode)
        } 
    };

    const editHandler = (event) => {
        setEditMode(!editMode)
        if (event.target.value === "cancel") {
            setUserInfo({
                firstname: "",
                lastname: "",
                location: "",
                about: "",
                username: "",
                email: ""
            })
        }
    };

    
    return(
        
        <ProfileStyle>
            <div className="left">
                <Link to="/blog">back</Link>
                <p className="title">My Profile</p>
                <div className="back-img"></div>
                <div className="round-pic"><img className="blog-img" src={jennifer} alt=""/></div>
            </div>
            <form className="right">
                <div className="personal-info">
                    <div className="names">
                        <div className="fn-label">
                            <label for="firstaname">Firstname</label>
                            <input className="firstname" name="firstname" onChange= { userInfoChange } value = {userInfo.firstname} required placeholder="firstname" disabled={editMode}/* placeholder="firstname ..." *//>
                        </div>
                        <div className="ln-label">
                            <label for="lastname">Lastname</label>
                            <input className="lastname"  name="lastname" placeholder="lastname" onChange= { userInfoChange } value = {userInfo.lastname} required disabled={editMode}/>
                        </div>
                    </div>
                    <div className="location-box">
                        <label for="location-label">Location</label>
                        <textarea className="location" name="location" onChange= { userInfoChange } value = {userInfo.location} required disabled={editMode} placeholder="type your adress here"/>
                    </div>
                </div>
                <div className="about-box">
                    <label for="about-label">About</label>
                    <textarea className="about" name="about" onChange= { userInfoChange } value = {userInfo.about} required  disabled={editMode} placeholder="give more information about yourself..."/>
                </div>
                <div className="known-credentials">
                    <div className="un-label">
                        <label for="username">Username<span> *</span></label>
                        <input className="username"  name="username" onChange= { userInfoChange } value = {userInfo.username} placeholder="username" /* value="sara_grace" */ disabled={editMode}/>
                    </div>
                    <div className="email-label">
                        <label for="email">Email<span> *</span></label>
                        <input className="email"  name="email" onChange= { userInfoChange } value = {userInfo.email} placeholder="email" /* value="sara@gmail.com" */ disabled={editMode}></input>
                    </div>
                </div>
                <div className="footer-btn">
                    <input type="button" type="submit" className="save" disabled={editMode} value="save" onClick={ saveHandler }/>
                    <input type="button" className="edit" value={ editMode ? "edit" : "cancel"} onClick={ editHandler }/>
                </div>
            </form>
                

        </ProfileStyle>
    )
}
export default Profile;
