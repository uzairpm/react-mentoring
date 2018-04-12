import React from 'react';
import PropTypes from 'prop-types';

const titleStyle = {
    color: "gold",
    background: "gray"
}
const sayAnotherHi = () => {
    alert("Hello from Functional Component");
}
const FunctionComponent = (props) => (
    <h2 style={titleStyle} onClick={sayAnotherHi}>
        Stateless functional component says {props.msg}
    </h2>
);
FunctionComponent.propTypes = {
    msg: PropTypes.string.isRequired
}
export default FunctionComponent;