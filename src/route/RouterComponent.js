import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from '../component/Header';
import Section from "../component/Section";
import AddSection from '../component/AddSection';
import UptSection from '../component/UptSection';

const AppRouter = () => {
    return(
        <Router>
            <Header />
            <div style={style}>
                <Switch>
                    <Route exact path="/" component={Section} />
                    <Route path="/AddSection" component={AddSection} />
                    <Route path="/UptSection" component={UptSection} />
                </Switch>
            </div>
        </Router>
    );
}

const style = {
    marginTop: '20px'
}

export default AppRouter;
