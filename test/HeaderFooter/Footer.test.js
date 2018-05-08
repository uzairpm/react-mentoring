import React from 'react';

import Footer from '../../src/components/Footer/Footer';

describe('Check Component creation', () => {
    const element = shallow(<Footer/>);
    test('Footer component snapshot test', () => {
        expect(element).toMatchSnapshot();
    });
    test('Footer component 1', () => {
        expect(element.text()).toEqual('netflixroulette');
    });
    test('Footer component 2', () => {
        expect(element.find('span').prop('className')).toContain('navbarItem');
    });
});
