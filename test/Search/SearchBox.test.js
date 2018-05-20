import { shallow } from 'enzyme';
import React from 'react';

import SearchBox from '../../src/components/Search/SearchBox';

describe('Check Component creation', () => {
    const onChangeText = jest.fn();
    const onClickSearch = jest.fn();
    const element = shallow(<SearchBox titleActive={true}
        value={'matrix'}
        valChange={onChangeText}
        searchClick={onClickSearch}/>);
    test('SearchBox component snapshot test', () => {
        expect(element).toMatchSnapshot();
    });
    test('Check SearchBox component on Enter press to trigger search', () => {
        element.instance()._handleKeyPress({key: 'Enter'});
        expect(onClickSearch).toHaveBeenCalled();
    });
    test('Check SearchBox component on Shift press to NOT trigger search', () => {
        const onClickSearch2 = jest.fn();
        element.instance()._handleKeyPress({key: 'Shift'});
        expect(onClickSearch2).toHaveBeenCalledTimes(0);
    });
    test('SearchBox component snapshot test', () => {
        const element2 = shallow(<SearchBox titleActive={false}
            value={'mat'}
            valChange={onChangeText}
            searchClick={onClickSearch}/>);
        expect(element2).toMatchSnapshot();
    });
});
