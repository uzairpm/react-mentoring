import { shallow } from 'enzyme';
import React from 'react';

import MovieBanner from '../../src/components/Movie/MovieBanner';

describe('Check Component creation', () => {
    let element;
    beforeAll(() => {
        const movieObj = {
            poster_path: '',
            title: 'Feel Good',
            vote_average: 8,
            genres: ['Action', 'Drama'],
            release_date: '2017-10-10',
            runtime: 108,
            overview: 'A feel good movie'
        };
        element = shallow(<MovieBanner movie={movieObj}/>);
    });
    test('MovieBanner component snapshot test', () => {
        expect(element).toMatchSnapshot();
    });
});