import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHead from "../components/PageHead.js";
import { Container, Row, Col } from 'react-grid-system';

const ourWork = () => (
    <>
        <PageHead pageTitle="Our Work" />
        <h2>Our Work</h2>
        <hr />

        <Container fluid className='grid-container'>
            <Row align="start" justify="start" nogutter>
                <Col sm={12} md={6}>
                    <h3>Effective Altruism Fellowship</h3>
                    <p>Every fall semester, we run an effective altruism fellowship. Each week during the program, the cohort of fellows will read about a certain topic within effective altruism and then meets to discuss it.</p>

                    <p>In the process, fellows gain access to guest speakers/professors and confront moral questions alongside a group of intelligent and open-minded individuals. At the end of the fellowship, the fellows collectively decide on a charity to which they want to donate.</p>

                    <p>Stay posted for information about 2021's fellowship!</p>
                </Col>
                <Col sm={12} md={6}>
                    <figure>
                        <div>
                            <Image width={400} height={310} src='/images/2020-fellows.png' alt="" />
                            <figcaption>Some of our fall 2020 fellows</figcaption>
                        </div>
                    </figure>
                </Col>
            </Row>
        </Container>

        {/* TODO: embedd the events tab of the Facebook here? */}
        <h3>Weekly Meetings</h3>
        <p>In the winter semester, we run weekly meetings <b>Wednesdays at 6:30PM Montréal time</b>, open to all. Similarly to the fellowship, we discuss a different topic each week, often relating to current events or current debates within effective altruism. Occaisonally, we will invite guest speakers as well! For the topics of upcoming weeks and the Zoom information, check out our <a href="https://www.facebook.com/eamcgill/events/" target="_blank">Facebook events</a>!</p>

        <h3>EA Library</h3>
        <p>We have many books relating to effective altruism, and lend them out to anybody who wants to learn more! When on-campus life picks up, we will have an in-person location for them. In the meantime, we will mail you the books. You can check out a book <a href="https://docs.google.com/spreadsheets/d/1ysIw8SSH5f2AkR1wSUyO38KxC2oDWXTHxcSqlZP0zao/edit?usp=sharing" target="_blank">here</a>.</p>

        <h3>Career and Club Advising</h3>
        <p>We provide career planning resources and workshops, so that you can make the most of your 80,000 hours of working life. Stay posted for more information.</p>
        <p>We also partner with other organizations at McGill to increase the impact of their donations. Recently, we have worked with sororities to do so. If you are interested in partnering, please <Link href="/connect">connect with us</Link>! </p>
    </>
);

export default ourWork;