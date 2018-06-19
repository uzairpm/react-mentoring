import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Constants from '../Common/constants';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MovieBannerContainer from './containers/MovieBannerContainer';
import SimilarMoviesContainer from './containers/SimilarMoviesContainer';
import * as appActions from '../../actions';

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
                <MovieBannerContainer />
                <SimilarMoviesContainer />
                <Footer />
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchMovieDetails: appActions.fetchMovieDetails
}

export default withRouter(connect(null, mapDispatchToProps)(MovieDetails));
