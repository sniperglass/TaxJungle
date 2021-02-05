import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

export const withAuth = (WrappedComponent) => {
    return () => {
        const authenticated = useSelector(state => state.authReducer.authenticated)
        const history = useHistory()
        if (authenticated) {
            return <WrappedComponent />
        } 
        history.push("/signin")
        return null
    }
}