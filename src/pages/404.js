import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

export default () => (
    <div className="page-content">
        <p style={{ textAlign: "center" }}>Sorry, the page you are looking for could not be found. <Link to="/">Go home</Link>.</p>
    </div>
);