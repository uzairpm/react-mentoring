import { shallow } from 'enzyme';
import React from 'react';

import MovieCard from '../../src/components/Movie/MovieCard';

describe('MovieCard Component', () => {
    let element;
    beforeAll(() => {
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
        element = shallow(<MovieCard movie={movieObj}/>);
    });
    test('Snapshot test when a movie object is passed', () => {
        expect(element).toMatchSnapshot();
    });
});