import styled from "styled-components";

import backg10 from '../../../assets/backg10.jpg'


export const BackgroundStyle = styled.div `
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${backg10});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(4px);
    opacity: 100%;
    transform: scale(1.1)
`
