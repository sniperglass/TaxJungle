import styled from "styled-components";

export const DropDownStyled = styled.div`

display: flex;
position: absolute;
width: 100px;
height: 100px;
background-color: rgba(255, 255, 255, 0);

.navigation {
    border: 1px solid ${props => props.theme.text.mainColor};
    border-radius: 8px;
    height: 55px;
    display: flex;
    flex-direction: column;
    padding: 5px;
}

.down-arrow {
    color: ${props => props.theme.text.mainColor};
}

li {
    display: block;
    transition-duration: 0.5s;
   }
   
   li:hover {
     cursor: pointer;
   }
   
   ul li ul {
     visibility: hidden;
     opacity: 0;
     position: absolute;
     transition: all 0.5s ease;
     margin-top: 1rem;
     left: 0;
     display: none;
   }
   
   ul li:hover > ul,
   ul li ul:hover {
     visibility: visible;
     opacity: 1;
     display: block;
   }
   
   ul li ul li {
     clear: both;
     width: 100%;
   }

   #status {
    margin-right: 35px;
    width: 300px;
    height: 55px;
    } 

    .required {
    background-color:${props => props.theme.backgrounds.greyLight};
    color: ${props => props.theme.text.mainColor};
    font-size: 15px;
    font-weight: 100;
    padding: 8px;
    cursor: pointer;
    border-radius: 8px;
    border-color: ${props => props.theme.text.mainColor};
    text-decoration: none;
    }

`;   