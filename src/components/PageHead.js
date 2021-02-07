import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const PageHead = (props) => {
    const { pageTitle } = props;
    const siteTitle = "EA at McGill"

    const title = pageTitle ? `${siteTitle} - ${pageTitle}` : siteTitle;

    return <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
    </Head>
}


PageHead.propTyles = {
    pageTitle: PropTypes.string
}

export default PageHead;