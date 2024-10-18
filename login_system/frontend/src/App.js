import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import BlogList from './components/Blog/BlogList';
import NavBar from './components/Nav/NavBar';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/posts" element={<BlogList />} />
                <Route path="/" element={<BlogList />} />
            </Routes>
        </Router>
    );
};

export default App;
