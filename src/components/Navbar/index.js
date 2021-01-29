import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import "./style.css";
import { slide as BurgerMenu } from 'react-burger-menu';

// TODO: make this come from the global route data?
const links = [
    { name: "About EA", link: "/about-ea" },
    { name: "Our Work", link: "/our-work" },
    { name: "Our Team", link: "/team" },
    { name: "Connect With Us", link: "/connect" },
    { name: "FAQs", link: "/faq" },
]

// TODO: Centred EA logo in burger menu above other links? (Make jsx variable out of the link-wrapped image)
// TODO: refactor the state management in this component

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    render() {

        return (
            <div>
                <BurgerMenu burgerButtonClassName="mobile-show"
                    width={250} right itemListElement="div" disableAutoFocus
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}>
                    {links.map(entry => (
                        <NavLink onClick={() => this.closeMenu()}
                            activeClassName="active-link"
                            className="text-link link burger-link"
                            key={entry.link} to={entry.link}>
                            {entry.name}
                        </NavLink>
                    ))}
                </BurgerMenu>
                <nav>
                    <NavLink
                        activeClassName="active-link"
                        className="hover-raise link" exact to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                    <div className="desktop-show" id="desktop-links-container">
                        <div id="desktop-links">
                            {links.map(entry => (
                                <NavLink
                                    activeClassName="active-link"
                                    className="hover-raise text-link link desktop-link"
                                    key={entry.link} to={entry.link}>
                                    {entry.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                </nav>
            </div>
        )
    }
}

export default Navbar;