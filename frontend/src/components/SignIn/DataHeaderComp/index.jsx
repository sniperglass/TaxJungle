import React, { useState} from 'react';
import {Link} from 'react-router-dom';
//img

//css
import {DataHeaderCompStyle} from '../DataHeaderComp/styles';

const DataHeaderComp =()=>{


    return(
        <DataHeaderCompStyle>
            <p className="no-account">Don't have an account?</p>
            <Link to='/SignUp'><button className="sign-up-btn">SIGN UP</button></Link>
        </DataHeaderCompStyle>
    )
}
export default DataHeaderComp;
