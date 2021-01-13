import React from 'react';
import logo from "../logo.png";
import PageHead from '../components/PageHead.js';

export default () => (
    <>
        <PageHead />

        <img src={logo} alt="" id="main-logo" />
        <h1>
            <span style={{ color: "#0A8399" }}>Effective Altruists</span>
            <span>&nbsp;at&nbsp;</span>
            <span style={{ color: "#E83C31" }}>McGill</span>
        </h1>
        <h2 style={{ fontStyle: 'italic' }}>Doing good better.</h2>
        <hr />
        <p>Effective altruism is about answering one simple question: how can we use our resources to help others the most? We use evidence and careful analysis to find the very best causes to work on.</p>

        <p>But it's no use answering the question unless you act on it. Effective altruism is about following through. It's about being generous with your time and your money to do the most good you can.</p>

        <p>We are the McGill chapter of effective altruism, aiming to promote the movement on campus and in the Montréal area.</p>
    </>
);