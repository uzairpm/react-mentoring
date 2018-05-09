import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";

import Constants from '../Common/constants';
import Header from '../Header/Header';
import SearchResults from '../Search/SearchResults';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            titleActive: true,
            sortByReleaseDate: true,
            searchText: ''
        };
        this.handleTitleClick = this.handleTitleClick.bind(this);
        this.handleGenreClick = this.handleGenreClick.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleReleaseDateClick = this.handleReleaseDateClick.bind(this);
        this.handleRatingClick = this.handleRatingClick.bind(this);
        this.valueChangeHandler = this.valueChangeHandler.bind(this);
    }
    refreshSearchResults() {
        let titleOrGenre = (this.state.titleActive === true) ? 'title' : 'genres';
        let dateOrVote = (this.state.sortByReleaseDate === true) ? 'release_date' : 'vote_average';
        let urlStr = `${Constants.baseURL}?search=${this.state.searchText}&searchBy=${titleOrGenre}&sortBy=${dateOrVote}&sortOrder=desc`;
        fetch(urlStr)
            .then(res => res.json())
            .then(response => {
                this.setState({
                    movies: response.data
                });
            });
    }
    handleSearchClick() {
        this.refreshSearchResults();
    }
    handleTitleClick() {
        this.setState({ titleActive: true });
    }
    handleGenreClick() {
        this.setState({ titleActive: false });
    }
    handleReleaseDateClick() {
        this.setState({ sortByReleaseDate: true }, () => {
            this.refreshSearchResults();
        });
    }
    handleRatingClick() {
        this.setState({ sortByReleaseDate: false }, () => {
            this.refreshSearchResults();
        });
    }
    valueChangeHandler(e) {
        this.setState({
            searchText: e.target.value
        });
    }
    render() {
        return (
            <div>
                <Header showSearchButton={false}
                    titleActive={this.state.titleActive}
                    value={this.state.searchText}
                    valueChangeHandler={this.valueChangeHandler}
                    titleClick={this.handleTitleClick}
                    genreClick={this.handleGenreClick}
                    searchClick={this.handleSearchClick} />
                <SearchResults movies={this.state.movies}
                    releaseDate={this.state.sortByReleaseDate}
                    releaseDateClick={this.handleReleaseDateClick}
                    ratingClick={this.handleRatingClick} />
            </div>
        );
    }
}
