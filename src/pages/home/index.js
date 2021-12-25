import React from 'react';
import HomeMain from './HomeMain';
import Header from './HeaderSection'

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <HomeMain />
            </React.Fragment>
        );
    }
}

export default HomePage;
