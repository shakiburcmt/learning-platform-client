import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const CardCourse = ({ course }) => {
    const { name, img,id, details } = course;
    return (
            <div>
                <Row xs={1} md={1} className="g-1">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card className='mt-2'>
                                <Card.Img variant="top" style={{ height: '200px' }} src={img} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>
                                        {
                                            details?.length > 150 ?
                                                <p>{details.slice(0, 150) + '...'} <Link to={`/details/${id}`}><Button variant="warning">Details</Button></Link></p>
                                                :
                                                <p>{details}</p>
                                        }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
    );
};

export default CardCourse;