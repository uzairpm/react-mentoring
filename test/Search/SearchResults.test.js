import { shallow } from 'enzyme';
import React from 'react';

import SearchResults from '../../src/components/Search/SearchResults';

describe('Check Component creation', () => {
    test('SearchResults component snapshot testing with some data', () => {
        const moviesArray = [{},{}];
        const element = shallow(<SearchResults movies={moviesArray}/>);
        expect(element).toMatchSnapshot();
    });
    test('SearchResults component snapshot testing with no data', () => {
        const moviesArray = [];
        const element2 = shallow(<SearchResults movies={moviesArray}/>);
        expect(element2).toMatchSnapshot();
    });
});
