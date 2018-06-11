import { connect } from 'react-redux';

import SimilarMovies from '../SimilarMovies';
import * as selectors from '../../../selectors';

function mapStateToProps(state, ownProps) {
    return {
        genre: selectors.getSelectedGenre(state),
        movies: selectors.getSimilarMovies(state)
    }
}

export default connect(mapStateToProps)(SimilarMovies);
