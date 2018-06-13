import { connect } from 'react-redux';

import SearhBox from '../SearchBox';
import * as selectors from '../../../selectors';
import * as appActions from '../../../actions';

function mapStateToProps(state) {
    return {
        titleActive: selectors.getTitleActiveState(state),
        value: selectors.getSearchtext(state)
    }
}

const mapDispatchToProps = {
    valChange: appActions.setSearchValue,
    titleClick: appActions.setTitleActive,
    genreClick: appActions.setGenreActive,
    searchClick: appActions.refreshSearchResults
}

export default connect(mapStateToProps , mapDispatchToProps)(SearhBox);