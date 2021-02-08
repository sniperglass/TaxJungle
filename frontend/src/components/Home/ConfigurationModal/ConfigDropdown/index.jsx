import { useState } from 'react'
import { DropDownStyled } from './styles'

//img
import UpArrow from '../../../../assets/icons/up-arrow.svg'
import DownArrow from '../../../../assets/icons/down-arrow.svg'


const ConfigDropdown = (props) => {
    const [toggleDropDownMenu, setToggleDropDownMenu] = useState(false)
    const [selectedOption, setSelectedOption] = useState(props.options[0])

    const onOptionClicked = (e) => {
        const {id} = e.target
        setSelectedOption(id)
        setToggleDropDownMenu(false)
        if (props.optionClickHandler) {
            props.optionClickHandler(selectedOption)
        }
    };

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

export default ConfigDropdown;

