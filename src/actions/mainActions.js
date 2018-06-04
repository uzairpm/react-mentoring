import * as types from './actionTypes';

export function setTitleActive() {
    return {
        type: types.SET_TITLE_ACTIVE
    }
}
export function setGenreActive() {
    return {
        type: types.SET_GENRE_ACTIVE
    }
}
export function setSearchValue(val) {
    return {
        type: types.SET_SEARCH_STR,
        value: val
    }
}
export function sortByReleaseDate() {
    return {
        type: types.SORT_RELEASE_DATE
    }
}
export function sortByRating() {
    return {
        type: types.SORT_RATING
    }
}
export function fetchMoviesSuccess(movies) {
    return {
        type: types.FETCH_MOVIES_SUCCESS,
        movies
    }
}
export function fetchMovies(url) {
    return function(dispatch) {
        return fetch(url).then(res => res.json())
            .then(movies => dispatch(fetchMoviesSuccess(movies)));
    }
}
