import React, {Component} from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import SimilarMovies from './SimilarMovies';
import MovieBanner from './MovieBanner';
import './moviedetails.css';

export default class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchButtonOnHeader: true,
            movie: {},
            selectedGenre: '',
            similarMovies: []
        };
    }
    componentDidMount() {
        let url = 'http://react-cdp-api.herokuapp.com/movies/'+this.props.match.params.id;
        fetch(url)
            .then(res => res.json())
            .then(response => {
                this.setState({
                    movie: response
                });
                this.fetchSimilarMovies(response.genres[0]);
            });
    }
    componentWillReceiveProps(nextProps) {
        let url = 'http://react-cdp-api.herokuapp.com/movies/'+nextProps.match.params.id;
        fetch(url)
            .then(res => res.json())
            .then(response => {
                this.setState({
                    movie: response
                });
                this.fetchSimilarMovies(response.genres[0]);
            });
    }
    fetchSimilarMovies(genre) {
        let url = 'http://react-cdp-api.herokuapp.com/movies?search='+genre+'&searchBy=genres&sortBy=release_date&sortOrder=desc';
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
                <Header showSearchButton={this.state.showSearchButtonOnHeader} />
                <MovieBanner movie={this.state.movie} />
                <SimilarMovies genre={this.state.selectedGenre} movies={this.state.similarMovies} />
                <Footer />
            </div>
        );
    }
}
