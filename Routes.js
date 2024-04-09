// Routes.js

import React from 'react';
import { Router } from '@reach/router'; // Import the Router component from @reach/router
import Main from './Main';
import Login from './Login';
import CarList from './CarList'; // Import the CarList component

const Routes = () => {
    return (
        <Router>
            <Main path="/" />
            <Login path="/login" />
            <CarList path="/carlist" /> {/* Add the route for CarList component */}
        </Router>
    );
}

export default Routes;