import React from 'react';
import ReactDOM from 'react-dom';

import Es6Component from './components/es6-component';
import FunctionComponent from './components/functional-component';

if (PRODUCTION === true)
    console.log("Running production build version", VERSION);
else
    console.log("Running development build", VERSION);

ReactDOM.render(
    <div>
        <Es6Component />
        <FunctionComponent msg={"Welcome"}/>
    </div>,
    document.getElementById('app')
);