import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import  Home  from "../components/Home";

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes