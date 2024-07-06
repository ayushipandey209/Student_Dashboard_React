// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import StudentTable from './components/StudentTable';
import Login from './components/Login';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = (username, password) => {
        if (username === 'ayushi' && password === '1020') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect username or password');
        }
    };

    return (
        <Router>
            <div className="App">
                <Navbar isAuthenticated={isAuthenticated} />
                <Routes>
                    <Route path="/" element={<Login handleLogin={handleLogin} />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/all-students" element={<StudentTable />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
