import React, {Component} from 'react';

import NoResults from  './NoResults';
import MovieCards from './MovieCards';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                { this.props.movies.length === 0 && <NoResults/> }
                { this.props.movies.length > 0 && <MovieCards
                    movies={this.props.movies} 
                    releaseDate={this.props.releaseDate}
                    releaseDateClick={this.props.releaseDateClick}
                    ratingClick={this.props.ratingClick} />}
            </div>
        );
    }
}
