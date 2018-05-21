import { shallow } from 'enzyme';
import React from 'react';

import MainPage from '../../src/components/Search/MainPage';

describe('MainPage Component', () => {
    const element = shallow(<MainPage />);
    test('Snapshot test with default props', () => {
        expect(element).toMatchSnapshot();
    });
    test('Should update state when Title button is clicked', () => {
        element.instance().handleTitleClick();
        expect(element.state('titleActive')).toEqual(true);
    });
    test('Should update state when Genre button is clicked', () => {
        element.instance().handleGenreClick();
        expect(element.state('titleActive')).toEqual(false);
    });
    test('Should update state when a search text is entered on the search bar', () => {
        element.instance().valueChangeHandler({target: {value: 'mat'}});
        expect(element.state('searchText')).toEqual('mat');
    });
    test('Should update state when sorted based on Release date', () => {
        element.instance().handleReleaseDateClick();
        expect(element.state('sortByReleaseDate')).toEqual(true);
    });
    test('Should update state when sorted based on Rating', () => {
        element.instance().handleRatingClick();
        expect(element.state('sortByReleaseDate')).toEqual(false);
    });
    test('Should populate state when populateState function is invoked', () => {
        var movies = {test: 'test'};
        element.instance().populateState(movies);
        expect(element.state('movies').test).toEqual('test');
    })
});
