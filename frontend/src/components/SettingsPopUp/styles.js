import styled from 'styled-components';

export const PopUpStyled = styled.section`

position: absolute;
width: 120px;
height: 75px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 60px;
border: 1px solid ${props => props.theme.text.mainColor}; 
border-radius: 8px;


.main-content {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 118px;
    align-items: center;
    justify-content: flex-start;
    /* border: 1px solid green;  */
    background-color: white;
    border-radius: 8px;
}


.styling-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: ${props => props.theme.text.mainColor};
    border-radius: 8px;
    width: 115px;
    padding: 8px;
    border: none;
    outline: none;
    cursor: pointer;
   /*  border: 1px solid blue; */
}

`;
