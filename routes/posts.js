const express = require('express');
const posts_controller = require('../controllers/postsController');
const router = express.Router();

// GET sitemap
router.get('/sitemap.txt', posts_controller.generateSitemap);

// GET a post
router.get('/:slug', posts_controller.retrievePost);


module.exports = router;