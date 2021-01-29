import React, { Component } from "react";
import ContentLoader from "react-content-loader"

// TODO: use some sort of spinner instead?
class Loading extends Component {
    render() {
        return (
            <ContentLoader
                style={{ width: '100%', height: '1000px' }}
                speed={2}
                backgroundColor="#f3f3f3"
                foregroundColor="#e7e4e4"
            >
                <rect style={{ width: '100%', height: '100px' }} />
                <rect y="150" style={{ width: '100%', height: '80px' }} />
                {[...Array(20)].map((e, i) => <rect key={i} y={i * 20 + 250}
                    rx="5" ry="5" style={{ width: '100%', height: '15px' }} />
                )}
            </ContentLoader>
        );
    }
}

export default Loading;