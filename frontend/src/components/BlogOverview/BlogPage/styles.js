import styled from "styled-components";


export const BlogPageStyle = styled.section`

position: absolute;
z-index: -1;
width: 100vw;
height:100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:${props => props.theme.backgrounds.greyLight};
/* border: 1px solid red; */
justify-content: flex-start;

.title {
    display: flex;
    font-weight:500;
    font-size:36px;
    width: 100%;
    height: 15%;
    color: white;
    background-image: linear-gradient(to right top, #3c1e59, #4b296b, #5a357d, #694190, #794ea4);
    /* color:${props => props.theme.text.mainColor}; */
    background-color: ${props => props.theme.text.mainColor};
    align-items: center;
    justify-content: center;
    /* border: 1px solid green; */
}

.main-container {
    /* position: relative; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85%;
    /* border: 1px solid red; */ 
}

.card-box {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 80%;
    /* border: 1px solid red; */
}
.back-img {
    position: fixed;
    width: 100%;
    height: 300px;
    z-index: -1;
    bottom: 0;
    background-image: linear-gradient(to right top, #3c1e59, #4b296b, #5a357d, #694190, #794ea4);
    /* background-color: ${props => props.theme.text.mainColor}; */
    /* border: 1px solid yellow;  */
}
`
