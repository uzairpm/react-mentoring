import React from 'react';

import Footer from '../../src/components/Footer/Footer';

describe('Check Component creation', () => {
    test('Footer component', () => {
        const element = shallow(<Footer/>);
        expect(element).toMatchSnapshot();
        // console.log(element.debug());
        expect(element.text()).toEqual('netflixroulette');
        expect(element.find('span').prop('className')).toContain('navbarItem');
    });
});
