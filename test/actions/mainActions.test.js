import * as types from '../../src/actions/actionTypes';
import * as mainActions from '../../src/actions/mainActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('mainActions tests', () => {
    it('should create an action to set Title as active', () => {
        const expectedAction = {
            type: types.SET_TITLE_ACTIVE
        };
        expect(mainActions.setTitleActive()).toEqual(expectedAction);
    });
    it('should create an action to set Genre as active', () => {
        const expectedAction = {
            type: types.SET_GENRE_ACTIVE
        };
        expect(mainActions.setGenreActive()).toEqual(expectedAction);
    });
    it('should create an action to set a search string', () => {
        const searchStr = 'Mission';
        const expectedAction = {
            type: types.SET_SEARCH_STR,
            value: searchStr
        };
        expect(mainActions.setSearchValue(searchStr)).toEqual(expectedAction);
    });
    it('should create an action to sort by Release date', () => {
        const expectedAction = {
            type: types.SORT_RELEASE_DATE
        };
        expect(mainActions.sortByReleaseDate()).toEqual(expectedAction);
    });
    it('should create an action to sort by Rating', () => {
        const expectedAction = {
            type: types.SORT_RATING
        };
        expect(mainActions.sortByRating()).toEqual(expectedAction);
    });
    it('should create an action to process movies success response', () => {
        const movies = [{}, {}];
        const expectedAction = {
            type: types.FETCH_MOVIES_SUCCESS,
            movies: movies
        };
        expect(mainActions.fetchMoviesSuccess(movies)).toEqual(expectedAction);
    });
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });
    it('creates FETCH_MOVIES_SUCCESS when fetching movies has been done', () => {
        fetchMock.getOnce('/test', { body: { movies: [{},{}] } });
        const expectedActions = [
            { type: types.FETCH_MOVIES_SUCCESS, movies: { movies: [{},{}] } }
        ];
        const store = mockStore({ movies: [] });
        return store.dispatch(mainActions.fetchMovies('/test')).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
