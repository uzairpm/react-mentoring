import React from 'react';
import './App.css';

import Title from './components/create-element';
import Es6Component from './components/es6-component';
import Es6PureComponent from './components/pure-component';
import FunctionComponent from './components/functional-component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {Title}
        <Es6Component />
        <Es6PureComponent />
        <FunctionComponent msg="Hello React"/>
      </div>
    );
  }
}

export default App;
