import axios from 'axios';

// Create an Axios instance
const API = axios.create({
  baseURL: 'http://localhost:8080/api', // Adjust this URL to match your backend's address
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercept requests to include the auth token in the Authorization header (if available)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Assuming you store the auth token in localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;
