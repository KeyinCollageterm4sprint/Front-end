import API from '../api'; // Import the API config from api.js

class AuthService {
    async login(username, password) {
        try {
            const response = await API.post('/login', {
                username,
                password
            });

            const data = response.data;
            if (data.token) {
                // Store token or any identifier in localStorage or sessionStorage
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify({ username: data.username }));
            }

            return data; // Return data to manage further in your components
        } catch (error) {
            // Handle errors like incorrect credentials or server issues
            throw new Error(error.response.data || 'Login failed');
        }
    }

    async register(username, password) {
        try {
            const response = await API.post('/register', {
                username,
                password
            });

            const data = response.data;
            if (data.success) {
                // Possibly handle registration-specific logic, like automatic login or redirection
                console.log('Registration successful');
            }

            return data; // Return data to manage further in your components
        } catch (error) {
            // Handle errors such as registration failure
            throw new Error(error.response.data || 'Registration failed');
        }
    }

    logout() {
        // Remove the user and token from local storage to log user out
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    getCurrentUser() {
        // Retrieve the user details from local storage
        return JSON.parse(localStorage.getItem('user'));
    }

    isAuthenticated() {
        // Check if the user's token is stored in local storage
        return !!localStorage.getItem('token');
    }
}

export default new AuthService();
