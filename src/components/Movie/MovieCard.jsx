import React, {Component} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        text-decoration: none;
        color: black;
    }
`;
const MovieTitle = styled.label`
    color: #fa6c85;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 0;
`;
const MovieCardDiv = styled.div`
    padding: 40px;
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 15px 2px rgba(250, 108, 133, 0.76);
    }
`;

export default class MovieCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            id,
            poster_path,
            title,
            release_date,
            genres
        } = this.props.movie;
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <StyledLink to={'/film/' + id} className="anchorStyle">
                    <MovieCardDiv>
                        <img className="card-img-top rounded" src={poster_path} alt="Movie artwork" />
                        <div className="movieDetails mt-2">
                            <div>
                                <MovieTitle>{title}</MovieTitle>
                                <span className="badge badge-light float-right">{release_date.substr(0, 4)}</span>
                            </div>
                            <small>{genres.join(', ')}</small>
                        </div>
                    </MovieCardDiv>
                </StyledLink>
            </div>
        );
    }
}
