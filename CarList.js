import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        console.log('Fetching data from API');
        
        axios.get('http://backend-api-url/cars')
            .then(response => {
                console.log('API call successful. Response:', response.data);
                setCars(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log('Rendering CarList component with cars:', cars);
    
    return (
        <div>
            <h1>Car List</h1>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>{car.make} - {car.model}</li>
                ))}
            </ul>
        </div>
    );
}

export default CarList;