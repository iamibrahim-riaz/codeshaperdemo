import React, { Component } from 'react';
import HomeSlider from './SliderSection';
import Service from './ServiceSection';
import Portfolio from './PortfolioSection';
import Resume from './ResumeSection';
import Contact from './ContactSection';
import Footer from './FooterSection'
import ScrollToTop from '../../components/ScrollTop';

class HomeMain extends Component {

	render() {

		return (
			<React.Fragment>
				<main className="page-wrapper-two">
					{/* SliderSection-start */}
					<HomeSlider />
					{/* SliderSection-start */}

					{/* Service-area-start */}
					<Service />
					{/* Service-area-end */}

					{/* Portfolio-area-start */}
					<Portfolio />
					{/* Portfolio-area-end */}

					{/* Resume-area-start */}
					<Resume />
					{/* Resume-area-end */}

					{/* Contact-area-start */}
					<Contact />
					{/* Contact-area-end */}

					{/* Footer-area-start */}
					<Footer />
					{/* Footer-area-end */}

					{/* scrolltop-start */}
					<ScrollToTop />
					{/* scrolltop-end */}
				</main>

			</React.Fragment>
		);
	}
}

export default HomeMain;