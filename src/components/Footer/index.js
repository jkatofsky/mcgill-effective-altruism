import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
    render() {
        return (
            <footer>
                <hr />
                <p>© 2021 Effective Altruists at McGill</p>
                <p>Created by <a href="https://www.linkedin.com/in/josh-katofsky/" target="_blank">Josh Katofsky</a> and <a href="https://www.linkedin.com/in/gabriela-moisescu/" target="_blank">Gabriela Moisescu-Pareja</a></p>
                <p>This website is <a href="https://github.com/jkatofsky/mcgill-effective-altruism" target="_blank">open source</a></p>
            </footer>
        );
    }
}

export default Footer;