import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Poppins", "Roboto", sans-serif; 
        body {
            background-color:${props => props.theme.backgrounds.secondaryColor};
        }
    }
`

export const Theme = {
    text: {
        /* mainColor: "#573E8C", */
        mainColor: "#0c5a75", //blue-green
        secondaryColor: "#345E70", //blue-green variation 1
        ternaryColor: "#335A7F",  //blue-green variation 2
        defaultSize: "16px",
    },

    backgrounds: {
        mainColor: "#0c5a75", //blue-green
        secondaryColor: "#e7e7e7", //grey
        ternaryColor: "#FFFFFF", //white
        hover: "#e1f2fe", //lighter-blue
        modal: "#E1E1E1",
    },

    borders: {
        radius: "8px",
    },
}

