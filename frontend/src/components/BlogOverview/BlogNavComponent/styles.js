import styled from "styled-components";

export const BlogNavComponentStyle = styled.section`

display: flex;
flex-direction: row;
width: 100%;
height: 50px;
border-top: 1px solid ${props => props.theme.text.mainColor};
background-color: white;
/* border: 1px solid blue; */

.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid blue; */
}

.nav-left {
    display: flex;
    width: 350px;
    justify-content: space-evenly;
    align-items: center;
    /* border: 1px solid blue; */
    list-style: none;
    text-decoration: none;
    margin-left: 20px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        height: 30px;
        width: 30px;
        font-weight: 300;
        border-radius:8px;
        border: 1px solid ${props => props.theme.text.mainColor};
        background-color: ${props => props.theme.text.mainColor};
        color: white;
    }

    a {
        color: ${props => props.theme.text.mainColor};
        text-decoration: none;
    

        &:active, &:focus, &:hover {
             text-decoration: none;
        }
    }
}

.nav-center {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 12%;
    /* border: 2px solid yellow; */
    list-style: none;
    text-decoration: none;

    a {
        color: ${props => props.theme.text.mainColor};
        text-decoration: none;
        align-items: center;
        padding-top: 12px;
        /* border-bottom: 1px solid red; */
        height: 50px;
    
        &:active, &:focus, &:hover {
             text-decoration: none;
             
        }
    }
}

.category-wrapper {
    display: flex;
    width: 55%;
    justify-content: space-between;
    /* border: 1px solid yellow; */
}

.search-wrapperbox {
    height: 30px;
    width: 42%;
    display: flex;
    z-index: 1;
    margin-right: 25px;
    pointer-events: none;
    justify-content: flex-end;
    /* border: 1px solid orange; */
}

.search-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 200px;
    color:${props => props.theme.text.mainColor};
    background-color: white;
    border-radius: 8px;
    pointer-events: initial;
    /* border: 1px solid red; */
}

.search-input {
    height: 20px;
    width: 160px;
    font-size: 16px;
    color:${props => props.theme.text.mainColor};
    padding: 0 15px;
    border: none;
    outline: none;
    /* border: 1px solid yellow; */
}

.search-input::placeholder {
    color:${props => props.theme.text.mainColor};
}

.search-btn {
    height: 30px;
    width: 30px;
    border-radius: 8px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
    background:${props => props.theme.text.mainColor};
}

`
