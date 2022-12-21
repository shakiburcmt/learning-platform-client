import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CardCourse from '../CardCourse/CardCourse';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Container>
            <div className='d-flex'>
                <div className='cardBody row'>
                    {
                        courses.map(course => <CardCourse
                            key={course.id}
                            course={course}
                        ></CardCourse>)
                    }
                </div>
                <div>
                    {
                        courses.map(course => <Link style={{ textDecoration: 'none' }} to={`/details/${course.id}`}><Button className='btn btn-warning w-100 m-2' style={{height:'70px', fontWeight:'bold'}}>{course.name}</Button></Link>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default Courses;