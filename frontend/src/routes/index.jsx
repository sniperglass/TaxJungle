import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import DefaultComponent from "./defaultComponent";

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={DefaultComponent} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes