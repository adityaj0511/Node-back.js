const Movie = require('../models/movie');

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addMovie = async (req, res) => {
  const { title, genre, director, releaseYear, description } = req.body;
  try {
    const movie = new Movie({ title, genre, director, releaseYear, description });
    await movie.save();
    res.status(201).json({ message: 'Movie added' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await Movie.findByIdAndDelete(id);
    res.json({ message: 'Movie deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
