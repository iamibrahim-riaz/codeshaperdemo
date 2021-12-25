import React  from 'react';

import contactImg1 from '../../assets/images/contact/contact1.png'

const Contact = () => {

    return (
        <div className="rn-contact-area rn-section-gap section-separator" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">Contact</span>
                            <h2 className="title">Contact With Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
                    <div className="col-lg-5">
                        <div className="contact-about-area">
                            <div className="thumbnail">
                                <img src={contactImg1} alt="contact-img" />
                            </div>
                            <div className="title-area">
                                <h4 className="title">Ibrahim Riaz</h4>
                                <span>Web Developer</span>
                            </div>
                            <div className="description">
                                <p>I am a Versatile Web Developer with 4+ years of Professional Experience in Web Development. Specializes in HTML, CSS, Javascript, Reactjs, WordPress, Joomla.
                                </p>
                                <span className="phone">Phone: <a href="tel:01687166885"> +88 01687166885</a></span>
                                <span className="mail">Email: <a href="mailto:iamibrahim.riaz@gmail.com"> iamibrahim.riaz@gmail.com</a></span>
                            </div>
                            <div className="social-area">
                                <div className="name">Find Me</div>
                                <div className="social-icone">
                                    <a href="https://www.facebook.com/iamibrahim.riaz/" target="_blank"><i className="feather-facebook"></i></a>
                                    <a href="https://www.linkedin.com/in/iamibrahimriaz/" target="_blank"><i className="feather-linkedin"></i></a>
                                    <a href="https://twitter.com/iamibrahimriaz" target="_blank"><i className="feather-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos-delay="600" className="col-lg-7 contact-input">
                        <div className="contact-form-wrapper">
                            <div className="introduce">
                                <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="POST" action="mailer.php">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="contact-name">Your Name</label>
                                            <input className="form-control form-control-lg" name="contact-name" id="contact-name" type="text" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="contact-phone">Phone Number</label>
                                            <input className="form-control" name="contact-phone" id="contact-phone" type="text" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label for="contact-email">Email</label>
                                            <input className="form-control form-control-sm" id="contact-email" name="contact-email" type="email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label for="subject">subject</label>
                                            <input className="form-control form-control-sm" id="subject" name="subject" type="text" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label for="contact-message">Your Message</label>
                                            <textarea name="contact-message" id="contact-message" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <button name="submit" type="submit" id="submit" className="rn-btn">
                                            <span>SEND MESSAGE</span>
                                            <i className="arrow-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;