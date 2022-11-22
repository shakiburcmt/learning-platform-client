import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CardCourse from '../CardCourse/CardCourse';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <Container>
            <div className='d-flex'>
                <div className='cardBody'>
                    {
                        courses.map(course => <CardCourse
                            key={course.id}
                            course={course}
                        ></CardCourse>)
                    }
                </div>
                <div>
                    {
                        courses.map(course => <Link style={{ textDecoration: 'none' }} to={`/details/${course.id}`}><p style={{ border: '2px solid', width: '115px', height: '60px', padding: '5px', margin: '5px 0 0 5px', backgroundColor: 'lightBlue', fontWeight: 'bold', color: 'black' }}>{course.name}</p></Link>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default Courses;