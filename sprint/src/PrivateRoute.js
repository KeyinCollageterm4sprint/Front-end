import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('user'); // This should be adapted to your auth logic
    const location = useLocation();

    if (!isAuthenticated) {
        // Redirect to login page if not authenticated, but keep the intended location in state
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
