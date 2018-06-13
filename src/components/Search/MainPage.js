import React, {Component} from 'react';

import Header from '../Header/Header';
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
                <Header showSearchButton={false} />
                <SearchResultsContainer />
            </div>
        );
    }
}
export default MainPage;
