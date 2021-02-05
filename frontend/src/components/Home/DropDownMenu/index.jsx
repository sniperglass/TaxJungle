import React, { useState } from 'react';
import { DropDownStyled } from './styles';

//img
import UpArrow from '../../../assets/icons/up-arrow.svg';
import DownArrow from '../../../assets/icons/down-arrow.svg';


const DropDownMenu = (props) => {

    const [toggleDropDownMenu, setToggleDropDownMenu] = useState(props.visible);
    const [selectedOption, setSelectedOption] = useState("");

    const onOptionClicked = (e) => {
        const {id} = e.target;
        setSelectedOption(id);
        setToggleDropDownMenu(false);
    };

    return (
        <DropDownStyled>
            <nav className="navigation" style={{display: `${props.nav ? "flex" : "none"}`}} >
                <div className="required" onClick={ () => setToggleDropDownMenu(!toggleDropDownMenu)}>
                    <p className="select">{selectedOption}</p>
                    {!props.visible ? 
                        <img src={DownArrow} className="down-arrow"/> 
                        : <img src={UpArrow} className="down-arrow"/> 
                    }   
                </div>
            </nav>
            {props.visible ? 
            <div className="dropdown">
                <div id="border-wrapper">
                    <ul id="border">
                        {props.options.map((option, index) => (
                            <div className="selection" id={option} key={index} onClick={onOptionClicked}>{option}</div>
                        ))}
                    </ul>   
                </div>
            </div> : ""}
        </DropDownStyled> 
    )
}

export default DropDownMenu;

