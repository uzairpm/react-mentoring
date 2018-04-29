import React, {Component} from 'react';

import './footer.css';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="container appFooter">
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand navbarItem">netflixroulette</span>
                </nav>
            </footer>
        );
    }
}
