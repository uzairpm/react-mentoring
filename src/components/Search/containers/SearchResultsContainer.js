import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchResults from '../SearchResults';
import * as selectors from '../../../selectors';
import * as appActions from '../../../actions';

function mapStateToProps(state) {
    return {
        movies: selectors.getMovies(state),
        releaseDate: selectors.getSortByReleaseDateState(state)
    }
}

const mapDispatchToProps = {
    releaseDateClick: appActions.sortByReleaseDate,
    ratingClick: appActions.sortByRating
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));
