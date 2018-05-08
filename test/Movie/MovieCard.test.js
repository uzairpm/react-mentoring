import React from 'react';

import MovieCard from '../../src/components/Movie/MovieCard';

describe('Check Component creation', () => {
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
    test('MovieCard component', () => {
        expect(element).toMatchSnapshot();
    });
    test('MovieCard component 2', () => {
        expect(element.find('span').text()).toEqual('2017');
    });
});