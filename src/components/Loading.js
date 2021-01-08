import React, { Component } from "react";
import Skeleton from 'react-loading-skeleton';

//TODO: investigate why this doesn't seem to be rendering properly now; what changed?
//verified that render() is called, but the elements are not displayed...?
//TODO: redesign now that this a fallback for the entire component tree, not just the page content

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