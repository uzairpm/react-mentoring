import { connect } from 'react-redux';

import SearchResults from '../SearchResults';
import * as selectors from '../../../selectors';
import * as appActions from '../../../actions';

function mapStateToProps(state, ownProps) {
    return {
        movies: selectors.getMovies(state),
        releaseDate: selectors.getSortByReleaseDateState(state)
    }
}

const mapDispatchToProps = {
    releaseDateClick: appActions.sortByReleaseDate,
    ratingClick: appActions.sortByRating
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);