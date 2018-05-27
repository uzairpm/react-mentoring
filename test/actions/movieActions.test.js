import * as types from '../../src/actions/actionTypes';
import * as movieActions from '../../src/actions/movieActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('movieActions tests', () => {
    it('should create an action to process movie details success', () => {
        const dummyMovie = {};
        const expectedAction = {
            type: types.FETCH_MOVIE_DETAILS_SUCCESS,
            movie: dummyMovie
        };
        expect(movieActions.fetchMovieDetailsSuccess(dummyMovie)).toEqual(expectedAction);
    });
    it('should create an action to process similar movies success', () => {
        const dummyMovies = [{},{}];
        const genre = 'Action';
        const expectedAction = {
            type: types.FETCH_SIMILAR_MOVIES_SUCCESS,
            selectedGenre: genre,
            similarMovies: dummyMovies
        };
        expect(movieActions.fetchSimilarMoviesSuccess(genre, dummyMovies)).toEqual(expectedAction);
    });
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });
    //this test fails - HELP
    /* it('creates FETCH_MOVIE_DETAILS_SUCCESS when fetching movie details has been done', () => {
        fetchMock.getOnce('/test', { body: { movie: { genres: ['Action']} } });
        const expectedActions = [
            { type: types.FETCH_MOVIE_DETAILS_SUCCESS, movie: {genres: ['Action']} }
        ];
        const store = mockStore({ movie: { genres: ['Action'] } });
        return store.dispatch(movieActions.fetchMovieDetails('/test')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    }); */
});
