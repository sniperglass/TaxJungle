import React from 'react';
import { PopUpStyled } from './styles';

//img
import CloseButton from '../../assets/icons/x-icon.svg';


const PopUp = ({settings}) => {
    
    return (

        <PopUpStyled>

                <div className="styled-component">
                    <div className="main-content">
                        {settings.map((setting, index) => <button className="styling-buttons" onClick={setting.eventHandler} key={index}>{setting.feature}</button>)}
                    </div>
                </div>
            {/*
                <div className="close-button">
                        <button type="submit" className="x-closebutton"><img src={CloseButton} className="x-button" alt=""></img></button>
                        </div> */}
        </PopUpStyled>
    )
}

export default PopUp;

