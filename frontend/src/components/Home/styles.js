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
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:${props => props.theme.backgrounds.mainColor};
    user-select: none;
    overflow: hidden;
    ${props => props.blur ? setBlur : ''}
    /* border: 1px solid red; */

    .map-container {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .main-content {
        display: flex;
        justify-content: space-between;
        height: 90%;
        width: 90%;
        /* border: 1px solid green; */
    }

    .title-search-box {
        display: flex;
        max-width: 725px;
        width: 50%;
        height: 100%;
        flex-direction: column;
        /* border: 1px solid blue; */
    }

    .main-title {
        height: auto;
        font-size: 26px;
        color:${props => props.theme.backgrounds.ternaryColor};
        z-index: 1;
        pointer-events: none;
        display: flex;
        /* border: 1px solid green; */

        h1 {
            font-weight: 600;
            text-align: left;
        }
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
        color:${props => props.theme.backgrounds.ternaryColor};
        border-radius: 8px;
        pointer-events: initial;
        position: relative;
        border: 1px solid ${props => props.theme.backgrounds.ternaryColor};
        background-color:${props => props.theme.backgrounds.mainColor};

        /* border: 1px solid red; */
        
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
        height: 100%;
        width: 260px;
        font-size: 16px;
        color:${props => props.theme.backgrounds.ternaryColor};
        background-color:${props => props.theme.backgrounds.mainColor};
        outline: none;
        border: none;
        /* border: 1px solid yellow; */
    }

    .search-input::placeholder {
        color:${props => props.theme.backgrounds.ternaryColor};
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
        background: ${props => props.theme.backgrounds.ternaryColor};
    }

    .close-btn {
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
        background: ${props => props.theme.backgrounds.ternaryColor};
        overflow: hidden;

        img {
            height: 100%; 
            padding: 10px;
        }
    }

    .config-container {
        display: flex;
        flex-direction: column;
        max-width: 350px;
        height: 100%;
        margin-bottom: auto;
        padding-top: 10px;
        align-items: flex-end;
        justify-content: space-between;
        pointer-events: none;
        /* border: 1px solid red; */

        button, p {
            z-index: 1;
        }
    }

    .config-btn {
        height: 50px;
        width: 50px;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        border: none;
        border-radius: 8px;
        z-index: 1;
        cursor: pointer;
        pointer-events: initial;
        overflow: hidden;

        img {
            height: 110%;
            border-radius: 8px;
            border: 0.5px solid white;
            background-color: ${props => props.theme.backgrounds.mainColor};
        }
    }

    .config-box {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        height: auto;
        margin: 10px 0;
        pointer-events: none;
        /* border: 1px solid yellow; */   
    }

    .category {
        font-size: 12px;
        color:${props => props.theme.backgrounds.ternaryColor};
    }

    .chosen-by-user {
        font-size: 16px;
        color:${props => props.theme.backgrounds.ternaryColor};
        font-weight: 500;
    }

    .blog-link-container {
        width: 100%;
        margin-top: auto;
        /* margin-bottom: 30px; */
        display: flex;
        pointer-events: none;
        z-index: 1;
        line-height: 28px;

        p {
            margin: 10px 0;
            text-align: right;
            color:${props => props.theme.backgrounds.ternaryColor};

            span {
                font-weight: bold;
            }
        }

        a {
            width: 55px;
            margin-left: auto;
            pointer-events: initial;
            margin-top: 3px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-weight: bold;
            font-size: 24px;
            color:${props => props.theme.backgrounds.ternaryColor};
        }
    }

    /* footer {
        display: flex;
        width: 80%;
        justify-content: flex-end;
        align-items: center;

        .footer-bar-left {
            display: flex;
            justify-content: space-evenly;
            width: 140px;

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
        }

        .footer-bar-right {
            max-width: 100%;
            display: flex;
            font-size: 12px;
            justify-content: space-between;
            align-items: center;

            a {
                z-index: 99;
                text-align: center;
                margin-left: 15px;
                color: ${props => props.theme.text.mainColor};
                opacity: 75%;
            }
            a:first-child {
                margin-left: 0;
            }
            a:visited {
                color: ${props => props.theme.text.secondaryColor};
            }
        }
    } */
`
