import { useEffect, useState } from "react";

const ScrollToTop = (props) => {
	const { scrollClassName } = props;
	
  	const [isVisible, setIsVisible] = useState(false);

  	// Top: 0 takes us all the way back to the top of the page
  	// Behavior: smooth keeps it smooth!
  	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
  	};

  	useEffect(() => {
    	// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

  	return (
		<div className={ scrollClassName ? scrollClassName : 'scrollup'}>
			{isVisible && (
				<div id="toTop" onClick={scrollToTop}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
				</div>
			)}
		</div>
  	);
}

export default ScrollToTop