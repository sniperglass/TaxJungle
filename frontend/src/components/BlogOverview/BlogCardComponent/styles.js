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


a {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 14px;
    color: grey;
    /* border: 1px solid orange;  */
    text-decoration: none;
}

/* a:hover{
    box-shadow: -11px -18px 17px -2px rgba(0,0,0,0.63);
}
 */
.taxes1-img{
    width: 380px;
    /* border: 1px solid orange; */
}

.text-box {
    display: flex;
    width: 80%;
    height: 45%;
    flex-direction: column;
    justify-content: space-evenly;
    /* border: 1px solid orange; */

    .blog-question {
        font-size: 25px;
        color: black;
    }

    .author {
        color:${props => props.theme.text.mainColor};
    }
}

.readmore {
    display: flex;
    justify-content: flex-end;
    width: 80%;
    /* border: 1px solid red; */
}


`
