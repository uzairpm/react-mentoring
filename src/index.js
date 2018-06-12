import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist';

import configureStore from './store/configureStore';
import ErrorBoundary from './components/Common/ErrorBoundary';
import MainPage from './components/Search/MainPage';
import MovieDetails from './components/Movie/MovieDetails';
import NoMatch404 from './components/Common/NoMatch404';

if (PRODUCTION === true)
    console.log("Running production build version", VERSION);
else
    console.log("Running development build", VERSION);

const store = configureStore({});
//let persistor = persistStore(store);

/* <PersistGate loading={null} persistor={persistor}>
</PersistGate> */

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/film/:id" component={MovieDetails} />
                    <Route component={NoMatch404} />
                </Switch>
            </Router>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('app')
);
