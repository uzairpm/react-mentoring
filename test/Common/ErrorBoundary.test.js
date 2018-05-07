import React from 'react';

import Button from '../../src/components/Common/Button';
import ErrorBoundary from '../../src/components/Common/ErrorBoundary';

describe('Check Component creation', () => {
    test('ErrorBoundary component', () => {
        const element = shallow(<ErrorBoundary><Button label="Search"/></ErrorBoundary>);
        expect(element).toMatchSnapshot();
        expect(element.html()).toEqual('<button class="btn">Search</button>');
        
        const element2 = shallow(<ErrorBoundary><Button label="Search"/></ErrorBoundary>);
        element2.setState({ hasError: true });
        // console.log(element2.debug());
        expect(element2.text()).toEqual('Something went wrong. Please refresh or try again later.');
    });
});
