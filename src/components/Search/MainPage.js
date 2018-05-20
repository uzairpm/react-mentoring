import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as types from '../../actions/actionTypes';
import Constants from '../Common/constants';
import Header from '../Header/Header';
import SearchResults from '../Search/SearchResults';
import * as mainActions from '../../actions/mainActions';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.handleTitleClick = this.handleTitleClick.bind(this);
        this.handleGenreClick = this.handleGenreClick.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleReleaseDateClick = this.handleReleaseDateClick.bind(this);
        this.handleRatingClick = this.handleRatingClick.bind(this);
        this.valueChangeHandler = this.valueChangeHandler.bind(this);
    }
    refreshSearchResults() {
        let titleOrGenre = (this.props.titleActive === true) ? 'title' : 'genres';
        let dateOrVote = (this.props.sortByReleaseDate === true) ? 'release_date' : 'vote_average';
        let urlStr = `${Constants.baseURL}?search=${this.props.searchText}&searchBy=${titleOrGenre}&sortBy=${dateOrVote}&sortOrder=desc`;
        this.fetchSearchResults(urlStr).then(response => {
            this.populateMovies(response.data);
        });
    }
    populateMovies(response) {
        this.props.actions.setMoviesList(response);
    }
    fetchSearchResults(urlStr) {
        return fetch(urlStr).then(res => res.json());
    }
    handleSearchClick() {
        this.refreshSearchResults();
    }
    handleTitleClick() {
        this.props.actions.setTitleActive();
    }
    handleGenreClick() {
        // this.setState({ titleActive: false });
        this.props.actions.setGenreActive();
    }
    handleReleaseDateClick() {
        this.props.actions.setReleaseDateActive(() => {
            this.refreshSearchResults();
        })
        /* this.setState({ sortByReleaseDate: true }, () => {
            this.refreshSearchResults();
        }); */
    }
    handleRatingClick() {
        this.props.actions.setRatingActive(() => {
            this.refreshSearchResults();
        });
        /* this.setState({ sortByReleaseDate: false }, () => {
            this.refreshSearchResults();
        }); */
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
                    searchClick={this.handleSearchClick} />
                <SearchResults movies={this.props.movies}
                    releaseDate={this.props.sortByReleaseDate}
                    releaseDateClick={this.handleReleaseDateClick}
                    ratingClick={this.handleRatingClick} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log('3 mapStateToProps');
    console.log(state);
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
