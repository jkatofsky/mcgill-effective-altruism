import React, { Component } from "react";
import { Link } from '@reach/router';
import logo from '../../logo.png'; //TODO: special EA McGill logo instead?
import "./style.css";
import { slide as BurgerMenu } from 'react-burger-menu';
import root from 'window-or-global';

const NavLink = props => (
    <Link
        {...props}
        getProps={({ isCurrent }) => {
            return {
                className:
                    isCurrent ?
                        props.className + " active-link" :
                        props.className
            };
        }}
    />
);

const links = [
    { name: "About EA", link: "/about-ea" },
    { name: "Our Work", link: "/our-work" },
    { name: "Our Team", link: "/team" },
    { name: "Connect With Us", link: "/connect" },
    { name: "FAQs", link: "/faq" },
]

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

    componentDidMount() {
        root.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        root.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.forceUpdate();
    };

    render() {

        const burger = root.innerWidth <= 900;

        return (
            <>
                {burger &&
                    <BurgerMenu width={250} right itemListElement="div" disableAutoFocus
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}>
                        {links.map(entry => (
                            <NavLink onClick={() => this.closeMenu()}
                                className="hover-raise text-link link burger-link"
                                key={entry.link} to={entry.link}>
                                {entry.name}
                            </NavLink>
                        ))}
                    </BurgerMenu>
                }
                <nav>
                    <NavLink
                        className="hover-raise link" to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                    {!burger &&
                        <div id="desktop-links-container">
                            <div id="desktop-links">
                                {links.map(entry => (
                                    <NavLink
                                        className="hover-raise text-link link desktop-link"
                                        key={entry.link} to={entry.link}>
                                        {entry.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    }
                </nav>
            </>
        )
    }
}

export default Navbar;