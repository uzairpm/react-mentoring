import { combineReducers } from 'redux';
import main from './mainReducer';
import movie from './movieReducer';

const rootReducer = combineReducers({
    main,
    // movie
});

export default rootReducer;
