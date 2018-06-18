import React, {Component} from 'react';
import { Link } from "react-router-dom";

const widerButton = {
    padding: '0.25rem 2rem !important'
};

const BackButton = (props) => (
    <Link to="/" className="btn btn-primary btn-sm widerButton" style={widerButton}>SEARCH</Link>
);
export default BackButton;
