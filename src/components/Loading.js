import React, { Component } from "react";
import Skeleton from 'react-loading-skeleton';

class Loading extends Component {
    render() {
        return (
            <>
                <h1><Skeleton /></h1>
                <Skeleton count={20} />
            </>
        );
    }
}

export default Loading;