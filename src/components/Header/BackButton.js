import React, {Component} from 'react';
import { Link } from "react-router-dom";

const BackButton = (props) => {
    return (
        <form className="form-inline">
            <Link to="/" className="btn btn-primary btn-sm widerButton">SEARCH</Link>
        </form>
    );
};
export default BackButton;
