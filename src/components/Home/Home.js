import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import ListGroup from 'react-bootstrap/ListGroup';


const Home = () => {
    return (
        <Container className='mt-2'>
            <ListGroup className='mb-2'>
                <ListGroup.Item style={{fontWeight:'bold'}}>Computer science focuses on the development and testing of software and software systems. It involves working with mathematical models, data analysis and security, algorithms, and computational theory. Computer scientists define the computational principles that are the basis of all software. Here are six important courses based on market demand. There are different experts for each different course.</ListGroup.Item>
            </ListGroup>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={img1}
                        style={{height:'500px'}}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Artificial Intelligence</h3>
                        <p>In the simplest terms, AI which stands for artificial intelligence refers to systems or machines that mimic human intelligence to perform tasks and can iteratively improve themselves based on the information they collect.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={img2}
                        style={{height:'500px'}}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Game Design</h3>
                        <p>Game design is the art of applying design and aesthetics to create a game for entertainment or for educational, exercise, or experimental purposes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={img3}
                        style={{height:'500px'}}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Information Security</h3>
                        <p>Information security, sometimes shortened to InfoSec, is the practice of protecting information by mitigating information risks. It is part of information risk management.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={img4}
                        style={{height:'500px'}}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Data Science</h3>
                        <p>Data science combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI), and machine learning with specific subject matter expertise to uncover actionable insights hidden in an organization's data. These insights can be used to guide decision making and strategic planning.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={img5}
                        style={{height:'500px'}}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Software Engineering</h3>
                        <p>Software engineering is a systematic engineering approach to software development. A software engineer is a person who applies the principles of software engineering to design, develop, maintain, test, and evaluate computer software.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={img6}
                        style={{height:'500px'}}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Programming Languages</h3>
                        <p>A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Home;