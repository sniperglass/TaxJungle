import styled from 'styled-components';

export const PopUpStyled = styled.section`

position: relative;
width: 150px;
height: auto;
background-color: #F4F6F6;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-end;
margin-top: auto;
margin-bottom: 10px;
margin-right: 15px;
border: 1px solid #573E8C;
border-radius: 8px;

.style-component {
    display: flex;
    flex-direction: column;
    height: 120px;
    width: 150px;

    .main-content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    //flex-wrap: wrap;
    border: 1px solid purple;

    }
} 

.styling-buttons {
    display: flex;
    align-items: center;
    background-color: #F4F6F6;
    color: ${props => props.theme.text.mainColor};
    border-radius: 4px;
    padding: 8px;
    border: none;
    outline: none;
    margin-right: 13px;
}

/*
.close-button {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-bottom: 53px;
}

.x-closebutton {
    outline: none;
    border: none;
}

.x-button {
    display: flex;
    width: 20px;
    height: 20px;
    cursor: pointer;
} 
 */

`;
