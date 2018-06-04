import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Constants from '../Common/constants';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SimilarMovies from './SimilarMovies';
import MovieBanner from './MovieBanner';
import './moviedetails.css';

import * as movieActions from '../../actions/movieActions';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export class MovieDetails extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let url = `${Constants.baseURL}/${this.props.match.params.id}`;
        this.props.actions.fetchMovieDetails(url);
    }
    render() {
        return (
            <div>
                <Header showSearchButton={true} />
                <MovieBanner movie={this.props.movie} />
                <SimilarMovies genre={this.props.selectedGenre} movies={this.props.similarMovies} />
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        movie: state.movie.movie,
        selectedGenre: state.movie.selectedGenre,
        similarMovies: state.movie.similarMovies
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(movieActions, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetails));
