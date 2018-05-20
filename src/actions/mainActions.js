import * as types from './actionTypes';

export function setTitleActive() {
    console.log('1 setTitleActive');
    return {
        type: types.SET_TITLE_ACTIVE
    }
}
export function setGenreActive() {
    console.log('1 setGenreActive');
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
export function setMoviesList(val) {
    return {
        type: types.SET_MOVIES_ARR,
        value: val
    }
}
export function setReleaseDateActive(cb) {
    return {
        type: types.SET_REL_DATE_ACTIVE,
        cb
    }
}
export function setRatingActive(cb) {
    return {
        type: types.SET_RATING_ACTIVE,
        cb
    }
}
