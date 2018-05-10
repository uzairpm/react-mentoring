import React from 'react';
const fetchMock = require('fetch-mock');

import MovieDetails from '../../src/components/Movie/MovieDetails';

beforeEach(function() {
    // global.fetch = fetchMock;
});

describe('Check Component creation', () => {
    const match = { params: { id: 603 } };
    const element = shallow(<MovieDetails match={match}/>, {disableLifecycleMethods: false});
    test('snapshot', () => {
        expect(element).toMatchSnapshot();
    });
    test('test populateState', () => {
        var movie = {
            poster_path: '',
            title: 'Matrix',
            vote_average: 7,
            genres: ['Action'],
            release_date : '', 
            runtime: '',
            overview: ''
        };
        element.instance().populateState(movie);
        expect(element.state('movie').title).toEqual('Matrix');
    });
    test('test populateStateForSimilarMovies', () => {
        var movies = [{genre: ['Action'], id: 100}, {genre: ['Drama'], id: 101}];
        element.instance().populateStateForSimilarMovies('Action', movies);
        expect(element.state('selectedGenre')).toEqual('Action');
    });
    test('MovieDetails getRequest', () => {
        fetchMock.get('*', {hello: 'world'});
        element.instance().getRequest('http://localhost/api')
            .then(function(data) {
                expect(data).toEqual({hello: 'world'});
            });
    });
    test('MovieDetails fetchSimilarMovies', () => {
        element.instance().fetchSimilarMovies('Action');
        expect(element.state('selectedGenre')).toEqual('Action');
    });
});

afterAll(function() {
    fetchMock.restore();
});
