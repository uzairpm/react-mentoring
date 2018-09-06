import React from 'react';

const navbarItemFooter = {
    fontSize: '1.4rem',
    fontWeight: 500,
    color: '#fa6c85'
};

const Footer = (props) => (
    <footer className="container appFooter">
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand navbarItem" style={navbarItemFooter}>netflixroulette</span>
        </nav>
    </footer>
);
export default Footer;
