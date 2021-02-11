import styled from "styled-components";

export const ProfileStyle = styled.section`


position: absolute;
z-index: -1;
width: 100vw;
height: 100%; 
display: flex;
justify-content: center;
align-items: center;
background-color:${props => props.theme.backgrounds.secondaryColor};
/* border: 1px solid red; */
justify-content: flex-start;

.left {
    display: flex;
    flex-direction: column;
    width: 30%;
    min-height: 100%;
    background-color: ${props => props.theme.text.mainColor};
    /* border: 1px solid yellow; */
}

.back-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 50px;
/*     border: 1px solid yellow; */
    padding-top: 50px;
    padding-left: 50px;
}

a {
    text-decoration: none;
    color: white;

}

.title {
    display: flex;
    width: 100%;
    margin-top: 70px;
    opacity: 1;
    padding: 10px;
    color: white;
    justify-content: center;
    font-size: 60px;
    font-weight: 700;
}

.round-pic {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 70%;
    margin-top: 15%; 
    /* border: 1px solid yellow; */
}

.label-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 300px;
    background-color: transparent;
    /* border: 1px solid red; */
    border-style: none;
    outline: none;
    border-radius: 50%;
}

.change-pic {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 300px;
    /* border: 1px solid green; */
    background-color: transparent;
}

input.pic-input:focus {
    outline-width: 0;
}

.blog-img {
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    height: 280px;
    width: 280px;
    background-size: cover;
    cursor: pointer;
    /* border: 1px solid red; */
}

.right {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 55%;
    /* border: 1px solid blue; */
    margin-left: 150px;
}

.personal-info {
    margin-top: 70px;
    display: flex;
    width: 60%;
    height: 28%;
    justify-content: space-between;
   /*  border: 1px solid yellow; */
}

.names {
    display: flex;
    width: 40%;
    flex-direction: column;
    /* border: 1px solid red; */
}


.un-label,
.email-label {
    display: flex;
    height: 50%;
    width: 40%;
    flex-direction: column;
    font-size: 14px;
    /* border: 1px solid green; */
}
.fn-label,
.ln-label {
    margin-top: 10px;
    display: flex;
    height: 40%;
    width: 100%;
    flex-direction: column;
    font-size: 13px;
    /* border: 1px solid green; */
}


.firstname,
.lastname {
    margin-top: 20px;
    padding: 7px;
    border: none;
    width: 100%;
    height: 40px;
    outline: none;
    border-radius: 8px;
    font-size: 16px;
}

.username,
.email {
    outline: none;
    margin-top: 20px;
    padding: 7px;
    border: none;
    width: 100%;
    height: 40px; 
    /* border: 1px solid yellow; */
    color: ${props => props.theme.text.mainColor};
    border-radius: 8px;
    font-size: 16px;
}


.location-box {
    margin-top: 10px;
    display: flex;
    height: 83%;
    width: 40%;
    flex-direction: column;
    font-size: 13px;
    /* border: 1px solid blue; */
}

.location {
    margin-top: 20px;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 7px;
    border-radius: 8px;
    font-size: 16px;
}

.location::placeholder,
.about::placeholder {
    font-size: 13px;
}

.about-box {
    width: 60%;
    height: 20%;
    display: flex;
    font-size: 16px;
    flex-direction: column;
    /* border: 1px solid red; */

}

.about-pic {
    width: 115%;
    height: 20%;
    justify-content: space-between;
    display: flex;
    font-size: 13px;
    /* border: 1px solid yellow; */
    outline: none;
}

.pic-input {
    opacity: 0;

}

.about {
        margin-top: 20px;
        padding: 7px;
        width: 100%;
        height: 100px;
        border: none;
        outline: none;
        border-radius: 8px;
        font-size: 16px;
    }


.known-credentials {
    margin-top: 20px;
    width: 60%;
    height: 180px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
}

.footer-btn {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 10%;
    width: 400px;
    /* border: 1px solid red; */
}

.edit,
.save {
    border: none;
    color: white;
    margin: 20px;
    border-radius: 8px;
    background-color: ${props => props.theme.text.mainColor};
    width: 120px;
    height: 40px;
    outline: none;
    cursor: pointer;
}

.positionSettingsButton {
    display: flex;
    position: relative;
    z-index: 99;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: auto;
    margin-bottom: 100px;
    padding-right: 100px;
    margin-right: 20px;
    height: 200px;
    width: 200px;
    /* border: 1px solid red; */
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

#confirmBox .yes-btn{
    display:inline-block;
    background-color: white;
    color:${props => props.theme.text.mainColor};
    position:relative;
    height: 33px;
    border-radius: ${props => props.theme.borders.radius};

    font:17px/33px 'Cuprum','Lucida Sans Unicode', 'Lucida Grande', sans-serif;

    margin-right: 15px;
    padding: 0 35px 0 40px;
    text-decoration:none;
    border: 1px solid ${props => props.theme.text.mainColor};
    cursor: pointer;
}

#confirmBox .no-btn{
    display:inline-block;
    background-color:${props => props.theme.text.mainColor};
    border-radius: ${props => props.theme.borders.radius};
    color: white;
    position:relative;
    height: 33px;

    font:17px/33px 'Cuprum','Lucida Sans Unicode', 'Lucida Grande', sans-serif;

    margin-right: 15px;
    padding: 0 35px 0 40px;
    text-decoration:none;
    border:none;
    cursor: pointer;
}





`;
