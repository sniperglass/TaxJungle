import styled from "styled-components";

const setBlur = () => {
    return `
        -webkit-filter: blur(2px);
        -moz-filter: blur(2px);
        -o-filter: blur(2px);
        -ms-filter: blur(2px);
        filter: blur(2px);  
    `
}

export const HomeStyle = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:${props => props.theme.backgrounds.greyLight};
    user-select: none;
    /* border: 1px solid red; */
    ${props => props.blur ? setBlur : ''}

.map-container {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.main-content {
    display: flex;
    height: 85%;
    width: 80%;
    /* border: 1px solid green; */
}

.title-search-box {
    display: flex;
    width: 80%;
    height: 100%;
    flex-direction: column;
    /* border: 1px solid blue; */
}

.main-title {
    height: auto;
    width: 70%;
    font-size: 28px;
    font-weight: 300;
    color:${props => props.theme.text.mainColor};
    z-index: 1;
    pointer-events: none;
    /* border: 1px solid green; */
}

.search-wrapperbox {
    height: 50px;
    width: 340px;
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    z-index: 99;
    pointer-events: none;
    /* border: 1px solid orange; */

}

.search-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 340px;
    color:${props => props.theme.text.mainColor};
    background-color:${props => props.theme.backgrounds.greyLight};
    border-radius: 8px;
    border: 1px solid ${props => props.theme.text.mainColor};
    pointer-events: initial;
    /* border: 1px solid red; */
    position: relative;
    
    div {
        width: 100%;
        top: 100%;
    }
}

.location-pic {
    border: none;
    padding: 18px 12px 10px 12px;
    height: 50px;
    margin: auto 0;
}

.search-input {
    height: 45px;
    width: 260px;
    font-size: 16px;
    color:${props => props.theme.text.mainColor};
    background-color:${props => props.theme.backgrounds.greyLight};
    border: none;
    outline: none;
    /* border: 1px solid yellow; */
}

.search-input::placeholder {
    color:${props => props.theme.text.mainColor};
}

.search-btn {
    height: 100%;
    width: 50px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
    background:${props => props.theme.backgrounds.purple};
}

.right-config-glimpse {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 40%;
    padding-top: 15px;
    align-items: flex-end;
    justify-content: space-between;
    /* border: 1px solid red; */

    button, p {
        z-index: 1;
    }
}

.config-btn {
    height: 50px;
    width: 50px;
    border-radius: 12px;
    border: none;
    outline: none;
    z-index: 1;
    cursor: pointer;
}

.config-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100px;
    pointer-events: none;
    /* border: 1px solid yellow; */   
}

.category {
    font-size: 12px;
    color:${props => props.theme.text.mainColor};
}

.chosen-by-user {
    font-size: 16px;
    color:${props => props.theme.text.mainColor};
    font-weight: 500;
}

footer {
    display: flex;
    width: 80%;
    justify-content: space-between;
    padding-bottom: 50px;
    /* border: 1px solid red; */

    div > * {
        z-index: 1;
    }
}

.footer-bar-left {
    display: flex;
    justify-content: space-evenly;
    width: 140px;
    /* border: 1px solid yellow; */
}

.made-by {
    color: #5C605E;
}

.company {
    display: flex;
}

.keen {
    color: #5C605E;
    font-weight: 700;
}

.underscore {
    color: #9BC36C;
}

.footer-bar-right {
    display: flex;
    width: 50%;
    font-size: 12px;
    justify-content: space-between;
    padding-right: 50px;
    /* border: 1px solid green; */
}
`
