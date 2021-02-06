import React, { useState } from 'react';
import { DropDownStyled } from './styles';

//img
import UpArrow from '../../../assets/icons/up-arrow.svg';
import DownArrow from '../../../assets/icons/down-arrow.svg';


const DropDownMenu = () => {

    const [toggleDropDownMenu, setToggleDropDownMenu] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Single");

    const onOptionClicked = (e) => {
        const {id} = e.target;
        setSelectedOption(id);
        setToggleDropDownMenu(false);
    };

    const options = ['Single', 'Married', 'Cohabitation'];

    return (
        <DropDownStyled>
            <nav className="navigation">
                <div className="required" onClick={ () => setToggleDropDownMenu(!toggleDropDownMenu)}>
                    <p className="select">{selectedOption}</p>
                    {!toggleDropDownMenu ? 
                        <img src={DownArrow} className="down-arrow" alt="arrow down" /> 
                        : <img src={UpArrow} className="down-arrow" alt="arrow up" /> 
                    }   
                </div>
            </nav>
            {toggleDropDownMenu ? 
            <div className="dropdown">
                <ul id="border">
                    {options.map((option, index) => (
                    <div className="selection" id={option} key={index} onClick={onOptionClicked}>{option}</div>
                    ))}
                </ul>   
            </div> : ""}
        </DropDownStyled> 
    )
}

export default DropDownMenu;

