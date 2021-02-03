import styled from "styled-components";

import test3 from '../../assets/test3.jpg';


export const SignInStyle = styled.section`

height: 100vh;
width: 100%;
display: flex;
justify-content: center;
/* border: 1px solid green; */
font-family: 'Roboto', sans-serif;


.background-pic {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1;
    display: block;
    background-image: url(${test3});
    width: 100%;
    height: 100%;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
    opacity: 80%;
}     

.main-content {
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    z-index: 1;
    background: transparent;
}
    
.form-wrapper {
    width: 100%;
    height: 60%;
   /*  border: black solid; */
}

.form-container {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px green; */
}


`
