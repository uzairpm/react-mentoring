import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = {
          hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasError) {
            return <h1 className="text-center display-4">Something went wrong. Please refresh or try again later.</h1>;
        }
        return this.props.children;
    }
}