// src/App.js

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {!loggedIn && (
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        )}
                        {!loggedIn && (
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        )}
                        {loggedIn && (
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                        )}
                        {loggedIn && (
                            <li>
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        )}
                    </ul>
                </nav>

                <Routes>
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

const Home = () => (
    <div>
        <h2>Home</h2>
        <p>Welcome to Acme Corp Supply Chain Management Software</p>
    </div>
);

export default App;
