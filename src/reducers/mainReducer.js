import * as types from '../actions/actionTypes';

const initialState = {
    movies: [],
    titleActive: true,
    sortByReleaseDate: true,
    searchText: ''
};
export default function mainReducer(state = initialState, action) {
    console.log('2 mainReducer');
    switch(action.type) {
        case types.SET_TITLE_ACTIVE:
            return Object.assign({}, state, {
                titleActive: true
            });
        case types.SET_GENRE_ACTIVE:
            return Object.assign({}, state, {
                titleActive: false
            });
        case types.SET_SEARCH_STR:
            return Object.assign({}, state, {
                searchText: action.value
            });
        case types.SET_MOVIES_ARR:
            return Object.assign({}, state, {
                movies: action.value
            });
        case types.SET_REL_DATE_ACTIVE:
            action.cb();
            return Object.assign({}, state, {
                sortByReleaseDate: true
            });
        case types.SET_RATING_ACTIVE:
            action.cb();
            return Object.assign({}, state, {
                sortByReleaseDate: false
            });
        default:
            return state;
    }
}
