import React, { useState } from 'react';
import { DropDownStyled } from './styles';

//img
import UpArrow from '../../../assets/icons/up-arrow.svg';
import DownArrow from '../../../assets/icons/down-arrow.svg';

const DropDownMenu = () => {

    return (
        <DropDownStyled>
            <nav className="navigation">
                <ul className="required" id="status">
                    <li>Single
                        <ul>
                            <img src={DownArrow} className="down-arrow"/>
                            <li><a href="#">Married</a></li>
                            <li><a href="#">Cohabitation</a></li>
                            <li><a href="#">Cohabitation</a></li>
                            
                        </ul>
                    </li>        
                </ul>
            </nav>
         </DropDownStyled> 
    )
}

export default DropDownMenu;

