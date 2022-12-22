import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner.jpg';
const Banner = () => {
    return (
        <div className='d-flex p-4 align-items-center'>
            <div>
                <h2>Convenient easy way of<br />learning new skills!</h2>
                <p>Computer science focuses on the development and testing of software and software systems. It involves working with mathematical models, data analysis and security, algorithms, and computational theory. Computer scientists define the computational principles that are the basis of all software. Here are six important courses based on market demand. There are different experts for each different course.</p>
                <Link to='/courses'><button className='btn btn-warning'>Start learning</button></Link>
            </div>
            <div >
                <Image style={{borderRadius:'100% 50%'}} src={banner} fluid alt='banner'></Image>
            </div>
        </div>
    );
};

export default Banner;