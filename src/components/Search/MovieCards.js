import React from 'react';

import MovieCard from '../Movie/MovieCard';
import SearchFilter from './SearchFilter';
import Footer from '../Footer/Footer';

const MovieCards = (props) => {
    return (
        <div>
            <SearchFilter resultCount={props.movies.length}
                releaseDate={props.releaseDate}
                releaseDateClick={props.releaseDateClick}
                ratingClick={props.ratingClick} />
            <div className="row">
                {
                    props.movies.map(movie => {
                        return <MovieCard key={movie.id} movie={movie} />
                    })
                }
            </div>
            <Footer />
        </div>
    );
};
export default MovieCards;
