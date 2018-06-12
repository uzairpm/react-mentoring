import React, {Component} from 'react';

import HeaderContainer from '../Header/containers/HeaderContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <HeaderContainer />
                <SearchResultsContainer />
            </div>
        );
    }
}
export default MainPage;
