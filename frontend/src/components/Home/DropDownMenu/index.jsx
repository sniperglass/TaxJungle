// import React, { useState } from 'react';
import { DropDownStyled } from './styles';

//img
// import UpArrow from '../../../assets/icons/up-arrow.svg';
// import DownArrow from '../../../assets/icons/down-arrow.svg';
import { useDispatch, useSelector } from 'react-redux';
import { searchMapAction } from '../../../store/actions/mapActions'


const DropDownMenu = (props) => {
    const taxes = useSelector(state => state.mapReducer.taxes) 
    const dispatch = useDispatch()

    // const [toggleDropDownMenu, setToggleDropDownMenu] = useState(props.visible);
    // const [selectedOption, setSelectedOption] = useState("");

    const onOptionClicked = (e) => {
        // const {id} = e.target;
        // setSelectedOption(id);
        // setToggleDropDownMenu(false);
        const mun = taxes.filter(mun => mun.gemeinde === e.target.id)[0]
        dispatch(searchMapAction(mun))
    }

    return (
        <DropDownStyled>
            {/* <nav className="navigation" style={{display: `${props.nav ? "flex" : "none"}`}} >
                <div className="required" onClick={ () => setToggleDropDownMenu(!toggleDropDownMenu)}>
                    <p className="select">{selectedOption}</p>
                    {!props.visible ? 
                        <img src={DownArrow} className="down-arrow" alt="arrow down" /> 
                        : <img src={UpArrow} className="down-arrow" alt="arrow up" /> 
                    }   
                </div>
            </nav> */}
            {props.visible ? 
            <div className="dropdown">
                <div id="border-wrapper">
                    <ul id="border">
                        {props.options.map((option, index) => (
                            <div className="selection" key={index} id={option} onClick={onOptionClicked}>{option}</div>
                        ))}
                    </ul>   
                </div>
            </div> : ""}
        </DropDownStyled> 
    )
}

export default DropDownMenu;

