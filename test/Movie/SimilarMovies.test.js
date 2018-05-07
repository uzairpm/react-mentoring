import React from 'react';

import SimilarMovies from '../../src/components/Movie/SimilarMovies';

describe('Check Component creation', () => {
    test('SimilarMovies component', () => {
        const moviesArray = [{
            id: 101,
            poster_path: '',
            title: 'Feel Good',
            vote_average: 8,
            genres: ['Action', 'Drama'],
            release_date: '2017-10-10',
            runtime: 108,
            overview: 'A feel good movie'
        }];
        const element = shallow(<SimilarMovies genre="Action" movies={moviesArray}/>);
        expect(element).toMatchSnapshot();
        // console.log(element.debug());
    });
});