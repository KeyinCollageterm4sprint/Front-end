import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import CarSearch from './CarSearch';
import SearchHistory from './SearchHistory';
//import Navbar from './Navbar';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/search" element={<PrivateRoute><CarSearch /></PrivateRoute>} />
        <Route path="/history" element={<PrivateRoute><SearchHistory /></PrivateRoute>} />
        <Route path="/test-search" element={<CarSearch />} />

      </Routes>
    </Router>
  );
}

export default App;
