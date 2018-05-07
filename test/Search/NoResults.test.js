import React from 'react';

import NoResults from '../../src/components/Search/NoResults';

describe('Check Component creation', () => {
    test('NoResults component', () => {
        const element = shallow(<NoResults />);
        // console.log(element.debug());
        expect(element).toMatchSnapshot();
    });
});
