import React, { Component } from 'react';
import CTA from './CTASection';
import Faq from './FaqSection';
import About from './AboutSection';
import Banner from './BannerSection';
import BusinessTab from './TabSection';
import Counter from './CounterSection';
import CaseStudy from './CaseStudySection';
import Experience from './ExperienceSection';
import Testimonial from './TestimonialSection';

const HomeMain = () => {
	return (
		<React.Fragment>
			<main className="cs-main-content">
				{/* Banner-start */}
				<Banner />
				{/* Banner-start */}

				{/* Experience-area-start */}
				<Experience />
				{/* Experience-area-end */}

				{/* About-area-start */}
				<About />
				{/* About-area-end */}

				{/* CaseStudy-area-start */}
				<CaseStudy />
				{/* CaseStudy-area-end */}

				{/* CTA-area-start */}
				<CTA />
				{/* CTA-area-end */}

				{/* Faq-area-start */}
				<Faq />
				{/* Faq-area-end */}

				{/* Testimonial-area-start */}
				<Testimonial />
				{/* Testimonial-area-end */}

				{/* Counter-area-start */}
				<Counter />
				{/* Counter-area-end */}

				{/* BusinessTab-area-start */}
				<BusinessTab />
				{/* BusinessTab-area-end */}
			</main>

		</React.Fragment>
	);
}

export default HomeMain;