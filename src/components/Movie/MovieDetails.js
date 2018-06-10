import React, {Component} from 'react';
import { connect } from 'react-redux';

import Constants from '../Common/constants';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SimilarMovies from './SimilarMovies';
import MovieBanner from './MovieBanner';
import * as selectors from '../../selectors';
import * as appActions from '../../actions';
import './moviedetails.css';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export class MovieDetails extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let url = `${Constants.baseURL}/${this.props.match.params.id}`;
        this.props.fetchMovieDetails(url);
    }
    render() {
        return (
            <div>
                <Header showSearchButton />
                <MovieBanner movie={this.props.movie} />
                <SimilarMovies genre={this.props.selectedGenre} movies={this.props.similarMovies} />
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        movie: selectors.getMovie(state),
        selectedGenre: selectors.getSelectedGenre(state),
        similarMovies: selectors.getSimilarMovies(state)
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchMovieDetails: (url) => dispatch(appActions.fetchMovieDetails(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
