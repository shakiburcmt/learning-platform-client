import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { providerLogIn, signIn, setLoading,setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleLogIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handleGithubLogIn = () => {
        providerLogIn(gitHubProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(error => console.error(error))
    }

  

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log("login", user);
                setUser(user)
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            // spinner false kora hoyeche
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Container>
            <div className='mt-2 d-flex justify-content-center gap-2'>
                <Button onClick={handleLogIn} variant="warning">Login with Google</Button>
                <Button onClick={handleGithubLogIn} variant="warning">Login with GitHub</Button>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p>New? <Link to='/register'>Please Register</Link></p>
                </Form.Group>
                <Button variant="warning" type="submit">
                    Login
                </Button>
                <Form.Text className='text-danger mb-2'>
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;