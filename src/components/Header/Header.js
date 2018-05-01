import React, {Component} from 'react';
import { Link } from "react-router-dom";

import Button from '../Common/Button';
import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.searchClick = this.searchClick.bind(this);
    }
    searchClick(ev) {
        ev.preventDefault();
    }

    render() {
        var view = '';
        if (this.props.showSearchButton === true) {
            view = (
                <form className="form-inline">
                    <Link to="/" className="btn btn-primary btn-sm widerButton">SEARCH</Link>
                </form>
            );
        }
        
        return (
            <div className = "container">
                <nav className="navbar navbar-light">
                    <a className="navbar-brand navbarItem" href="#">netflixroulette</a>
                    {view}
                </nav>
            </div>
        );
    }
}
