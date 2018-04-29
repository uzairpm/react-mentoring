import React, {Component} from 'react';

export default class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { poster_path, title, release_date, genres } = this.props.movie;
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <div className="movieCard">
                    <img className="card-img-top albumArt"
                        src={poster_path} />
                    <div className="movieDetails">
                        <div>
                            <label className="movieTitle">{title}</label>
                            <span className="badge badge-light float-right">{release_date.substr(0, 4)}</span>
                        </div>
                        <small>{genres.join(', ')}</small>
                    </div>
                </div>
            </div>
        );
    }
}