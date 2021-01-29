import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import  Home  from "../components/Home";
import  TaxDetailsModal  from "../components/Home/TaxDetailsModal";
import  BlogOverview from '../components/BlogOverview';
import  RentingOverview from '../components/RentingOverview';
import  InsuranceOverview from '../components/InsuranceOverview';
import  BankingOverview from '../components/BankingOverview';
import  BlogPage from '../components/BlogOverview/BlogPage';

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/taxdetails" component={TaxDetailsModal} />
                <Route path="/blogs" component={BlogOverview} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/renting" component={RentingOverview} />
                <Route path="/insurance" component={InsuranceOverview} />
                <Route path="/banking" component={BankingOverview} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes