import styled from "styled-components";
import { FormStyle, InputStyle } from "../styles";


export const SignupFormTwoStyle = styled(FormStyle) `
  p {
    width: 70%;
    text-align: center;
    white-space: pre-line;
    line-height: 23px;
    font-size: 14px;
    color: white;
  }
`

export const SignupFormThreeStyle = styled(FormStyle) `
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const InputSmallStyle = styled(InputStyle) `
  max-width: 40%;
  margin: 8px 12px;
`
