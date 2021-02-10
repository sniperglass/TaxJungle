import styled from "styled-components";

export const BlogPageStyle = styled.section`

position: absolute;
z-index: -1;
width: 100%;
min-height: 100%; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:${props => props.theme.backgrounds.secondaryColor};
justify-content: flex-start;

.back-img {
    position: absolute;
    width: 100%;
    height: 340px;
    z-index: -1;
    top: 0;
    /* background-image: linear-gradient(to right top, #3c1e59, #4b296b, #5a357d, #694190, #794ea4); */
    /* background-image: linear-gradient(to right top, #051937, #042847, #033857, #054967, #0c5a75); */
    background-color: ${props => props.theme.text.mainColor};
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
    margin-left: 50px;
    /* border: 1px solid yellow; */
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
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        height: 300px;
        width: 300px;
        background-size: cover;
    }

}

.main-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
    /* border: 1px solid yellow; */
}

.article-box{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: auto;
    /* border: 1px solid green; */
}

.article {
    padding-top: 100px;
    padding-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    width: 90%;
    height: auto;
    text-align: justify;
    /* border: 1px solid red; */
}

.image-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: auto;
    max-width: 90%;
    /* border: 1px solid purple; */
}

.uploaded-pic {
    margin: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 160px;
    width: 160px;
    background-size: cover;
    /* border: 1px solid orange; */
}

.player {
    display: flex;
    //border: 1px solid purple;
    margin-right: 7%;
    margin-left: 5%;
    height: 100%;
    width: 70%;
    /* border: 1px solid yellow; */
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
    height: 160px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: ${props => props.theme.borders.radius};
    /* border: 1px solid red; */
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
    border-radius: ${props => props.theme.borders.radius};
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
    border-radius: ${props => props.theme.borders.radius};
    outline: none;
    cursor: pointer;
}

.comment-container {
    width: 100%;
    max-height: 500px;
    margin-bottom: 20px;
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
        border-radius: ${props => props.theme.borders.radius};

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
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .no-border {
        outline: none;
    }

}

`;
