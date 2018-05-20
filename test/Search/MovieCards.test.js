import { shallow } from 'enzyme';
import React from 'react';

import MovieCards from '../../src/components/Search/MovieCards';

describe('Check Component creation', () => {
    const movies = [{id: 1}, {id: 2}];
    const releaseDateClick = jest.fn();
    const ratingClick = jest.fn();
    const element = shallow(<MovieCards movies={movies}
            releaseDateClick={releaseDateClick} ratingClick={ratingClick}/>);
    test('MovieCards component', () => {
        expect(element).toMatchSnapshot();
    });
    /* test('click', () => {
        element.instance()._handleKeyPress({key: 'Enter'});
        expect(onClickSearch).toHaveBeenCalled();
    }); */
});
