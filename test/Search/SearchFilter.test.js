import React from 'react';

import SearchFilter from '../../src/components/Search/SearchFilter';

describe('Check Component creation', () => {
    test('SearchFilter component', () => {
        const onRDClick = jest.fn();
        const onRClick = jest.fn();
        const element = shallow(<SearchFilter resultCount={3}
            releaseDateClick={onRDClick} ratingClick={onRClick} />);
        expect(element).toMatchSnapshot();
    });
});
