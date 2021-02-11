import styled from "styled-components";


export const BlogPageCreateStyle = styled.section`


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
    /* border: 1px solid red; */
    margin-left: 50px;
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
    border-radius: ${props => props.theme.borders.radius};
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
    /* border: 1px solid green; */
}

select{
    width: 300px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0 0 0 3px white;
    border: 5px solid transparent;
}
textarea {
    width: 300px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0 0 0 3px white;
    border: 5px solid transparent;
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

label{
    display: flex;
    outline: none;
    cursor: pointer;
    align-items: center;
    margin-right: 40%;
    justify-content: center;
    font-size: 10px;
    width: 95px;
    height: 35px;
    background-color: ${props => props.theme.text.mainColor};
    border: 1px solid ${props => props.theme.text.mainColor};
    color: white;
    border-radius: ${props => props.theme.borders.radius};
    outline: none;
}


.videoFile {
    outline: none;
    border: none;
    width: 40%;
    height: 100%;
    padding: 5px;
    margin-left: 5px;
    border-radius: ${props => props.theme.borders.radius};
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
    border-radius: ${props => props.theme.borders.radius};
    outline: none;
    
}

.hidden{
    display: none;
}

.x-button {
    margin-top: 7%;
    width: 55px;
    height: 30px;
    background-color: ${props => props.theme.text.mainColor};
    border: 1px solid ${props => props.theme.text.mainColor};
    color: white;
    border-radius: 6px;
    outline: none;
}
.x-image {
    height: 20px;
    width: 20px;
}


#confirmOverlay{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    background: -moz-linear-gradient(rgba(11,11,11,0.1), rgba(11,11,11,0.6)) repeat-x rgba(11,11,11,0.2);
    background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(11,11,11,0.1)), to(rgba(11,11,11,0.6))) repeat-x rgba(11,11,11,0.2);
    z-index:100000;
}

#confirmBox{
    background-color: white;
    width:460px;
    position:fixed;
    left:50%;
    top:50%;
    margin:-130px 0 0 -230px;

    -moz-box-shadow: 0 0 2px rgba(255, 255, 255, 0.6) inset;
    -webkit-box-shadow: 0 0 2px rgba(255, 255, 255, 0.6) inset;
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.6) inset;
    border-radius: ${props => props.theme.borders.radius};
}

#confirmBox h1,
#confirmBox p{
    font:26px/1 'Cuprum','Lucida Sans Unicode', 'Lucida Grande', sans-serif;
    background-color: white;
    padding: 18px 25px;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.6);
    color:#666;
    border-radius: ${props => props.theme.borders.radius};
}

#confirmBox h1{
    display: flex;
    justify-content: center;
    color:#888;
}

#confirmBox p{
    margin-top: -20px;
    display: flex;
    justify-content: center;
    background:none;
    font-size:16px;
    line-height:1.6;
    padding-top: 35px;
}

#confirmButtons{
    padding:15px 0 25px;
    text-align:center;
}

#confirmBox .close-btn{
    display:inline-block;
    background-color: ${props => props.theme.text.mainColor};
    color:white;
    position:relative;
    height: 33px;
    border-radius: ${props => props.theme.borders.radius};

    font:17px/33px 'Cuprum','Lucida Sans Unicode', 'Lucida Grande', sans-serif;

    margin-right: 15px;
    padding: 0 35px 0 40px;
    text-decoration:none;
    border: 1px solid ${props => props.theme.text.mainColor};
}

`
