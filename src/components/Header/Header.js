import React, {Component} from 'react';

import BackButton from './BackButton';
import './header.css';

const Header = (props) => {
    return (
        <div className = "container">
            <nav className="navbar navbar-light">
                <a className="navbar-brand navbarItem" href="#">netflixroulette</a>
                { props.showSearchButton && <BackButton /> }
            </nav>
        </div>
    );
}
export default Header;
