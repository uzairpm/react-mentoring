import React, {Component} from 'react';

import Constants from '../Common/constants';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SimilarMovies from './SimilarMovies';
import MovieBanner from './MovieBanner';
import './moviedetails.css';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            selectedGenre: '',
            similarMovies: []
        };
    }
    componentDidMount() {
        let url = `${Constants.baseURL}/${this.props.match.params.id}`;
        this.getRequest(url).then(response => {
            this.populateState(response);
            this.fetchSimilarMovies(response.genres[0]);
        });
    }
    componentWillReceiveProps(nextProps) {
        let url = `${Constants.baseURL}/${nextProps.match.params.id}`;
        this.getRequest(url).then(response => {
            this.populateState(response);
            this.fetchSimilarMovies(response.genres[0]);
        });
    }
    populateState(response) {
        this.setState({
            movie: response
        });
    }
    fetchSimilarMovies(genre) {
        let url = `${Constants.baseURL}?search=${genre}&searchBy=genres&sortBy=release_date&sortOrder=desc`;
        this.getRequest(url)
            .then(response => {
                this.populateStateForSimilarMovies(genre, response.data);
            });
    }
    getRequest(url) {
        return fetch(url).then(res => res.json());
    }
    populateStateForSimilarMovies(genre, response) {
        this.setState({
            selectedGenre: genre,
            similarMovies: response
        });
    }
    render() {
        return (
            <div>
                <Header showSearchButton={true} />
                <MovieBanner movie={this.state.movie} />
                <SimilarMovies genre={this.state.selectedGenre} movies={this.state.similarMovies} />
                <Footer />
            </div>
        );
    }
}
