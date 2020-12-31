import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from '../../logo.png'; //TODO: special EA McGill logo instead?
import "./style.css";
import { slide as BurgerMenu } from 'react-burger-menu'

// TODO: pass this object gobally?
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
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.forceUpdate();
    };

    render() {

        //TODO: use https://reactrouter.com/web/api/NavLink to highlight current page!
        const burger = window.innerWidth <= 900;

        return (
            <>
                {burger &&
                    <BurgerMenu width={250} right itemListElement="div" disableAutoFocus
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}>
                        {links.map(entry => (
                            <Link onClick={() => this.closeMenu()}
                                className="hover-raise link burger-link"
                                key={entry.link} to={entry.link}>
                                {entry.name}
                            </Link>
                        ))}
                    </BurgerMenu>
                }
                <nav>
                    <Link className="hover-raise" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    {!burger &&
                        <div id="desktop-links-container">
                            <div id="desktop-links">
                                {links.map(entry => (
                                    <Link className="hover-raise link desktop-link"
                                        key={entry.link} to={entry.link}>
                                        {entry.name}
                                    </Link>
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