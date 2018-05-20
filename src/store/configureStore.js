import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';

import rootReducer from '../reducers';

const middleware = applyMiddleware(reduxImmutableStateInvariant(), logger);

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        // initialState
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        middleware
    );
}
