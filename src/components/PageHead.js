import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const PageHead = ({ pageTitle }) => {
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