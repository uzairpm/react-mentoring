import React from 'react';

import SearchBox from '../../src/components/Search/SearchBox';

describe('Check Component creation', () => {
    test('SearchBox component', () => {
        const onChangeText = jest.fn();
        const onClickSearch = jest.fn();
        const element = shallow(<SearchBox titleActive={true}
            value={'matrix'}
            valChange={onChangeText}
            searchClick={onClickSearch}/>);
        // console.log(element.debug());
        expect(element).toMatchSnapshot();
    });
});
