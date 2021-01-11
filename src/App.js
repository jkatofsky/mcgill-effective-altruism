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
                            //TODO: below line is needed because no 404 page renders when using custom render prop
                            //because getComponentForPath returns false when it's a 404, not the 404 page!!!
                            //https://github.com/react-static/react-static/blob/3793552f6e9ff921cb8480768a7438e386f6194b/packages/react-static/src/browser/components/Routes.js#L41
                            //make an issue or pull request for this
                            if (!element) element = React.createElement(templatesByPath['404']);
                            //TODO: when transitioning quickly between pages,
                            //will briefly render duplicate b/c routePath's updating is delayed
                            //how to address?
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
