import React from 'react';

import SearchResults from '../../src/components/Search/SearchResults';

describe('Check Component creation', () => {
    test('SearchResults component', () => {
        const moviesArray = [{},{}];
        const element = shallow(<SearchResults movies={moviesArray}/>);
        expect(element).toMatchSnapshot();
    });
    test('SearchResults component 2', () => {
        const moviesArray = [];
        const element2 = shallow(<SearchResults movies={moviesArray}/>);
        expect(element2).toMatchSnapshot();
    });
});
