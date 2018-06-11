import Constants from '../components/Common/constants';
import * as types from './actionTypes';

export const setTitleActive = () => ({ type: types.SET_TITLE_ACTIVE });
export const setGenreActive = () => ({ type: types.SET_GENRE_ACTIVE });
export const setSearchValue = (val) => ({ type: types.SET_SEARCH_STR, payload: val });
export const setSearchValue2 = (e) => ({ type: types.SET_SEARCH_STR, payload: e.target.value });
export const sortByReleaseDate = () => ({ type: types.SORT_RELEASE_DATE });
export const sortByRating = () => ({ type: types.SORT_RATING });

export const refreshSearchResults = () => (dispatch, getState) => {
    const state = getState();
    const titleOrGenre = (state.titleActive === true) ? 'title' : 'genres';
    const dateOrVote = (state.sortByReleaseDate === true) ? 'release_date' : 'vote_average';
    const urlStr = `${Constants.baseURL}?search=${state.searchText}&searchBy=${titleOrGenre}&sortBy=${dateOrVote}&sortOrder=desc`;
    dispatch(fetchMovies(urlStr));
}
/* MoviePage actions */
export const fetchMoviesRequest = () => ({ type: types.FETCH_MOVIES_REQUEST });
export const fetchMoviesSuccess = (movies) => ({
    type: types.FETCH_MOVIES_SUCCESS,
    payload: movies
});
export const fetchError = (error) => ({
    type: types.FETCH_ERROR,
    payload: error,
    error: true
});
export function fetchMovies(url) {
    return function(dispatch) {
        dispatch(fetchMoviesRequest());
        return fetch(url).then(res => res.json())
            .then(movies => dispatch(fetchMoviesSuccess(movies)))
            .catch(error => dispatch(fetchError(error)));
    }
}

export const fetchMovieDetailsRequest = () => ({ type: types.FETCH_MOVIE_DETAILS_REQUEST });
export const fetchMovieDetailsSuccess = (movie) => ({ 
    type: types.FETCH_MOVIE_DETAILS_SUCCESS,
    payload: movie
});
export const fetchSimilarMoviesRequest = () => ({ type: types.FETCH_SIMILAR_MOVIES_REQUEST });
export const fetchSimilarMoviesSuccess = (genre, response) => ({ 
    type: types.FETCH_SIMILAR_MOVIES_SUCCESS,
    payload: {
        selectedGenre: genre,
        similarMovies: response
    }
});

//TODO - try to use async await
/* export const fetchMovieDetails = (url) => async (dispatch) => {
    try {
        const result = await fetch(url);
        const movie = result.json();
        const genre = movie.genres[0];
        let fetchSimilarMoviesURL = `${Constants.baseURL}?search=${genre}&searchBy=genres&sortBy=release_date&sortOrder=desc`;
        const similarMovies = await fetch(fetchSimilarMoviesURL);

        dispatch(fetchSimilarMoviesSuccess(genre, similarMovies.data));
    } catch (err) {
        dispatch(fetchMoviesError(err));
    }
} */
export function fetchMovieDetails(url) {
    return function(dispatch) {
        dispatch(fetchMovieDetailsRequest());
        return fetch(url)
            .then(res => res.json())
            .then(movie => {
                dispatch(fetchMovieDetailsSuccess(movie));
                const genre = movie.genres[0];
                let fetchSimilarMoviesURL = `${Constants.baseURL}?search=${genre}&searchBy=genres&sortBy=release_date&sortOrder=desc`;
                dispatch(fetchSimilarMoviesRequest());
                fetch(fetchSimilarMoviesURL)
                    .then(res => res.json())
                    .then(response => 
                        dispatch(fetchSimilarMoviesSuccess(genre, response.data))
                    );
                });
    }
}
