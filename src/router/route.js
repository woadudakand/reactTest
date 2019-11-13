import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../container/page';
import InDe from '../container/page/inde';

const PageRouter = () => {
    return (
        <Fragment>                    
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/inc_dec" component={InDe} />                    
                </Switch>
            </Router>
        </Fragment>
    );
}

export default PageRouter;
