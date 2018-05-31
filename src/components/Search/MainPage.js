import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as types from '../../actions/actionTypes';
import Constants from '../Common/constants';
import Header from '../Header/Header';
import SearchResults from '../Search/SearchResults';
import * as mainActions from '../../actions/mainActions';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export class MainPage extends Component {
    constructor(props) {
        super(props);
        this.handleTitleClick = this.handleTitleClick.bind(this);
        this.handleGenreClick = this.handleGenreClick.bind(this);
        this.refreshSearchResults = this.refreshSearchResults.bind(this);
        this.handleReleaseDateClick = this.handleReleaseDateClick.bind(this);
        this.handleRatingClick = this.handleRatingClick.bind(this);
        this.valueChangeHandler = this.valueChangeHandler.bind(this);
    }
    componentDidMount() {
        if (location.hash.indexOf('/search/') !== -1) {
            const searchQuery = location.hash.substr(9);
            if (searchQuery.length > 0) {
                this.props.actions.setSearchValue(searchQuery);
                document.getElementsByClassName('searchInput')[0].value = searchQuery;
                setTimeout(this.refreshSearchResults, 100);
            }
        }
    }
    refreshSearchResults() {
        let titleOrGenre = (this.props.titleActive === true) ? 'title' : 'genres';
        let dateOrVote = (this.props.sortByReleaseDate === true) ? 'release_date' : 'vote_average';
        let urlStr = `${Constants.baseURL}?search=${this.props.searchText}&searchBy=${titleOrGenre}&sortBy=${dateOrVote}&sortOrder=desc`;
        this.props.actions.fetchMovies(urlStr);
        if ((location.hash.indexOf('/search/') !== -1 && location.hash.substr(9) !== this.props.searchText) ||
            location.hash.indexOf('/search/') === -1) {
            this.props.history.push(`/search/${this.props.searchText}`);
        }
    }
    handleTitleClick() {
        this.props.actions.setTitleActive();
    }
    handleGenreClick() {
        this.props.actions.setGenreActive();
    }
    handleReleaseDateClick() {
        this.props.actions.sortByReleaseDate();
    }
    handleRatingClick() {
        this.props.actions.sortByRating();
    }
    valueChangeHandler(e) {
        this.props.actions.setSearchValue(e.target.value);
    }
    render() {
        return (
            <div>
                <Header showSearchButton={false}
                    titleActive={this.props.titleActive}
                    value={this.props.searchText}
                    valueChangeHandler={this.valueChangeHandler}
                    titleClick={this.handleTitleClick}
                    genreClick={this.handleGenreClick}
                    searchClick={this.refreshSearchResults} />
                <SearchResults movies={this.props.movies}
                    releaseDate={this.props.sortByReleaseDate}
                    releaseDateClick={this.handleReleaseDateClick}
                    ratingClick={this.handleRatingClick} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        movies: state.main.movies,
        titleActive: state.main.titleActive,
        sortByReleaseDate: state.main.sortByReleaseDate,
        searchText: state.main.searchText
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(mainActions, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
