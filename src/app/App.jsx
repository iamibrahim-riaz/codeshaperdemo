import React from 'react';
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';



//Custom Components

import Home from '../pages/home';
import Error from '../pages/404';
import LoadTop from '../components/ScrollTop/LoadTop'


const App = () => {
    return (
        <div className='App'>
            <Router>  
                <LoadTop />          
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route component={Error} />
                </Switch>
            </Router>
            
        </div>
    );
}

export default App;
