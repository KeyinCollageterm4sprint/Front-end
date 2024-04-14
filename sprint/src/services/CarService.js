import API from '../api'; // Adjust this path to where your api.js file is located

class CarService {
    async getAllCars() {
        try {
            const response = await API.get('/cars');
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch cars: ' + error.message);
        }
    }

    async getSearchHistory() {
        try {
            const response = await API.get('/search-history', {
                params: {
                    userId: localStorage.getItem('userId') // Adjust based on how you handle user sessions
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch search history: ' + error.message);
        }
    }


    async searchCars(searchParams) {
        const query = new URLSearchParams(searchParams).toString();
        try {
            const response = await API.get(`/cars/search?${query}`);
            return response.data;
        } catch (error) {
            throw new Error('Search failed: ' + error.message);
        }
    }
}

export default new CarService();
