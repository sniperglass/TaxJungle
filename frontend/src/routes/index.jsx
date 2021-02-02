import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from "../components/Home";
import ConfigurationModal from "../components/Home/ConfigurationModal";
import TaxDetailsModal from "../components/Home/TaxDetailsModal";
import BlogOverview from '../components/BlogOverview';
import BlogPage from '../components/BlogPage';
import BlogPageCreate from '../components/BlogPageCreate';
import Profile from '../components/Profile';
// import SignIn from '../components/Authentication/SignIn/index'
// import SignUp from '../components/Authentication/SignUp/index'


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