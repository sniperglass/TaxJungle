import styled from "styled-components";

export const BlogCardCompStyle = styled.section`

display: flex;
flex-direction: column;
align-items: center;
width: 380px;
height:500px;
background-color: white;
/* border: 1px solid red; */
border-radius:3px;
box-shadow: 
        0 1px 10px rgba(0,0,0,0.3), 
        0 0 0 1px rgba(221,221,221,0.75);

.taxes1-img{
    width: 380px;
    /* border: 1px solid orange; */
}

.text-box {
    display: flex;
    width: 80%;
    height: 50%;
    flex-direction: column;
    justify-content: space-evenly;
    /* border: 1px solid orange; */

    .blog-question {
        font-size: 25px;
    }

    .author {
        color:${props => props.theme.text.mainColor};
    }
}
.readmore {
        display: flex;
        width: 80%;
        justify-content: flex-end;
        font-size: 14px;
        color: grey;
        padding-bottom: 30px;
        /* border: 1px solid orange; */
    }
`
