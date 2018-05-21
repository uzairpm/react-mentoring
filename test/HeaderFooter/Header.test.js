import { shallow } from 'enzyme';
import React from 'react';

import Header from '../../src/components/Header/Header';

describe('Header Component', () => {
    test('Snapshot test when search button is hidden', () => {
        const element = shallow(<Header showSearchButton={false}/>);
        expect(element).toMatchSnapshot();
    });
    test('Snapshot test when search button is displayed', () => {
        const element2 = shallow(<Header showSearchButton={true}/>);
        expect(element2).toMatchSnapshot();
    });
});
