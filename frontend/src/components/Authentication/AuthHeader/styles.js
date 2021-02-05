import styled from "styled-components";


export const AuthHeaderStyle = styled.header`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px 20px 0 20px;
    user-select: none;
    /* border: 1px solid red; */

    div {
        display: flex;
        flex-direction: row;
    }

    p {
        display: flex;
        height: 40px;
        width: 200px;
        font-size: 14px;
        justify-content: flex-end;
        align-items: center;
        margin-right: 20px;
        margin-top: 30px;
        color: white;
        /* border: 1px solid red; */
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 130px;
        border-radius: ${props => props.theme.borders.radius};
        border: none;
        outline: none;
        text-decoration: none;
        margin-top: 30px;
        margin-right: 20px;
        background-color: ${props => props.theme.backgrounds.purple};
        font-size: 12px;
        color: white;
        cursor: pointer;
        /* border: 1px solid red; */
    }

    div:first-child > a {
        background-color: transparent;
        width: 50px;
        margin-left: 20px;
        font-size: 16px;
    }
`
