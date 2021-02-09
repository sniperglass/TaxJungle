import React, { useState } from 'react';
//import { SettingsButtonStyled } from './styles';
import "./styles.css";


//IMAGES
import filter from '../../assets/icons/filter.svg';


const SettingsButton = ({settingsButtonHandler}) => {

   
    return (                
        <button className="config-btn"  onClick={settingsButtonHandler}><img src={filter} height="50px" className="filter" alt="manage config"></img></button>                                      
    )
}

export default SettingsButton;
