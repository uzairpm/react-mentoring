import { shallow } from 'enzyme';
import React from 'react';

import Button from '../../src/components/Common/Button';
import ErrorBoundary from '../../src/components/Common/ErrorBoundary';

describe('ErrorBoundary Component', () => {
    let element;
    beforeEach(() => {
        element = shallow(<ErrorBoundary><Button label="Search"/></ErrorBoundary>);
    });
    test('Snapshot test with default props', () => {
        expect(element).toMatchSnapshot();
        expect(element.html()).toEqual('<button class="btn">Search</button>');
    });
    test('Should render error message when hasError is set in the state', () => {
        element.setState({ hasError: true });
        expect(element.text()).toEqual('Something went wrong. Please refresh or try again later.');
    });
    test('Should update component state when componentDidCatch is invoked', () => {
        element.instance().componentDidCatch('error','error');
        expect(element.state('hasError')).toEqual(true);
    });
});
