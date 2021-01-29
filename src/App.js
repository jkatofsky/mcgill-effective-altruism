import React, { Component, Suspense } from 'react';
import { Root, Routes, templatesByPath } from 'react-static';
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
                            let element = getComponentForPath(routePath);
                            //TODO: can remove this line when my PR gets accepted
                            //https://github.com/react-static/react-static/pull/1557
                            if (!element) element = React.createElement(templatesByPath['404']);
                            //TODO: when transitioning quickly between pages,
                            //will briefly render duplicate b/c routePath's updating is delayed
                            return (
                                <Transition
                                    native unique reset
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
