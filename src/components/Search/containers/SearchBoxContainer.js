import { connect } from 'react-redux';

import SearhBox from '../SearchBox';
import * as selectors from '../../../selectors';
import * as appActions from '../../../actions';

function mapStateToProps(state, ownProps) {
    return {
        titleActive: selectors.getTitleActiveState(state),
        // searchText: selectors.getSearchtext(state),
    }
}

const mapDispatchToProps = {
    valChange: appActions.setSearchValue2,
    titleClick: appActions.setTitleActive,
    genreClick: appActions.setGenreActive,
    searchClick: appActions.refreshSearchResults
}

export default connect(mapStateToProps , mapDispatchToProps)(SearhBox);