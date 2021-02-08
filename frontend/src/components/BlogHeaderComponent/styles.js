import styled from "styled-components";

export const BlogHeaderCompStyle = styled.section`

display: flex;
flex-direction: row;
width: 100%;
height: 80px;
/* background-image: linear-gradient(to right top, #3c1e59, #4b296b, #5a357d, #694190, #794ea4); */
/* background-image: linear-gradient(to right top, #051937, #042847, #033857, #054967, #0c5a75); */
background-color: ${props => props.theme.text.mainColor};
/* border: 1px solid blue; */
border-bottom: 1px solid white; 

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
    width: 280px;
    justify-content: space-evenly;
    /* border: 1px solid blue; */
    list-style: none;
    text-decoration: none;

    a {
        color: white;
        text-decoration: none;
    
        padding: 22px 10px;
        &:active, &:focus, &:hover {
             text-decoration: none;
        }
    }
}


.title {
    display: flex;
    font-weight:300;
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
    padding-right: 20px;
    justify-content: space-between;
    /* border: 1px solid green; */
    list-style: none;
    text-decoration: none;
    width: 250px;

    .nav-profile-info {
        display: flex;
        width: 100%;
        padding-left: 20px;
        align-items: center;
        /* border: 1px solid red; */
        list-style: none;
        text-decoration: none;

        a {
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;

            li{
                padding: 22px 10px;
                &:active, &:focus, &:hover {
                    outline: none;
                }
            }
        }

        img {
            border-radius: 50%;
            border: 1px solid ${props => props.theme.text.mainColor};
        }

}



`
