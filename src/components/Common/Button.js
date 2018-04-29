import React, { Component } from 'react';

const DELAY = 300;
const LOADER_DELAY = 900;
const CLASS_NAME = 'btn';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            showLoading: false,
        };
    }
    onClick(event) {
        const { clickHandler } = this.props;

        event.preventDefault();
        event.stopPropagation();

        this.setState({ disabled: true });

        const handler = clickHandler();

        if (handler && handler instanceof Promise) {
            const loader = setTimeout(() => this.setState({ showLoading: true }), LOADER_DELAY);

            handler.then(() => {
                clearTimeout(loader);

                setTimeout(() => this.setState({
                    disabled: false,
                    showLoading: false,
                }), DELAY);
            });
        } else {
            this.setState({ disabled: false });
        }
    }
    render() {
        const { type, style, className, disabled, label } = this.props;
        const classNames = !className ? CLASS_NAME : `${CLASS_NAME} ${className}`;

        return (
            <button
                type={type}
                className={classNames}
                style={style}
                disabled={disabled === true ? disabled : this.state.disabled}
                onClick={event => this.onClick(event)}>
                {this.state.showLoading === true ? 'Loading..' : label}
            </button>
        );
    }
}
