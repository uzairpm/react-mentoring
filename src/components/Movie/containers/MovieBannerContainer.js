import { connect } from 'react-redux';

import MovieBanner from '../MovieBanner';
import * as selectors from '../../../selectors';

function mapStateToProps(state, ownProps) {
    return {
        movie: selectors.getMovie(state)
    }
}

export default connect(mapStateToProps)(MovieBanner);
