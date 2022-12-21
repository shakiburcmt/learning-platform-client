import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const checkout = useLoaderData();
    const { id } = checkout;
    const { name, img, details } = courseDetails;
    return (
        <Container>
            <div>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <Button className='mt-2 mb-2' variant="warning" onClick={toPdf}>Download PDF</Button>}
                </Pdf>
                <div ref={ref}>
                    <Card className='w- mx-auto'>
                        <Card.Img variant="top" src={img}/>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text style={{textAlign:'justify'}}>
                                {details}
                            </Card.Text>
                            <Link to={`/checkout/${id}`}><Button variant="warning">Get premium access</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default CourseDetails;