import mainReducer from '../../src/reducers/mainReducer';
import * as types from '../../src/actions/actionTypes';

describe('mainReducer test', () => {
    it('should return the initial state', () => {
        expect(mainReducer(undefined, {})).toEqual({
            movies: [],
            titleActive: true,
            sortByReleaseDate: true,
            searchText: ''
        });
    });
    it('should handle SET_TITLE_ACTIVE', () => {
        expect(mainReducer(undefined, { type: types.SET_TITLE_ACTIVE})).toEqual({
            movies: [],
            titleActive: true,
            sortByReleaseDate: true,
            searchText: ''
        });
    });
    it('should handle SET_GENRE_ACTIVE', () => {
        expect(mainReducer(undefined, { type: types.SET_GENRE_ACTIVE})).toEqual({
            movies: [],
            titleActive: false,
            sortByReleaseDate: true,
            searchText: ''
        });
    });
    it('should handle SET_SEARCH_STR', () => {
        expect(mainReducer(undefined, { type: types.SET_SEARCH_STR, value: 'mat'})).toEqual({
            movies: [],
            titleActive: true,
            sortByReleaseDate: true,
            searchText: 'mat'
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
        expect(mainReducer({movies: moviesArr}, { type: types.SORT_RELEASE_DATE})).toEqual({
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
        expect(mainReducer({movies: moviesArr}, { type: types.SORT_RATING})).toEqual({
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
        expect(mainReducer(undefined, { type: types.FETCH_MOVIES_SUCCESS, movies: { data: [{}, {}] } })).toEqual({
            movies: [{}, {}],
            titleActive: true,
            sortByReleaseDate: true,
            searchText: ''
        });
    });
});
