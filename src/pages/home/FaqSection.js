import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemState,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

import faqImg1 from '../../assets/img/faq/1.png'

const Faq = () => {

    return (
        <div id="faq" className="cs-faq">
            <div className="cs-container">
                <div className="sec-title text-center pb-75 md-pb-50">
                    <h2 className="title title-color">QUESTION ANSWERS</h2>
                    <p className="desc">We help our clients renew their business</p>
                </div>
                <div className="faq-section-part">
                    <div className="faq-part">
                        <Accordion className="accodion-style--1" preExpanded={'0'}>
                            <AccordionItem uuid='0'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>1.</span> THINK AHEAD AND BOOST YOUR BUSINESS?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='accodion-body'>There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid='1'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>2.</span> HOW CONSULTANCY EXPERTS WORK?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='accodion-body'>There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid='2'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>3.</span> WHAT IS THE BEST ADVICE FOR GROWTH?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='accodion-body'>There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid='3'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>4.</span> HOW TO IMPROVE YOUR BUSINESS?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='accodion-body'>There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="faq-content-part">
                        <div className="img-part">
                            <img src={faqImg1} alt="" />
                        </div>
                        <div className="content-part">
                            <ul className="list-part">
                                <li><i className="icofont-check"></i> Nsectetur cing elit.</li>
                                <li><i className="icofont-check"></i> Suspe ndisse suscipit sagittis leo.</li>
                                <li><i className="icofont-check"></i> Entum estibulum dignissim posuere.</li>
                                <li><i className="icofont-check"></i> If you are going to use a passage.</li>
                                <li><i className="icofont-check"></i> If you are going to use a passage test data.</li>
                            </ul>
                            <div className="experience-year">
                                <span>30</span> Years of <br />Experience
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;