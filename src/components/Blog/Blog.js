import React from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const Blog = () => {
    return (
        <Container>
            <h3>Four important questions with answers...</h3>
            <ListGroup>
                <ListGroup.Item><span style={{ fontWeight: 'bold' }}>What is Cors?</span><br />In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there.</ListGroup.Item>
                <ListGroup.Item><span style={{ fontWeight: 'bold' }}>Why are you using firebase? What other options do you have to implement authentication?</span><br />Firebase helps you develop high-quality apps, grow your user base. People can easily login with email & password, github and many more by using firebase. We can also deploy our development site for client. Octa is alternative way for authentication.</ListGroup.Item>
                <ListGroup.Item><span style={{ fontWeight: 'bold' }}>How does the private route work?</span><br />The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.</ListGroup.Item>
                <ListGroup.Item><span style={{ fontWeight: 'bold' }}>What is Node? How does Node work?</span><br />It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Blog;