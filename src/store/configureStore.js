import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

const initialState = {};
const middleware = applyMiddleware(reduxImmutableStateInvariant(), /* logger, */ thunk);

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        middleware
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
