import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Es6Component from '../src/components/es6-component';
import FunctionComponent from '../src/components/functional-component';

beforeAll(() => {
    configure({ adapter: new Adapter() });
});
describe('Check Component creation', () => {
    test('ES6 component', () => {
        const element = shallow(<Es6Component />);
        expect(element).toMatchSnapshot();
        expect(element.text()).toEqual('Hello World using ES6 React.Component');
    });
    test('Functional component', () => {
        const element = shallow(<FunctionComponent msg="bye"/>);
        expect(element.text()).toEqual('Stateless functional component says bye');
    });
});
