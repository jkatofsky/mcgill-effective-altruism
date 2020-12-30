import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import "./style.css";

class Navbar extends Component {
    render() {
        return (

            <div id="desktop-navbar">
                <nav>
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <div id="links-container">
                        <div id="links">
                            <Link to="/about-ea"><span>About EA</span></Link>
                            <Link to="/our-work"><span>Our Work</span></Link>
                            <Link to="/team"><span>Our Team</span></Link>
                            <Link to="/connect"><span>Connect With Us</span></Link>
                            <Link to="/faq"><span>FAQ</span></Link>
                        </div>
                    </div>
                </nav>
            </div >

        )
    }
}

export default Navbar;