import React from 'react';

class Es6Component extends React.Component {
    constructor(props) {
        super(props);
        this.sayHi = this.sayHi.bind(this);
    }
    sayHi() {
        alert("Hello from React.Component");
    }
    render() {
        return (
            <h2 onClick={this.sayHi}>Hello World using ES6 React.Component</h2>
        );
    }
}

export default Es6Component;