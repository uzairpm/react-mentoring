import React from 'react';
import ReactDOM from 'react-dom';

import Es6Component from './components/es6-component';
import FunctionComponent from './components/functional-component';
import CheckboxWithLabel from './components/CheckboxWithLabel';

if (PRODUCTION === true)
    console.log("Running production build version", VERSION);
else
    console.log("Running development build", VERSION);

ReactDOM.render(
    <div>
        <Es6Component />
        <FunctionComponent msg={"Welcome"}/>
        <CheckboxWithLabel labelOn="ON" labelOff="OFF"/>
    </div>,
    document.getElementById('app')
);