import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/1.jpg'
import img3 from '../../assets/3.jpg'
import img6 from '../../assets/6.jpg'
import Banner from '../Banner/Banner';
import PopularCourses from '../PopularCourses/PopularCourses';


const Home = () => {
    const data = [
        {
            id: 1,
            name: 'Artificial Intelligence',
            description: 'In the simplest terms, AI which stands for artificial intelligence refers to systems or machines that mimic human intelligence to perform tasks and can iteratively improve themselves based on the information they collect.',
            img: img1
        },
        {
            id: 2,
            name: 'Information Security',
            description: 'Information security, sometimes shortened to InfoSec, is the practice of protecting information by mitigating information risks. It is part of information risk management.',
            img: img3
        },
        {
            id: 3,
            name: 'Programming Languages',
            description: 'A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language.',
            img: img6
        },
    ]
    return (
        <>
            <Banner></Banner>
            <Container className='mt-2'>
                <Carousel fade>
                    {
                        data.map(d => <Carousel.Item key={d.id}>
                            <img
                                className="d-block w-100"
                                src={d.img}
                                alt={d.name}
                            />
                            <Carousel.Caption>
                                <h3>{d.name}</h3>
                                <p>{d.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>)
                    }
                </Carousel>
            </Container>
            <PopularCourses></PopularCourses>
        </>
    );
};

export default Home;