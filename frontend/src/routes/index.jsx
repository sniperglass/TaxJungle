import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { withAuth } from "../HOC/index"
import SignIn from "../components/Landing/SignIn/index"
import SignUp from "../components/Landing/SignUp/index"
import Posts from "../components/Posts/index"

const Routing = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">{props.authorized ? <Redirect to="/posts" /> : <SignIn />}</Route>
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/posts" component={withAuth(Posts)} />
                <Route exact path="/posts/liked" component={withAuth(Posts)} />
                <Route exact path="/posts/friends" component={withAuth(Posts)} />
                <Route exact path="/posts/follow" component={withAuth(Posts)} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routing