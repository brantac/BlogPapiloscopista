const express = require('express');
const index_controller = require('../controllers/indexController');
const router = express.Router();

// GET a list of posts
router.get('/', index_controller.list_posts);

// GET page
// router.get('/p/:page', index_controller.page);

module.exports = router;