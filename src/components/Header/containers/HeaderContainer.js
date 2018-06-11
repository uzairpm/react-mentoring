import { connect } from 'react-redux';

import Header from '../Header';
import * as selectors from '../../../selectors';
import * as appActions from '../../../actions';

function mapStateToProps(state, ownProps) {
    return {
        showSearchButton: false,
        titleActive: selectors.getTitleActiveState(state),
        searchText: selectors.getSearchtext(state)
    }
}

const mapDispatchToProps = {
    valueChangeHandler: appActions.setSearchValue2,
    titleClick: appActions.setTitleActive,
    genreClick: appActions.setGenreActive,
    searchClick: appActions.refreshSearchResults
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);