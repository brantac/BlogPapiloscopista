const express = require('express');
const posts_controller = require('../controllers/postsController');
const router = express.Router();

// GET a post
// router.get('/:slug', posts_controller.sendPost);
router.get('/:slug', posts_controller.sendPost2);

module.exports = router;