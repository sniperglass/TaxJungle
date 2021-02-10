import styled from "styled-components";

export const TaxDetailsModalStyle = styled.section`

width: 100vw;
height:100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: transparent;
/* border: 1px solid red; */ 

.modal-container {
    width: 70%;
    min-height: 80%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 30px;
    background-color:${props => props.theme.backgrounds.greyLight};
    /* border: 1px solid blue;  */
}

.closing-modal {
    width: 95%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    border: none;
    outline: none;
    background-color: ${props => props.theme.backgrounds.greyLight};
    /* border: 1px solid yellow; */
}

.closing-btn {
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border: none;
    outline: none;
    background-color: ${props => props.theme.backgrounds.greyLight};
    /* border: 1px solid green; */
}

.x-button {
        display: flex;
        width: 50px;
        height: 50px;
        font-weight: 700;
        cursor: pointer;
        /* border: 1px solid red; */
    }

/* .close-button {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 40px;
    }

    .x-closebutton {
        outline: none;
        border: none;
    }

    .x-button {
        display: flex;
        width: 50px;
        height: 50px;
        cursor: pointer;
    } */

.main-tax-container {
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: row;
/*     flex-wrap: wrap; */
   /*  border: 1px solid green; */
}

.left {
    display: flex;
    flex-direction: column;
    width: 38%;
    height: 100%;
    /* border: 1px solid green; */
}

.chosen-municipality {
    color:${props => props.theme.text.mainColor};
    font-size: 26px;
    font-weight: 600;
    padding-left: 28px;
    padding-top: 5px;
    height: 50px;
    /* border: 1px solid yellow; */
}

.municip-text {
    color:${props => props.theme.text.mainColor};
    font-size: 16px;
    font-weight: 100;
    padding-left: 28px;
    padding-top: 15px;
    width: 90%;
    height: auto;
    /* border: 1px solid red; */
}

.all-taxes {
    color:${props => props.theme.text.mainColor};
    font-size: 20px;
    font-weight: 600;
    padding-left: 28px;
    padding-top: 25px;
    /* border: 1px solid blue; */
}

.taxes-overview {
    display: flex;
    height: 50%;
    justify-content: space-around;
    padding: 20px;
    padding-top: 5px;
    /* border: 1px solid red; */
    padding-left: 0px;
}

.left-tax,
.right-tax  {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.taxes {
    color:${props => props.theme.text.mainColor};
    font-size: 15px;
    font-weight: 600;
}

.tax-amount {
    color:${props => props.theme.text.mainColor};
    font-size: 20px;
    font-weight: 600;
}
.right {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    margin-left: 10px;
    /* border: 1px solid red; */
}

.top-municipalities {
    color:${props => props.theme.text.mainColor};
    font-size: 26px;
    font-weight: 600;
    padding-left: 28px;
    padding-top: 5px;
    height: 50px;
    /* border: 1px solid yellow; */
}

.tax-data-maincontainer {
    display: flex;
    width: 100%;
    height: 100%;
    padding-left: 28px;
    /* border: 1px solid red; */
}

.left-data {
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 100%;
    /* border: 1px solid green; */
}

.municipality-country {
    color:${props => props.theme.text.mainColor};
    font-size: 20px;
    font-weight: 600;
    padding-top: 15px;
    /* border: 1px solid blue; */
}

.table-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* border: 1px solid blue; */
}
.right-data {
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 100%;
    margin-left: 30px;
    /* border: 1px solid green; */
}
`
