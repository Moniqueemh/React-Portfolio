import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from '../../assets/img/profile1.jpg';
import Button from 'react-bootstrap/Button'
import './about.css';

const About = () => {
    return (

        <div id='about'>
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/* profile pic */}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                            <Image className="profile justify-content-end" src={Profile} roundedCircle fluid />
                        </Row>
                    </Col>
                    {/* about me descrp */}
                    <Col xs={12} md={6}>
                        <Row>
                            {/* Desription here:..*/}
                I am <strong>&nbsp;Monique Mary Hernandez</strong>
                            <br />A new programmer, raised in Las Vegas, NV. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, MySQL, and Jaws DB as my tech stack.
                <br />
                This year, I successfully completed my certification in 'Full Stack Web Development'.
                <br />
                Working with the clients, my goal is to always provide an amazing experience with the best level of quality and service to them.
                <br />
                            <br />I love learning about new technologies, what problems are they solving, and how can I use them to build better applications.
                <br /> <br />
                        </Row>
                        <Row>

                            {/* link buttons for later..here */}
                            <Col className='d-flex justify-content-center flex-wrap'>
                                <div>
                                    <a href="https://drive.google.com/file/d/1gn7fdfnhI7QsfrBm02CVtSS5ahvaniGZ/view?usp=sharing">
                                        <Button variant="outline-info">My Resume</Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About