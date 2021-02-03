import React, { useState} from 'react';
import {Link} from 'react-router-dom';
//img
import email from '../../../assets/icons/email.png';
import lock1 from '../../../assets/icons/lock1.png';


//css
import {SignInFormCompStyle} from '../SignInFormComp/styles';

const SignInFormComp =()=>{


    return(
        <SignInFormCompStyle /* onSubmit={ handleSubmit } */>
            <div className="data-entry">
                <div className="input-field">
                    <img className="input-field-img" src={email} alt="" height="45px"></img>
                    <input type="text" placeholder="email" /* value={ email }  */className="email" /* onChange={ handleEmail } */></input>
                </div>
                <div className="input-field">
                    <img className="input-field-img" src={lock1} alt="" height="50px"></img>
                    <input type="password" placeholder="password"/* value={ password } */ className="password" /* onChange={ handlePassword } */></input>
                </div>  
            </div>
            <footer className="footer-right">
                    <button type="submit" className="sign-in-btn">SIGN IN</button>
            </footer>    
        </SignInFormCompStyle>
    )
}
export default SignInFormComp;
