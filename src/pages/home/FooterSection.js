
import { Link } from 'react-router-dom';
// Image
import Logo from '../../assets/img/logos/logo.png';
import phoneImg from '../../assets/img/icons/phone.png';
import emailImg from '../../assets/img/icons/email.png';
import mapImg from '../../assets/img/icons/map.png';

const Footer = () => {
    return (
        <div id="footer" className="cs-footer">
            <div className="cs-container">
                <div className="cs-footer-widget">
                    <div className="cs-widget-address single-widget">
                        <div className="cs-footer-logo">
                            <Link to="#"><img src={Logo} alt="Footer Logo" /></Link>
                        </div>

                        <p className="cs-footer-desc">Welcome to our consultancy agency. Lore ipsum simply text amet cing elit simply text amet cing elit.</p>

                        <div className="cs-footer-address">
                            <div className="single-contact">
                                <span><img src={phoneImg} alt="" /></span>
                                <a href="+tel:926668880000" target='_blank'>+92 666 888 0000</a>
                            </div>
                            <div className="single-contact">
                                <span><img src={emailImg} alt="" /></span>
                                <a href="mailto:needhelp@company.com" target='_blank'>needhelp@company.com</a>
                            </div>
                            <div className="single-contact">
                                <span><img src={mapImg} alt="" /></span>
                                <p>66 Broklyn Street New York, USA</p>
                            </div>
                        </div>
                    </div>

                    <div className="cs-widget-links single-widget">
                        <h3 className="cs-widget-title">Explore</h3>
                        <ul>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Meet Our Team</Link></li>
                            <li><Link to="#">Case Studies</Link></li>
                            <li><Link to="#">Latest News</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="#">Support</Link></li>
                            <li><Link to="#">Terms of Use</Link></li>
                            <li><Link to="#">Privacy & Policy</Link></li>
                            <li><Link to="#">Help</Link></li>
                        </ul>
                    </div>


                    <div className="cs-widget-newsletter single-widget">
                        <h3 className="cs-widget-title">Newsletter</h3>
                        <div className="newsletter-part">
                            <p className="newsletter-text">Subscribe for Latest Articles and Resources</p>
                            <form className="newsletter-subscribe">
                                <input type="email" placeholder="Email Address" id="footer-subscribe" />
                                <button type="submit">Register</button>
                            </form>
                        </div>
                    </div>

                </div>

                <div className="cs-copyright">
                    <div className="cs-container">
                        <p className="copyright-text">© 2021 All Right Reserved, <a href="#" target='_blank'>Codeshaper</a></p>
                        <ul className="cs-social-profile">
                            <li><a href="#" target='_blank'><i className="icofont-facebook"></i></a></li>
                            <li><a href="#" target='_blank'><i className="icofont-twitter"></i></a></li>
                            <li><a href="#" target='_blank'><i className="icofont-youtube"></i></a></li>
                            <li><a href="#" target='_blank'><i className="icofont-dribbble"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;