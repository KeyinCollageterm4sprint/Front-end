import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom
import AuthService from './services/AuthService'; // Ensure this path is correct
import './styles.css';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await AuthService.login(username, password);
            if (user) {
                navigate('/search'); // Navigate to the search page on successful login
            } else {
                // Optionally handle the case where login is successful but no user is returned
                setErrorMessage("Login successful but no user data returned.");
            }
        } catch (error) {
            setErrorMessage(error.message); // Display any error messages from the login process
        }
    };

    return (
        <div className='Login'>
            <h2>Login</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <p>
                    Don't have an account? <Link to="/register">Register here</Link> {/* Add a link to the registration page */}
                </p>
            </form>
        </div>
    );
}

export default Login;
