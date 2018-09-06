import React, {Component} from 'react';

import BackButton from './BackButton';
import SearchBoxContainer from '../Search/containers/SearchBoxContainer';

const navbarItem = {
    fontSize: '1.4rem',
    fontWeight: 500,
    color: '#fa6c85'
};

const Header = (props) => (
    <div className = "container">
        <nav className="navbar navbar-light">
            <a className="navbar-brand navbarItem" href="#" style={navbarItem}>netflixroulette</a>
            { props.showSearchButton && <BackButton /> }
        </nav>
        { props.showSearchButton === false && <SearchBoxContainer /> }
    </div>
);
export default Header;
