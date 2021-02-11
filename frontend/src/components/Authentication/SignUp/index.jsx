import AuthBackground from "../AuthBackground"
import AuthHeader from "../AuthHeader"
import { Layout, MainStyle, FormStyle, TitleStyle, InputFieldStyle, ButtonStyle } from "../styles"
import { SignupFormTwoStyle, SignupFormThreeStyle, InputSmallStyle} from "./styles"
import emailIcon from "../../../assets/icons/email.png"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { signupStepAction, signupRegistration, signupValidation } from "../../../store/actions/authActions"


const SignUp = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const step = useSelector(state => state.authReducer.signupStep)
    const email = useSelector(state => state.authReducer.signupEmail)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [userFeedback, setUserFeedback] = useState("")

    const usernameInputHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordInputHandler = (e) => {
        setPassword(e.target.value)
    }

    const passwordRepeatInputHandler = (e) => {
        setPasswordRepeat(e.target.value)
    }

    const signUpHandler = (e) => {
        e.preventDefault()
        setUserFeedback("")
        if (step === 1) {
            dispatch(signupRegistration({email: e.target.elements.email.value}))
            .then(result => result ? setUserFeedback(result.email) : dispatch(signupStepAction(2)))
        } else if (step === 2) {
            dispatch(signupStepAction(3))
        } else {
            if (password !== passwordRepeat) {
                setUserFeedback("Password repeat not matching")
            } else {
                dispatch(signupValidation({
                    first_name: e.target.elements.firstname.value,
                    last_name: e.target.elements.lastname.value,
                    username: username,
                    email: email,
                    code: e.target.elements.code.value,
                    password: password,
                    password_repeat: passwordRepeat,
                }))
                .then(result => {
                    if (!result) {
                        dispatch(signupStepAction(1))
                        history.push("/signin")
                    } else {
                        let feedback = Object.keys(result).map(key => result.hasOwnProperty(key) && key !== "password_repeat" ? result[key] : "").join(" ").split(",").join(" ")
                        setUserFeedback(feedback)
                    }
                })
            }
        }
    }

    return (
        <Layout>
            <AuthBackground />
            <AuthHeader signup={true} />
            <MainStyle>
                {
                    step === 1 ?
                        <FormStyle id="sign-up-form" onSubmit={signUpHandler}>
                            <TitleStyle>Sign Up</TitleStyle>
                            <InputFieldStyle>
                                <label htmlFor="email">
                                    <img id="input-img" src={emailIcon} alt="email" height="40px" />
                                </label>
                                <input id="email" name="email" type="email" placeholder="email" autoComplete="email" required />
                            </InputFieldStyle>  
                            <ButtonStyle>sign up</ButtonStyle>
                        </FormStyle>
                    : null
                }
                {
                    step === 2 ?
                        <SignupFormTwoStyle id="sign-up-form" onSubmit={signUpHandler}>
                            <TitleStyle>Congratulations!</TitleStyle>
                            <p>{
                                `You've been successfully registered.
                                Shortly you will receive an email from us with your validation code. Please click on continue and use this code to finish the registration process. After that you will be redirected and immediately able to sign in with your personal credentials.`
                            }</p>
                            <p>{""}</p>                          
                            <ButtonStyle>continue</ButtonStyle>
                        </SignupFormTwoStyle>
                    : null
                }
                {
                    step === 3 ?
                        <SignupFormThreeStyle id="sign-up-form" onSubmit={signUpHandler}>
                            <TitleStyle>Validation</TitleStyle>
                            <div>
                                <InputSmallStyle name="firstname" type="text" placeholder="first name" autoComplete="family-name" required />
                                <InputSmallStyle name="lastname" type="text" placeholder="last name" autoComplete="given-name" required />
                                <InputSmallStyle name="username" type="text" placeholder="username" autoComplete="username" onChange={usernameInputHandler} required />
                                <InputSmallStyle name="code" type="text" placeholder="validation code" required />
                                <InputSmallStyle name="password" type="password" placeholder="Password" onChange={passwordInputHandler} required />
                                <InputSmallStyle name="passwordrepeat" type="password" placeholder="Password repeat" onChange={passwordRepeatInputHandler} required />
                            </div>
                            <ButtonStyle>finish registration</ButtonStyle>
                        </SignupFormThreeStyle>
                    : null
                }
                <p>{userFeedback}</p>
            </MainStyle>
        </Layout>
    )
}

export default SignUp