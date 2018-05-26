import Constants from '../components/Common/constants';
import * as types from './actionTypes';

export function fetchMovieDetails(url) {
    return function(dispatch) {
        fetch(url).then(res => res.json())
            .then(movie => {
                dispatch({
                    type: types.FETCH_MOVIE_DETAILS_SUCCESS,
                    movie
                });
                const genre = movie.genres[0];
                let url2 = `${Constants.baseURL}?search=${genre}&searchBy=genres&sortBy=release_date&sortOrder=desc`;
                fetch(url2).then(res => res.json())
                    .then(response => dispatch({
                        type: types.FETCH_SIMILAR_MOVIES_SUCCESS,
                        selectedGenre: genre,
                        similarMovies: response.data
                    }));
            });
    }
}
