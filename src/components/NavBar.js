import React, { Component } from "react";
import NavLink from './NavLink.js';
import styles from '../styles/NavBar.module.css';
import { slide as BurgerMenu } from 'react-burger-menu';

const links = [
    { name: "About EA", link: "/about-ea" },
    { name: "Our Work", link: "/our-work" },
    { name: "Our Team", link: "/team" },
    { name: "Connect With Us", link: "/connect" },
    { name: "FAQs", link: "/faq" },
]

// TODO: Centred EA logo in burger menu above other links? (Make jsx variable out of the link-wrapped image)
// TODO: refactor the state management in this component

class NavBar extends Component {

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
                        <NavLink activeClassName={styles['active-link']}
                            key={entry.link} href={entry.link}>

                            <span onClick={() => this.closeMenu()}
                                className={`${styles['link']} ${styles['text-link']} ${styles['burger-link']}`}>
                                {entry.name}
                            </span>

                        </NavLink>
                    ))}
                </BurgerMenu>

                <nav className={styles['nav']}>

                    <NavLink activeClassName={styles['active-link']}
                        exact href="/">
                        <img className={`hover-raise ${styles['link']}`} src="/images/ea-mcgill-logo.png" alt="" />
                    </NavLink>

                    <div className={`desktop-show ${styles['desktop-links-container']}`}>
                        <div className={styles['desktop-links']}>

                            {links.map(entry => (
                                <NavLink activeClassName={styles['active-link']}
                                    key={entry.link} href={entry.link}>

                                    <span className={`hover-raise  ${styles['link']} ${styles['text-link']} ${styles['desktop-link']}`}>
                                        {entry.name}
                                    </span>

                                </NavLink>
                            ))}
                        </div>
                    </div>

                </nav>
            </div>
        )
    }
}

export default NavBar;