import React, {Component} from 'react';

import BackButton from './BackButton';
import SearchBox from '../Search/SearchBox';
import './header.css';

const Header = (props) => (
    <div className = "container">
        <nav className="navbar navbar-light">
            <a className="navbar-brand navbarItem" href="#">netflixroulette</a>
            { props.showSearchButton && <BackButton /> }
        </nav>
        { props.showSearchButton === false && <SearchBox titleActive={props.titleActive}
                value={props.searchText}
                valChange={props.valueChangeHandler}
                titleClick={props.titleClick}
                genreClick={props.genreClick}
                searchClick={props.searchClick} /> }
    </div>
);
export default Header;
