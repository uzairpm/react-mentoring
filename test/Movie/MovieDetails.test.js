import React from 'react';

import MovieDetails from '../../src/components/Movie/MovieDetails';

beforeEach(function() {
    global.fetch = jest.fn().mockImplementation(() => {
        var p = new Promise((resolve, reject) => {
            resolve({
                json: function() {
                    return {
                        genres: ['Drama', 'Action'],
                        id: 603,
                        title: "The Matrix",
                        release_date: "1999-03-30",
                        runtime: 136,
                        vote_average: 8
                    }
                }
            });
        });
        return p;
    });
});
describe('Check Component creation', () => {
    test('MovieDetails component', () => {
        const match = { params: { id: 603 } }
        const element = shallow(<MovieDetails match={match}/>);
        //console.log(element.debug());
        // let md = new MovieDetails();
        // md.fetchMovieDetails('http://react-cdp-api.herokuapp.com/movies/603')
        expect(element).toMatchSnapshot();
    });
});
