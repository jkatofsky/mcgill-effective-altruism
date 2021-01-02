import React, { Component } from 'react';
import { Root, Routes } from 'react-static';
import Navbar from "./components/Navbar";
import Loading from "./components/Loading.js";
import Footer from "./components/Footer";

import './App.css';
// TODO: add Head components to each page.
// TODO: pass the site name globally
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
