import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/movies')
      .then(response => setMovies(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div></div>
    // <div>
    //   <h1>All Movies</h1>
    //   {movies.map(movie => (
    //     <div key={movie._id}>
    //       <h2>{movie.title}</h2>
    //       <p>{movie.description}</p>
    //     </div>
    //   ))}
    // </div>
  );
};

export default MovieList;
