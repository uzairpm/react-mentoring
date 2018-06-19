import React from 'react';
import styled from 'styled-components'

const FooterSpan = styled.span`
    font-size: 1.4rem;
    font-Weight: 500;
    color: #fa6c85 !important;
`;

const Footer = (props) => (
    <footer className="container appFooter">
        <nav className="navbar navbar-dark bg-dark">
            <FooterSpan className="navbar-brand navbarItem">netflixroulette</FooterSpan>
        </nav>
    </footer>
);
export default Footer;
