import styled from "styled-components"


export const Layout = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  user-select: none;
`

export const MainStyle = styled.main `
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const FormStyle = styled.form `
  width: 100%;
  max-width: 600px;
  height: 90%;
  max-height: 450px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  p {
    color: white;
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;  
    font-size: 14px;
  }
`

export const TitleStyle = styled.h1 `
  display: flex;
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: lighter;
  color: white;
`

export const InputFieldStyle = styled.div `
  display: flex;
  min-width: 60%;
  margin: 10px 0;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid white;
  /* border: 1px solid red; */

  label {
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      padding: 12px;
    }
  }

  input {
    outline: none;
    border: none;
    width: calc(100% - 50px);
    padding: 10px 5px;
    height: 50px;
    border-style: none;
    font-size: 16px;
    background-color: transparent;
    color: white;
  }

  input::placeholder {
    color: white;
  }
`

export const InputStyle = styled.input `
  outline: none;
  border: none;
  width: calc(100% - 50px);
  padding: 10px 5px;
  margin: 10px 0;
  height: 50px;
  border-style: none;
  font-size: 16px;
  background-color: transparent;
  color: white;
  border-bottom: 1px solid white;

  ::placeholder {
    color: white;
  }
`

export const ButtonStyle = styled.button `
  outline: none;
  border: none;
  cursor: pointer;
  min-height: 60px;
  max-height: 60px;
  width: 200px;
  margin-top: auto;
  border-radius: ${props => props.theme.borders.radius};
  background-color: ${props => props.theme.backgrounds.mainColor};
  color: white;  
  font-size: 14px;
`

