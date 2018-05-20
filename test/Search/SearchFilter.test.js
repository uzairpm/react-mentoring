import { shallow } from 'enzyme';
import React from 'react';

import SearchFilter from '../../src/components/Search/SearchFilter';

describe('Check Component creation', () => {
    const onRDClick = jest.fn();
    const onRClick = jest.fn();
    test('SearchFilter component snapshot test', () => {
        const element = shallow(<SearchFilter resultCount={3} releaseDate={true}
            releaseDateClick={onRDClick} ratingClick={onRClick} />);
        expect(element).toMatchSnapshot();
    });
    test('SearchFilter component snapshot test', () => {
        const element2 = shallow(<SearchFilter resultCount={2} releaseDate={false}
            releaseDateClick={onRDClick} ratingClick={onRClick} />);
        expect(element2).toMatchSnapshot();
    });
});
