// Main.js

import React from 'react';
import { Router, Link } from '@reach/router'; // Import the Router and Link components from @reach/router
import CarList from './CarList'; // Update the import path to point to the correct location
import Login from './Login'; // Update the import path to point to the correct location

const Main = () => {
    return (
        <Router>
            <CarList path="/cars" />
            <Login path="/login" />
            {/* Add more routes for other components */}
        </Router>
    );
}

export default Main;