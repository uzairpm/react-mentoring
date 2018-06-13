import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage
};
const persistedReducer = persistReducer(persistConfig, appReducer);

const initialState = {};
const middleware = applyMiddleware(reduxImmutableStateInvariant(), logger, thunk);

export default function configureStore(initialState) {
    return createStore(
        persistedReducer,
        initialState,
        middleware
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
