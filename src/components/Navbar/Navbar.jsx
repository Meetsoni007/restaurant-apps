import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/navbar.css'
import image from '../../components/Navbar/images/Logo.jpg'

function Navbar() {

    const [click, setClick] = useState(false)

    const handelClick = () =>
        setClick(!click);

    const closeMobileMenu = () =>
        setClick(false);

    return (<>
        <nav className='navbar'>
            <div className="container flex_space">
                <div className="menu-icon" onClick={handelClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    <i className="fa-solid fa-xmark"></i>
                </div>

                <ul className={click ? 'nav-menu active' : "nav-menu"}>
                    <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
                    <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
                    <li><Link to="/destination" onClick={closeMobileMenu}>Destination</Link></li>
                    <li><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
                    <li><Link to="/testimonial" onClick={closeMobileMenu}>Testimonial</Link></li>
                    <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
                </ul>

                <div className="login-area flex">
                    <li>
                        <Link to="/sign-in">
                            <i className="far fa-chevron-right"> <span className='span'> <ChevronRightIcon /></span>Sign-In</i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                            <i className="far fa-chevron-right"> <span className='span'> <ChevronRightIcon /></span>Register</i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <button className='primary-btn'>Request a Quote</button>
                        </Link>
                    </li>
                </div>
            </div>
        </nav>

        <header>
            <div className="container flex_space">
                <div className="logo">
                    <img src={image} alt="" />
                </div>
                <div className="contact flex_space">

                    <div className="box flex_space">
                        <div className="icons">
                            <i className='fas fa-clock'></i>
                        </div>
                        <div className="text">
                            <h4>Working Hours</h4>
                            <Link to="/contact">Monday - Sunday: 9.00am to 6.00pm</Link>
                        </div>
                    </div>

                    <div className="box flex_space">
                        <div className="icons">
                            <i className='fas fa-phone-volume'></i>
                        </div>
                        <div className="text">
                            <h4>Call Us Hours</h4>
                            <Link to="/contact"> IN + 91 798 405 829</Link>
                        </div>
                    </div>

                    <div className="box flex_space">
                        <div className="icons">
                            <i className='far fa-envelope'></i>
                        </div>
                        <div className="text">
                            <h4>Mail Us</h4>
                            <Link to="/contact">info@example.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
    )
}

export default Navbar;
