import React, { Component } from 'react';
import { Root, Routes } from 'react-static';
import Navbar from "./components/Navbar";
import Loading from "./components/Loading.js";
import Footer from "./components/Footer";

import './App.css';
// TODO: anchor routing?
// TODO: nice fade-down animation on route switch?
// https://github.com/react-static/react-static/blob/master/docs/guides/animated-routes.md

class App extends Component {
    render() {
        return (
            <Root>
                <React.Suspense fallback={<Loading />}>
                    <Navbar />
                    <div className="page-content">
                        <Routes />
                    </div>
                    <Footer />
                </React.Suspense>
            </Root>
        )
    }
}

export default App;
