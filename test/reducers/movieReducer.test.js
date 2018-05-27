import movieReducer from '../../src/reducers/movieReducer';
import * as types from '../../src/actions/actionTypes';

describe('movieReducer test', () => {
    it('should return the initial state', () => {
        expect(movieReducer(undefined, {})).toEqual({
            movie: {},
            selectedGenre: '',
            similarMovies: []
        });
    });
    it('should handle FETCH_MOVIE_DETAILS_SUCCESS', () => {
        const movieObj = {
            genres: ['Drama'],
            title: 'Test'
        };
        expect(movieReducer(undefined, { type: types.FETCH_MOVIE_DETAILS_SUCCESS, movie: movieObj })).toEqual({
            movie: movieObj,
            selectedGenre: 'Drama',
            similarMovies: []
        });
    });
    it('should handle FETCH_SIMILAR_MOVIES_SUCCESS', () => {
        expect(movieReducer(undefined, { type: types.FETCH_SIMILAR_MOVIES_SUCCESS, similarMovies: [{},{}], selectedGenre: 'Drama' })).toEqual({
            movie: {},
            selectedGenre: 'Drama',
            similarMovies: [{},{}]
        });
    });
});
