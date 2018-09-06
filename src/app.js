import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './components/Search/MainPage';
import MovieDetails from './components/Movie/MovieDetails';
import NoMatch404 from './components/Common/NoMatch404';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/search/:query" component={MainPage} />
            <Route path="/film/:id" component={MovieDetails} />
            <Route component={NoMatch404} />
        </Switch>
    </div>
);

export default App;
