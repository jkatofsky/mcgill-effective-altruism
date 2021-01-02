import React, { Component, Fragment } from "react";
import Skeleton from 'react-loading-skeleton';

class Loading extends Component {
    render() {
        return (
            <Fragment>
                <h1><Skeleton /></h1>
                <Skeleton count={20} />
            </Fragment>
        );
    }
}

export default Loading;