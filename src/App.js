import React, { useState } from 'react';
import Header from './components/Header/Header';
import Counter from './components/Counter';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useParams, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    const { User } = useSelector((state) => state);

    return (
        <Router>
            <Header />
            <Routes>
                {!User.isLoggedIn ? (
                    <React.Fragment>
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route path="*" element={<Login />} />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/counter" element={<Counter />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </React.Fragment>
                )}
            </Routes>
        </Router>
    );
}

export default App;
