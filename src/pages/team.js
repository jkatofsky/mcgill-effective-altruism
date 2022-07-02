import React from 'react';
import PageHead from "../components/PageHead.js";
import { Container, Row, Col } from 'react-grid-system';
import styles from '../styles/team.module.css';

const picsDir = '/images/execs';

//except for the two Co-Presidents, the ordering of execs was decided by a randomizer
const execs = [
    {
        name: "Giulia Mouland",
        position: "Co-President",
        bio: "Giulia is a third year student at McGill, studying a combination of Philosophy, Political Science, & Economics. She discovered EA by participating in McGill EA’s Fall 2020 Fellowship. She is drawn to EA for its calculated & reason-driven nature, incorporating its ideals into her everyday life.",
        image: `${picsDir}/Giulia.jpg`
    },
    {
        name: "Henri Lemoine",
        position: "Co-President",
        bio: "Henri is a U2 Statistics and Computer Science student interested in optimization processes, rationality, anthropics and forecasting. He hopes to use his degree to help contribute to the technical field of AI safety.",
        image: ""/*`${picsDir}/Anna.jpg`*/
    },
    {
        name: "Jonathan Colaço Carr",
        position: "VP Internal",
        bio:  "Jonathan is a fourth year Honours Mathematics student and an AI researcher at Mila. He often thinks about how artificial intelligence could (and should) be aligned with human preferences. Jonathan learned about EA through the 80, 000 hours podcast and admires its tactical approach to doing good better.",
        image: `${picsDir}/Jonathan.jpg`
    }
]

const team = () => (
    <>
        <PageHead pageTitle="Our Team" />
        <h2>Our Team</h2>
        <hr />
        <Container fluid className='grid-container'>
            <Row align="start" justify="start" nogutter>
                {execs.map((exec, index) => (
                    <Col key={index} md={6} xl={4}>
                        <div className={styles['exec-container']}>
                            <h3 className={styles['name']}>{exec.name}</h3>
                            <h4 className={styles['position']}>{exec.position}</h4>
                            <figure>{exec.image &&
                                <img src={exec.image} alt={`${exec.name} headshot`} loading='lazy' />
                            }
                            </figure>
                            <p className={styles['bio']}>{exec.bio}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container >
    </>
);

export default team;