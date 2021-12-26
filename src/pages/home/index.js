import React from 'react';
import HomeMain from './HomeMain';
import Header from './HeaderSection'
import Footer from './FooterSection'
import ScrollToTop from '../../components/ScrollTop';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <HomeMain />
                <Footer />
                <ScrollToTop />

            </React.Fragment>
        );
    }
}

export default HomePage;
