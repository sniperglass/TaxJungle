import React, { useState} from 'react';
import {Link} from 'react-router-dom';
//img

import DataHeaderComp from '../SignIn/DataHeaderComp';
import DataTitleComp from '../SignIn/DataTitleComp';
import SignInFormComp from '../SignIn/SignInFormComp';

//css
import {SignInStyle} from '../SignIn/styles';

const SignIn =()=>{


    return(
        <SignInStyle>
            <div className="background-pic"></div>
            <div className="main-content">
                <DataHeaderComp />
                <section className="form-wrapper">
                    <div className="form-container">
                        <DataTitleComp />
                        <SignInFormComp />
                    </div>
                </section>                
            </div>
        </SignInStyle>
    )
}
export default SignIn;
