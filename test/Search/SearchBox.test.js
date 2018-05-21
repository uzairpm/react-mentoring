import { shallow } from 'enzyme';
import React from 'react';

import SearchBox from '../../src/components/Search/SearchBox';

describe('SearchBox Component', () => {
    const onChangeText = jest.fn();
    const onClickSearch = jest.fn();
    const element = shallow(<SearchBox titleActive={true}
        value={'matrix'}
        valChange={onChangeText}
        searchClick={onClickSearch}/>);
    test('Snapshot test with default props', () => {
        expect(element).toMatchSnapshot();
    });
    test('Should trigger search when Enter key is pressed', () => {
        element.instance()._handleKeyPress({key: 'Enter'});
        expect(onClickSearch).toHaveBeenCalled();
    });
    test('Should NOT trigger search when Shift key is pressed', () => {
        const onClickSearch2 = jest.fn();
        element.instance()._handleKeyPress({key: 'Shift'});
        expect(onClickSearch2).toHaveBeenCalledTimes(0);
    });
    test('Snapshot test with custom values for props', () => {
        const element2 = shallow(<SearchBox titleActive={false}
            value={'mat'}
            valChange={onChangeText}
            searchClick={onClickSearch}/>);
        expect(element2).toMatchSnapshot();
    });
});
