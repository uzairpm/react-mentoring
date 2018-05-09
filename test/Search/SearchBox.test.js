import React from 'react';

import SearchBox from '../../src/components/Search/SearchBox';

describe('Check Component creation', () => {
    const onChangeText = jest.fn();
    const onClickSearch = jest.fn();
    const element = shallow(<SearchBox titleActive={true}
        value={'matrix'}
        valChange={onChangeText}
        searchClick={onClickSearch}/>);
    test('SearchBox component', () => {
        expect(element).toMatchSnapshot();
    });
    test('click', () => {
        element.instance()._handleKeyPress({key: 'Enter'});
        expect(onClickSearch).toHaveBeenCalled();
    });
    test('no click', () => {
        const onClickSearch2 = jest.fn();
        element.instance()._handleKeyPress({key: 'Shift'});
        expect(onClickSearch2).toHaveBeenCalledTimes(0);
    });
    test('SearchBox component 2', () => {
        const element2 = shallow(<SearchBox titleActive={false}
            value={'mat'}
            valChange={onChangeText}
            searchClick={onClickSearch}/>);
        expect(element2).toMatchSnapshot();
    });
});
