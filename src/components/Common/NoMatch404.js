import React, {Component} from 'react';

const NoMatch404 = (props) => (
    <div className="text-center">
        <h1 className="display-4">
            404 - Page Not Found
        </h1>
        <p>Unfortunately this is not an URL we can process at the moment</p>
        <img src="https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif" />
    </div>
);

export default NoMatch404;
