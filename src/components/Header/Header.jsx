import React from 'react';
import styled from 'styled-components';

import BackButton from './BackButton';
import SearchBoxContainer from '../Search/containers/SearchBoxContainer';

const BrandLink = styled.a`
    font-size: 1.4rem;
    font-Weight: 500;
    color: #fa6c85 !important;
`;

const Header = (props) => (
    <div className = "container">
        <nav className="navbar navbar-light">
            <BrandLink className="navbar-brand" href="#">netflixroulette</BrandLink>
            { props.showSearchButton && <BackButton /> }
        </nav>
        { props.showSearchButton === false && <SearchBoxContainer /> }
    </div>
);
export default Header;
