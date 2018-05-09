import React, {Component} from 'react';

import Constants from '../Common/constants';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SimilarMovies from './SimilarMovies';
import MovieBanner from './MovieBanner';
import './moviedetails.css';

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
        this.fetchMovieDetails(url).then(response => {
            this.populateState(response);
            this.fetchSimilarMovies(response.genres[0]);
        });
    }
    componentWillReceiveProps(nextProps) {
        let url = `${Constants.baseURL}/${nextProps.match.params.id}`;
        this.fetchMovieDetails(url).then(response => {
            this.populateState(response);
            this.fetchSimilarMovies(response.genres[0]);
        });
    }
    fetchMovieDetails(url) {
        return fetch(url).then(res => res.json());
    }
    populateState(response) {
        this.setState({
            movie: response
        });
    }
    fetchSimilarMovies(genre) {
        let url = `${Constants.baseURL}?search=${genre}&searchBy=genres&sortBy=release_date&sortOrder=desc`;
        fetch(url)
            .then(res => res.json())
            .then(response => {
                this.setState({
                    selectedGenre: genre,
                    similarMovies: response.data
                });
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
