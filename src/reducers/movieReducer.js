import * as types from '../actions/actionTypes';

const initialState = {
    movie: {},
    selectedGenre: '',
    similarMovies: []
};
export default function movieReducer(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_MOVIE_DETAILS_SUCCESS:
            return Object.assign({}, state, {
                movie: action.movie,
                selectedGenre: action.movie.genres[0]
            });
        case types.FETCH_SIMILAR_MOVIES_SUCCESS:
            return Object.assign({}, state, {
                similarMovies: action.similarMovies,
                selectedGenre: action.selectedGenre
            });
        default:
            return state;
    }
}
