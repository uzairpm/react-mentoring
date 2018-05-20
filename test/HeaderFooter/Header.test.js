import { shallow } from 'enzyme';
import React from 'react';

import Header from '../../src/components/Header/Header';

describe('Check Component creation', () => {
    test('Header component snapshot test', () => {
        const element = shallow(<Header showSearchButton={false}/>);
        expect(element).toMatchSnapshot();
    });
    test('Header component snapshot test when search button is enabled', () => {
        const element2 = shallow(<Header showSearchButton={true}/>);
        expect(element2).toMatchSnapshot();
    });
});
