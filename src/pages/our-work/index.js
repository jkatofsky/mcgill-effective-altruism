import React from 'react';
import { Link } from "react-router-dom";
import PageHead from "../../components/PageHead.js";
import fellows2020 from './2020-fellows.png';

export default () => (
    <>
        <PageHead pageTitle="Our Work" />
        <h2>Our Work</h2>
        <h3>Fellowship</h3>
        <p>Every fall semester, we run an effective altruism fellowship. Each week during the program, the cohort of fellows will read about a certain topic within effective altruism and then meets to discuss it. In the process, fellows gain access to guest speakers/professors and confront moral questions alongside a group of intelligent and open-minded individuals. At the end of the fellowship, the fellows collectively decide on a charity to which they want to donate.</p>

        {/* TODO: caption as the fall 2020 fellows */}
        {/* TODO: create component for body images w/ captions? */}
        <img className="body-img" src={fellows2020} alt="" />

        <p>Stay posted for information about 2021's fellowship!</p>

        <h3>Weekly Meetings</h3>
        <p>In the winter semester, we run weekly drop-in meetings <b>Wednesdays at 6:30PM Montréal time</b>, open to all who are interested. </p>
        {/* TODO: figure out a way to give access to the Zoom link/schedule */}

        <h3>Advising</h3>
        <p>We partner with other organizations at McGill to increase the impact of their donations. Recently, we have worked with sororities to do so. If you are interested in partnering, please <Link to="/connect">connect with us</Link>! </p>
    </>
);