import React, {Component} from 'react';

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
                    <Button type="submit"
                        label="SEARCH"
                        className="btn btn-primary btn-sm widerButton"
                        clickHandler={this.searchClick} />
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
