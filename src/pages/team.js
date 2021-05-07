import React from 'react';
import PageHead from "../components/PageHead.js";
import { Container, Row, Col } from 'react-grid-system';
import styles from '../styles/team.module.css';

const picsDir = '/images/execs';

//except for the two VPs, the ordering of execs was decided by a randomizer
const execs = [
    {
        name: "Anna Mouland",
        position: "Co-President",
        bio: "Anna is a fourth year Honours Philosophy student with minors in Economics and Computer Science. Anna found out about EA through an AI philosophy class, and resuscitated the McGill branch in January of 2020. Anna has taken the OFTW pledge and ran two fellowships to date, she also does contract work for Ought. She hopes the McGill branch will become an EA hub in Canada!",
        image: `${picsDir}/Anna.jpg`
    },
    {
        name: "Simon Berens",
        position: "Co-President",
        bio: "Simon is a U4 Computer Science student interested in moral philosophy, AI, and rationality. For fun, he likes to play ping pong, badminton, and chess, and occasionally watch 30 episodes of a show on Netflix in one day.",
        image: `${picsDir}/Simon.jpg`
    },
    {
        name: "Annie Klar",
        position: "VP Events",
        bio: "Annie is currently completing her Bachelor of Arts with a major in Political Science. She hopes to use her degree and her minors in international development and english literature to help contribute to achieving sustainable development world wide. She is attracted to effective altruism due to its tactical approach to achieving good, and is excited to grow as a both a student and a member of the global community.",
        image: `${picsDir}/Annie.jpg`
    },
    {
        name: "Sarah Cleveland",
        position: "VP Engagement",
        bio: "Sarah was first introduced to Effective Altruism through the Yale EA Fellowship in the summer of 2020. Since starting her own non profit, Hopewell Gives Back, in her hometown, she has wanted to find ways to further her impact on a larger scale. At McGill she studies economics and molecular biology, aiming to bring EA values into global health policy development.",
        image: `${picsDir}/Sarah.jpg`
    },
    {
        name: "Giulia Mouland",
        position: "VP Finance",
        bio: "Giulia is a second year student at McGill,  studying a combination of Philosophy, Political Science, & Economics. She discovered EA by participating in McGill EA’s Fall 2020 Fellowship. She is drawn to EA for its calculated & reason-driven nature, incorporating its ideals into her everyday life.",
        image: `${picsDir}/Giulia.jpg`
    },
    {
        name: "Josh Katofsky",
        position: "VP Logistics",
        bio: "Josh is a fourth year Computer Science student with a dual minor in Political Science and Philosophy. He is particularly interested in AI ethics and sustainability, and aims to pursue a career in software for social good.",
        image: `${picsDir}/Josh.jpg`
    },
    {
        name: "Helena Lang",
        position: "VP Affairs",
        bio: "Helena is an Honours Philosophy student at McGill with minors in Economics and Political Science. She first stumbled upon EA in high school and has continued to fall into deeper rabbit holes since, especially on AI ethics and philosophy of science. Her interests include all things philosophy, political economy (and critiques thereof), and creative writing. At the moment it looks like she will be applying to grad school in philosophy.",
        image: ""
    },
    {
        name: "Ben Chancey",
        position: "VP Internal",
        bio: "Ben is currently a student at Collège Jean-de-Brébeuf, originally from Ottawa. Upon graduating, he intends on attending McGill University, majoring in law, philosophy, political science, or some combination of the three. His primary interests lie in moral philosophy, literature, cycling, and gaming.",
        image: ""
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