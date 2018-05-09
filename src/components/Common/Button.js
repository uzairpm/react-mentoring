import React, { Component } from 'react';
import classname from 'classname';

const CLASS_NAME = 'btn';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };
    }
    onClick(event) {
        const { clickHandler } = this.props;
        event.preventDefault();
        event.stopPropagation();
        clickHandler();
    }
    render() {
        const {
            type,
            style,
            className,
            disabled,
            label
        } = this.props;
        const classNames = classname(className, CLASS_NAME);

        return (
            <button
                type={type}
                className={classNames}
                style={style}
                disabled={disabled === true ? disabled : this.state.disabled}
                onClick={event => this.onClick(event)}>
                { label }
            </button>
        );
    }
}
