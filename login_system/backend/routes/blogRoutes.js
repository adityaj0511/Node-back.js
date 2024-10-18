const express = require('express');
const { createPost, getAllPosts } = require('../controllers/blogController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, createPost);
router.get('/', getAllPosts);
// Add routes for update and delete...

module.exports = router;
