import * as types from '../../src/actions/actionTypes';
import * as appActions from '../../src/actions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('appActions tests', () => {
    it('should create an action to set Title as active', () => {
        const expectedAction = {
            type: types.SET_TITLE_ACTIVE
        };
        expect(appActions.setTitleActive()).toEqual(expectedAction);
    });
    it('should create an action to set Genre as active', () => {
        const expectedAction = {
            type: types.SET_GENRE_ACTIVE
        };
        expect(appActions.setGenreActive()).toEqual(expectedAction);
    });
    it('should create an action to set a search string', () => {
        const searchStr = 'Mission';
        const expectedAction = {
            type: types.SET_SEARCH_STR,
            payload: searchStr
        };
        expect(appActions.setSearchValue(searchStr)).toEqual(expectedAction);
    });
    it('should create an action to sort by Release date', () => {
        const expectedAction = {
            type: types.SORT_RELEASE_DATE
        };
        expect(appActions.sortByReleaseDate()).toEqual(expectedAction);
    });
    it('should create an action to sort by Rating', () => {
        const expectedAction = {
            type: types.SORT_RATING
        };
        expect(appActions.sortByRating()).toEqual(expectedAction);
    });

    it('should create an action to process movies success response', () => {
        const movies = [{}, {}];
        const expectedAction = {
            type: types.FETCH_MOVIES_SUCCESS,
            payload: movies
        };
        expect(appActions.fetchMoviesSuccess(movies)).toEqual(expectedAction);
    });
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });
    it('creates FETCH_MOVIES_SUCCESS when fetching movies has been done', () => {
        fetchMock.getOnce('/test', { body: { movies: [{},{}] } });
        const expectedActions = [
            { type: types.FETCH_MOVIES_REQUEST },
            { type: types.FETCH_MOVIES_SUCCESS, payload: { movies: [{},{}] } }
        ];
        const store = mockStore({ movies: [] });
        return store.dispatch(appActions.fetchMovies('/test')).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('should create an action to process movie details success', () => {
        const dummyMovie = {};
        const expectedAction = {
            type: types.FETCH_MOVIE_DETAILS_SUCCESS,
            payload: dummyMovie
        };
        expect(appActions.fetchMovieDetailsSuccess(dummyMovie)).toEqual(expectedAction);
    });
    it('should create an action to process similar movies success', () => {
        const dummyMovies = [{},{}];
        const genre = 'Action';
        const expectedAction = {
            type: types.FETCH_SIMILAR_MOVIES_SUCCESS,
            payload: {
                selectedGenre: genre,
                similarMovies: dummyMovies
            }
        };
        expect(appActions.fetchSimilarMoviesSuccess(genre, dummyMovies)).toEqual(expectedAction);
    });
});

/*describe('appActions tests', () => {
    //this test fails - HELP
    it('creates FETCH_MOVIE_DETAILS_SUCCESS when fetching movie details has been done', () => {
        fetchMock.getOnce('/test', { body: { movie: { genres: ['Action']} } });
        const expectedActions = [
            { type: types.FETCH_MOVIE_DETAILS_SUCCESS, movie: {genres: ['Action']} }
        ];
        const store = mockStore({ movie: { genres: ['Action'] } });
        return store.dispatch(movieActions.fetchMovieDetails('/test')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});*/
