import React, {Component} from 'react';

import MovieCard from './MovieCard';

export default class SimilarMovies extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const movieCards = this.props.movies.map(movie => {
            return <MovieCard key={movie.id} movie={movie} />
        });
        return (
            <div className="container mt-2">
                <div className="card">
                    <div className="card-body">
                        Films by {this.props.genre} genre
                    </div>
                </div>
                <div className="row">
                    {movieCards}
                </div>
            </div>
        );
    }
};
