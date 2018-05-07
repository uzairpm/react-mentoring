import React from 'react';

import Header from '../../src/components/Header/Header';

describe('Check Component creation', () => {
    test('Header component', () => {
        const element = shallow(<Header/>);
        expect(element).toMatchSnapshot();
        const element2 = shallow(<Header showSearchButton={true}/>);
        expect(element2).toMatchSnapshot();
        // console.log(element2.debug());
        // expect(element2.html()).toContain('<BackButton />');
    });
});
