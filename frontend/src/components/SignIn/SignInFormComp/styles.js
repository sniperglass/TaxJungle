import styled from "styled-components";


export const SignInFormCompStyle = styled.form`

.data-entry {
        display: flex;
        flex-direction: column;
        width: 340px;
        height: 164px;
        align-items: center;
        /* border: 1px solid red;  */
    }

    .input-field {
        display: flex;
        height: 82px;
        width: 100%;
        justify-content: space-around;
        align-items: flex-end;
        border-bottom: 2px solid white;
        /* border: 1px solid red; */
    }

    .input-field-img {
        padding: 12px;
    }

    .password::placeholder {
    color: white;
    }

    .email::placeholder {
    color: white;
    }

    input {
        width: 280px;
        padding: 0 0 5px 10px;
        height: 40px;
        border-style: none;
        font-size: 16px;
        outline: none;
        background-color: transparent;
    }

    .footer-right {
        display: flex;
        width: 100%;
        height: 25%;
        justify-content: center;
        /* border: 1px solid yellow; */ 
    }

    .sign-in-btn {
        height: 60px;
        width: 280px;
        font-size: 12px;
        border-radius: 30px;
        border: 1px solid white;
        margin-top: 140px;
        background-color: transparent;
/*         background-image: linear-gradient(115deg, #922ecf 0%, #426be7); */
        color: white;
        outline: none;
    }

`
