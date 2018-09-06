import React from 'react';
import { hydrate } from 'react-dom';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
/* import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'; */

import configureStore from './store/configureStore';
import ErrorBoundary from './components/Common/ErrorBoundary';
import App from './app';

if (PRODUCTION === true)
    console.log("Running production build version", VERSION);
else
    console.log("Running development build", VERSION);

const store = configureStore(window.PRELOADED_STATE);
// Allow the passed state to be garbage-collected
// delete window.PRELOADED_STATE;

/*let persistor = persistStore(store); */
/*  <PersistGate loading={null} persistor={persistor}>
    </PersistGate>
 */

hydrate(
    <Provider store={store}>
        <ErrorBoundary>
            <Router>
                <App />
            </Router>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('app')
);
