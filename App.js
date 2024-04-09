// App.js

import React from 'react';
import Routes from './Routes'; // Import the Routes component
import CarList from './CarList'; // Import the CarList component

const App = () => {
    return (
        <div>
            <Routes /> {/* Render the Routes component */}
            <CarList /> {/* Add the CarList component to be rendered */}
        </div>
    );
}

export default App;