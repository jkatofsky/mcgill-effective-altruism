import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head >

                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

                    <meta name="keywords" content="Effective Altruism, EA, Effective Giving, McGill" />

                    <meta name="description" content="Doing good better. The McGill chapter of the effective altruism movement." />
                    <meta name="twitter:card" value="Doing good better. The McGill chapter of the effective altruism movement." />
                    <meta property="og:description" content="Doing good better. The McGill chapter of the effective altruism movement." />

                    {/* TODO */}
                    <meta property="og:url" content="" />
                    <meta property="og:image" content="" />
                    <meta property="twitter:image" content="" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument