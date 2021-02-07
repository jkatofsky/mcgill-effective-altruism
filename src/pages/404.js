import React from 'react';
import Link from 'next/link';
import PageHead from '../components/PageHead.js';

const _404 = () => (
    <>
        <PageHead pageTitle="404" />
        <p style={{ textAlign: "center" }}>Sorry, the page you are looking for could not be found. <Link href="/">Go home</Link>.</p>
    </>
);

export default _404;