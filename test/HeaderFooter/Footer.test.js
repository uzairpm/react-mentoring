import { shallow } from 'enzyme';
import React from 'react';

import Footer from '../../src/components/Footer/Footer';

describe('Footer component', () => {
    const element = shallow(<Footer/>);
    test('Snapshot test with default props', () => {
        expect(element).toMatchSnapshot();
    });
});
