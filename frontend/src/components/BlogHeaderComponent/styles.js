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
    align-items: center;
    list-style: none;
    height: 45%;
    width: 240px;
    text-decoration: none;
    /* border: 1px solid green; */

    .nav-profile-info {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
        list-style: none;
        text-decoration: none;
        /* border: 1px solid red; */

        .profile-btn {
            display: flex;
            align-items: center;
            background-color: transparent;
            border-style: none;
            font-size: 15px;
            width: 220px;;
            /* border: 1px solid blue; */
            margin-right: 10px;
            color: white;
            justify-content: center;
            outline: none;
            cursor: pointer;
        }

            li{
                &:active, &:focus, &:hover {
                    outline: none;
                }
            }
        }

}

    .avatar {
        display: flex;
        background-size: cover;
        margin-left: 10px;
        border-radius: 50%;
        height: 40px;
        width: 40px;
        justify-content: space-between;
        align-items: center;
        border: 1px solid ${props => props.theme.text.mainColor};
    }

.positionSettingsButton {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 120px;
    z-index: 99;
    padding-top: 20px;
    margin-right: -60px;
    cursor: pointer;
    /* border: 1px solid red; */
}

    a {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        margin-right: 30px;
    }

`
