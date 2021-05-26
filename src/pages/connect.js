import React from 'react';
import PageHead from '../components/PageHead.js';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Container, Row, Col } from 'react-grid-system';

import styles from '../styles/connect.module.css';

const connect = () => (
    <div className={styles['connect-page']}>
        <PageHead pageTitle="Connect With Us" />
        <h2>Connect With Us</h2>
        <hr />

        <Container fluid className='grid-container'>

            <Row justify="center" nogutter>

                <Col md={5}>
                    <p> We would love to hear from you! You can email us with any questions at&nbsp;
                    <a href="mailto:mcgilleffectivealtruists@gmail.com">
                            mcgilleffectivealtruists@gmail.com
                    </a>.
                    </p>
                </Col>

                <Col md={5}>
                    <p>To recieve our listservs, submit your email here:
                    <MailchimpSubscribe url='//effective-altruism-mcgill.us6.list-manage.com/subscribe/post?u=c5003bdd06f3276d8ecd99e29&amp;id=d6e3d0eefc' />
                    </p>
                </Col>
            </Row>

            <Row justify="center" nogutter>

                <Col md={5}>
                    <p>Check out our Facebook page to stay up to date!</p>
                    <iframe src="https://www.facebook.com/plugins/page.`php?href=https%3A%2F%2Fwww.facebook.com%2Feamcgill%2F&tabs=timeline&width=340&height=400&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=true&appId=433031278014530" width="340" height="400" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </Col>

                <Col md={5}>
                    <p>Or, come chat with us on our Discord server!</p>
                    <iframe src="https://discord.com/widget?id=803624077306232863&theme=light" width="300" height="400" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </Col>
            </Row>
        </Container>
    </div>
);

export default connect;