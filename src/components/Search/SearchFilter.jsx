import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Common/Button';

const SearchFilterBar = styled.div`
    padding: 5px 15px;
`;


const SearchFilter = (props) => (
    <div className="card">
        <SearchFilterBar>
            {props.resultCount} movies found
            <div className="float-right">
                <label className="mr-3">Sort by</label>
                <Button label="Release Date"
                    clickHandler={props.releaseDateClick}
                    className={"btn btn-sm mr-3 " + (props.releaseDate ? 'btn-dark' : 'btn-light')}/>
                <Button label="Rating"
                    clickHandler={props.ratingClick}
                    className={"btn btn-sm " + (props.releaseDate ? 'btn-light' : 'btn-dark')}/>
            </div>
        </SearchFilterBar>
    </div>
);

SearchFilter.propTypes = {
    resultCount: PropTypes.number.isRequired,
    releaseDateClick: PropTypes.func.isRequired,
    ratingClick: PropTypes.func.isRequired,
    releaseDate: PropTypes.bool
};
export default SearchFilter;
