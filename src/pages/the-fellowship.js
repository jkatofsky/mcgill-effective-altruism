import React from 'react';
import PageHead from "../components/PageHead.js";
import { Container, Row, Col } from 'react-grid-system';

const team = () => (
    <>
        <PageHead pageTitle="Intro Fellowship" />
        <h2>The Introductory Fellowship</h2>
        <hr />

        <Container fluid className='grid-container'>
            <Row align="start" justify="start" nogutter>
                <Col sm={12} md={6}>
                    <h3>Effective Altruism Fellowship</h3>
                    <p>A couple times per year, we run an effective altruism fellowship. Each week during the program, the cohort of fellows will read about a certain topic within effective altruism and then meets to discuss it.</p>

                    <p>In the process, fellows gain access to guest speakers/professors and confront moral questions alongside a group of intelligent and open-minded individuals. At the end of the fellowship, the fellows collectively decide on a charity to which they want to donate.</p>

                    <p>Applications are open until July 6th for the Summer 2022 fellowship alongside <a href="https://uwea.org/" target="_blank">EA University of Washington</a>. Apply <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyIKJarVk5Hl1qX2_WwBVH16lGqvWMgsr373mjqWUoYBjFiQ/viewform" target="_blank">here</a>!</p>
                </Col>
                <Col sm={12} md={6}>
                    <figure>
                        <img loading='lazy' src='/images/2020-fellows.png' alt="Screenshot of 2020 fellows on Zoom" />
                        <figcaption>Some of our fall 2020 fellows</figcaption>
                    </figure>
                </Col>
            </Row>
        </Container>


    </>
);

export default team;