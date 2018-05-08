import React from 'react';

import Header from '../../src/components/Header/Header';

describe('Check Component creation', () => {
    test('Header component', () => {
        const element = shallow(<Header/>);
        expect(element).toMatchSnapshot();
    });
    test('Header component 2', () => {
        const element2 = shallow(<Header showSearchButton={true}/>);
        expect(element2).toMatchSnapshot();
    });
});
