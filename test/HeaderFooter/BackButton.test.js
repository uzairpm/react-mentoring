import { shallow } from 'enzyme';
import React from 'react';
import { Link } from "react-router-dom";

import BackButton from '../../src/components/Header/BackButton';

describe('BackButton Component', () => {
    test('Snapshot test with default props', () => {
        const element = shallow(<BackButton />);
        expect(element).toMatchSnapshot();
    });
});