import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/team">Team</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/connect">Connect</Link>
            </nav>
        )
    }
}

export default Navbar;