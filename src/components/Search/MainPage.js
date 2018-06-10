import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

import Constants from '../Common/constants';
import Header from '../Header/Header';
import SearchResults from '../Search/SearchResults';
import * as selectors from '../../selectors';
import * as appActions from '../../actions';

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
    refreshSearchResults() {
        const titleOrGenre = (this.props.titleActive === true) ? 'title' : 'genres';
        const dateOrVote = (this.props.sortByReleaseDate === true) ? 'release_date' : 'vote_average';
        const urlStr = `${Constants.baseURL}?search=${this.props.searchText}&searchBy=${titleOrGenre}&sortBy=${dateOrVote}&sortOrder=desc`;
        this.props.fetchMovies(urlStr);
    }
    handleTitleClick() {
        this.props.setTitleActive();
    }
    handleGenreClick() {
        this.props.setGenreActive();
    }
    handleReleaseDateClick() {
        this.props.sortByReleaseDateState();
    }
    handleRatingClick() {
        this.props.sortByRatingState();
    }
    valueChangeHandler(e) {
        this.props.setSearchValue(e.target.value);
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
        movies: selectors.getMovies(state),
        titleActive: selectors.getTitleActiveState(state),
        sortByReleaseDate: selectors.getSortByReleaseDateState(state),
        searchText: selectors.getSearchtext(state)
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setTitleActive: () => dispatch(appActions.setTitleActive()),
        setGenreActive: () => dispatch(appActions.setGenreActive()),
        sortByReleaseDateState: () => dispatch(appActions.sortByReleaseDate()),
        sortByRatingState: () => dispatch(appActions.sortByRating()),
        setSearchValue: (value) => dispatch(appActions.setSearchValue(value)),
        fetchMovies: (url) => dispatch(appActions.fetchMovies(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
