import React from 'react';
import { Link } from "react-router-dom";

import BackButton from '../../src/components/Header/BackButton';

describe('Check Component creation', () => {
    test('BackButton component', () => {
        const element = shallow(<BackButton />);
        expect(element).toMatchSnapshot();
    });
});