import styled from 'styled-components';

export const PopUpStyled = styled.section`

position: absolute;
width: 120px;
height: auto;
background-color: white;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-end;
margin-top: auto;
padding-left: 5px;
margin-bottom: 60px;
margin-right: 15px;
border: 1px solid ${props => props.theme.text.mainColor};
border-radius: 8px;

.style-component {
    display: flex;
    flex-direction: column;
    height: 120px;
    width: 120px;
    border: 1px solid red;

    .main-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid ${props => props.theme.text.mainColor};

    }
} 

.styling-buttons {
    display: flex;
    align-items: flex-start;
    background-color: white;
    color: ${props => props.theme.text.mainColor};
    border-radius: 4px;
    width: 94%;
    padding: 8px;
    border: none;
    outline: none;
    margin-right: 35px;
    /* border: 1px solid red; */
}

`;
