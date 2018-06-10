import appReducer from '../../src/reducers';
import * as types from '../../src/actions/actionTypes';

describe('appReducer test', () => {
    it('should return the initial state', () => {
        expect(appReducer(undefined, {})).toEqual({
            movies: [],
            titleActive: true,
            sortByReleaseDate: true,
            searchText: '',
            movie: {},
            selectedGenre: '',
            similarMovies: []
        });
    });
    it('should handle SET_TITLE_ACTIVE', () => {
        expect(appReducer(undefined, { type: types.SET_TITLE_ACTIVE})).toEqual({
            movies: [],
            titleActive: true,
            sortByReleaseDate: true,
            searchText: '',
            movie: {},
            selectedGenre: '',
            similarMovies: []
        });
    });
    it('should handle SET_GENRE_ACTIVE', () => {
        expect(appReducer(undefined, { type: types.SET_GENRE_ACTIVE})).toEqual({
            movies: [],
            titleActive: false,
            sortByReleaseDate: true,
            searchText: '',
            movie: {},
            selectedGenre: '',
            similarMovies: []
        });
    });
    it('should handle SET_SEARCH_STR', () => {
        expect(appReducer(undefined, { type: types.SET_SEARCH_STR, payload: 'mat' })).toEqual({
            movies: [],
            titleActive: true,
            sortByReleaseDate: true,
            searchText: 'mat',
            movie: {},
            selectedGenre: '',
            similarMovies: []
        });
    });
    it('should handle SORT_RELEASE_DATE', () => {
        const moviesArr = [{
            title: 'Test',
            release_date: '2015-05-12'
        },{
            title: 'Test2',
            release_date: '2017-01-01'
        },{
            title: 'Test3',
            release_date: '2016-02-05'
        }];
        expect(appReducer({movies: moviesArr}, { type: types.SORT_RELEASE_DATE})).toEqual({
            movies: [{
                title: 'Test2',
                release_date: '2017-01-01'
            },{
                title: 'Test3',
                release_date: '2016-02-05'
            },{
                title: 'Test',
                release_date: '2015-05-12'
            }],
            sortByReleaseDate: true
        });
    });
    it('should handle SORT_RATING', () => {
        const moviesArr = [{
            title: 'Test',
            vote_average: 3
        },{
            title: 'Test2',
            vote_average: 2
        },{
            title: 'Test3',
            vote_average: 6
        }];
        expect(appReducer({movies: moviesArr}, { type: types.SORT_RATING})).toEqual({
            movies: [{
                title: 'Test3',
                vote_average: 6
            },{
                title: 'Test',
                vote_average: 3
            },{
                title: 'Test2',
                vote_average: 2
            }],
            sortByReleaseDate: false
        });
    });
    it('should handle FETCH_MOVIES_SUCCESS', () => {
        expect(appReducer(undefined, { type: types.FETCH_MOVIES_SUCCESS, payload: { data: [{}, {}] } })).toEqual({
            movies: [{}, {}],
            titleActive: true,
            sortByReleaseDate: true,
            searchText: '',
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
        expect(appReducer(undefined, { type: types.FETCH_MOVIE_DETAILS_SUCCESS, payload: movieObj })).toEqual({
            movies: [],
            titleActive: true,
            sortByReleaseDate: true,
            searchText: '',
            movie: movieObj,
            selectedGenre: 'Drama',
            similarMovies: []
        });
    });
    it('should handle FETCH_SIMILAR_MOVIES_SUCCESS', () => {
        expect(appReducer(undefined, { type: types.FETCH_SIMILAR_MOVIES_SUCCESS, payload: { similarMovies: [{},{}], selectedGenre: 'Drama' }})).toEqual({
            movies: [],
            titleActive: true,
            sortByReleaseDate: true,
            searchText: '',
            movie: {},
            selectedGenre: 'Drama',
            similarMovies: [{},{}]
        });
    });
});
