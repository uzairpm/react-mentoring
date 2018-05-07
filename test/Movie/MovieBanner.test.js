import React from 'react';

import MovieBanner from '../../src/components/Movie/MovieBanner';

describe('Check Component creation', () => {
    test('MovieBanner component', () => {
        const movieObj = {
            poster_path: '',
            title: 'Feel Good',
            vote_average: 8,
            genres: ['Action', 'Drama'],
            release_date: '2017-10-10',
            runtime: 108,
            overview: 'A feel good movie'
        };
        const element = shallow(<MovieBanner movie={movieObj}/>);
        // console.log(element.debug());
        expect(element).toMatchSnapshot();
    });
});