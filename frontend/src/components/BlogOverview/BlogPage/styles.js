import styled from "styled-components";


export const BlogPageStyle = styled.section`


position: absolute;
z-index: -1;
width: 100vw;
min-height: 100%; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:${props => props.theme.backgrounds.greyLight};
/* border: 1px solid red; */
justify-content: flex-start;


.back-img {
    position: absolute;
    width: 100%;
    height: 340px;
    z-index: -1;
    top: 0;
    background-image: linear-gradient(to right top, #3c1e59, #4b296b, #5a357d, #694190, #794ea4);
    /* background-color: ${props => props.theme.text.mainColor}; */
    /* border: 1px solid yellow;  */
}

.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.backgrounds.greyLight};
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
        color: ${props => props.theme.text.mainColor};

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

.header-right-wrapper {
    display: flex;
    width: 35%;
    justify-content: space-around;
    /* border: 1px solid blue; */
    list-style: none;
    text-decoration: none;
}

.nav-center {
    display: flex;
    width: 45%;
    justify-content: space-between;
    /* border: 1px solid green; */
    list-style: none;
    text-decoration: none;

    a {
        text-decoration: none;
        color: ${props => props.theme.text.mainColor};
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
    width: 10%;
    padding-right: 20px;
    justify-content: space-between;
    /* border: 1px solid yellow; */
    list-style: none;
    text-decoration: none;

    a {
        text-decoration: none;
        color: ${props => props.theme.text.mainColor};
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

.article-info {
    display: flex;
    justify-content: center;
    /* border: 1px solid yellow; */
    width: 90%;
    height: 60%;
}

.header-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    /* border: 1px solid red; */
}

.category {
    padding-top: 20px;
    /* border: 1px solid white; */
    color: white;
    font-size: 50px;
}

.headline {
    padding-top: 55px;
    /* border: 1px solid white; */
    color: white;
    font-size: 25px;
}

.author {
    /* border: 1px solid white; */
    color: white;
    padding-top: 15px;
    font-size: 11px;
}

.round-pic {
    display: flex;
    justify-content: flex-start;
    width: 30%;
    height: 300px;
    padding-top: 110px;
    /* border: 1px solid yellow; */

    .blog-img {
        border-radius: 800px;
        height: 300px;
        width: 300px;
        /* border: 1px solid yellow; */
    }
}

.main-content {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    width: 100%;
    height: auto;
}

.article-box{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid blue; */
    width: 100%;
    height: 100%;
}

.article {
    padding-top: 100px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    /* border: 1px solid yellow; */
    width: 80%;
    height: auto;
    text-align: justify;
    /* color: dimgray; */
}

.comment-section {
    display: flex;
    flex-direction: column;
    /* border: 1px solid green; */
    width: 35%;
    height: 100%;
    padding-top: 100px;
}

.comment-title {
    display: flex;
    /* border: 1px solid red; */
    width: 40%;
    height: 40px;
    color: ${props => props.theme.text.mainColor};
    font-size: 20px;
}

.addcomment-box {
    display: flex; 
    flex-direction: column;
    align-items: flex-end;
    height: 100px;
    width: 100%;
    /* border: 1px solid green;  */
}

.comment-input {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    border: none;
    width: 100%;
    resize: none;
    outline: none;
}

.comment-btn {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 40px;
    background-color: ${props => props.theme.text.mainColor};
    border: 1px solid ${props => props.theme.text.mainColor};
    color: white;
    border-radius: 6px;
    outline: none;
}

.comment-box {
    display: flex;
    flex-direction: column;
    /* border: 1px solid yellow; */
    width: 100%;
    height: auto;
    background-color: white;
    margin-top: 20px;
    margin-bottom: 20px;

    .single-comment {
        padding: 10px;
    }

    .comment-by {
        padding: 10px;
        color: ${props => props.theme.text.mainColor};
    }
}
`
