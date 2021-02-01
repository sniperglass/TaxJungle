import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import  Home  from "../components/Home";
import  TaxDetailsModal  from "../components/Home/TaxDetailsModal";
import  BlogOverview from '../components/BlogOverview';
import  BlogPage from '../components/BlogPage';

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/taxdetails" component={TaxDetailsModal} />
                <Route path="/blogs" component={BlogOverview} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/renting" component={BlogOverview} />
                <Route path="/insurance" component={BlogOverview} />
                <Route path="/banking" component={BlogOverview} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes