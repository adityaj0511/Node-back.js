const BlogPost = require('../models/blog');

exports.createPost = async (req, res) => {
    const { title, content, tags } = req.body;
    const newPost = new BlogPost({ title, content, author: req.user.username, tags });
    await newPost.save();
    res.status(201).json(newPost);
};

exports.getAllPosts = async (req, res) => {
    const posts = await BlogPost.find();
    res.json(posts);
};

// Add more functions for update and delete...
