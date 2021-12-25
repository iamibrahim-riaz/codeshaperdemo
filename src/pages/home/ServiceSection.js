import SingleService from '../../components/Service/SingleService';

const Service = () => {

    return (
        <div className="rn-service-area rn-section-gap " id="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                            <span className="subtitle">Features</span>
                            <h2 className="title">What I Do</h2>
                        </div>
                    </div>
                </div>
                <div className="row row--25 mt_md--10 mt_sm--10">
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <i className="feather-file-plus"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title"><a href="#">Template Development</a></h4>
                                    <p className="description">Created many HTML, React, Joomla Template. All Templates are unique, modern and responsive.</p>
                                    <a className="read-more-button" href="#contact"><i className="feather-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <i className="feather-file-text"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title"><a href="#">Theme Customization</a></h4>
                                    <p className="description"> Customized many WordPress Theme. Used many page builder like Elementor, Visual Compooser etc.</p>
                                    <a className="read-more-button" href="#contact"><i className="feather-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <i className="feather-codepen"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title"><a href="#">Plugin Development</a></h4>
                                    <p className="description">Developed some WordPress Plugin. Some Plugins are approved on wordpress.org, envato.</p>
                                    <a className="read-more-button" href="#contact"><i className="feather-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;