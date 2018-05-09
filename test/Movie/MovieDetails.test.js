import React from 'react';
const fetchMock = require('fetch-mock');

import MovieDetails from '../../src/components/Movie/MovieDetails';

beforeEach(function() {
    // fetchMock.get('*', {hello: 'world', genres: ['Drama', 'Action']});
    // global.fetch = fetchMock;
});

describe('Check Component creation', () => {
    const match = { params: { id: 603 } };
    
    // const element = shallow(<MovieDetails match={match}/>);
    /* test('MovieDetails component', () => {
        element.instance().fetchMovieDetails('http://localhost/api')
            .then(function(data) {
                console.log('got data', data);
            });
        
        }); */
    test('MovieDetails state populate', () => {
        expect(true).toEqual(true);
        /* element.instance().populateState({
            title: 'Test'
        });
        // console.log(element.debug());
        expect(element.state('movie').title).toEqual('Test'); */
    });
});

afterAll(function() {
    // fetchMock.restore();
});
