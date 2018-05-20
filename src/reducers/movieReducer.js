import * as types from '../actions/actionTypes';

export default function movieReducer(state = {}, action) {
    switch(action.type) {
        case types.SET_TITLE_ACTIVE:
            console.log('inside movieReducer');
            return state;
        default:
            return state;
    }
}
