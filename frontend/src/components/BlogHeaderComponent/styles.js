import styled from "styled-components";

export const BlogHeaderCompStyle = styled.section`

display: flex;
flex-direction: row;
width: 100%;
height: 80px;
background-color: ${props => props.theme.text.mainColor};
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
    justify-content: space-evenly;
    list-style: none;
    text-decoration: none;
    /* border: 1px solid blue; */

    a {
        color: white;
        text-decoration: none;
        margin-left: 30px;
        &:active, &:focus, &:hover {
             text-decoration: none;
        }
    }
}


.title {
    display: flex;
    font-weight:400;
    font-size:36px;
    width: 100%;
    height: 100%;
    color: white;
    align-items: center;
    justify-content: center;
    /* border: 1px solid green; */
}

.nav-right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    text-decoration: none;
    /* border: 1px solid green; */

    .nav-profile-info {
        display: flex;
        width: 100%;
        align-items: center;
        list-style: none;
        text-decoration: none;
        /* border: 1px solid red; */

        a {
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            margin-right: 30px;

            li{
                &:active, &:focus, &:hover {
                    outline: none;
                }
            }
        }

        img {
            margin-left: 10px;
            border-radius: 50%;
            border: 1px solid ${props => props.theme.text.mainColor};
        }

    }
}


`
