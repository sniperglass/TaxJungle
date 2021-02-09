import AuthBackground from "../AuthBackground"
import AuthHeader from "../AuthHeader"
import { Layout, MainStyle, FormStyle, TitleStyle, InputFieldStyle, ButtonStyle } from "../styles"
import emailIcon from '../../../assets/icons/email.png';
import lockIcon from '../../../assets/icons/lock.svg';
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { signIn } from "../../../store/actions/authActions"


const SignIn = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [userFeedback, setUserFeedback] = useState("")

    const signInHandler = (e) => {
        e.preventDefault()
        setUserFeedback("")
        dispatch(signIn({
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }))
        .then(result => {
            if (result.access) {
                history.push("/blog")
            } else if (result.detail) {
                setUserFeedback(result.detail)
            }
        })
    }

    return (
        <Layout >
            <AuthBackground />
            <AuthHeader />
            <MainStyle>
                <FormStyle id="sign-in-form" onSubmit={signInHandler}>
                    <TitleStyle>Sign In</TitleStyle>
                    <InputFieldStyle>
                        <label htmlFor="email">
                            <img id="input-img" src={emailIcon} alt="email" height="40px" />
                        </label>
                        <input id="email" name="email" type="email" placeholder="email" autoComplete="email" required />
                    </InputFieldStyle>
                    <InputFieldStyle>
                        <label htmlFor="password">
                            <img src={lockIcon} alt="password" height="45px" style={{opacity: "80%", marginLeft: "5px"}}/>
                        </label>
                        <input id="password" name="password" type="password" placeholder="password" required />
                    </InputFieldStyle>
                    <p>{userFeedback}</p>
                    <ButtonStyle type="submit">sign in</ButtonStyle>
                </FormStyle>
            </MainStyle>
        </Layout>
    )
}

export default SignIn