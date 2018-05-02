import React, {Component} from 'react';

import MovieCard from './MovieCard';

const SimilarMovies = (props) => {
    return (
        <div className="container mt-2">
            <div className="card">
                <div className="card-body">
                    Films by {props.genre} genre
                </div>
            </div>
            <div className="row">
                { 
                    props.movies.map(movie => {
                        return <MovieCard key={movie.id} movie={movie} />
                    })
                }
            </div>
        </div>
    );
}
export default SimilarMovies;
