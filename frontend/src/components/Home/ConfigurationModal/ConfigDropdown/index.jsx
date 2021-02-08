import { useState } from 'react'
import { DropDownStyled } from './styles'

//img
import UpArrow from '../../../../assets/icons/up-arrow.svg'
import DownArrow from '../../../../assets/icons/down-arrow.svg'


const ConfigDropdown = (props) => {
    const [selectedOption, setSelectedOption] = useState(props.options[0])

    const onNavigationClicked = (e) => {
        if (props.visible) {
            props.activeHandler("")
        } else {
            props.activeHandler(props.title)
        }
    }

    const onOptionClicked = (e) => {
        const {id} = e.target
        setSelectedOption(id)
        props.activeHandler("")
        if (props.optionClickHandler) {
            props.optionClickHandler(id)
        }
    };

    return (
        <DropDownStyled>
            <nav className="navigation">
                <div className="required" onClick={onNavigationClicked}>
                    <p className="select">{selectedOption}</p>
                    {!props.visible ? 
                        <img src={DownArrow} className="down-arrow" alt="arrow down" /> 
                        : <img src={UpArrow} className="down-arrow" alt="arrow up" /> 
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

export default ConfigDropdown;

