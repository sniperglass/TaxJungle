import { BrowserRouter, Route, Switch, Redirect, useParams } from "react-router-dom"
import { withAuth } from "../hoc/index"
import Home from "../components/Home";
import ConfigurationModal from "../components/Home/ConfigurationModal";
import TaxDetailsModal from "../components/Home/TaxDetailsModal";
import BlogOverview from '../components/BlogOverview';
import BlogPage from '../components/BlogPage';
import BlogPageCreate from '../components/BlogPageCreate';
import Profile from '../components/Profile';
import SignIn from '../components/Authentication/SignIn/index'
import SignUp from '../components/Authentication/SignUp/index'





const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/profile" component={withAuth(Profile)} />
                <Route exact path="/blog" component={BlogOverview} />
                <Route exact path="/blog/taxes" component={BlogOverview} />
                <Route exact path="/blog/renting" component={BlogOverview} />
                <Route exact path="/blog/insurance" component={BlogOverview} />
                <Route exact path="/blog/banking" component={BlogOverview} />
                <Route exact path="/blog/:category/:id" component={withAuth(BlogPage)} />
                <Route exact path="/blog/create" component={withAuth(BlogPageCreate)} />
                <Route exact path="/taxconfig" component={ConfigurationModal} />
                <Route exact path="/taxdetails" component={TaxDetailsModal} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes