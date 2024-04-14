import React, { useEffect, useState } from 'react';
import CarService from './services/CarService'; // Adjust the import path as necessary

const SearchHistory = () => {
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const fetchSearchHistory = async () => {
            try {
                const data = await CarService.getSearchHistory(); // Ensure this method exists and is implemented in CarService
                setSearchHistory(data);
            } catch (error) {
                console.error('Failed to fetch search history:', error);
            }
        };

        fetchSearchHistory();
    }, []);

    return (
        <div>
            <h2>Search History</h2>
            {searchHistory.length > 0 ? (
                <ul>
                    {searchHistory.map((entry, index) => (
                        <li key={index}>
                            {`${entry.date}: ${entry.searchTerm}`}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No search history found.</p>
            )}
        </div>
    );
};

export default SearchHistory;
