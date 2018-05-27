import { shallow } from 'enzyme';
import React from 'react';

import MovieCards from '../../src/components/Search/MovieCards';

describe('MovieCards Component', () => {
    const movies = [{id: 1}, {id: 2}];
    const releaseDateClick = jest.fn();
    const ratingClick = jest.fn();
    const element = shallow(<MovieCards movies={movies}
            releaseDateClick={releaseDateClick} ratingClick={ratingClick}/>);
    test('Snapshot testing with custom values for props', () => {
        expect(element).toMatchSnapshot();
    });
});
