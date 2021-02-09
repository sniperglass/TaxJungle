import styled from "styled-components";

export const DropDownStyled = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    max-height: 250px;
    background-color: rgba(255, 255, 255, 0);

    .navigation {
        border: 1px solid ${props => props.theme.text.mainColor};
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 50px;
    }

    li {
        display: block;
        transition-duration: 0.5s;
    }
   
    li:hover {
        cursor: pointer;
    }
   
    ul li ul {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        transition: all 0.5s ease;
        margin-top: 1rem;
        left: 0;
        display: none;
    }
   
    ul li:hover > ul,
    ul li ul:hover {
        visibility: visible;
        opacity: 1;
        display: block;
    }
   
    ul li ul li {
        clear: both;
        width: 100%;
    }

    .required {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;    
        background-color:${props => props.theme.backgrounds.greyLight};
        color: ${props => props.theme.text.mainColor};
        font-size: 15px;
        font-weight: 100;
        padding: 8px;
        cursor: pointer;
        border-radius: 8px;
        border-color: ${props => props.theme.text.mainColor};
        text-decoration: none;
        width: 100%;
        height: 100%;

        .select {
            margin: 0;
            padding: 0;
        }

        .down-arrow {
            color: ${props => props.theme.text.mainColor};
            margin: 0;
            padding: 0;
            width: 15px;
        }
    }

    .dropdown {
        margin-top: 10px; 
        margin-bottom: 40px; 
        box-shadow: 0 0 10px ${props => props.theme.text.mainColor};
        border-radius: 8px;
        background-color: ${props => props.theme.backgrounds.secondaryColor};
        z-index: 99;
    }

    #border-wrapper {
        max-height: 180px;
        margin: 5px 0;
        overflow-y: scroll;
        scrollbar-width: 5px;
        scrollbar-color: ${props => props.theme.backgrounds.hover} initial;
    }
    #border-wrapper::-webkit-scrollbar {
        width: 5px;
        border-radius: 8px;
    }
    #border-wrapper::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.backgrounds.hover};   
        border-radius: 8px;    
    }

    #border {
        color: ${props => props.theme.text.mainColor};
        font-weight: 100;
        /* padding: 5px; */
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    #border li {
        padding: 3px;
    }

    .selection {
        height: 40px;
        cursor: pointer;
        padding: 5px 12px;
        display: flex;
        align-items: center;
    }
    .selection:hover {
        transition-duration: 0.5s;
        background-color: ${props => props.theme.backgrounds.hover};
        height: 40px;
    }
`;   