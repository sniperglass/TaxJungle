import styled from "styled-components";


export const BlogPageCreateStyle = styled.section`


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
    width: 35%;
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
    display: flex;
    justify-content: flex-start;
    width: 30%;
    height: 300px;
    padding-top: 90px;

    .blog-img {
        border-radius: 800px;
        height: 250px;
        width: 250px;
    }
}

.main-content {
    display: flex;
    justify-content: space-between;
    width: 71%;
    height: auto;
    margin-top: 50px;
}
.form {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 7%;

}
.title-inputs {
    display: flex;
    width: 99%;
    height: 50px;
    justify-content: space-between;
    align-items: center;
}

.article-title {
    width: 25%;
    height: 30px;
    padding: 5px;
    outline: none;
    border: none;
  
}

   
.article-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 300px;
    width: 99%;
    margin-top: 25px;
    background-color: white;
  
}

.article-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    font-size: 13px;
    padding-left: 20px;
    padding-top: 20px;
    background-color: white;
    outline: none;
    border: none;
}

.media-input{
    display: flex;
    height: 10%;
    width: 99%;
    justify-content:space-between;
    align-items: center;
    margin-top: 25px;
    
}
.files {
    display: flex;
    width: 60%;
    align-items: center;
    
}

.imageFile {
    display: flex;
    align-items: center;
    outline: none;
    white-space: nowrap;
    width: 60%;
    height: 100%;
        
}

.videoFile {
    outline: none;
    border: none;
    width: 40%;
    height: 100%;
    padding: 5px;
    margin-left: 5px;
    
}

.article-category {
    outline: none;
    border: none;
    width: 25%;
    height: 30px;
    background-color: white;
   
}




.submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 35px;
    background-color: ${props => props.theme.text.mainColor};
    border: 1px solid ${props => props.theme.text.mainColor};
    color: white;
    border-radius: 6px;
    outline: none;
    
}
.confirmation {
    position: absolute;
    background-color: ${props => props.theme.text.mainColor};
    width: 500px;
    height: 500px;
    border: 1px solid red;
    z-index: 99;
}
.hidden{
    display: none;
}

`
