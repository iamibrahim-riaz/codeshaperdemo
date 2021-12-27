import React from 'react';
import HomeMain from './HomeMain';
import Header from './HeaderSection'
import Footer from './FooterSection'
import SearchModal from './SearchModal'
import ScrollToTop from '../../components/ScrollTop';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <HomeMain />
                <Footer />
                <ScrollToTop />
                <SearchModal />

            </React.Fragment>
        );
    }
}

export default HomePage;
