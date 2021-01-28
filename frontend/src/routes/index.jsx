import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import  Home  from "../components/Home";
import  TaxDetailsModal  from "../components/Home/TaxDetailsModal";

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/taxdetails" component={TaxDetailsModal} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes