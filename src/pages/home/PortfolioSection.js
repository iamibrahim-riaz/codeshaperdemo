import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SinglePortfolio from '../../components/Portfolio/SinglePortfolio';

import portfolioImg1 from '../../assets/images/portfolio/portfolio-01.jpg';
import portfolioImg2 from '../../assets/images/portfolio/portfolio-02.jpg';
import portfolioImg3 from '../../assets/images/portfolio/portfolio-03.jpg';


import advokat from '../../assets/images/portfolio/advokat.png';
import bizup from '../../assets/images/portfolio/bizup.png';
import brainda from '../../assets/images/portfolio/brainda.png';
import braintech from '../../assets/images/portfolio/braintech.png';
import budget from '../../assets/images/portfolio/budget.png';
import cretic from '../../assets/images/portfolio/cretic.png';
import dabble from '../../assets/images/portfolio/dabble.png';
import darpan from '../../assets/images/portfolio/darpan.png';
import educavo from '../../assets/images/portfolio/educavo.png';
import evenio from '../../assets/images/portfolio/evenio.png';
import finoptis from '../../assets/images/portfolio/finoptis.png';
import hepta from '../../assets/images/portfolio/hepta.png';
import hostlab from '../../assets/images/portfolio/hostlab.png';
import johnfirm from '../../assets/images/portfolio/johnfirm.png';
import khelo from '../../assets/images/portfolio/khelo.png';
import kittuu from '../../assets/images/portfolio/kittuu.png';
import kulluu from '../../assets/images/portfolio/kulluu.png';
import medvill from '../../assets/images/portfolio/medvill.png';
import neuron from '../../assets/images/portfolio/neuron.png';
import rasin from '../../assets/images/portfolio/rasin.png';
import reobiz from '../../assets/images/portfolio/reobiz.png';
import rselements from '../../assets/images/portfolio/rselements.png';
import seolab from '../../assets/images/portfolio/seolab.png';
import seoptiz from '../../assets/images/portfolio/seoptiz.png';
import tekhub from '../../assets/images/portfolio/tekhub.png';
import topkie from '../../assets/images/portfolio/topkie.png';
import unitek from '../../assets/images/portfolio/unitek.png';
import vlogrex from '../../assets/images/portfolio/vlogrex.png';

const Portfolio = () => {
    let tab1 = "React",
        tab2 = "HTML",
        tab3 = "WordPress",
        tab4 = "Joomla"
    const tabStyle = 'rn-nav-list portfolio-tab nav nav-tabs';

    return (
        <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                            <span className="subtitle">Visit my portfolio and keep your feedback</span>
                            <h2 className="title">My Portfolio</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--45">
                    <Tabs>
                        <TabList className={tabStyle}>
                            <Tab><button>{tab1}</button></Tab>
                            <Tab><button>{tab2}</button></Tab>
                            <Tab><button>{tab3}</button></Tab>
                            <Tab><button>{tab4}</button></Tab>
                        </TabList>
                        <TabPanel>
                            <div class="row row--25 mt--10 mt_md--10 mt_sm--10">
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {rasin} 
                                        portfolioCategory = 'React' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://rasin-react.vercel.app/' 
                                        portfolioName = 'Rasin - Business & Consulting React Template'
                                    />
                                </div>

                                <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {braintech} 
                                        portfolioCategory = 'React' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/braintech-react-technology-it-solutions-template/33820699' 
                                        portfolioName = 'Braintech – React Technology & IT Solutions Template'
                                    />
                                </div>
                                
                                <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {braintech} 
                                        portfolioCategory = 'Nextjs' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://braintech.vercel.app' 
                                        portfolioName = 'Braintech – Nextjs Technology & IT Solutions Template'
                                    />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div class="row row--25 mt--10 mt_md--10 mt_sm--10">
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {braintech} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/braintech-technology-it-solutions-html-template/30545727' 
                                        portfolioName = 'Braintech - Technology & IT Solutions HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {educavo} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/educavo-education-html-template/28714439' 
                                        portfolioName = 'Educavo - Education HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {kittuu} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/kittuu-kindergarten-preschool-bootstrap-4-html-template/23510797' 
                                        portfolioName = 'Kittuu - Kindergarten & Preschool Education HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {hepta} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/hepta-multipurpose-business-html-template/22627902' 
                                        portfolioName = 'Hepta - Multipurpose Business HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {reobiz} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/reobiz-consulting-business-html-template/28824794' 
                                        portfolioName = 'Reobiz - Consulting Business HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {neuron} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/neuron-machine-learning-ai-startups-html-template/24965465' 
                                        portfolioName = 'Neuron - Machine Learning & AI Startups HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {medvill} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/medvill-medical-html-template/25313165' 
                                        portfolioName = 'Medvill - Medical HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {tekhub} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/tekhub-multipurpose-technology-startup-html5-template/26499491' 
                                        portfolioName = 'Tekhub - Multipurpose Technology, AI Startup & SAAS HTML5 Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {vlogrex} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/vlogrex-blog-magazine-html-template/24054245' 
                                        portfolioName = 'Vlogrex - Blog & Magazine HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {advokat} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/advokat-lawyer-lawfirm-html-template/26786899' 
                                        portfolioName = 'Advokat - Lawyer & Lawfirm HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {khelo} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/khelo-soccer-football-club-bootstarp-4-html-template/25053625' 
                                        portfolioName = 'Khelo - Soccer & Football Club HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {kulluu} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/kulluu-creative-agency-responsive-html-template/23327284' 
                                        portfolioName = 'Kulluu - Creative Agency Responsive HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {cretic} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/cretic-creative-agency-portfolio-html-template/29881204' 
                                        portfolioName = 'Cretic - Creative Agency Portfolio HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {seoptiz} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/seoptiz-seo-digital-marketing-agency-html-template/22744826' 
                                        portfolioName = 'Seoptiz - SEO & Digital Marketing Agency HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {dabble} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/dabble-creative-agency-portfolio-html-template/33249643' 
                                        portfolioName = 'Dabble - Creative Agency & Portfolio HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {topkie} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/topkie-seo-marketing-html-template/32625111' 
                                        portfolioName = 'Topkie - SEO Marketing HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {hostlab} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/hostlab-domain-web-hosting-html-template/22537016' 
                                        portfolioName = 'Hostlab - Domain, Web Hosting & WHMCS HTML Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="400" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {seolab} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://www.templatemonster.com/website-templates/seolab-seo-digital-marketing-agency-html-website-template-68551.html' 
                                        portfolioName = 'SEOLAB - SEO & Digital Marketing Agency HTML Website Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {budget} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/budget-responsive-finance-html5-template/27874042' 
                                        portfolioName = 'Budget - Responsive Finance HTML5 Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {brainda} 
                                        portfolioCategory = 'HTML' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://creativemarket.com/thecodude/4394413-Brainda-Responsive-HTML5-Template' 
                                        portfolioName = 'Brainda - Responsive HTML5 Template'
                                    />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div class="row row--25 mt--10 mt_md--10 mt_sm--10">
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {rselements} 
                                        portfolioCategory = 'WordPress' 
                                        portfolioFormat = 'Plugin' 
                                        portfolioURL = 'https://codecanyon.net/item/rs-elements-addon-for-elementor-page-builder-wordpress-plugin/25046249' 
                                        portfolioName = 'RS Elements - Elementor Page Builder WordPress Plugin'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {evenio} 
                                        portfolioCategory = 'WordPress' 
                                        portfolioFormat = 'Front-End' 
                                        portfolioURL = 'https://themeforest.net/item/evenio-event-conference-wordpress-theme/34131366' 
                                        portfolioName = 'Evenio - Event Conference WordPress Theme'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {bizup} 
                                        portfolioCategory = 'WordPress' 
                                        portfolioFormat = 'Front-End' 
                                        portfolioURL = 'https://themeforest.net/item/bizup-business-consulting-wordpress-theme/33409241' 
                                        portfolioName = 'Bizup - Business Consulting WordPress Theme'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {dabble} 
                                        portfolioCategory = 'WordPress' 
                                        portfolioFormat = 'Plugin' 
                                        portfolioURL = 'https://themeforest.net/item/dabble-creative-agency-portfolio-wordpress-theme/32333908' 
                                        portfolioName = 'Dabble - Creative Agency & Portfolio WordPress Theme'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {topkie} 
                                        portfolioCategory = 'WordPress' 
                                        portfolioFormat = 'Front-End' 
                                        portfolioURL = 'https://themeforest.net/item/topkie-seo-marketing-wordpress-theme/31540948' 
                                        portfolioName = 'Topkie - SEO Marketing WordPress Theme'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {braintech} 
                                        portfolioCategory = 'WordPress' 
                                        portfolioFormat = 'Front-End' 
                                        portfolioURL = 'https://themeforest.net/item/braintech-technology-it-solutions-wordpress-theme/29621951' 
                                        portfolioName = 'Braintech - Technology & IT Solutions WordPress Theme'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {educavo} 
                                        portfolioCategory = 'WordPress' 
                                        portfolioFormat = 'Plugin' 
                                        portfolioURL = 'https://themeforest.net/item/educavo-education-wordpress-theme/28715006' 
                                        portfolioName = 'Educavo - Online Courses & Education WordPress Theme'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {reobiz} 
                                        portfolioCategory = 'WordPress' 
                                        portfolioFormat = 'Front-End' 
                                        portfolioURL = 'https://themeforest.net/item/reobiz-consulting-business-wordpress-theme/26702860' 
                                        portfolioName = 'Reobiz - Consulting Business WordPress Theme'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {cretic} 
                                        portfolioCategory = 'WordPress' 
                                        portfolioFormat = 'Front-End' 
                                        portfolioURL = 'https://themeforest.net/item/cretic-creative-agency-wordpress-theme/25572970' 
                                        portfolioName = 'Cretic - Creative Agency WordPress Theme'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {unitek} 
                                        portfolioCategory = 'WordPress' 
                                        portfolioFormat = 'Plugin' 
                                        portfolioURL = 'https://themeforest.net/item/unitek-business-wordpress-theme/24954245' 
                                        portfolioName = 'Unitek - Business WordPress Theme'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {darpan} 
                                        portfolioCategory = 'WordPress' 
                                        portfolioFormat = 'Front-End' 
                                        portfolioURL = 'https://themeforest.net/item/darpan-news-magazine-wordpress-theme/24630268' 
                                        portfolioName = 'Darpan - News Magazine WordPress Theme'
                                    />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div class="row row--25 mt--10 mt_md--10 mt_sm--10">
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {hepta} 
                                        portfolioCategory = 'Joomla' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/hepta-multipurpose-business-joomla-template/23067143' 
                                        portfolioName = 'Hepta - Multipurpose Business Joomla Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {kulluu} 
                                        portfolioCategory = 'Joomla' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/kulluu-creative-agency-joomla-template/23600403' 
                                        portfolioName = 'Kulluu - Creative Agency Joomla Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {finoptis} 
                                        portfolioCategory = 'Joomla' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/finoptis-business-joomla-template/23151584' 
                                        portfolioName = 'Finoptis - Business Joomla Template'
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                                    <SinglePortfolio 
                                        portfolioImg = {johnfirm} 
                                        portfolioCategory = 'Joomla' 
                                        portfolioFormat = 'Template' 
                                        portfolioURL = 'https://themeforest.net/item/johnfirm-lawyer-lawfirm-joomla-template/23877428' 
                                        portfolioName = 'Johnfirm - Lawyer & Lawfirm Joomla Template'
                                    />
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;