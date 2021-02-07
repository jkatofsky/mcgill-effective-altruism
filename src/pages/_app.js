import React from 'react';
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import { AnimateSharedLayout, motion } from "framer-motion";

import '../styles/app.css';
// TODO: anchor routing?
// TODO: use the next/Image component?

function App({ Component, pageProps, router }) {
    return <>
        <Navbar />
        <div className="page-content">
            <AnimateSharedLayout layoutId={router.route}>
                <motion.div layout
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    key={router.route}>
                    <Component {...pageProps} />
                    <Footer />
                </motion.div>
            </AnimateSharedLayout>
        </div>

    </>
}

export default App;
