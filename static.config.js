import path from 'path';
import React from 'react';

//TODO: for SEO/link previews make sure to set all appropriate keys in here
//specifically, it seems that we want to set siteRoot:
//https://github.com/react-static/react-static/blob/master/docs/config.md#siteRoot

export default {
    //TODO: pull some of this meta information out to varaibles
    //inspiration: https://github.com/nathanpower/wordflow-site/blob/master/src/Document.jsx
    Document: ({
        Html,
        Head,
        Body,
        children,
    }) => (
        <Html lang="en-CA">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

                <meta name="description" content="Doing good better. The McGill chapter of the effective altruism movement." />
                <meta name="twitter:card" value="Doing good better. The McGill chapter of the effective altruism movement." />
                <meta property="og:description" content="Doing good better. The McGill chapter of the effective altruism movement." />

                {/* TODO */}
                <meta property="og:url" content="" />
                <meta property="og:image" content="" />
                <meta property="twitter:image" content="" />

            </Head>
            <Body>{children}</Body>
        </Html>
    ),
    plugins: [
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-react-router'),
    ]
}
