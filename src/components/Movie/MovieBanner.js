import React, {Component} from 'react';
import PropTypes from 'prop-types';

const MovieBanner = (props) => {
    return (
        <div className="container mt-2">
            <div className="card text-white bg-dark">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <img className="albumArt" src={props.movie.poster_path} />
                        </div>
                        <div className="col-sm-9 col-md-9 col-lg-9 padding25">
                            <h4 className="movieTitle">{props.movie.title}</h4>
                            <small className="text-muted">{props.movie.genres && props.movie.genres.join(', ')}</small>
                            <div className="mt-2">
                                <b className="mr-3">{props.movie.release_date && props.movie.release_date.substr(0,4)}</b>
                                <b>{props.movie.runtime} mins</b>
                            </div>
                            <p className="movieDesc mt-3">{props.movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
MovieBanner.propTypes = {
    movie: PropTypes.object.isRequired
};
export default MovieBanner;
