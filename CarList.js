// CarList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://backend-api-url/cars')
            .then(response => setCars(response.data))
            .catch(error => console.error(error));
    }, []);

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