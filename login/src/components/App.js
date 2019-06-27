import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

import { Router, Route, Link } from 'react-router-dom';
import history from '../history';

import Auth from './Auth';
import Login from './Login';
import Dashboard from './Dashboard';

//Root Component
const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Auth />
                    <Route path='/login' exact component={Login} />
                    <Route path='/dashboard' exact component={Dashboard} />
                </div>
            </Router>
        </div>
    )
}

export default App;