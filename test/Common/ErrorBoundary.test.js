import { shallow } from 'enzyme';
import React from 'react';

import Button from '../../src/components/Common/Button';
import ErrorBoundary from '../../src/components/Common/ErrorBoundary';

describe('Check Component creation', () => {
    let element;
    beforeEach(() => {
        element = shallow(<ErrorBoundary><Button label="Search"/></ErrorBoundary>);
    });
    test('ErrorBoundary component snapshot test', () => {
        expect(element).toMatchSnapshot();
        expect(element.html()).toEqual('<button class="btn">Search</button>');
    });
    test('ErrorBoundary component on error occured', () => {
        element.setState({ hasError: true });
        expect(element.text()).toEqual('Something went wrong. Please refresh or try again later.');
    });
    test('ErrorBoundary check if state has changed when error is injected', () => {
        element.instance().componentDidCatch('error','error');
        expect(element.state('hasError')).toEqual(true);
    });
});
