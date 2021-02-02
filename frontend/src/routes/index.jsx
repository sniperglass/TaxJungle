import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import  Home  from "../components/Home";
import ConfigurationModal from "../components/Home/ConfigurationModal";

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/V" component={ConfigurationModal} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes