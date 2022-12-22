import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PopularCourses = () => {
    const popularCourses = [
        {
            id: 1,
            name: 'Artificial Intelligence',
            description: 'In the simplest terms, AI which stands for artificial intelligence refers to systems or machines that mimic human intelligence to perform tasks and can improve.'
        },
        {
            id: 2,
            name: 'Data Science',
            description: 'Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information.'
        },
        {
            id: 3,
            name: 'Software Engineering',
            description: 'Reduces complexity: Big software is always complicated and challenging to progress. Software engineering has a great solution to reduce the complication of any project.'
        },
    ]
    return (
        <Container className='mb-4'>
            <h2 className='p-4'>The most taken courses</h2>
            <div className='row gap-4 justify-content-center'>
                {
                    popularCourses.map(popular => <Card key={popular.id} border="warning" style={{ width: '20rem', border: '3px solid' }}>
                        <Card.Body>
                            <Card.Title>{popular.name}</Card.Title>
                            <Card.Text>{popular.description}</Card.Text>
                            <Link to='/courses'><button className='btn btn-warning' size='sm'>See all courses</button></Link>
                        </Card.Body>
                    </Card>)
                }
            </div>
        </Container>
    );
};

export default PopularCourses;