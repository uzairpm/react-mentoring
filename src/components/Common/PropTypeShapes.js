import PropTypes from 'prop-types';

const moviePropType = PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    genres: PropTypes.array,
    overview: PropTypes.string
});
export default {
    moviePropType
};