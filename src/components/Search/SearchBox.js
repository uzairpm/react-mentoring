import React, {Component} from 'react';

import Button from '../Common/Button';
import './searchbox.css';

export default class SearchBox extends Component {
    constructor(props) {
        super(props);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }
    componentDidMount() {
        if (location.hash.indexOf('/search/') !== -1) {
            const searchQuery = location.hash.substr(9);
            if (searchQuery.length > 0) {
                this.props.titleClick();
                this.props.valChange(searchQuery);
                this.props.searchClick();
            }
        }
    }
    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.searchClick();
        }
    }
    render() {
        return (
            <div className="jumbotron">
                <p className="lead">FIND YOUR MOVIE</p>
                <div className="input-group mb-3">
                    <input type="text" 
                        className="form-control rounded-0 searchInput"
                        onChange={(e) => this.props.valChange(e.target.value) }
                        value={ this.props.value }
                        onKeyPress={this._handleKeyPress} />
                </div>
                <label className="mr-3">SEARCH BY</label>
                <Button label="TITLE"
                    clickHandler={this.props.titleClick}
                    className={"widerButton btn btn-sm mr-3 " + (this.props.titleActive ? 'btn-dark' : 'btn-outline-dark')}/>
                <Button label="GENRE"
                    clickHandler={this.props.genreClick}
                    className={"widerButton btn btn-sm " + (this.props.titleActive ? 'btn-outline-dark' : 'btn-dark')}/>
                <Button label="SEARCH" 
                    className="widerButton btn btn-primary btn-sm float-right" 
                    type="submit" clickHandler={this.props.searchClick}/>
            </div>
        );
    }
}
