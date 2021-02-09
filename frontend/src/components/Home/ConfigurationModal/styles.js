import styled from "styled-components";


export const ConfigModalPageStyled = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0);
    display: flex;
    justify-content: flex-end;
    z-index: 99;
    user-select: none;
    /* border: 1px solid red; */
`

export const ConfigModalStyled = styled.section`
    width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.backgrounds.greyLight};
    overflow-y: scroll;
    /* border: 1px solid red; */
    scrollbar-width: 5px;
    scrollbar-color: ${props => props.theme.backgrounds.hover} initial;

    ::-webkit-scrollbar { 
        width: 5px;
        border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.backgrounds.hover};   
        border-radius: 8px;    
    }

    * {
        outline: none;
    }

    label {
        color: ${props => props.theme.text.mainColor};
        font-size: 12px;
        padding: 5px;
        font-weight: 300;
    }

    .close-button {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 40px;
    }

    .x-closebutton {
        outline: none;
        border: none;
    }

    .x-button {
        display: flex;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        margin: 0 auto; 
        width: 480px;
        /* border: 1px solid green; */
    }

    .main-header {
        color: ${props => props.theme.text.mainColor};
        font-size: 26px;
        font-weight: 600;
        height: auto;
        width: 100%;    
    }

    //Slider sections
    input[type=range] {
        -webkit-appearance: none;
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: ${props => props.theme.text.mainColor};
    }

    .slidecontainer,
    .slidecontainer-2 {
        width: 100%;
        margin-top: 30px;
    }

    #slider,
    #slider-2 {
        width: 100%;
        height: 2.5px;
        background-color: ${props => props.theme.text.mainColor};
        outline: none;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    .main-2 {
        width: 100%;
        margin: 0 auto;
    }

    .slidecontainer-label {
        padding-bottom: 5px;
    }

    .slidecontainer-label-2 {
        margin-left: 130px;
    }

    .text-n-numbers {
        display: flex;
        justify-content: space-between;
    }

    .underline {
        display: flex;
        flex-wrap: nowrap;
        border-bottom: 2px solid ${props => props.theme.text.mainColor};
        width: 120px;
        text-align: right;
    }

    .text-field,
    .text-field-2 {
        background-color:${props => props.theme.backgrounds.greyLight};
        border: none;
        text-align: right;
        width: 88px;
        font-size: 16px;
        font-weight: 600;
        color: ${props => props.theme.text.mainColor};
    }
        
    .cash-money,
    .cash-money-2 {
        color: ${props => props.theme.text.mainColor};
        font-weight: 600;    
    }

    //Dropdown Sections
    .required {
        background-color:${props => props.theme.backgrounds.greyLight};
        color: ${props => props.theme.text.mainColor};
        font-size: 15px;
        font-weight: 300;
        padding: 8px;
        border-radius: 8px;
        border-color: ${props => props.theme.text.mainColor};
    }

    //Section 1
    .section-1 {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: auto;
        margin: 30px 0;
    }

    .year-of-birth {
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        font-weight: 300;
        position: relative;

        div {
            top: 30px;
            width: 100%;
        }
    }

    //Section 2
    .section-2 {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        height: auto;
        width: 480px;
        margin: 30px auto 30px auto;
        /* border: 1px solid red; */
    }

    .marital-status {
        width: 60%;
        font-weight: 300;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        div {
            top: 30px;
            width: 100%;
        }
    }

    .children {
        width: 30%;
        font-weight: 300;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        div {
            top: 30px;
            width: 100%;
        }
    }

    //Section 3
    .section-3 {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        height: auto;
        width: 480px;
        margin: 30px auto 0 auto;
        /* border: 1px solid red; */
    }

    .church-affiliation {
        width: 60%;
        font-weight: 300;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        div {
            top: 30px;
            width: 100%;
        }
    }

    .apply-button {
        width: 30%;
        height: 50px;
        margin-top: 30px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        background-color: ${props => props.theme.text.mainColor};
        color: ${props => props.theme.backgrounds.white};
        font-size: 16px;
        font-weight: 200;
        padding: 8px;
        border: none;
        outline: none;
        border-radius: 8px;
        cursor: pointer;
    }

    .apply-button,
    img {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    img {
        width: 20px;
        height: 20px;
    }

    /* input[type=number] {
        line-height: 30px;
        background-color:${props => props.theme.backgrounds.greyLight};
    }

    input[type=number]::-webkit-inner-spin-button {
        width: 50px;
        height: 50px;
    } */

    .roman {
        background-color: orange !important;
    }
`





 


