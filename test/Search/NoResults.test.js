import { shallow } from 'enzyme';
import React from 'react';

import NoResults from '../../src/components/Search/NoResults';

describe('NoResults Component', () => {
    test('Snapshot test with default props', () => {
        const element = shallow(<NoResults />);
        expect(element).toMatchSnapshot();
    });
});
