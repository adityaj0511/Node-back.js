import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = ({ editMode = false, movieId = null }) => {
  const [form, setForm] = useState({
    title: '',
    genre: '',
    director: '',
    releaseYear: '',
    description: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = editMode ? `/movies/${movieId}` : '/movies';
    const method = editMode ? 'put' : 'post';

    axios({
      method,
      url,
      headers: { Authorization: localStorage.getItem('token') },
      data: form
    }).then(response => {
      alert('Movie saved!');
      if (!editMode) setForm({ title: '', genre: '', director: '', releaseYear: '', description: '' });
    }).catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input type="text" name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} required />
      <input type="text" name="director" placeholder="Director" value={form.director} onChange={handleChange} required />
      <input type="number" name="releaseYear" placeholder="Release Year" value={form.releaseYear} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
      <button type="submit">{editMode ? 'Update Movie' : 'Add Movie'}</button>
    </form>
  );
};

export default MovieForm;
