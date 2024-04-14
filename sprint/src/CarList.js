import React, { useState, useEffect } from 'react';
import CarService from './services/CarService';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await CarService.getAllCars();
                setCars(response.data);
            } catch (error) {
                console.error('Failed to fetch cars:', error);
            }
        };

        fetchCars();
    }, []);

    return (
        <div>
            <h2>Available Cars</h2>
            <div>
                {cars.length > 0 ? (
                    <ul>
                        {cars.map((car) => (
                            <li key={car.id}>
                                {`${car.make} ${car.model} - ${car.year} - ${car.colour}`}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No cars found</p>
                )}
            </div>
        </div>
    );
};

export default CarList;
