import styled from "styled-components";

export const BlogNavComponentStyle = styled.section`

display: flex;
flex-direction: row;
width: 100%;
height: 6%;
border-top: 1px solid ${props => props.theme.text.mainColor};
background-color: white;
/* border-bottom: 1px solid ${props => props.theme.backgrounds.greyLight} */
/* border: 1px solid blue; */

.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* border: 1px solid blue; */
}

.nav-center {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    /* border: 1px solid yellow; */
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
    margin-right: 10px;
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
 /*    background-color:${props => props.theme.backgrounds.greyLight}; */
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
/*     background-color:${props => props.theme.backgrounds.greyLight}; */
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
    background:${props => props.theme.backgrounds.purple};
}


`
