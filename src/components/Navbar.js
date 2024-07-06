// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated }) => {
    return (
        <div className="navbar">
            <h2>Student Profile</h2>
            {isAuthenticated ? (
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/all-students">All Students</Link></li>
                    <li><Link to="/dashboard">Particular Student</Link></li>
                    <li>Update Student</li>
                    <li>Delete Student</li>
                    <li>Logout</li>
                </ul>
            ) : (
                <ul>
                    <li><Link to="/">Login</Link></li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
