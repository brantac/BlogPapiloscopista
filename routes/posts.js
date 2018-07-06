const express = require('express');
const posts_controller = require('../controllers/postsController');
const router = express.Router();

// router.get('/', posts_controller.index);

// Handle GET of all posts
router.get('/all', posts_controller.getAllPostsPromise);

// GET a post
router.get('/:slug', posts_controller.getPostBySlug, posts_controller.index);

module.exports = router;