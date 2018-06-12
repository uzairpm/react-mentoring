import { connect } from 'react-redux';

import Header from '../Header';

function mapStateToProps() {
    return {
        showSearchButton: false
    }
}

export default connect(mapStateToProps)(Header);
