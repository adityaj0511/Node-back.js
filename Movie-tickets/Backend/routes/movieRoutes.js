const express = require('express');
const { getMovies, addMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getMovies);
router.post('/', authMiddleware, addMovie);
router.put('/:id', authMiddleware, updateMovie);
router.delete('/:id', authMiddleware, deleteMovie);

module.exports = router;
