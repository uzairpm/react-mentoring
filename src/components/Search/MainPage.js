import React, {Component} from 'react';

import { Route, Link } from "react-router-dom";

import Header from '../Header/Header';
import SearchBox from '../Search/SearchBox';
import SearchResults from '../Search/SearchResults';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchButtonOnHeader: false,
            movies: [],
            titleActive: true,
            sortByReleaseDate: true,
            searchText: ''
        };
        this.titleClick = this.titleClick.bind(this);
        this.genreClick = this.genreClick.bind(this);
        this.searchClick = this.searchClick.bind(this);
        this.releaseDateClick = this.releaseDateClick.bind(this);
        this.ratingClick = this.ratingClick.bind(this);
        this.valueChangeHandler = this.valueChangeHandler.bind(this);
    }
    componentDidMount() {
    }
    loadData() {
        let url = 'http://react-cdp-api.herokuapp.com/movies?search='+this.state.searchText+'&searchBy=';
        if(this.state.titleActive === true) {
            url += 'title';
        } else {
            url += 'genres';
        }
        if (this.state.sortByReleaseDate === true) {
            url += '&sortBy=release_date&sortOrder=desc';
        } else {
            url += '&sortBy=vote_average&sortOrder=desc';
        }
        fetch(url)
            .then(res => res.json())
            .then(response => {
                this.setState({
                    movies: response.data
                });
            });
    }
    searchClick() {
        this.loadData();
    }
    titleClick() {
        this.setState({ titleActive: true });
    }
    genreClick() {
        this.setState({ titleActive: false });
    }
    releaseDateClick() {
        this.setState({ sortByReleaseDate: true }, () => {
            this.loadData();
        });
    }
    ratingClick() {
        this.setState({ sortByReleaseDate: false }, () => {
            this.loadData();
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
                <Header showSearchButton={this.state.showSearchButtonOnHeader} />
                <SearchBox titleActive={this.state.titleActive}
                    value={this.state.searchText}
                    valChange={this.valueChangeHandler}
                    titleClick={this.titleClick}
                    genreClick={this.genreClick}
                    searchClick={this.searchClick}/>
                <SearchResults movies={this.state.movies}
                    releaseDate={this.state.sortByReleaseDate}
                    releaseDateClick={this.releaseDateClick}
                    ratingClick={this.ratingClick} />
            </div>
        );
    }
}

/*<Link to="/film/1">Yahoo</Link>*/