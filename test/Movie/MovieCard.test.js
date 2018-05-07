import React from 'react';

import MovieCard from '../../src/components/Movie/MovieCard';

describe('Check Component creation', () => {
    test('MovieCard component', () => {
        const movieObj = {
            id: 101,
            poster_path: '',
            title: 'Feel Good',
            vote_average: 8,
            genres: ['Action', 'Drama'],
            release_date: '2017-10-10',
            runtime: 108,
            overview: 'A feel good movie'
        };
        const element = shallow(<MovieCard movie={movieObj}/>);
        // console.log(element.debug());
        expect(element).toMatchSnapshot();
        expect(element.find('span').text()).toEqual('2017');
    });
});