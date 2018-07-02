const express = require('express');
const posts_controller = require('../controllers/postsController');

const router = express.Router();

// GET the index page
// router.get('/', posts_controller.index);

// GET a post
router.get('/:slug', posts_controller.getPost, posts_controller.index);

module.exports = router;