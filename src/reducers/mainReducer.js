import * as types from '../actions/actionTypes';

const initialState = {
    movies: [],
    titleActive: true,
    sortByReleaseDate: true,
    searchText: ''
};
export default function mainReducer(state = initialState, action) {
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
        case types.SORT_RELEASE_DATE:
            const moviesTemp = state.movies.slice().sort((a,b) => new Date(a.release_date) < new Date(b.release_date));
            return Object.assign({}, state, {
                sortByReleaseDate: true,
                movies: moviesTemp
            });
        case types.SORT_RATING:
            const moviesTemp1 = state.movies.slice().sort((a,b) => a.vote_average < b.vote_average);
            return Object.assign({}, state, {
                sortByReleaseDate: false,
                movies: moviesTemp1
            });
        case types.FETCH_MOVIES_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case types.FETCH_MOVIES_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                movies: action.movies.data
            });
        default:
            return state;
    }
}
