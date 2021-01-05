import React, { Component } from 'react';
import { Root, Routes } from 'react-static';
import Navbar from "./components/Navbar";
import Loading from "./components/Loading.js";
import Footer from "./components/Footer";

import './App.css';
// TODO: address the myriad errors when trying to actually build the site...
// TODO: allow routing to specific sections of pages with #s in the links?
class App extends Component {
    render() {
        return (
            <Root>
                <Navbar />
                <div className="page-content">
                    <React.Suspense fallback={<Loading />}>
                        <Routes />
                    </React.Suspense>
                </div>
                <Footer />
            </Root>
        )
    }
}

export default App;
