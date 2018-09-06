import React, {Component} from 'react';

import Button from '../Common/Button';

const jumbotron = {
    padding: '1rem 1rem',
    marginBottom: 0
};
const searchInput = {
    borderBottom: '2px solid #fa6c85'
};
const widerButton = {
    padding: '0.25rem 2rem'
};

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
            <div className="jumbotron" style={jumbotron}>
                <p className="lead">FIND YOUR MOVIE</p>
                <div className="input-group mb-3">
                    <input type="text" 
                        className="form-control rounded-0 searchInput"
                        style={searchInput}
                        onChange={(e) => this.props.valChange(e.target.value) }
                        value={ this.props.value }
                        onKeyPress={this._handleKeyPress} />
                </div>
                <label className="mr-3">SEARCH BY</label>
                <Button label="TITLE"
                    clickHandler={this.props.titleClick}
                    style={widerButton}
                    className={"widerButton btn btn-sm mr-3 " + (this.props.titleActive ? 'btn-dark' : 'btn-outline-dark')}/>
                <Button label="GENRE"
                    style={widerButton}
                    clickHandler={this.props.genreClick}
                    className={"widerButton btn btn-sm " + (this.props.titleActive ? 'btn-outline-dark' : 'btn-dark')}/>
                <Button label="SEARCH" 
                    style={widerButton}
                    className="widerButton btn btn-primary btn-sm float-right" 
                    type="submit" clickHandler={this.props.searchClick}/>
            </div>
        );
    }
}
