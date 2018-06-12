export const getMovies = (state) => state.movies || [];
export const getTitleActiveState = (state) => state.titleActive;
export const getSortByReleaseDateState = (state) => state.sortByReleaseDate;
export const getSearchtext = (state) => state.searchText || '';

export const getMovie = (state) => state.movie || {};
export const getSelectedGenre = (state) => state.selectedGenre || '';
export const getSimilarMovies = (state) => state.similarMovies || [];