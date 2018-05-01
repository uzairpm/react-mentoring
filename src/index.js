import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ErrorBoundary from './components/Common/ErrorBoundary';
import App from './components/App';
import MovieDetails from './components/MovieDetails';

if (PRODUCTION === true)
    console.log("Running production build version", VERSION);
else
    console.log("Running development build", VERSION);

ReactDOM.render(
    <ErrorBoundary>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/film/:id" component={MovieDetails} />
            </Switch>
        </Router>
    </ErrorBoundary>,
    document.getElementById('app')
);
