import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Poppins", "Roboto", sans-serif; 
        body {
            background-color:${props => props.theme.backgrounds.greyLight};
        }
    }
`

export const Theme = {
    text: {
        /* mainColor: "#573E8C", */
        mainColor: "#0c5a75",
        secondaryColor: "#345E70",
        ternaryColor: "#335A7F",
        defaultSize: "16px",
    },

    backgrounds: {
        mainColor: "#0c5a75",
        secondaryColor: "#FFFFFF",
        white: "#FFFFFF",
        hover: "#D9CEEE",
        modal: "#E1E1E1",
    },

    borders: {
        color: "rgba(87, 62, 140, 0.3)",
        radius: "8px",
    },
}

