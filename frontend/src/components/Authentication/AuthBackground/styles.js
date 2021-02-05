import styled from "styled-components";

import test3 from '../../../assets/background-auth.jpg'


export const BackgroundStyle = styled.div `
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url(${test3});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
    opacity: 80%;
    transform: scale(1.1)
`
