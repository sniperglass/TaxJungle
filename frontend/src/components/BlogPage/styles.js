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
justify-content: flex-start;


.back-img {
    position: absolute;
    width: 100%;
    height: 340px;
    z-index: -1;
    top: 0;
    background-image: linear-gradient(to right top, #3c1e59, #4b296b, #5a357d, #694190, #794ea4);
}

.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.backgrounds.greyLight};
}

.nav-left {
    display: flex;
    width: 10%;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
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
    width: 40%;
    justify-content: space-around;
    list-style: none;
    text-decoration: none;
}

.nav-center {
    display: flex;
    width: 45%;
    justify-content: space-between;
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
    width: 90%;
    height: 60%;
}

.header-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
}

.category {
    padding-top: 20px;
    color: white;
    font-size: 50px;
}

.headline {
    padding-top: 55px;
    color: white;
    font-size: 25px;
}

.author {
    color: white;
    padding-top: 15px;
    font-size: 11px;
}

.round-pic {
    display: inline-block;
    text-align: center;
    width: 30%;
    height: 150px;
    padding-top: 110px;

    .blog-img {
        border-radius: 800px;
        height: 300px;
        width: 300px;
    }

}

.main-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
}

.article-box{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.article {
    padding-top: 100px;
    padding-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    width: 80%;
    height: auto;
    text-align: justify;
}

.comment-section {
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    padding-top: 100px;
}

.comment-title {
    display: flex;
    width: 40%;
    height: 40px;
    color: ${props => props.theme.text.mainColor};
    font-size: 20px;
}

.addcomment-box {
    display: flex; 
    flex-direction: column;
    align-items: flex-end;
    height: 150px;
    width: 100%;
}

.comment-input {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    border: none;
    width: 100%;
    height: 100px;
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
    cursor: pointer;
}

.comment-container {
    width: 100%;
    max-height: 500px;
    margin: 30px 0;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    .comment-box {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        background-color: white;
        margin-bottom: 10px;

        .single-comment {
            padding: 10px;
        }

        .comment-footer {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            font-size: 12px;
            color: ${props => props.theme.text.mainColor};
            padding: 10px;

            .timestamp {
                margin-left: auto;
            }
        }
    }
}

.social-media-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .no-border {
        outline: none;
    }

    .icon {
        padding: 2px;
    }
}

`;
