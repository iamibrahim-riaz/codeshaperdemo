import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ProgressBar from '../../components/Progress/ProgressBar'

const Resume = () => {
    let tab1 = "Education Qualification",
        tab2 = "Professional Skills",
        tab3 = "Experience"
    const tabStyle = 'rn-nav-list resume-tab nav nav-tabs';

    return (
        <React.Fragment>
            <div className="rn-resume-area rn-section-gap section-separator" id="resume">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">4+ Years of Experience</span>
                                <h2 className="title">My Resume</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--45">
                        <div className="col-lg-12">
                            <Tabs>
                                <TabList className={tabStyle}>
                                    <Tab><button>{tab1}</button></Tab>
                                    <Tab><button>{tab2}</button></Tab>
                                    <Tab><button>{tab3}</button></Tab>
                                </TabList>
                                <TabPanel>
                                    <div id="education">
                                        <div className="personal-experience-inner mt--40">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-12 col-12">
                                                    <div className="content">
                                                        <span className="subtitle">2012 - Present</span>
                                                        <h4 className="maintitle">Education Qualification</h4>
                                                        <div className="experience-list">                                                            
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>B.Sc in CSE *</h4>
                                                                            <span>SST (DUET Campus, BOU) (2018 - Present)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>Appeared</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Want to complete another step of educational life from a well reputed university.</p>
                                                                </div>
                                                            </div>

                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Diploma in Computer Engineering</h4> <span>Model Institute of Science & Technology (2012 - 2016)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>3.65/4.00</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Completed Diploma Degree with a Satisfied Result (3.65 Out of 4:00) & Suitable Educational Knowledge.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div id="professional">
                                        <div className="personal-experience-inner mt--40">
                                            <div className="row row--40">
                                                <div className="col-lg-8 col-md-6 col-12 mt_sm--60">
                                                    <div className="progress-wrapper">
                                                        <div className="content">
                                                            <span className="subtitle">Features</span>
                                                            <h4 className="maintitle">Development Skill</h4>
                                                            <ProgressBar title='HTML' completed='90' />
                                                            <ProgressBar title='CSS' completed='90' />
                                                            <ProgressBar title='Javascript' completed='70' />
                                                            <ProgressBar title='JQuery' completed='70' />
                                                            <ProgressBar title='React' completed='70' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div id="experience">
                                        <div className="personal-experience-inner mt--40">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-12 col-12 mt_md--60 mt_sm--60">
                                                    <div className="content">
                                                        <span className="subtitle">2017 - Present</span>
                                                        <h4 className="maintitle">Job Experience</h4>
                                                        <div className="experience-list">                                                            
                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>Codeless Technologies BD</h4>
                                                                            <span>Web Developer (1st September 2017 - Present)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>4.5 Years *</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">In here, I started my career in professional Web Developent. Learned standard coding & many thing which need to become a professional Web Developer and going on.</p>
                                                                </div>
                                                            </div>

                                                            <div className="resume-single-list">
                                                                <div className="inner">
                                                                    <div className="heading">
                                                                        <div className="title">
                                                                            <h4>OMNI Systems Ltd</h4>
                                                                            <span>System Support Engineer (1st March 2017 - 31st August 2017)</span>
                                                                        </div>
                                                                        <div className="date-of-time">
                                                                            <span>6 Months</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="description">Started my professional career in OMNI Systems Limited. In here, my responsibilities were Network Management, System Support, CCTV, Access Control Management.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Resume