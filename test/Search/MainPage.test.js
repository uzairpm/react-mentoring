import React from 'react';

import MainPage from '../../src/components/Search/MainPage';

describe('Check Component creation', () => {
    const element = shallow(<MainPage />);
    test('MainPage component', () => {
        expect(element).toMatchSnapshot();
    });
    test('MainPage state', () => {
        element.instance().handleTitleClick();
        expect(element.state('titleActive')).toEqual(true);
    });
    test('MainPage state 2', () => {
        element.instance().handleGenreClick();
        expect(element.state('titleActive')).toEqual(false);
    });
    test('MainPage state 3', () => {
        element.instance().valueChangeHandler({target: {value: 'mat'}});
        expect(element.state('searchText')).toEqual('mat');
    });
    /* test('MainPage state 4', () => {
        element.instance().handleReleaseDateClick();
        expect(element.state('sortByReleaseDate')).toEqual(true);
    });
    test('MainPage state 5', () => {
        element.instance().handleRatingClick();
        expect(element.state('sortByReleaseDate')).toEqual(false);
    }); */
});
