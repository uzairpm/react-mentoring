import React, {Component} from 'react';

import Button from './Common/Button';
import MovieCard from './MovieCard';
import SearchFilter from './SearchFilter';
import Footer from './Footer/Footer';

import './searchresults.css';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const movieCards = this.props.movies.map(movie => {
            return <MovieCard key={movie.id} movie={movie} />
        });
        let view = '';
        if (this.props.movies.length === 0) {
            view = (
                <h1 className="display-2 text-center mt-5">No films found</h1>
            );
        } else {
            view = (
                <div>
                    <SearchFilter resultCount={this.props.movies.length}
                        releaseDate={this.props.releaseDate}
                        releaseDateClick={this.props.releaseDateClick}
                        ratingClick={this.props.ratingClick} />
                    <div className="row">
                        { movieCards }
                    </div>
                    <Footer />
                </div>
            );
        }
        return (
            <div className="container">
                {view}
            </div>
        );
    }
}