import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from "../components/Home";
import Map from "../components/Home/Map";

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/map" component={Map} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes