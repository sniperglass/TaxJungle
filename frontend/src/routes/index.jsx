import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from "../components/Home";
import SignIn from '../components/Authentication/SignIn/index';
import SignUp from '../components/Authentication/SignUp/index';
import TaxDetailsModal  from "../components/Home/TaxDetailsModal";
import BlogOverview from '../components/BlogOverview';
import BlogPage from '../components/BlogPage';
import BlogPageCreate from '../components/BlogPageCreate';


const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/taxdetails" component={TaxDetailsModal} />
                <Route exact path="/blogs" component={BlogOverview} />
                <Route exact path="/blog" component={BlogPage} />
                <Route exact path="/renting" component={BlogOverview} />
                <Route exact path="/insurance" component={BlogOverview} />
                <Route exact path="/banking" component={BlogOverview} />
                <Route exact path="/create" component={BlogPageCreate} />
                {/* <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes