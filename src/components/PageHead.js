import React, { Component } from 'react';
import { Head } from 'react-static';
import PropTypes from 'prop-types';


class PageHead extends Component {
    render() {
        const { pageTitle } = this.props;
        const siteTitle = "EA at McGill"

        const title = pageTitle ? `${siteTitle} - ${pageTitle}` : siteTitle;

        return <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="twitter:title" content={title} />
        </Head>
    }
}

PageHead.propTyles = {
    pageTitle: PropTypes.string
}

export default PageHead;