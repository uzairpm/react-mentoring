import React, {Component} from 'react';

import BackButton from './BackButton';
import SearchBox from '../Search/SearchBox';
import SearchBoxContainer from '../Search/containers/SearchBoxContainer';
import './header.css';

const Header = (props) => (
    <div className = "container">
        <nav className="navbar navbar-light">
            <a className="navbar-brand navbarItem" href="#">netflixroulette</a>
            { props.showSearchButton && <BackButton /> }
        </nav>
        { props.showSearchButton === false && <SearchBoxContainer /> }
    </div>
);
export default Header;
