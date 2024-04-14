import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from './services/AuthService';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const user = await AuthService.register(username, password);
            if (user) {
                navigate('/'); // Redirect to login page or another appropriate page
            } else {
                setErrorMessage("Registration was successful, but no user data was returned.");
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className='Login'>
            <h2>Register</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <form onSubmit={handleRegister}>
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
