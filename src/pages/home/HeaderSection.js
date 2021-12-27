import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo from "../../assets/img/logos/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

    const searchModalAdd = () => {
		document.body.classList.add('modal-open');
	};
    
	const [pages, setPages] = useState(false)

    const openMobileMenu = menu => {

		if (menu === 'pages') {
			setPages(!pages)
		}
	};

    const [header, setHeader] = useState(true)
    const [services, setServices] = useState(false)
    const [caseShop, setCaseShop] = useState(false)
    const [blog, setBlog] = useState(false)
    const [content, setContent] = useState(false)

    const addActiveClass = (menu) => {

        if (menu === 'header') {
            setHeader(!header)
            setServices(false)
            setCaseShop(false)
            setBlog(false)
            setContent(false)
        }
        else if (menu === 'services') {
            setHeader(false)
            setServices(!header)
            setCaseShop(false)
            setBlog(false)
            setContent(false)
        }
        else if (menu === 'caseShop') {
            setHeader(false)
            setServices(false)
            setCaseShop(!header)
            setBlog(false)
            setContent(false)
        }
        else if (menu === 'blog') {
            setHeader(false)
            setServices(false)
            setCaseShop(false)
            setBlog(!header)
            setContent(false)
        }
        else if (menu === 'content') {
            setHeader(false)
            setServices(false)
            setCaseShop(false)
            setBlog(false)
            setContent(!header)
        }
    };

    return (
        <React.Fragment>            
            <div id="header" className="cs-header">
                <div className={isVisible ? 'menu-bar menu-sticky sticky' : 'menu-bar menu-sticky'}>
                    <div className="logo-part">
                        <Link to="#"><img src={Logo} alt="Logo" /></Link>
                    </div>
                    <div className="cs-container">
                        <div className="menu-part">
                            <nav className="cs-main-menu">
                                {/* Mobile Menu Start */}
                                <div className="mobile-menu-part">
                                    <div className="mobile-menu-logo">
                                        <Link to="#"><img src={Logo} alt="Logo" /></Link>
                                    </div>
                                    <button className={menuOpen ? "mobile-menu-icon open" : "mobile-menu-icon"} onClick={() => { setMenuOpen(!menuOpen) }} aria-label="Main Menu Icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                                {/* Mobile Menu End */}
                                
                                <ul className={menuOpen ? "nav-menu menu-open" : "nav-menu"}>
                                    <li className="active"><a onClick={() => { addActiveClass('header'); document.getElementById("header").scrollIntoView({behavior: 'smooth'}) } }>Home</a></li>
                                    <li><a onClick={() => { addActiveClass('services'); document.getElementById("services").scrollIntoView({behavior: 'smooth'}) } }>Services</a></li>
                                    <li className="menu-item-has-children"><a onClick={() => { openMobileMenu('pages'); }}>Pages</a>
                                        <ul className={pages ? "sub-menu sub-menu-open" : "sub-menu"}>
                                            <li><a onClick={() => { addActiveClass('blog'); document.getElementById("testimonial").scrollIntoView({behavior: 'smooth'}) } }>Blog</a></li>
                                            <li><a onClick={() => { addActiveClass('caseShop'); document.getElementById("case-shop").scrollIntoView({behavior: 'smooth'}) } }>Case Shop</a></li>
                                            <li><a onClick={() => { addActiveClass('services'); document.getElementById("services").scrollIntoView({behavior: 'smooth'}) } }>Services</a></li>
                                        </ul>
                                    </li>
                                    <li><a onClick={() => { addActiveClass('caseShop'); document.getElementById("case-shop").scrollIntoView({behavior: 'smooth'}) } }>Case Shop</a></li>
                                    <li><a onClick={() => { addActiveClass('blog'); document.getElementById("testimonial").scrollIntoView({behavior: 'smooth'}) } }>Blog</a></li>
                                    <li><a onClick={() => { addActiveClass('content'); document.getElementById("tab").scrollIntoView({behavior: 'smooth'}) } }>Content</a></li>
                                </ul>

                                <div className="social-part">
                                    <ul className="social-icon">
                                        <li><a href="#" target='_blank'><i className="icofont-instagram"></i></a></li>
                                        <li><a href="#" target='_blank'><i className="icofont-linkedin"></i></a></li>
                                        <li><a href="#" target='_blank'><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#" target='_blank'><i className="icofont-facebook"></i></a></li>
                                    </ul>
                                    <div className="searchbar">
                                        <Link to="#" onClick={searchModalAdd}><i className="icofont-search-1"></i></Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="contact-part">
                        <span>Need Help?</span>
                        <a href="+tel:926668880000" target='_blank'>+92 666 888 0000</a>
                    </div>
                </div>
            </div>            
        </React.Fragment>
    );
}

export default Header;