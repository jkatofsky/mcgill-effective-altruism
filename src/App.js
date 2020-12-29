import React, { Component } from 'react';
import { Root, Routes } from 'react-static';
import { Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import Loading from "./components/Loading.js"
import Footer from "./components/Footer.js";

import './App.css'

class App extends Component {
    render() {
        return (
            <Root>
                <Navbar />
                <React.Suspense fallback={<Loading />}>
                    <Switch>
                        <Route render={() => <Routes />} />
                    </Switch>
                </React.Suspense>
                <Footer />
            </Root>
        )
    }
}

export default App
