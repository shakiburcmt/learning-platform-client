import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Container className='mt-2'>
            <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is Artificial Intelligence?</Accordion.Header>
                <Accordion.Body>
                In the simplest terms, AI which stands for artificial intelligence refers to systems or machines that mimic human intelligence to perform tasks and can iteratively improve themselves based on the information they collect.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What is the purpose of Information Security?</Accordion.Header>
                <Accordion.Body>
                Information security, sometimes shortened to InfoSec, is the practice of protecting information by mitigating information risks. It is part of information risk management.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Which programming language is best for beginners?</Accordion.Header>
                <Accordion.Body>
                    First of all you have to select one language and should be finished al least basic. Python or C is highly recommended.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Is Mathematics is mandatory for computer science?</Accordion.Header>
                <Accordion.Body>
                    Some logic is mandatory but practice is the best weapon. Practice and practice will erase your lack whether you weak or strong in Math.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Programming or Networking, which sector is best?</Accordion.Header>
                <Accordion.Body>
                    Both are equally most important part of Computer Science. So choose one without getting distracted.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </Container>
    );
};

export default FAQ;