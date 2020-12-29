import React, { Component } from 'react';
import { Root, Routes } from 'react-static';
import { Switch, Route } from 'react-router-dom';
import Nav from "./components/Nav.js";

import './App.css'

class App extends Component {
    render() {
        return (
            <Root>
                <Nav />
                {/* TODO: loading animation of some sort */}
                <React.Suspense fallback={<em>Loading...</em>}>
                    <Switch>
                        <Route render={() => <Routes />} />
                    </Switch>
                </React.Suspense>
            </Root>
        )
    }
}

export default App
