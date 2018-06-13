import { shallow } from 'enzyme';
import React from 'react';
const fetchMock = require('fetch-mock');

import { MovieDetails } from '../../src/components/Movie/MovieDetails';

describe('MovieDetails Component', () => {
    let props, enzymeWrapper;
    beforeEach(function() {
        // global.fetch = fetchMock;
        const match = { params: { id: 603 } };
        props = {
            fetchMovieDetails: jest.fn()
        };
        enzymeWrapper = shallow(<MovieDetails match={match} {...props} />);
    });
    test('Snapshot test with default props', () => {
        expect(enzymeWrapper).toMatchSnapshot();
    });
    test('should call fetchMovieDetails when component gets mounted', () => {
        expect(props.fetchMovieDetails).toHaveBeenCalledTimes(1);
    });
});
