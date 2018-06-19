import React, {Component} from 'react';
import styled from 'styled-components';

import Button from '../Common/Button';

const Jumbotron = styled.div`
    padding: 1rem 1rem;
    margin-bottom: 0;
`;
const SearchInput = styled.input`
    border-bottom: 2px solid #fa6c85;
`;
const WiderButton = styled(Button)`
    padding: 0.25rem 2rem;
`;

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
            <Jumbotron className="jumbotron">
                <p className="lead">FIND YOUR MOVIE</p>
                <div className="input-group mb-3">
                    <SearchInput type="text" 
                        className="form-control rounded-0 searchInput"
                        onChange={(e) => this.props.valChange(e.target.value) }
                        value={ this.props.value }
                        onKeyPress={this._handleKeyPress} />
                </div>
                <label className="mr-3">SEARCH BY</label>
                <WiderButton label="TITLE"
                    clickHandler={this.props.titleClick}
                    className={"btn btn-sm mr-3 " + (this.props.titleActive ? 'btn-dark' : 'btn-outline-dark')}/>
                <WiderButton label="GENRE"
                    clickHandler={this.props.genreClick}
                    className={"btn btn-sm " + (this.props.titleActive ? 'btn-outline-dark' : 'btn-dark')}/>
                <WiderButton label="SEARCH" 
                    className="btn btn-primary btn-sm float-right" 
                    type="submit" clickHandler={this.props.searchClick}/>
            </Jumbotron>
        );
    }
}
