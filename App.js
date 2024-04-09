import React from 'react';
import Routes from './Routes';
import CarList from './CarList';

const App = () => {
    console.log('Rendering App component');
    
    return (
        <div>
            <Routes />
            <CarList />
        </div>
    );
}

export default App;