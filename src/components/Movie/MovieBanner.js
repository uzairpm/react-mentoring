import React, {Component} from 'react';

import PropTypeShapes from '../Common/PropTypeShapes';

const MovieBanner = (props) => {
    const { 
        poster_path,
        title,
        vote_average,
        genres,
        release_date, 
        runtime,
        overview
    } = props.movie;
    return (
        <div className="container mt-2">
            <div className="card text-white bg-dark">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <img className="albumArt" src={poster_path} />
                        </div>
                        <div className="col-sm-9 col-md-9 col-lg-9 padding25">
                            <h4 className="movieTitle mr-3">{title}</h4>
                            <span className="avgRating">{vote_average}</span>
                            <p className="text-muted">{genres && genres.join(', ')}</p>
                            <div className="mt-2">
                                <b className="mr-3">{release_date && release_date.substr(0,4)}</b>
                                <b>{runtime} mins</b>
                            </div>
                            <p className="movieDesc mt-3">{overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
MovieBanner.propTypes = {
    movie: PropTypeShapes.moviePropType
};
MovieBanner.defaultProps = {
    vote_average: 0
};
export default MovieBanner;
