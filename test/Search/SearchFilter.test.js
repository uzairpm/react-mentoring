import { shallow } from 'enzyme';
import React from 'react';

import SearchFilter from '../../src/components/Search/SearchFilter';

describe('SearchFilter Component', () => {
    const onRDClick = jest.fn();
    const onRClick = jest.fn();
    test('Snapshot test with default props sorted by Release date', () => {
        const element = shallow(<SearchFilter resultCount={3} releaseDate={true}
            releaseDateClick={onRDClick} ratingClick={onRClick} />);
        expect(element).toMatchSnapshot();
    });
    test('Snapshot test with default props sorted by Rating', () => {
        const element2 = shallow(<SearchFilter resultCount={2} releaseDate={false}
            releaseDateClick={onRDClick} ratingClick={onRClick} />);
        expect(element2).toMatchSnapshot();
    });
});
