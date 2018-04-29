import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
// import 'bootstrap/dist/css/bootstrap.min.css';

if (PRODUCTION === true)
    console.log("Running production build version", VERSION);
else
    console.log("Running development build", VERSION);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
