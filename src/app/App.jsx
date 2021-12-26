import React from 'react';
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';



//Custom Components

import Home from '../pages/home';


const App = () => {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
            
        </div>
    );
}

export default App;
