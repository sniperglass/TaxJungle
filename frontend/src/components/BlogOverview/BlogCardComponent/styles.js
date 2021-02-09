import styled from "styled-components";

export const BlogCardCompStyle = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    max-width: 300px;
    height: 400px;
    margin: 10px;
    background-color: white;
    /* border: 1px solid red; */
    border-radius: 8px;
    box-shadow: 
            0 1px 10px rgba(0,0,0,0.6), 
            0 0 0 1px rgba(221,221,221,0.75);
    :hover {
    transform: scale(1.05, 1.05);
    -ms-transform: scale(1.05, 1.05); /* IE 9 */
    -webkit-transform: scale(1.05, 1.05);
    transition: transform .5s ease;
	}

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
.img{
    width: 100%;
    height: 40%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
