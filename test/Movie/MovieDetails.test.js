import { shallow } from 'enzyme';
import React from 'react';
const fetchMock = require('fetch-mock');

import MovieDetails from '../../src/components/Movie/MovieDetails';

beforeEach(function() {
    // global.fetch = fetchMock;
});

describe('MovieDetails Component', () => {
    const match = { params: { id: 603 } };
    const element = shallow(<MovieDetails match={match}/>, {disableLifecycleMethods: false});
    test('Snapshot test with default props', () => {
        expect(element).toMatchSnapshot();
    });
    test('Should update state when populateState function is invoked with a movie object', () => {
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
    test('Should update state when populateStateForSimilarMovies function is invoked with movies array', () => {
        var movies = [{genre: ['Action'], id: 100}, {genre: ['Drama'], id: 101}];
        element.instance().populateStateForSimilarMovies('Action', movies);
        expect(element.state('selectedGenre')).toEqual('Action');
    });
    test('Should receive data when request is made using the getRequest function', () => {
        fetchMock.get('*', {hello: 'world'});
        element.instance().getRequest('http://localhost/api')
            .then(function(data) {
                expect(data).toEqual({hello: 'world'});
            });
    });
    test('Should update state when fetchSimilarMovies is invoked with a genre', () => {
        element.instance().fetchSimilarMovies('Action');
        expect(element.state('selectedGenre')).toEqual('Action');
    });
});

afterAll(function() {
    fetchMock.restore();
});
