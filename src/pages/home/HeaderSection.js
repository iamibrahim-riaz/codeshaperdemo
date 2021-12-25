import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from "../../assets/images/logo/ibrahim-riaz-logo.jpg";

const Header = () => {    
	const [menuOpen, setMenuOpen] = useState(false);

    const [home, setHome] = useState(true)
    const [features, setFeatures] = useState(false)
    const [portfolio, setPortfolio] = useState(false)
    const [resume, setResume] = useState(false)
    const [contact, setContact] = useState(false)

    const addActiveClass = (menu) => {

        if (menu == 'home') {
            setHome(!home)
            setFeatures(false)
            setPortfolio(false)
            setResume(false)
            setContact(false)
        }
        else if (menu == 'features') {
            setHome(false)
            setFeatures(!home)
            setPortfolio(false)
            setResume(false)
            setContact(false)
        }
        else if (menu == 'portfolio') {
            setHome(false)
            setFeatures(false)
            setPortfolio(!home)
            setResume(false)
            setContact(false)
        }
        else if (menu == 'resume') {
            setHome(false)
            setFeatures(false)
            setPortfolio(false)
            setResume(!home)
            setContact(false)
        }
        else if (menu == 'contact') {
            setHome(false)
            setFeatures(false)
            setPortfolio(false)
            setResume(false)
            setContact(!home)
        }
    };

    return (
        <React.Fragment>
            <div className="d-none d-xl-block">
                <header className="rn-header-area d-flex align-items-start flex-column left-header-style">
                    <div className="logo-area">
                        <Link t="/">
                            <img src={Logo} alt="personal-logo" />
                        </Link>
                    </div>
                    <nav id="sideNavs" className="mainmenu-nav navbar-example2">
                        <ul className="primary-menu nav nav-pills">
                            <li className="nav-item"><a className={home ? "active" : ""} onClick={() => { addActiveClass('home'); document.getElementById("home").scrollIntoView({behavior: 'smooth'}) } } ><i className="feather-home"></i> Home</a></li>

                            <li className="nav-item"><a className={features ? "active" : ""} onClick={() => { addActiveClass('features'); document.getElementById("features").scrollIntoView({behavior: 'smooth'}) } } ><i className="feather-briefcase"></i>Services</a></li>

                            <li className="nav-item"><a className={portfolio ? "active" : ""} onClick={() => { addActiveClass('portfolio'); document.getElementById("portfolio").scrollIntoView({behavior: 'smooth'}) } } ><i className="feather-layers"></i>Portfolio</a></li>

                            <li className="nav-item"><a className={resume ? "active" : ""} onClick={() => { addActiveClass('resume'); document.getElementById("resume").scrollIntoView({behavior: 'smooth'}) } } ><i className="feather-users"></i>Resume</a></li>

                            <li className="nav-item"><a className={contact ? "active" : ""} onClick={() => { addActiveClass('contact'); document.getElementById("contact").scrollIntoView({behavior: 'smooth'}) } }><i className="feather-message-circle"></i>Contact</a></li>

                            <li className="nav-item"><a href="https://drive.google.com/file/d/1nH_Nm5BZIsIYB_pZcw2amxdDKLZb6oDl" target="_blank"><i className="feather-download"></i>Download CV</a></li>
                        </ul>
                    </nav>
                    <div className="footer">
                        <div className="social-share-style-1">
                            <span className="title">Find Me</span>
                            <ul className="social-share d-flex liststyle">
                                <li className="facebook"><a href="https://www.facebook.com/iamibrahim.riaz/" target="_blank"><i className="feather-facebook"></i></a> </li>
                                <li className="linkedin"><a href="https://www.linkedin.com/in/iamibrahimriaz/" target="_blank"><i className="feather-linkedin"></i></a></li>
                                <li className="twitter"><a href="https://twitter.com/iamibrahimriaz" target="_blank"><i className="feather-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
            
            <div className="header-style-2 d-block d-xl-none">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="header-right text-right">
                            <div className="hamberger-menu">
                                <i id="menuBtn" className="feather-menu humberger-menu" onClick={() => { setMenuOpen(!menuOpen) }} ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={menuOpen ? "popup-mobile-menu menu-open" : "popup-mobile-menu"}>
                <div className="inner">
                    <div className="menu-top">
                        <div className="menu-header">
                            <Link className="logo" to="/">
                                <img src={Logo} alt="Personal Portfolio" />
                            </Link>
                            <div className="close-button">
                                <button className="close-menu-activation close" onClick={() => setMenuOpen(false)}><i className="feather-x"></i></button>
                            </div>
                        </div>
                        <p className="discription">I am a Versatile Web Developer with 4+ years of Professional Experience in Web Development. Specializes in Front-End Web Development. Decent knowledge & proficient with Javascript, ReactJS</p>
                    </div>
                    <div className="content">
                        <ul className="primary-menu nav nav-pills">
                            <li className="nav-item"><a className={home ? "active" : ""} onClick={() => { addActiveClass('home'); document.getElementById("home").scrollIntoView({behavior: 'smooth'}) } } ><i className="feather-home"></i> Home</a></li>

                            <li className="nav-item"><a className={features ? "active" : ""} onClick={() => { addActiveClass('features'); document.getElementById("features").scrollIntoView({behavior: 'smooth'}) } } ><i className="feather-briefcase"></i>Services</a></li>

                            <li className="nav-item"><a className={portfolio ? "active" : ""} onClick={() => { addActiveClass('portfolio'); document.getElementById("portfolio").scrollIntoView({behavior: 'smooth'}) } } ><i className="feather-layers"></i>Portfolio</a></li>

                            <li className="nav-item"><a className={resume ? "active" : ""} onClick={() => { addActiveClass('resume'); document.getElementById("resume").scrollIntoView({behavior: 'smooth'}) } } ><i className="feather-users"></i>Resume</a></li>

                            <li className="nav-item"><a className={contact ? "active" : ""} onClick={() => { addActiveClass('contact'); document.getElementById("contact").scrollIntoView({behavior: 'smooth'}) } }><i className="feather-message-circle"></i>Contact</a></li>

                            <li className="nav-item"><a href="https://drive.google.com/file/d/1nH_Nm5BZIsIYB_pZcw2amxdDKLZb6oDl" target="_blank"><i className="feather-download"></i>Download CV</a></li>
                        </ul>
                        <div className="social-share-style-1 mt--40">
                            <span className="title">Find Me</span>
                            <ul className="social-share d-flex liststyle">
                                <li className="facebook"><a href="https://www.facebook.com/iamibrahim.riaz/" target="_blank"><i className="feather-facebook"></i></a> </li>
                                <li className="linkedin"><a href="https://www.linkedin.com/in/iamibrahimriaz/" target="_blank"><i className="feather-linkedin"></i></a></li>
                                <li className="twitter"><a href="https://twitter.com/iamibrahimriaz" target="_blank"><i className="feather-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;