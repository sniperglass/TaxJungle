import styled from "styled-components";

export const BlogHeaderCompStyle = styled.section`

display: flex;
flex-direction: row;
width: 100%;
height: 6%;
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
    width: 10%;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    /* border: 1px solid red; */
    list-style: none;
    text-decoration: none;

    a {
        text-decoration: none;

        li{
        padding:22px 10px;
        &:active, &:focus, &:hover{
             font-weight: 700;
             color:black;
             
             outline: none;
            }
        }
    }

}

.nav-center {
    display: flex;
    width: 35%;
    justify-content: space-between;
    /* border: 1px solid blue; */
    list-style: none;
    text-decoration: none;

    a {
        text-decoration: none;
    li{
        padding:22px 10px;
        &:active, &:focus, &:hover{
             font-weight: 700;
             color:black;
             text-decoration: none;
            }
        }
    }
}

.nav-right {
    display: flex;
    padding-right: 20px;
    justify-content: space-between;
    /* border: 1px solid yellow; */
    list-style: none;
    text-decoration: none;

    a {
        text-decoration: none;
    li{
        padding:22px 10px;
        &:active, &:focus, &:hover{
             font-weight: 700;
             color:black;
             text-decoration: none;
            }
        }
    }
}


`
