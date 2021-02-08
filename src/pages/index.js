import React from 'react';
import PageHead from '../components/PageHead.js';
import styles from '../styles/home.module.css';

const home = () => (
    <div className={styles['homepage']}>
        <PageHead />

        <img src="/images/ea-logo.png" alt="" className={styles['home-logo']} />
        <h1>
            <span style={{ color: "#0A8399" }}>Effective Altruists</span>
            <span>&nbsp;at&nbsp;</span>
            <span style={{ color: "#E83C31" }}>McGill</span>
        </h1>
        <h2 style={{ fontStyle: 'italic' }}>Doing good better.</h2>
        <hr />
        <p>Effective altruism is about answering one simple question: how can we use our resources to <b>help others the most</b>? We use <b>evidence and careful analysis</b> to find the very best causes to work on.</p>

        <p>But it's no use answering the question unless you act on it. Effective altruism is about following through. It's about <b>being generous with your time and your money</b> to do the most good you can.</p>

        <p>We are the <b>McGill University chapter</b> of effective altruism, aiming to promote the movement on campus and in the Montréal area.</p>
    </div>
);

export default home;