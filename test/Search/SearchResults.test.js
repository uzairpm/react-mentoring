import { shallow } from 'enzyme';
import React from 'react';

import SearchResults from '../../src/components/Search/SearchResults';

describe('SearchResults Component', () => {
    test('Snapshot testing with populated data array passed to movies', () => {
        const moviesArray = [{},{}];
        const element = shallow(<SearchResults movies={moviesArray}/>);
        expect(element).toMatchSnapshot();
    });
    test('Snapshot testing with no data passed to movies', () => {
        const moviesArray = [];
        const element2 = shallow(<SearchResults movies={moviesArray}/>);
        expect(element2).toMatchSnapshot();
    });
});
