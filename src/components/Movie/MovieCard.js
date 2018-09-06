import React, {Component} from 'react';
import { Link } from "react-router-dom";

const anchorStyle = {
    textDecoration: 'none',
    color: 'black'
};
const movieCard = {
    padding: '40px',
    transition: 'box-shadow 0.3s ease-in-out'
};
const movieTitle = {
    textTransform: 'uppercase',
    fontWeight: 500,
    marginBottom: 0
};

export default class MovieCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { id, poster_path, title, release_date, genres } = this.props.movie;
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <Link to={'/film/' + id} className="anchorStyle" style={anchorStyle}>
                    <div className="movieCard" style={movieCard}>
                        <img className="card-img-top albumArt" src={poster_path} />
                        <div className="movieDetails mt-2">
                            <div>
                                <label className="movieTitle" style={movieTitle}>{title}</label>
                                <span className="badge badge-light float-right">{release_date.substr(0, 4)}</span>
                            </div>
                            <small>{genres.join(', ')}</small>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
