import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MovieList from './Components/MovieList';
import MovieForm from './Components/MovieForm';
import Login from './Components/Login';
import Register from './Components/Register';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/add-movie" element={<MovieForm />} />
        <Route path="/edit-movie/:id" element={<MovieForm editMode={true} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
