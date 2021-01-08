import React from 'react';
import { Link } from '@reach/router';
import PageHead from '../components/PageHead.js';

export default () => (
    <>
        <PageHead pageTitle="404" />
        <p style={{ textAlign: "center" }}>Sorry, the page you are looking for could not be found. <Link to="/">Go home</Link>.</p>
    </>
);