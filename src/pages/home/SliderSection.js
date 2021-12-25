import React from 'react';

const HomeSlider = () => {

    return (
        <React.Fragment>
            <div id="home" className="slider-style-6 web-developer height--100 rn-section-gap align-items-center with-particles bg_image bg_image--11" data-black-overlay="5">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="banner-inner text-center"><h1>Ibrahim Riaz</h1>
                                <span className="cd-headline clip is-full-width">
                                    <span className="designation">Web Developer </span>
                                </span>
                                <p className="bio-text">I am a Versatile Web Developer with 4+ years of Professional Experience in Web Development. Specializes in HTML, CSS, Javascript, Reactjs, WordPress, Joomla.
                                </p>
                                <div className="button-area">
                                    <a className="rn-btn shadow-none mr--5" href="#contact"><span>Contact Me</span></a>
                                    <a className="rn-btn shadow-none btn-theme" href="https://drive.google.com/file/d/1nH_Nm5BZIsIYB_pZcw2amxdDKLZb6oDl" target="_blank"><span>Download CV</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HomeSlider;