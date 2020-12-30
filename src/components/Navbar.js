import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about-ea">About EA</Link>
                <Link to="/our-work">Our Work</Link>
                <Link to="/team">Our Team</Link>
                <Link to="/connect">Connect With Us</Link>
                <Link to="/faq">FAQ</Link>
            </nav>
        )
    }
}

export default Navbar;