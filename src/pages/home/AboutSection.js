import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import ProgressBar from '../../components/Progress/ProgressBar'
import aboutImg1 from '../../assets/img/about/1.png'
import phoneImg1 from '../../assets/img/icons/phone-call.png'

const About = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div id="about" className="cs-about">
            <div className="cs-container relative">
                <div className="rotate-text">
                    <span className="rotate-title">AIVONS</span>
                </div>
                <div className="about-top-part">
                    <ModalVideo channel='youtube' isOpen={isOpen} videoId='yzCkM5MRaaI' onClose={() => { openModal(); }} />
                    <div className="img-part relative">
                        <img src={aboutImg1} alt="" />
                        <a className="cs-vid-icon"
                        href="#" onClick={() => { openModal(); }}>
                            <i className="icofont-ui-play"></i>
                        </a>
                    </div>
                    <div className="content-part">
                        <div className="about-text">
                            <h2 className="title">We’re leading in <br />the market</h2>
                            <p className="txt">Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn.</p>
                            <p className="txt">We have 35+ years of experience. We offer marketing and consulting services</p>
                        </div>
                        <div className="skill-part">
                            <ProgressBar 
                                completed='90'
                                title='Consulting'
                            />
                            <ProgressBar 
                                completed='68'
                                title='Advices'
                            />
                        </div>
                        <div className="contact-part">
                            <div className="icon-part">
                                <img src={phoneImg1} alt="" />
                            </div>
                            <div className="text-part">
                                <span>Have any question? Give us a call</span>
                                <a href="+tel:926668880000">+92 666 888 0000</a>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    );
}

export default About;