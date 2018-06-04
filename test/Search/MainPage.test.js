import { shallow, mount } from 'enzyme';
import React from 'react';

import { MainPage } from '../../src/components/Search/MainPage';

describe('MainPage Component', () => {
    test('Snapshot test with default props', () => {
        const element = shallow(<MainPage />);
        expect(element).toMatchSnapshot();
    });
    let enzymeWrapper, props;
    beforeEach(() => {
        props = {
            actions: {
                setTitleActive: jest.fn(),
                setGenreActive: jest.fn(),
                sortByReleaseDate: jest.fn(),
                sortByRating: jest.fn(),
                setSearchValue: jest.fn(),
                fetchMovies: jest.fn()
            },
            history: []
        };
        enzymeWrapper = shallow(<MainPage {...props} />);
    });
    test('Should call setTitleActive when Title button is clicked', () => {
        enzymeWrapper.instance().handleTitleClick();
        expect(props.actions.setTitleActive.mock.calls.length).toBe(1);
    });
    test('Should call setGenreActive when Genre button is clicked', () => {
        enzymeWrapper.instance().handleGenreClick();
        expect(props.actions.setGenreActive.mock.calls.length).toBe(1);
    });
    test('Should call setSearchValue when a search text is entered on the search bar', () => {
        enzymeWrapper.instance().valueChangeHandler({target: {value: 'mat'}});
        expect(props.actions.setSearchValue.mock.calls.length).toBe(1);
    });
    test('Should call sortByReleaseDate when sorted based on Release date', () => {
        enzymeWrapper.instance().handleReleaseDateClick();
        expect(props.actions.sortByReleaseDate.mock.calls.length).toBe(1);
    });
    test('Should call sortByRating when sorted based on Rating', () => {
        enzymeWrapper.instance().handleRatingClick();
        expect(props.actions.sortByRating.mock.calls.length).toBe(1);
    });
    test('Should call fetchMovies when search is triggered', () => {
        enzymeWrapper.instance().refreshSearchResults();
        expect(props.actions.fetchMovies.mock.calls.length).toBe(1);
    });
});
