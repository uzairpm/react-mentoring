import React from 'react';

import PropTypeShapes from '../Common/PropTypeShapes';

const padding25 = {
    padding: '25px'
};
const movieTitle = {
    color: '#fa6c85',
    display: 'inline-block'
};
const movieDesc = {
    fontSize: '1rem'
};
const avgRating = {
    border: '1px solid white',
    borderRadius: '30px',
    padding: '3px 9px'
};

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
                            <img className="img-fluid rounded" src={poster_path} />
                        </div>
                        <div className="col-sm-9 col-md-9 col-lg-9 padding25" style={padding25}>
                            <h4 className="movieTitle mr-3" style={movieTitle}>{title}</h4>
                            <span className="avgRating" style={avgRating}>{vote_average}</span>
                            <p className="text-muted">{genres && genres.join(', ')}</p>
                            <div className="mt-2">
                                <b className="mr-3">{release_date && release_date.substr(0,4)}</b>
                                <b>{runtime} mins</b>
                            </div>
                            <p className="movieDesc mt-3" style={movieDesc}>{overview}</p>
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
