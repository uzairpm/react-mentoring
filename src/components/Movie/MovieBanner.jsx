import React from 'react';
import styled from 'styled-components';

import PropTypeShapes from '../Common/PropTypeShapes';

const PaddedDiv = styled.div`
    padding: 25px;
`;
const MovieTitle = styled.h4`
    color: #fa6c85;
    display: inline-block;
`;
const MovieDesc = styled.p`
    font-size: 1rem;
`;
const Rating = styled.span`
    border: 1px solid white;
    border-radius: 30px;
    padding: 3px 9px;
`;

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
                        <PaddedDiv className="col-sm-9 col-md-9 col-lg-9">
                            <MovieTitle className="mr-3">{title}</MovieTitle>
                            <Rating>{vote_average}</Rating>
                            <p className="text-muted">{genres && genres.join(', ')}</p>
                            <div className="mt-2">
                                <b className="mr-3">{release_date && release_date.substr(0,4)}</b>
                                <b>{runtime} mins</b>
                            </div>
                            <MovieDesc className="mt-3">{overview}</MovieDesc>
                        </PaddedDiv>
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
