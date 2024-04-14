import React, { useState } from 'react';
import CarService from './services/CarService';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './styles.css';
const CarSearch = () => {
    const [searchParams, setSearchParams] = useState({
        make: '',
        model: '',
        year: '',
        colour: '',
        mileage: '',
    });
    const [cars, setCars] = useState([]);
    const navigate = useNavigate(); // Hook for navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams((prevParams) => ({
            ...prevParams,
            [name]: value,
        }));
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await CarService.searchCars(searchParams);
            setCars(response);
        } catch (error) {
            console.error('Failed to fetch cars:', error);
        }
    };

    const handleViewHistory = () => {
        navigate('/history'); // Navigate to the search history page
    };

    const handleLogout = () => {
        // Perform logout operation (e.g., clearing the session/storage)
        console.log('Logging out...');
        navigate('/'); // Redirect to login page after logout
    };

    return (
        <div className='CarSearch'>
            <h2>Car Search</h2>
            <form onSubmit={handleSearch}>
                <input
                    name="make"
                    placeholder="Make"
                    value={searchParams.make}
                    onChange={handleChange}
                />
                <input
                    name="model"
                    placeholder="Model"
                    value={searchParams.model}
                    onChange={handleChange}
                />
                <input
                    name="year"
                    placeholder="Year"
                    value={searchParams.year}
                    onChange={handleChange}
                />
                <input
                    name="colour"
                    placeholder="Colour"
                    value={searchParams.colour}
                    onChange={handleChange}
                />
                <input
                    name="mileage"
                    placeholder="Mileage"
                    type="number"
                    value={searchParams.mileage}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
            <button onClick={handleViewHistory}>View Search History</button> {/* Button to view search history */}
            <button onClick={handleLogout}>Logout</button> {/* Button to logout */}
            <div>
                {cars.length > 0 ? (
                    <ul>
                        {cars.map((car) => (
                            <li key={car.id}>{`${car.make} ${car.model} - ${car.year} - ${car.colour} - ${car.mileage} miles`}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No cars found</p>
                )}
            </div>
        </div>
    );
};

export default CarSearch;
