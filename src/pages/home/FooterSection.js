
import { Link } from 'react-router-dom';
// Image
import Logo from '../../assets/images/logo/ibrahim-riaz-logo.jpg';

const Footer = () => {
    return (
        <div className="rn-footer-area rn-section-gap section-separator">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-area text-center">
                            <div className="logo">
                                <Link to="/">
                                    <img src={Logo} alt="logo" />
                                </Link>
                                <span>Ibrahim Riaz</span>
                            </div>

                            <p className="description mt--30">© 2021. All rights reserved by <a target="_blank" href="https://www.linkedin.com/in/iamibrahimriaz/">Ibrahim Riaz.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;