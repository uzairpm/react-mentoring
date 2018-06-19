import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const WiderLink = styled(Link)`
    padding: 0.25rem 2rem;
`;

const BackButton = (props) => (
    <WiderLink to="/" className="btn btn-primary btn-sm">SEARCH</WiderLink>
);
export default BackButton;
