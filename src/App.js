import React, { Component, Suspense } from 'react';
import { Root, Routes } from 'react-static';
import Navbar from "./components/Navbar";
import Loading from "./components/Loading.js";
import Footer from "./components/Footer";
import { Transition, animated } from 'react-spring/renderprops.cjs'

import './App.css';
// TODO: anchor routing?

class App extends Component {
    render() {
        return (
            <Root>
                <Suspense fallback={<Loading />}>
                    <Navbar />
                    <Routes
                        render={({ routePath, getComponentForPath }) => {
                            const element = getComponentForPath(routePath);
                            return (
                                <Transition
                                    native
                                    items={routePath}
                                    from={{ transform: 'translateY(100px)', opacity: 0 }}
                                    enter={{ transform: 'translateY(0px)', opacity: 1 }}
                                    leave={{}}
                                >
                                    {item => props => {
                                        return <animated.div style={props}>
                                            <div className="page-content">
                                                {element}
                                            </div>
                                            <Footer />
                                        </animated.div>
                                    }}
                                </Transition>
                            )
                        }}
                    />
                </Suspense>
            </Root >
        )
    }
}

export default App;
