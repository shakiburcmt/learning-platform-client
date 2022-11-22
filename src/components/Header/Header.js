import React, { useContext } from 'react';
import ReactSwitch from 'react-switch'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import img from '../../assets/images.jpeg'
import { BiLogIn } from 'react-icons/bi'
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md'
import { ThemeContext } from '../../App';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';


const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="warning" variant="white">
            <Container>
                {/* brand logo */}
                <Navbar.Brand>
                    <img
                        alt=""
                        src={img}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Brand><Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to='/'>graph-Ai</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link><Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to='/faq'>FAQ</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user?.photoURL ?
                                <Image
                                    style={{ margin: '0 auto', width: '40px' }}
                                    roundedCircle
                                    src={user?.photoURL}
                                    title={user?.displayName}
                                ></Image>
                                : <></>
                        }
                        {
                            user?.uid ?
                                <><Nav.Link><Link onClick={handleLogOut} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Log Out</Link></Nav.Link></>
                                : <Nav.Link title={'login'}><Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }} to='/login'><BiLogIn></BiLogIn></Link></Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        <div className='d-flex justify-content-center gap-2'>
                            <label>{theme === 'light' ? <MdLightMode /> : <MdOutlineLightMode />}</label>
                            < ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;