import React from 'react';
import PageHead from '../../components/PageHead.js';
import diagram from './diagram.jpg';
import { Container, Row, Col } from 'react-grid-system';

export default () => (
    <>
        <PageHead pageTitle="About EA" />

        <h2>About Effective Altruism</h2>
        <h3>Introduction</h3>
        <p>Most of us want to make a difference. We see suffering, injustice and death, and are moved to do something about them. But working out what that ‘something’ is, let alone actually doing it, can be a difficult and disheartening challenge.</p>

        <p><a href="https://www.effectivealtruism.org/" target="_blank
        ">Effective altruism</a> is a response to this challenge. It is a research field which uses high-quality evidence and careful reasoning to work out how to help others as much as possible. It is also a community of people taking these answers seriously, by focusing their efforts on the most promising solutions to the world's most pressing problems.</p>

        <h3>The Framework</h3>

        <Container fluid style={{ padding: 0 }}>
            <Row align="start" justify="start" nogutter>
                <Col sm={12} md={6}>
                    <p>In general, we evaluate the most worthwhile causes on the following criteria:</p>

                    <ul>
                        <li><i>Great in scale</i> (it affects many lives, by a great amount)</li>
                        <li><i>Highly neglected</i> (few other people are working on addressing it)</li>
                        <li><i>Highly tractable</i> (additional resources will do a great deal to address it)</li>
                    </ul>

                    <p>Based on those criteria, effective altruism focuses on three main <a href="https://www.effectivealtruism.org/articles/introduction-to-effective-altruism/#promising-causes" target="_blank">cause areas</a>:</p>
                    <ul>
                        <li><a href="https://www.effectivealtruism.org/articles/cause-profile-global-health-and-development/" target="_blank">Extreme poverty</a></li>
                        <li><a href="https://www.effectivealtruism.org/articles/cause-profile-animal-welfare/" target="_blank">Animal welfare</a></li>
                        <li><a href="https://www.effectivealtruism.org/articles/cause-profile-long-run-future/" target="_blank">Long-term future</a></li>
                    </ul>

                    <p>We are actively investigating <a href="https://concepts.effectivealtruism.org/" target="_blank"> other causes</a>, too. For more information about the theory behind effective altruism, take a look at <a href="https://concepts.effectivealtruism.org/" target="_blank">EA concepts</a>.</p>
                </Col>
                <Col sm={12} md={6}>
                    <figure>
                        <img src={diagram} alt="" />
                        <figcaption>Illustration: Gil Tokio / Pingado</figcaption>
                    </figure>
                </Col>
            </Row>
        </Container>

        {/* TODO: throughout the below sections, provide links*/}

        <h3>Taking Action</h3>
        <p>A central part of effective altruism is putting our money where our mouths are, and giving to the most effective charities.</p>

        <p>We also investigate how one's career path can do the most good. For most of us, a significant amount of our productive waking life — over 80,000 hours on average — is spent working. This is an enormous resource that can be used to make the world better. If you can increase your impact by just 1%, that's equivalent to 800 hours of extra work.</p>

        <p>Lastly, we try to spread the word and make these ideas more widespread and accessible. That's the goal Effective Altruists at McGill - to spread these ideas within the McGill community!</p>

        <h3>Additional Resources</h3>
        <p>There are many other great organizations in the effective altruist sphere.</p>
    </>
);